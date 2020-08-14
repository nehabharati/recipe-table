import React, { useState, useEffect } from "react";
import getRecipes from "../utils/getRecipes";
import useSortableData from "../hooks/useSortableData";

export default function Untagged() {
  const [status, setStatus] = useState([]);
  const { items, requestSort, sortConfig } = useSortableData(status);

  useEffect(() => {
    getRecipes().then((data) => setStatus(data));
  }, []);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
                id="field"
              >
                <span className="name">Name</span>
              </button>
            </th>
            <th>
              <button type="button" id="field">
                <span className="name">Untagged</span>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((stat) => (
            <tr key={stat.id}>
              <td>{stat.name}</td>
              {!stat.is_untagged ? <td>False</td> : <td>True</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
