import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RestaurantController {
  constructor(calendar, menu) {
    this.calendar = calendar;
    this.menu = menu;
  }

  async enter() {
    await OutputView.printWelcome();
    this.reservation = await InputView.readDate();
  }
}

export default RestaurantController;
