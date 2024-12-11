import { ERROR_MESSAGE } from './constants.js';

const validateDate = (input) => {
  if (!/^[1-9]\d*$/.test(input)) {
    throw new Error(ERROR_MESSAGE.VALIDATION_DATE);
  }

  if (input < 1 || input > 31) {
    throw new Error(ERROR_MESSAGE.VALIDATION_DATE);
  }
};

export { validateDate };
