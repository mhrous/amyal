const endPoint = "http://13.38.211.79:8888/api/user";

const headers = {};

const getDriver = ({ success }) => {
  $.ajax({
    type: "GET",
    url: `${endPoint}`,
    success,
    headers
  });
};
