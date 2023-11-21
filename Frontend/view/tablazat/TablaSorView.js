class TablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this.#sorLetrehoz();
        this.sorElem = this.elem.children("tr:last-child");
        this.torlesGomb = this.sorElem.children("td").children(".delete");
        /*this.torlesGomb.on("click",()=>{
            this.#esemenyLetrehozas("delete");
        })*/
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `<td><span class="kesz">✅</span><span class="edit">✂</span><span class="delete">🗑</span>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
    

    }
    #esemenyLetrehozas(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, { detail: this.#obj });
        window.dispatchEvent(esemenyem);
      }

}
export default TablaSorView