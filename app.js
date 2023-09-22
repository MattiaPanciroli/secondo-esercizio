const newForm = document.createElement("form");

const newlabel1 = document.createElement("label");
const newlabel2 = document.createTextNode("Form");
newlabel1.appendChild(newlabel2);
newForm.appendChild(newlabel1);

const newText = document.createElement("textarea");
const newText1 = document.createTextNode("Hello");
newText.appendChild(newText1);
newForm.appendChild(newText);


const newInput = document.createElement("input");
newInput.setAttribute("type", "text");
newForm.appendChild(newInput);

const newlabel3 = document.createElement("label");
const newlabel4 = document.createTextNode("Radio");
newlabel3.appendChild(newlabel4);
newForm.appendChild(newlabel3);

const newInput1 = document.createElement("input");
newInput1.setAttribute("type", "radio");
newForm.appendChild(newInput1);

const newlabel5 = document.createElement("label");
const newlabel6 = document.createTextNode("Select");
newlabel5.appendChild(newlabel6);
newForm.appendChild(newlabel5);

// Create the select element
const selectElement = document.createElement('select');
selectElement.name = 'cars';
selectElement.id = 'cars';

// Create and append the first option element
const option1 = document.createElement('option');
option1.value = 'volvo';
option1.textContent = 'Volvo';
selectElement.appendChild(option1);

// Create and append the second option element
const option2 = document.createElement('option');
option2.value = 'saab';
option2.textContent = 'Saab';
selectElement.appendChild(option2);

// Create and append the third option element
const option3 = document.createElement('option');
option3.value = 'mercedes';
option3.textContent = 'Mercedes';
selectElement.appendChild(option3);

// Create and append the fourth option element
const option4 = document.createElement('option');
option4.value = 'audi';
option4.textContent = 'Audi';
selectElement.appendChild(option4);

newForm.appendChild(selectElement);
// Append the select element to the body or any other desired container
document.body.appendChild(newForm);


/*<form>
<label for="">Form</label>
<textarea name="" id="" cols="30" rows="10">hello</textarea>
<input type="text">

<label>Radio Button</label>
<input type="radio">

<label>Select</label>
<select name="cars" id="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>
</form>*/