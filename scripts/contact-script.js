let formValues = {};
/*
// Gather data from the form
function gatherFormData() {
  formValues.Name = document.getElementById("name").value;
  formValues.Email = document.getElementById("email").value;
  formValues.Message = document.getElementById("text-area").value;

  let output = "Information we received:<br>";

  for (key in formValues) {
    output += `${key} -> ${formValues[key]}<br>`;
  }

  return output;
}
*/
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

  document.getElementById("body").classList.add("shade");
  //alert(output);

  //document.getElementById("form-data").innerHTML = output;
  document.getElementById("pop-up").style.display = "block";
}

function handleClick() {
  //document.getElementById("form-data").innerHTML = "";
  document.getElementById("pop-up").style.display = "none";

  clearData();
  document.getElementById("body").classList.remove("shade");
}

const form = document.getElementById("leave-a-message");
form.addEventListener("submit", handleSubmit);

document.getElementById("pop-up-close").addEventListener("click", handleClick);
