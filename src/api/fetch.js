// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  return;
}

// Delete
// this id parameter will come from the state of the show in the Show.js file
export function destroyShow(id) {
  // a fetch call had an optional options argument.
  // In this case, we can use it to tell the backend that we want to use the DELETE method.
  // The default for fetch is GET so if you use any other method you must use this approach.
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}

// Show/Get one
//this id will come from our useParams and be used in the useEffect of the Show.js
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return;
}
