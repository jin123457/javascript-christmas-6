class EventService {
  constructor(menu, orderList) {
    this.menu = menu;
    this.orderList = orderList;
    this.order = [];
    this.price = 0;
    this.weekendEventPrice = 0;
    this.weekdayEventPrice = 0;
  }

  async calculateOrder() {
    this.orderList.split(',').map((order) => {
      const [name, quality] = order.split('-');
      this.order.push([name, Number(quality)]);
      this.price += Number(this.menu.get(name)[1]) * Number(quality);
      if (this.menu.get(name)[0] === 'main')
        this.weekendEventPrice += 2023 * Number(quality);
      if (this.menu.get(name)[0] === 'desert')
        this.weekdayEventPrice += 2023 * Number(quality);

      return [name, quality];
    });
  }

  async getOrder() {
    return this.order;
  }

  async getPrice() {
    return this.price;
  }

  async getWeekendEventPrice() {
    return this.weekendEventPrice;
  }

  async getWeekdayEventPrice() {
    return this.weekdayEventPrice;
  }
}

export default EventService;
