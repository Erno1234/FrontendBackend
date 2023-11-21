import DataService from "../modell/DataService.js";
import TablaView from "../view/tablazat/TablaView.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../modell/UrlapModel.js";
class DataController {
  constructor() {

    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    new UrlapView($(".urlap"),this.urlapModel.leiro)
    this.dataService.getData("api/writers", this.megjelenit);

    /*this.dataService.postData("api/writers",{
      "nev": "Vilson",
      "szulEv": 1881,
    });*/

    $(window).on("delete",(event)=>{
      dataService.deleteData("http://localhost:8000/api/writers", event.detail.id);
    })
  }

  megjelenit(lista) {
    console.log(lista);
    
    new TablaView($(".tablazat"),lista)
  }

}
export default DataController;
