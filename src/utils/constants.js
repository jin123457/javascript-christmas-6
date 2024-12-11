const ERROR_MESSAGE = Object.freeze({
  HEADER: '[ERROR]',
  VALIDATION_DATE: '유효하지 않은 날짜입니다.',
  VALIDATION_MENU: '유효하지 않은 주문입니다.',
  MENU_COUNT_OVER_TWENTY: '메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.',
  ORDER_ONLY_DRINK: '음료만 주문 시, 주문할 수 없습니다.',
  RE_INPUT: '다시 입력해 주세요.',
});

const USER_MESSAGE = Object.freeze({
  PRINT_WELCOME: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  PRINT_EVENT_INTRODUCE:
    '12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  PRINT_ORDER_MENU_TITLE: '<주문 메뉴>',
  READ_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  READ_MENU:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export { ERROR_MESSAGE, USER_MESSAGE };
