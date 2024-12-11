const ERROR_MESSAGE = Object.freeze({
  HEADER: '[ERROR]',
  VALIDATION_DATE: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
});

const USER_MESSAGE = Object.freeze({
  READ_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  READ_MENU:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export { ERROR_MESSAGE, USER_MESSAGE };
