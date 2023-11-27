import DataService from "../modell/DataService.js";
import PublicTablaView from "../view/public/PublicTablaView.js";

class PublicController {
  constructor() {
    const KOSAR =[];
    this.dataService = new DataService();
    this.dataService.getData("api/writers", this.megjelenit);


    $(window).on("kosar",(event)=>{
        console.log(event.detail)
        KOSAR.push(event.detail.nev)
        //this.tablaView.kosarTartalma(KOSAR);
      })
  }

  megjelenit(lista) {
    console.log(lista);
    
    new PublicTablaView($(".publikustablazat"),lista)
  }

}
export default PublicController;
