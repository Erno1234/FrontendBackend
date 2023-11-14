
class DataService {
 
  constructor() {
    axios.default.baseURL = "http://localhost:8000/";
  }

  getData(vegpont, callBack){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
    console.log(response.data)
    callBack(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }

  postData(vegpont, data){
    axios.post(vegpont,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
export default DataService;
