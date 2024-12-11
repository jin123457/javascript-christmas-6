import EventService from '../service/EventService.js';
import {
  BASIC_CHRISTMAS_EVENT_MONEY,
  BASIC_SPECIAL_DAY_EVENT_MONEY,
  FIRST_MEMBER,
  GIFT_ITEM,
  MAX_CHRISTMAS_EVENT_DAY,
  MIN_EVENT_PRICE,
  MIN_GIFT_PRICE,
  PLUS_CHRISTMAS_EVENT_MONEY,
  SECOND_MEMBER,
  THRID_MEMBER,
} from '../utils/constants.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RestaurantController {
  #calendar;
  #menu;
  #salePrice;
  #price;
  #orderList;
  #visitDate;
  #calcuratePrice;

  constructor(calendar, menu) {
    this.#calendar = calendar;
    this.#menu = menu;
    this.#salePrice = 0;
  }

  async enter() {
    await OutputView.printWelcome();
    this.#visitDate = parseInt(await InputView.readDate(), 10);
    this.#orderList = await InputView.readMenu(this.#menu);
    await OutputView.printEventIntroduce();
    await this.introducePlane();
  }

  async introducePlane() {
    await OutputView.printMenuTitle();
    const newEventService = new EventService(this.#menu, this.#orderList);
    await this.printOrder(newEventService);
    this.#price = await newEventService.getPrice();
    await this.printPrice();
    await this.printGift();
    await this.calculateEvent(newEventService);
    await this.eventPrice();
    await this.payPrice();
    await this.badge();
  }

  async printOrder(newEventService) {
    await newEventService.calculateOrder();
    [...(await newEventService.getOrder())].map((info) =>
      OutputView.printOrder(info[0], info[1]),
    );
  }

  async printPrice() {
    await OutputView.printPrice(this.#price);
  }

  async printGift() {
    await OutputView.printGiftTitle();
    if (this.#price >= MIN_GIFT_PRICE) {
      this.#salePrice += this.#menu.get(GIFT_ITEM)[1];
      return OutputView.printGift();
    }

    return OutputView.printNothing();
  }

  async calculateEvent(newEventService) {
    await OutputView.printEventTitle();
    if (this.#price >= MIN_EVENT_PRICE) {
      await this.christmasEvent();
      await this.weekendEvent(newEventService);
      await this.weekdayEvent(newEventService);
      await this.specialDayEvent();
      await this.giftEvent();
    }

    if (this.#salePrice === 0) OutputView.printNothing();
  }

  async christmasEvent() {
    if (this.#visitDate <= MAX_CHRISTMAS_EVENT_DAY) {
      const christmasEventPrice =
        BASIC_CHRISTMAS_EVENT_MONEY +
        (this.#visitDate - 1) * PLUS_CHRISTMAS_EVENT_MONEY;
      await OutputView.printChristmasEvent(christmasEventPrice);
      this.#salePrice += christmasEventPrice;
    }
  }

  async weekendEvent(newEventService) {
    if (this.#calendar.get('weekend').includes(this.#visitDate)) {
      const weekendEventPrice = await newEventService.getWeekendEventPrice();
      if(weekendEventPrice > 0) {
        await OutputView.printWeekendEvent(weekendEventPrice);
        this.#salePrice += weekendEventPrice;
      }
    }
  }

  async weekdayEvent(newEventService) {
    if (!this.#calendar.get('weekend').includes(this.#visitDate)) {
      const weekdayEventPrice = await newEventService.getWeekdayEventPrice();
      if(weekdayEventPrice > 0) {
        await OutputView.printWeekdayEvent(weekdayEventPrice);
        this.#salePrice += weekdayEventPrice;
      }
    }
  }

  async specialDayEvent() {
    if (this.#calendar.get('specialDay').includes(this.#visitDate)) {
      await OutputView.printSpecialDayEvent(BASIC_SPECIAL_DAY_EVENT_MONEY);
      this.#salePrice += BASIC_SPECIAL_DAY_EVENT_MONEY;
    }
  }

  async giftEvent() {
    if (this.#price >= MIN_GIFT_PRICE) {
      await OutputView.printGiftEvent(this.#menu.get(GIFT_ITEM)[1]);
    }
  }

  async eventPrice() {
    await OutputView.printEventPrice(this.#salePrice);
  }

  async payPrice() {
    this.#calcuratePrice = this.#price - this.#salePrice;
    if (this.#price >= MIN_GIFT_PRICE) {
      this.#calcuratePrice += this.#menu.get(GIFT_ITEM)[1];
    }
    await OutputView.printPayPrice(this.#calcuratePrice);
  }

  async badge() {
    await OutputView.printBadgeTitle();
    if (this.#salePrice >= 20000) return OutputView.printBadge(FIRST_MEMBER);

    if (this.#salePrice >= 10000) return OutputView.printBadge(SECOND_MEMBER);

    if (this.#salePrice >= 5000) return OutputView.printBadge(THRID_MEMBER);

    return OutputView.printNothing();
  }
}

export default RestaurantController;
