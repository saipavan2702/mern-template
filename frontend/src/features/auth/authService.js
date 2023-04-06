import axios from "axios";

const API_URL = "api/register";

export const register = async (data) => {
  const res = await axios.post(API_URL, data);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }

  return res.data;
};

const authService = { register };

export default authService;
