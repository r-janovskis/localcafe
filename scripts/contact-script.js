let formValues = {};

// Gather data from the form
function gatherFormData() {
  formValues.Email = document.getElementById("email").value;
  formValues.Message = document.getElementById("text-area").value;

  let output =
    "Thank you for reaching out, we will get in touch with you shortly!\n\nInformation we received:\n";

  for (key in formValues) {
    output += `${key} -> ${formValues[key]}\n`;
  }

  return output;
}

// Function that clears all values from the fields
function clearData() {
  document.getElementById("email").value = "";
  document.getElementById("text-area").value = "";
}

// Function that handles form submittion
function handleSubmit(e) {
  e.preventDefault();
  const output = gatherFormData();

  alert(output);

  clearData();
}

const form = document.getElementById("leave-a-message");
form.addEventListener("submit", handleSubmit);
