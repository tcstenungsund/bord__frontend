const fruitBtn = document.getElementById("fruit-btn");
const fruitURL = "https://creepy-headscarf-hen.cyclic.app/fruit";

fruitBtn.addEventListener("click", function () {
  console.log("Fruit-knapp klickad");
  fetch(fruitURL, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res);
    });
});
