// AppendChild function
let listItemNumber = 2;
function addNewListItem (dataDiv, result){
    const listBox = document.getElementById('result-list');
    // creating a new list
    let newListItem = document.createElement('li');
    // adding classList
    newListItem.classList.add('flex', 'justify-between', 'items-center');
    // create Element that will be appended to the newListItem
    const numberSpan = document.createElement('span');
    const paragraph = document.createElement('p');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const deleteButton = document.createElement('i');
    // set sequential number
    numberSpan.innerText = listItemNumber + '.';
    // get item name from data div and set it to the paragraph
    const itemName = dataDiv.querySelector('.item-name').innerText;
    paragraph.textContent = itemName;
    // get result from calculation and set to span
    span.innerHTML = `${result}cm<sup>2</sup>`
    // add button classlist 
    button.classList.add('convert-button');
    // set button innerText
    button.innerHTML = `Convert to m<sup>2</sup>`;
    // add deletebutton classList
    deleteButton.classList.add('remove-result', 'fa-solid', 'fa-xmark');
    // add paragraph, span and button to the new list
    newListItem.appendChild(numberSpan);
    newListItem.appendChild(paragraph);
    newListItem.appendChild(span);
    newListItem.appendChild(button);
    newListItem.appendChild(deleteButton);
    // appendChild newListItem
    listBox.appendChild(newListItem);
    listItemNumber++;
    
}

function getRandomCode (){
    // we made string to utilize the .length function
    let numberString = parseInt(Math.random() * 1000000) + '';
    let code;
        if(numberString.length === 6){ // here we use the .length
          let number = parseInt(numberString); // we make integer again
           code = `#${number}`; // a 6 digit color code
           return code;
        } else {
           return getRandomCode(); // return to avoid undefined value
        }  
}
