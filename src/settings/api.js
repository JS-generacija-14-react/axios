import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  /*
    headers: {
        'Autorization': 'Bearer token123',
        'Content-Type': 'application/json
    }
  */
});
