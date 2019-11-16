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
  createactivity(name, description, location, date, time, min_age, max_age, cost, attendies, token) {
    const axiosInstance = axios.create({
      //baseURL: getBaseUrl(),
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json"
      }
    });
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(yeetoutApiService.createActivity(), {
          name: name,
          description: description,
          location: location,
          date: date,
          time: time,
          min_age: min_age,
          max_age: max_age,
          cost: cost, 
          attendies: attendies
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  joinactivity(activity_id, token) {
    const axiosInstance = axios.create({
      //baseURL: getBaseUrl(),
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json"
      }
    });
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(yeetoutApiService.joinActivity(), {
          activity_id: activity_id,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => reject(error));
    });
  }
  validateAuthToken(token) {
    const axiosInstance = axios.create({
      //baseURL: getBaseUrl(),
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json"
      }
    });

    return new Promise((resolve, reject) => {
      axiosInstance
        .get(yeetoutApiService.validateAuthToken())
        .then(response => resolve())
        .catch(error => reject());
    });
  }

  getActivities() {
    return new Promise((resolve, reject) => {
      axios.get(yeetoutApiService.getActivities())
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    });
  }

  getAuthenticatedHeaders(token) {
    return {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  }
};

const yeetoutService = new YeetoutService();
export default yeetoutService;
