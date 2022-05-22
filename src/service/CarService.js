import axios from "axios";

const baseURL = "http://localhost:8080/api/carOne/";

class CarService {

    findAll = async () => {
      return await axios.get(baseURL).then(res => res);
    };

    saveCar = async (data) => {
      console.log("Data at saveCar", data);
        return await axios.post(baseURL, data).then(res => res);
    };

    

}

export default CarService;