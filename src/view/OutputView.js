import { Console } from '@woowacourse/mission-utils';
import { USER_MESSAGE } from '../utils/constants.js';

class OutputView {
  static async printWelcome() {
    Console.print(USER_MESSAGE.PRINT_WELCOME);
  }

  static async printEventIntroduce() {
    Console.print(USER_MESSAGE.PRINT_EVENT_INTRODUCE);
  }

  static async printMenu() {
    Console.print(USER_MESSAGE.PRINT_ORDER_MENU_TITLE);
  }
}

export default OutputView;
