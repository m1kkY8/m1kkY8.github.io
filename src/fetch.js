function get_badge() {
  fetch(
    "https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1309279",
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      console.log(response.json());
      return response.json();
    })
    .then((data) => {
      document.getElementById("badge").textContent = JSON.stringify(
        data,
        null,
        2,
      );
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
