import API from "./axios";

// fecth user
export const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      console.log('111111111111')
      console.log(res.data);

    } catch (err) {
      console.log(err);
    }
  };