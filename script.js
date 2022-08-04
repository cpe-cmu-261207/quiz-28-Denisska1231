callApi();

const genderTag = document.getElementById("span-gender-icon");
const imgTag = document.getElementById("img-profile");
const nameTag = document.getElementById("p-name");
const addressTag = document.getElementById("p-address");
const emailTag = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");
const maincard = document.getElementById("div-user-card");
const loadcard = document.getElementById("div-loading-card");

btnRandom.onclick = () => {
  callApi();
  maincard.style.display = "";
  loadcard.style.display = "none";
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  return resp.data.results[0].picture.large;
}


