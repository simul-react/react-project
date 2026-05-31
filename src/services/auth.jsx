import API from "./axios";

export const loginUser = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};

// SIGNUP
export const signupUser = async (data) => {
  try {
    const res = await API.post("/signup", data);
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "Signup failed" };
  }
};