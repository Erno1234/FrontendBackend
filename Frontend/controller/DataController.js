import DataService from "../modell/DataService.js";
import TablaView from "../view/tablazat/TablaView.js";
import UrlapView from "../view/urlap/UrlapView.js";
class DataController {
  constructor() {

    this.dataService = new DataService();
    this.dataService.getData("api/writers", this.megjelenit);

    this.dataService.postData("api/writers",{
      "nev": "Vilson",
      "szulEv": 1881,
    });
  }

  megjelenit(lista) {
    new TablaView($(".tablazat"),lista)
  }

}
export default DataController;
