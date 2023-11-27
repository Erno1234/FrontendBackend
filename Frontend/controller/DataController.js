import DataService from "../modell/DataService.js";
import TablaView from "../view/tablazat/TablaView.js";
import UrlapView from "../view/urlap/UrlapView.js";
import UrlapModel from "../modell/UrlapModel.js";
import Szerkeszt from "../view/tablazat/Szerkeszt.js";
class DataController {
  constructor() {

    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    new UrlapView($(".urlap"),this.urlapModel.leiro)
    this.dataService.getData("api/writers", this.megjelenit);

   
    $(window).on("post",(event)=>{
      console.log(event.detail)
       this.dataService.postData("api/writers",event.detail);
    })

    $(window).on("edit", (event) => {    
      let obj = event.detail;
      new Szerkeszt(obj, $(".szerkeszt"));
      $(window).off("settingfel").on("settingfel", (event) => {    
          this.dataService.updateData("http://localhost:8000/api/writers", obj.id, event.detail);
      });
  });
  

    $(window).on("delete",(event)=>{
      this.dataService.deleteData("http://localhost:8000/api/writers", event.detail.id);
    })
  }

  megjelenit(lista) {
    console.log(lista);
    
    new TablaView($(".tablazat"),lista)
  }

}
export default DataController;
