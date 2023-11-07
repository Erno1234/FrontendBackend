
class DataService {
 
  constructor() {

  }

  getData(vegpont, callBack){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
    console.log("resonse",response);
    console.log("data",response.data);
    console.log("statusz",response.status);
    console.log("text",response.statusText);
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
