import { Console } from '@woowacourse/mission-utils';
import { validateDate, validateMenu } from '../utils/validations.js';
import { errorHandler } from '../utils/errorHandler.js';
import { USER_MESSAGE } from '../utils/constants.js';

class InputView {
  static async getInput(message, vaildateFunction, ...args) {
    try {
      const input = await Console.readLineAsync(message);
      vaildateFunction(input, ...args);
      return input;
    } catch (error) {
      errorHandler(error);
      return this.getInput(message, vaildateFunction, ...args);
    }
  }

  static readDate() {
    return this.getInput(USER_MESSAGE.READ_DATE, validateDate);
  }

  static readMenu(menu) {
    return this.getInput(USER_MESSAGE.READ_MENU, validateMenu, menu);
  }
}

export default InputView;
