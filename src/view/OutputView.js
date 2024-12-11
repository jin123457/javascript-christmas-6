import { Console } from '@woowacourse/mission-utils';
import { USER_MESSAGE } from '../utils/constants.js';

class OutputView {
  static async printWelcome() {
    Console.print(USER_MESSAGE.PRINT_WELCOME);
  }

  static async printEventIntroduce() {
    Console.print(USER_MESSAGE.PRINT_EVENT_INTRODUCE);
  }

  static async printMenuTitle() {
    Console.print(USER_MESSAGE.PRINT_ORDER_MENU_TITLE);
  }

  static printOrder(name, quality) {
    Console.print(`${name} ${quality}개`);
  }

  static async printPrice(price) {
    Console.print(
      `${USER_MESSAGE.PRINT_PRICE_TITLE}\n${price.toLocaleString()}원`,
    );
  }

  static async printGiftTitle() {
    Console.print(USER_MESSAGE.PRINT_GIFT_TITLE);
  }

  static async printGift() {
    Console.print(USER_MESSAGE.ONE_BOTTLE_CHAMPAGNE);
  }

  static async printEventTitle() {
    Console.print(USER_MESSAGE.PRINT_EVENT_TITLE);
  }

  static async printChristmasEvent(eventPrice) {
    Console.print(`크리스마스 디데이 할인: -${eventPrice.toLocaleString()}원`);
  }

  static async printWeekendEvent(eventPrice) {
    Console.print(`주말 할인: -${eventPrice.toLocaleString()}원`);
  }

  static async printWeekdayEvent(eventPrice) {
    Console.print(`평일 할인: -${eventPrice.toLocaleString()}원`);
  }

  static async printSpecialDayEvent(eventPrice) {
    Console.print(`특별 할인: -${eventPrice.toLocaleString()}원`);
  }

  static async printGiftEvent(eventPrice) {
    Console.print(`증정 할인: -${eventPrice.toLocaleString()}원`);
  }

  static async printEventPrice(salePrice) {
    if (salePrice > 0) {
      return Console.print(
        `${USER_MESSAGE.PRINT_EVENT_PRICE_TITLE}\n-${salePrice.toLocaleString()}원`,
      );
    }

    return Console.print(
      `${USER_MESSAGE.PRINT_EVENT_PRICE_TITLE}\n${salePrice.toLocaleString()}원`,
    );
  }

  static async printPayPrice(price) {
    Console.print(
      `${USER_MESSAGE.PRINT_PAY_PRICE_TITLE}\n${price.toLocaleString()}원`,
    );
  }

  static async printBadgeTitle() {
    Console.print(USER_MESSAGE.PRINT_EVENT_BADGE_TITLE);
  }

  static async printBadge(badge) {
    Console.print(badge);
  }

  static async printNothing() {
    Console.print(USER_MESSAGE.NOTHING);
  }
}

export default OutputView;
