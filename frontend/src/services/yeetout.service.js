import axios from "axios";
import yeetoutApiService from "./yeetout.api.service";

let YeetoutService = class YeetoutService {
  login(email, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(yeetoutApiService.login(), {
          username: email,
          password: password
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  register(email, password, firstName, lastName, dob, bio) {
    return new Promise((resolve, reject) => {
      axios
        .post(yeetoutApiService.register(), {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          dob: dob,
          bio: bio
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
};

const yeetoutService = new YeetoutService();
export default yeetoutService;
