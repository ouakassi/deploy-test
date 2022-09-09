import axios from "../api/axios";
import useAuth from "./useAuth";

function useRefreshToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prevState) => {
      console.log(JSON.stringify(prevState));
    });
  };
  return <div></div>;
}

export default useRefreshToken;
