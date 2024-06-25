// Function that clears all values from the fields
function clearData() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("text-area").value = "";
}

// Function that handles form submittion
function handleSubmit(e) {
  e.preventDefault();
  //const output = gatherFormData();

  document.getElementById("shade").style.display = "block";
  //alert(output);

  //document.getElementById("form-data").innerHTML = output;
  document.getElementById("pop-up").style.display = "block";
}

function handleClick() {
  //document.getElementById("form-data").innerHTML = "";
  document.getElementById("pop-up").style.display = "none";

  clearData();
  document.getElementById("shade").style.display = "none";
}

const form = document.getElementById("leave-a-message");
form.addEventListener("submit", handleSubmit);

document.getElementById("pop-up-close").addEventListener("click", handleClick);
