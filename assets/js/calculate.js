// selecting the calculate button
const allCalculateButtons = document.getElementsByClassName('calculate_btn');
for (calculateButton of allCalculateButtons){
    calculateButton.addEventListener('click', function(event){
        // DOM traversing to get to the input Data
        const dataDiv = event.target.previousElementSibling; // collected data div
        const firstDataElement = dataDiv.querySelector('.first-value'); // 
        const secondDataElement = dataDiv.querySelector('.second-value');
        const firstDataString = firstDataElement.innerText;
        const secondDataString = secondDataElement.innerText;
        const firstData = parseFloat(firstDataString);
        const secondData = parseFloat(secondDataString);
        // calculation
        // according to item name, different area calculation will be done
        const itemName = dataDiv.querySelector('.item-name').innerText;
        let result;
        if (itemName === 'Triangle' || itemName === 'Rhombus' || itemName === 'Pentagon'){
            result = (firstData * secondData) / 2;
        } else if (itemName === 'Rectangle' || itemName === 'Parallelogram'){
            result = (firstData * secondData);
        } else if (itemName === 'Ellipse'){
            result = (firstData * secondData) * 3.1416; 
        }
        result = result.toFixed(2); // maximum 2 decimal point
        addNewListItem (dataDiv, result); // function to appendChild
    })
}