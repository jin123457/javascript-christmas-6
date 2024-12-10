# 🎄 크리스마스 프로모션 간단 설명

가게에 `최근 5년간 판매 금액 최고치`와 `이벤트 참여 고객 증가`를 위한 12월 이벤트 기능을 구현한다.<br />
이벤트의 종류는 총 `3가지`이며, `크리스마스 디데이 할인`, `금액 할인`, `증정이벤트`이다.

# 🛠️ 기능 구현 목록

- [x] 달력 모델 생성

# ⛔️ 예외 처리 사항

# 📁 폴더 구조

# 🙏 기능 요구 사항

> 이번 미션은 이메일 형식의 기능 요구 사항입니다. 문제를 구현하는 데 필요한 요구사항과 배경지식은 이메일 내용에 전부 담겨있으니, 꼼꼼하게 확인하고 필요하다면 주어진 문제의 내용을 통해 유추하고 스스로 판단해
> 구현해 주시면 됩니다. 문제의 모든 내용은 충분히 검토되었으며, 출제 의도를 담은 내용임을 알려드립니다.

보낸 사람: 비즈니스팀 \<`biz@woowacourse.io`\>  
받는 사람: 개발팀 \<`dev@woowacourse.io`\>

제목: 12월 이벤트를 위한 개발 요청

안녕하세요. 비즈니스팀입니다!

다가오는 2023년 12월에 우테코 식당에서 1년 중 제일 큰 이벤트를 개최하려고 합니다.  
12월을 위해 이벤트 예산을 넉넉히 확보해 두었으니, 예산은 걱정하지 마세요~

특별히 이번 12월 이벤트를 진행하기 위해서, 개발팀의 도움이 많이 필요합니다.
아래 메뉴와 달력 이미지를 보면서 12월 이벤트 계획과 요청 내용을 본격적으로 설명해 드릴게요.

# ⌨️ **입력**

# 🖥️ **출력**

# 🤔 **실행 결과 예시**

- 적용된 이벤트가 하나도 없는 경우는 아래 예시를 참고해 주세요.

```
안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
26
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
타파스-1,제로콜라-1
12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
타파스 1개
제로콜라 1개

<할인 전 총주문 금액>
8,500원

<증정 메뉴>
없음

<혜택 내역>
없음

<총혜택 금액>
0원

<할인 후 예상 결제 금액>
8,500원

<12월 이벤트 배지>
없음
```

- 기대하는 '12월 이벤트 플래너'의 예시 모습

```
안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
3
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
티본스테이크 1개
바비큐립 1개
초코케이크 2개
제로콜라 1개

<할인 전 총주문 금액>
142,000원

<증정 메뉴>
샴페인 1개

<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원

<총혜택 금액>
-31,246원

<할인 후 예상 결제 금액>
135,754원

<12월 이벤트 배지>
산타
```

# 🤙 지켜야 하는 것

- Node.js 18.17.1 버전에서 실행 가능해야 한다. **Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- 프로그램 실행의 시작점은 `App.js`의 `run` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

**예시**

```javascript
const app = new App();
app.run();
```

- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- else를 지양한다.
  - 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  - 때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  - 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

### 추가된 요구 사항

- 아래에 제공되는 `InputView`, `OutputView` 객체를 활용해 구현한다.
  - 입력과 출력을 담당하는 객체를 별도로 구현한다.
  - `InputView`, `OutputView`의 파일 경로는 변경할 수 있다.
  - `InputView`, `OutputView`의 메서드의 이름과 인자는 필요에 따라 추가하거나 변경할 수 있다.
  - 값 출력을 위해 필요한 메서드를 추가할 수 있다.
  ```javascript
  export default InputView = {
    async readDate() {
      const input = await Console.readLineAsync(
        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
      );
      // ...
    },
    // ...
  };
  ```
  ```javascript
  export default OutputView = {
    printMenu() {
      Console.print('<주문 메뉴>');
      // ...
    },
    // ...
  };
  ```
  **라이브러리**
- `@woowacourse/mission-utils`에서 제공하는 `Console` API를 사용하여 구현해야 한다.
  - 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.
