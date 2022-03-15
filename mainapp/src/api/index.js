const API_SERVER = "https://gorest.co.in/public/v2";

export const getUserList = () =>
  fetch(`${API_SERVER}/users`).then((res) => res.json());

export const getUserListById = (id) =>
  fetch(`${API_SERVER}/users/${id}`).then((res) => res.json());