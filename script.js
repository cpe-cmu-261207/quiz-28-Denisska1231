const axios = require("axios");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  return resp.data.results[0].picture.large;
}
callApi();
