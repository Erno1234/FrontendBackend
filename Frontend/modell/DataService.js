
class DataService {
 
  constructor() {
    axios.defaults.baseURL = "http://localhost:8000/";
  }

  getData(vegpont, callBack){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
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

  deleteData(vegpont,id){
    axios.delete(vegpont+'/'+id)
    .then(function(response){
      location.reload();
      console.log("resp",response);
    })
    .catch((error)=>{
      console.log("hiba",error);
    })
  }

}
export default DataService;
