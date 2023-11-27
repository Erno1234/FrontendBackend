class PublicTablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this.#sorLetrehoz();
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.kosarGomb = this.sorElem.children("td").children(".kosar");
        this.kosarGomb.on("click",()=>{
            this.#esemenyLetrehozas("kosar");
        });
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `<td><span class="kosar">🛒</span></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
    }

   
    
    #esemenyLetrehozas(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, { detail: this.#obj });
        window.dispatchEvent(esemenyem);
      }

}
export default PublicTablaSorView;