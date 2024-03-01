// CookData.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../pages/Item";

const CookData = ({ message, transcript }) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/d94323bfaec344a59d3d/COOKRCP01/json/1/10/`
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("api 호출 오류:", error.message);
      }
    };
    fetchData();
  }, []);

  if (recipes === null) {
    return <p>loading</p>;
  }

  return (
    <div className="cook_data">
      {/* 각 메뉴정보들을 item으로 보냄*/}
      {recipes.COOKRCP01.row.map((it) => (
        <Item key={it.RCP_SEQ} {...it} message={message} transcript={transcript} />
      ))}
    </div>
  );
};

export default CookData;