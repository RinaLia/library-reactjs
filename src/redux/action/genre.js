import http from "../../helper/http";
const { REACT_APP_URL } = process.env;

const getGenre = (param) => {
  const url = `${REACT_APP_URL}books/genres?${param}`;
  return {
    type: "GETGENRE",
    payload: http().get(url),
  };
};

const postGenre = (dataSubmit) => {
  const url = `${REACT_APP_URL}books/genres`;
  return {
    type: "POSTGENRE",
    payload: http().post(url, dataSubmit),
  };
};

const patchGenre = (id, genreData) => {
  const url = `${REACT_APP_URL}books/genres/${id}`;
  return {
    type: "PATCHGENRE",
    payload: http().patch(url, genreData),
  };
};

const deleteGenre = (id) => {
  const url = `${REACT_APP_URL}books/genres/${id}`;
  return {
    type: "DELETEGENRE",
    payload: http().delete(url),
  };
};

export { getGenre, deleteGenre, postGenre, patchGenre };
