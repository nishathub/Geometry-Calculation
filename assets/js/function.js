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
    // add paragraph, span and button to the new list
    newListItem.appendChild(numberSpan);
    newListItem.appendChild(paragraph);
    newListItem.appendChild(span);
    newListItem.appendChild(button);
    // appendChild newListItem
    listBox.appendChild(newListItem);
    listItemNumber++;
    
}
