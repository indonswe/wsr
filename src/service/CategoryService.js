import axios from "axios";

const baseURL = "http://localhost:8080/api/categories/";

class CategoryService {

    findAll = async () => {
      return await axios.get(baseURL).then(res => res);
    };

    

}

export default CategoryService;