const endPoint = "http://13.38.211.79:8888/api";

const headers = {};

const getData = ({ success, m, y }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/page/car_info?m=${m}&y=${y}`,
    success,
    headers
  });
};

const getPartnerAndDriverName = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/user/name`,
    success,
    headers
  });
};

const getCar = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/car`,
    success,
    headers
  });
};

const addCar = ({ data, success }) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}/car`,
    success,
    data,
    headers
  });
};

const putCar = ({ id, data, success, error }) => {
  $.ajax({
    type: "PUT",
    url: `${endPoint}/car/${id}`,
    success,
    data,
    error,
    headers
  });
};

const deleteCar = ({ id, success }) => {
  $.ajax({
    type: "DELETE",
    url: `${endPoint}/car/${id}`,
    success,

    headers
  });
};
