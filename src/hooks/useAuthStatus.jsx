import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [checkStatus, setCheckStatus] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    user ? setLoggedIn(true) : setLoggedIn(false);
    setCheckStatus(false);
  }, [user]);

  return { loggedIn, checkStatus };
};

export default useAuthStatus;
