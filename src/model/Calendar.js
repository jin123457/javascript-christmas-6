class Calendar {
  #weekend;
  #specialDay;

  constructor() {
    this.#weekend = [];
    this.#specialDay = [];
  }

  async create() {
    this.#weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
    this.#specialDay = [3, 10, 17, 24, 25, 31];
  }

  getWeekend() {
    return this.#weekend;
  }

  getSpecialDay() {
    return this.#specialDay;
  }
}

export default Calendar;
