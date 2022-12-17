const endPoint = "http://13.38.211.79:8888/api/user";

const headers = {};

const getPartner = ({ success }) => {
    $.ajax({
      type: "GET",
      url: `${endPoint}?power=P`,
      success,
      headers
    });
  };


