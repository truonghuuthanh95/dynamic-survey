import React, { useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import globalAPI from "../apis/globalAPI";
const Direction = () => {
  // let { token, page } = useParams();
  let location = useLocation();
  let history = useHistory();
  sessionStorage.setItem(
    "token",
    decodeURIComponent(location.search.substring(7))
  );

  useEffect(() => {
    globalAPI.getSession().then(async (res) => {
      if (res.StatusCode === 200) {
        await sessionStorage.setItem("session", JSON.stringify(res.Result[0]));
        if (
          res.Result[0].AccountType === "Trg" ||
          res.Result[0].AccountType === "PGD"
        ) {
          history.push("/truong/index");
        }
      }
    });
  }, []);
  return <></>;
};

export default Direction;
