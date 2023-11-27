import PublicTablaSorView from "./PublicTablaSorView.js";
class PublicTablaView{
    #lista
    constructor(szuloElem,lista){
        this.szuloElem = szuloElem;
        this.#lista = lista;
        this.tablaMegjelenit();
    }

    tablaMegjelenit(){
        let txt = '<table class="table table-bordered"></table>';
        this.szuloElem.append(txt);
        this.tableElem=this.szuloElem.children("table");
        for (const key in this.#lista) {
            new PublicTablaSorView(this.#lista[key], this.tableElem);
        }
    }

    kosarTartalma(lista){
        let txt = `<ul>`;
        for (let index = 0; index < lista.length; index++) {
            `<li>${lista[index]}</li>`;
        }
        `</ul>`;
    }

}
export default PublicTablaView