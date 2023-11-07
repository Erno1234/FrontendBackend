import DataService from "../modell/DataService.js";
import TablaView from "../view/tablazat/TablaView.js";
import UrlapView from "../view/urlap/UrlapView.js";
class DataController {
  constructor() {

    this.dataService = new DataService();
    this.adatok =this.dataService.getData("http://localhost:8000/writers");
    const urlapView = new UrlapView($(".urlap"),this.adatok);
    const tablaView = new TablaView($(".lista"), this.dataService.getData("http://localhost:8000/writers"));
    this.dataService.getData("http://localhost:8000/writers", this.megjelenit);
    this.dataService.postData("http://localhost:8000/writers",{
      "nev": "Vilson",
      "szulEv": 1881,
    });
  }

  megjelenit(lista) {
    console.log(lista);
  }

}
export default DataController;
