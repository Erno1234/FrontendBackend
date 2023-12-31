class TablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        this.tablaElem = szuloElem;
        this.#sorLetrehoz();
        this.sorElem = this.tablaElem.children("tr:last-child");

        this.szerkesztGomb = this.sorElem.children("td").children(".edit");
        this.szerkesztGomb.on("click",()=>{
            this.#esemenyLetrehozas("edit");
            

        })
        this.torlesGomb = this.sorElem.children("td").children(".delete");
        this.torlesGomb.on("click",()=>{
            this.#esemenyLetrehozas("delete");
        })
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `<td><span class="kesz">✅</span><span class="edit">✏</span><span class="delete">🗑</span></td>`;
        txt += `</tr>`;
        this.tablaElem.append(txt);
    }
    
    #esemenyLetrehozas(esemenyneve) {
        const esemenyem = new CustomEvent(esemenyneve, { detail: this.#obj });
        window.dispatchEvent(esemenyem);
      }

}
export default TablaSorView