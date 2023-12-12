// selecting the calculate button
const allCalculateButtons = document.getElementsByClassName('calculate_btn');
for (calculateButton of allCalculateButtons){
    calculateButton.addEventListener('click', function(event){
        // DOM traversing to get to the collected data field
        const dataDiv = event.target.previousElementSibling; // collected data div
        const firstDataElement = dataDiv.querySelector('.first-value'); // 
        const secondDataElement = dataDiv.querySelector('.second-value');
        const firstDataString = firstDataElement.innerText;
        const secondDataString = secondDataElement.innerText;
        const firstData = parseFloat(firstDataString);
        const secondData = parseFloat(secondDataString);
        // calculation
        const itemName = dataDiv.querySelector('.item-name').innerText;
        let result;
        if (itemName === 'Triangle'){
            result = (firstData * secondData) / 2;
        } else if (itemName === 'Rectangle'){
            result = (firstData * secondData);
        } else if (itemName === 'Parallelogram'){
            result = (firstData * secondData);
        } else if (itemName === 'Rhombus'){
            result = (firstData * secondData) / 2;
        } else if (itemName === 'Pentagon'){
            result = (firstData * secondData) / 2;
        } else if (itemName === 'Ellipse'){
            result = (firstData * secondData) * 3.1416; 
        }
        result = result.toFixed(2);
        addNewListItem (dataDiv, result);
    })
}