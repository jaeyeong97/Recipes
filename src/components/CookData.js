import React, { useEffect, useState } from "react";
import axios from "axios";

const CookData = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const keyId = "d94323bfaec344a59d3d";
        const serviceId = "COOKRCP01";
        const response = await axios.get(
          `/api/${keyId}/${serviceId}/json/1/20`
        );
        if (response.data.row && response.data.row.length > 0) {
          setRecipes(response.data);
        } else {
          console.log(" no data!");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cook_data">
      {Array.isArray(recipes.row) && recipes.row.length > 0 ? (
        recipes.row.map((it) => (
          <div className="lists" key={it.RCP_SEQ}>
            <p>조리 방법: {it.RCP_WAY2}</p>
            <p>요리 종류: {it.RCP_PAT2}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
export default CookData;
