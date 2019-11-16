import todoService from "../services/yeetout.service";

export function isLoggedIn() {
  if (!localStorage.getItem("authToken")) {
    return false;
  }

  const token = localStorage.getItem("authToken");

  //   todoService
  //     .validateAuthToken(token)
  //     .then(() => {
  //       valid = true;
  //     })
  //     .catch(() => {
  //       valid = false;
  //     });
  return new Promise((resolve, reject) => {
    todoService
      .validateAuthToken(token)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  });
}
