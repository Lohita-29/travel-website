function searchDestination() {

  const value = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const cards = document.querySelectorAll(".card");

  let found = false;

  cards.forEach(card => {

    const name = card.querySelector("h3").innerText.toLowerCase();

    card.style.border = "none";

    if(name.includes(value)) {
      found = true;
      card.style.border = "3px solid green";
      card.scrollIntoView({behavior:"smooth"});
    }
  });

  if(!found){
    alert("Destination not found");
  }
}

function submitForm(e){
  e.preventDefault();
  alert("Message sent successfully!");
}