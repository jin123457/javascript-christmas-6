const validateDate = (input) => {
  if (!/^[1-9]\d*$/.test(input)) {
    throw new Error('유효하지 않음');
  }

  if (input < 1 || input > 31) {
    throw new Error('유효하지 않음');
  }
};

export { validateDate };
