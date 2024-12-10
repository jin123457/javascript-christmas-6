class Menu {
  #menuList;
  
  constructor() {
    this.#menuList = new Map();
  }

  async create() {
    this.#menuList
      .set('양송이수프', ['appetizer', 6000])
      .set('타파스', ['appetizer', 5500])
      .set('시저샐러드', ['appetizer', 8000])
      .set('티본스테이크', ['main', 55000])
      .set('바비큐립', ['main', 54000])
      .set('해산물파스타', ['main', 35000])
      .set('초코케이크', ['desert', 15000])
      .set('아이스크림', ['desert', 5000])
      .set('제로콜라', ['drink', 3000])
      .set('레드와인', ['drink', 60000])
      .set('샴페인', ['drink', 25000]);
  }

  getMenu() {
    return this.#menuList;
  }

  getFoodInfo(name) {
    return this.#menuList.get(name);
  }
}

export default Menu;
