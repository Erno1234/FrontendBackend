import { urlapLeiro } from "./urlapleiro.js";
class UrlapModel {
 #leiro={};
  constructor() {
    this.#leiro=urlapLeiro;
  }
  get leiro(){
    return {...this.#leiro};
  }
}
export default UrlapModel;
