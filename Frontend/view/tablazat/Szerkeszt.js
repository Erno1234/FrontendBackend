class Szerkeszt {
  #urlap = {};
  #obj;
  constructor(obj, szuloElem) {
    this.#obj = obj;

    this.#osszerak(szuloElem);
    this.SettingokElem = $(".szerkeszt");
    this.nevElem = $("#nev2");
    this.szulElem = $("#szul2");
    this.SettingokElem.on("click", (event) => {
      event.preventDefault();
      this.#urlap["nev"] = this.nevElem.val();
      this.#urlap["szulEv"] = this.szulElem.val();
      this.#esemenyTrigger("feltolt");
    });
  }
  #osszerak(szuloElem) {
    let text = `<div class="szAblak">  
                <form>     
                <label for="nev2">Név</label><br>
                <input type="text" id="nev2" name="nev2" value="${this.#obj.nev}"> <br>
                <label for="szul2">Születési év </label><br>
                <input type="number" id="szul2" name="szul2" value="${this.#obj.szulEv}"><br><br>
                <input type="submit" class="szerkeszt" value="küldés">
                <button class="bezar">❌</button>
                </form>`;
    text += `</div>`;
    szuloElem.append(text);
    this.infoElem = $(".szAblak");
    this.bezarElem = $(".bezar");
    this.bezarElem.on("click", () => this.infoElem.hide());
  }
  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this.#urlap });
    window.dispatchEvent(esemenyem);
  }
}
export default Szerkeszt
