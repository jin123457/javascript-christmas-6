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
  PRINT_ORDER_MENU_TITLE: '\n<주문 메뉴>',
  PRINT_PRICE_TITLE: '\n<할인 전 총주문 금액>',
  PRINT_GIFT_TITLE: '\n<증정 메뉴>',
  PRINT_EVENT_TITLE: '\n<혜택 내역>',
  PRINT_EVENT_PRICE_TITLE: '\n<총혜택 금액>',
  PRINT_PAY_PRICE_TITLE: '\n<할인 후 예상 결제 금액>',
  PRINT_EVENT_BADGE_TITLE: '\n<12월 이벤트 배지>',
  ONE_BOTTLE_CHAMPAGNE: '샴페인 1개',
  NOTHING: '없음',
  READ_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  READ_MENU:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const GIFT_ITEM = '샴페인';
const FIRST_MEMBER = '산타';
const SECOND_MEMBER = '트리';
const THRID_MEMBER = '별';
const MIN_GIFT_PRICE = 120000;
const MIN_EVENT_PRICE = 10000;
const MAX_CHRISTMAS_EVENT_DAY = 25;
const BASIC_CHRISTMAS_EVENT_MONEY = 1000;
const PLUS_CHRISTMAS_EVENT_MONEY = 100;
const BASIC_SPECIAL_DAY_EVENT_MONEY = 1000;

export {
  ERROR_MESSAGE,
  USER_MESSAGE,
  GIFT_ITEM,
  MIN_GIFT_PRICE,
  MIN_EVENT_PRICE,
  MAX_CHRISTMAS_EVENT_DAY,
  BASIC_CHRISTMAS_EVENT_MONEY,
  PLUS_CHRISTMAS_EVENT_MONEY,
  BASIC_SPECIAL_DAY_EVENT_MONEY,
  FIRST_MEMBER,
  SECOND_MEMBER,
  THRID_MEMBER,
};
