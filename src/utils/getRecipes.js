export default function getRecipes() {
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