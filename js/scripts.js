// Business Logic


// User Interface Logic
function handleSubmission(event) {
  event.preventDefault();
  const name = document.querySelector("input#name").value;
  const race = document.querySelector("input[name='race']:checked").value;
  const type = document.querySelector("input[name='type']:checked").value;




let artifact;
  if (race === "elf" && type === "warrior") {
    artifact = "Aeglos: spear of flames";
  } else if (race === "elf" && type === "mage") {
    artifact = "Nenya: ring of water";
  } else if (race === "elf" && type === "archer") {
    artifact = "Narsil: bow of the stars";
  } else if (race === "dwarf" && type === "warrior") {
    artifact = "Glamdring: axe of burning";
  } else if (race === "dwarf" && type === "mage") {
    artifact = "Arkenstone: gem of the earth";
  } else if (race === "dwarf" && type === "archer") {
    artifact === "Anduril: throwing axe of the moon";
  } else if (race === "man" && type === "warrior") {
    artifact === "Sting: sword of the sun";
  } else if (race === "man" && type === "mage") {
    artifact = "Narya: ring of fire";
  } else if (race === "dwarf" && type === "archer") {
    artifact === "Kuthril: Longbow of Gondor";
  }  

  document.getElementById("artifactOP").innerText += " " + artifact;
  document.getElementById("nameOP").innerText += " " + name;
  document.getElementById("raceOP").innerText += " " + race;
  document.getElementById("typeOP").innerText += " " + type;
}

window.addEventListener("load", function() {
  const form = document.getElementById("character");
  form.addEventListener("submit", handleSubmission);
});