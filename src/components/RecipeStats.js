import React, { useState, useEffect } from "react";
import { getRecipes } from "../utils/getRecipes";

export default function RecipeStats() {
  const [marginUp, setMarginUp] = useState([]);
  const [marginDown, setMarginDown] = useState([]);
  const [fluctuate, setFluctuate] = useState([]);

  useEffect(() => {
    getRecipes(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top"
    ).then((data) => setMarginUp(data));
    getRecipes(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom"
    ).then((data) => setMarginDown(data));
    getRecipes(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top"
    ).then((data) => setFluctuate(data));
  }, []);

  return (
    <div className="margin-stats">
      <div className="margin">
        <h3>High Margin Recipes</h3>
        <div className="margin-container">
          {marginUp.map((progress) => (
            <div className="margin-names">
              <p>
                {progress.name
                  .toLowerCase()
                  .replace(/\b(\w)/g, (x) => x.toUpperCase())}
              </p>
              <div className={`c100 p${Math.floor(progress.margin)} green`}>
                <span>{progress.margin}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="margin">
        <h3>Low Margin Recipes</h3>
        <div className="margin-container">
          {marginDown.map((progress) => (
            <div className="margin-names">
              <p>
                {progress.name
                  .toLowerCase()
                  .replace(/\b(\w)/g, (x) => x.toUpperCase())}
              </p>
              <div className={`c100 p${Math.floor(progress.margin)} red`}>
                <span>{progress.margin}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="margin">
        <h3>Top Fluctuating Recipes</h3>
        <div className="margin-container">
          {fluctuate.map((recipe) => (
            <div className="margin-names">
              <p>
                {recipe.name
                  .toLowerCase()
                  .replace(/\b(\w)/g, (x) => x.toUpperCase())}
              </p>
              <div className={`c100 p${Math.floor(recipe.fluctuation)} orange`}>
                <span>{recipe.fluctuation}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
