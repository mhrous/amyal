const endPoint = "http://13.38.211.79:8888/api";

const headers = {};

const getDriver = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/user/?power=D&onCar=1`,
    success,
    headers
  });
};

const getData = ({ success, m, y }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}/page/driver_info?m=${m}&y=${y}`,
    success,
    headers
  });
};
