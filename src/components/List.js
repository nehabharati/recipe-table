import React, { useState, useEffect } from "react";
import useSortableData from "../hooks/useSortableData";
import { getRecipes } from "../utils/getRecipes";
import "react-picky/dist/picky.css";

export default function List() {
  const [recipes, setRecipes] = useState([]);
  const { items, requestSort, sortConfig } = useSortableData(recipes);
  const [allChecked, setAllChecked] = useState(false);
  const [itemChecked, setItemChecked] = useState(false);

  useEffect(() => {
    getRecipes(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/"
    ).then((data) => setRecipes(data));
  }, []);

  // Tells what is the field we want to sort
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  function handleChange(e, id) {
    let item_name = e.target.name;
    let checked = e.target.checked;
    if (item_name === "checkAll") {
      setAllChecked(checked);
      setItemChecked(checked);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="checkAll"
                checked={allChecked}
                onChange={(e, id, items) => handleChange(e, id, items)}
              />
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
                id="field"
              >
                <span className="name">Name</span>{" "}
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("last_updated")}
                className={getClassNamesFor("last_updated")}
                id="field"
              >
                <span className="name">Last Updated</span>
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("cogs")}
                className={getClassNamesFor("cogs")}
                id="field"
              >
                <span className="name">COGS%</span>
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("cost_price")}
                className={getClassNamesFor("cost_price")}
                id="field"
              >
                <span className="name">Cost_price</span>
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("sale_price")}
                className={getClassNamesFor("sale_price")}
                id="field"
              >
                <span className="name">Sale_price</span>
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort("gross_margin")}
                className={getClassNamesFor("gross_margin")}
                id="field"
              >
                <span className="name">gross_margin</span>
                <span className="arrows"> &#x2195;</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((recipe) => (
            <tr key={recipe.id}>
              <td>
                <input
                  type="checkbox"
                  name={recipe.id}
                  value={recipe.id}
                  checked={itemChecked}
                  onChange={(e, id, items) =>
                    handleChange(e, recipe.id, recipe)
                  }
                />
              </td>
              <td>{recipe.name}</td>
              <td>{recipe.last_updated.date.slice(0, 10)}</td>
              <td>{recipe.cogs}%</td>
              <td>{recipe.cost_price}</td>
              <td>{recipe.sale_price}</td>
              <td>{recipe.gross_margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
