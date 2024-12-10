import RestaurantController from './controller/RestaurantController.js';
import Calendar from './model/Calendar.js';
import Menu from './model/Menu.js';

class App {
  async run() {
    const newCalendar = new Calendar();
    const newMenu = new Menu();
    await newCalendar.create();
    await newMenu.create();

    const newRestaurantController = new RestaurantController(
      newCalendar.getCalendar(),
      newMenu.getMenu(),
    );
    await newRestaurantController.enter();
  }
}

export default App;
