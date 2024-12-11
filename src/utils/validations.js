import { ERROR_MESSAGE } from './constants.js';
import { FIND_NUMBER, VALID_MENU_IN_BRACKETS } from './regex.js';

const validateDate = (input) => {
  if (!FIND_NUMBER.test(input)) {
    throw new Error(ERROR_MESSAGE.VALIDATION_DATE);
  }

  if (input < 1 || input > 31) {
    throw new Error(ERROR_MESSAGE.VALIDATION_DATE);
  }
};

const validateMenu = (input, menu) => {
  if (!input) {
    throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
  }

  const orderList = input.trim().split(',');
  const foodNameList = [];

  orderList.map((order) => {
    if (order.match(VALID_MENU_IN_BRACKETS)) {
      throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
    }

    const orderFood = order.split('-');

    if (!menu.get(orderFood[0])) {
      throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
    }

    if (!FIND_NUMBER.test(orderFood[1])) {
      throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
    }

    if (orderFood[1] < 1) {
      throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
    }

    if (foodNameList.includes(orderFood[0])) {
      throw new Error(ERROR_MESSAGE.VALIDATION_MENU);
    }

    return foodNameList.push(orderFood[0]);
  });

  const orderQuality = orderList.reduce((acc, cur) => {
    const add = acc + parseInt(cur.split('-')[1], 10);
    return add;
  }, 0);

  if (orderQuality > 20) {
    throw new Error(ERROR_MESSAGE.MENU_COUNT_OVER_TWENTY);
  }

  const onlyDrink = orderList.reduce((acc, cur) => {
    if (menu.get(cur.split('-')[0])[0] !== 'drink') {
      return false;
    }

    return acc;
  }, true);

  if (onlyDrink) {
    throw new Error(ERROR_MESSAGE.ORDER_ONLY_DRINK);
  }
};

export { validateDate, validateMenu };
