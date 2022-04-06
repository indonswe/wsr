import axios from "axios";

const baseURL = "http://localhost:8080/api/carOne/";

class CarService {

    findAll = async () => {
      return await axios.get(baseURL).then(res => res);
    };

    

}

export default CarService;