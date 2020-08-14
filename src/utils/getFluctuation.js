export default function getFluctuateUp() {
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
