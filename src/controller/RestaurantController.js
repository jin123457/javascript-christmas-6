import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class RestaurantController {
  constructor(calendar, menu) {
    this.calendar = calendar;
    this.menu = menu;
  }

  async enter() {
    await OutputView.printWelcome();
    this.visitDate = await InputView.readDate();
    await InputView.readMenu(this.menu);
  }
}

export default RestaurantController;
