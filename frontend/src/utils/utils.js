import todoService from "../services/yeetout.service";

export async function isLoggedIn() {
  if (!localStorage.getItem("authToken")) {
    return false;
  }

  const token = localStorage.getItem("authToken");
  let valid = false;
  todoService
    .validateAuthToken(token)
    .then(() => {
      valid = true;
    })
    .catch(() => {
      valid = false;
    });
  return valid;
}
