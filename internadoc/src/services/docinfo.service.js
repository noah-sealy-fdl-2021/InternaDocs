import http from "../http-common";

class DocsDataService {
  getAll() {
    return http.get("/docs");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    return http.post("/docs", data);
  }


}

export default new DocsDataService();
