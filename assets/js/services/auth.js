const endPoint = "http://13.38.211.79:8888";


const logIn = ({ data, success, error }) => {
  $.ajax({
    type: "POST",
    url: `${endPoint}/signin`,
    data,
    success,
    error
  });
};
