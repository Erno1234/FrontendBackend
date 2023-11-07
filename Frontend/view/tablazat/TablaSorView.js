class TablaSorView{
    #obj=[]
    constructor(obj, szuloElem){
        this.#obj = obj;
        console.log(this.#obj);
        this.tablaElem = szuloElem;
        console.log(szuloElem)
        this.#sorLetrehoz();
    }

    #sorLetrehoz(){
        let txt = "<tr>";
        for (const key in this.#obj) {
            console.log(this.#obj[key])
             txt += `<td>${this.#obj[key]}</td>`
        }
        txt += `<td><span class="kesz">✅👌</span><span class="megse">❌</span><span class="kuka">🗑</span>`;
        txt += `</tr>`;
        console.log(txt)
        this.tablaElem.append(txt);
    

    }

}
export default TablaSorView