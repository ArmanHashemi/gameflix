import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af7d04ca7b1e44ccbb47f7bd05689503",
  },
});
