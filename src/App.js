import Calendar from './model/Calendar.js';
import Menu from './model/Menu.js';

class App {
  async run() {
    const newCalendar = new Calendar();
    const newMenu = new Menu();
    await newCalendar.create();
    await newMenu.create();
  }
}

export default App;
