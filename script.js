const gen = document.getElementById("span-gender-icon");
const img = document.getElementById("img-profile");
const name = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const btnrandom = document.getElementById("btn-random");
const user = document.getElementById("div-user-card");
const loading = document.getElementById("div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  if (resp.data.results[0].gender == "male") {
    gen.innerText = "👨";
  } else {
    gen.innerText = "👩";
  }
  img.src = resp.data.results[0].picture.large;
  name.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  email.innerText = resp.data.results[0].email;
  address.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
  console.log(resp.data.results[0]);
}

btnrandom.onclick = () => {
  callApi();
  user.style.display = "";
  loading.style.display = "none";
};

btnrandom.onload = () => {
  loading.style.display = "none";
  user.style.display = "";
};
callApi();
