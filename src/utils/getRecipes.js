export function getRecipes() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve(data.results);
      });
  });
}

export function getMarginUp() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve(data.results);
      });
  });
}

export function getMarginDown() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve(data.results);
      });
  });
}

export function getFluctuation() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve(data.results);
      });
  });
}
