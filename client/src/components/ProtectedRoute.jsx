import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
// import { BASE_URL } from "../../src/Service/helper";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  //   const BASE_URL = meta.env.VITE_API_BACKEND_URL;
  //   console.log(BASE_URL);
  const token = localStorage.getItem("token"); // Retrieve the stored token from localStorage

  const getUser = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        `${import.meta.env.VITE_API_BACKEND_URL}/userData`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch(hideLoading());
      // console.log(res.data);
      if (res.data.success) {
        dispatch(setUser(res.data.data));
        console.log(res.data.data);
      } else {
        localStorage.clear();
        console.log("fail");
        return <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) getUser();
  }, []);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
