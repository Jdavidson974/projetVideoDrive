import axios from "axios"
let ApiService = class {
    constructor() {
        this.urlApi = "http://localhost:3000/";
        this.axios = axios;
    }

    getData(endPoint) {
        if (endPoint) {
            return this.axios.get(this.urlApi + endPoint).catch(
                e => {
                    return e;
                }
            );
        } else {
            return 'no endpoint declared'
        }
    }
};

export default ApiService;