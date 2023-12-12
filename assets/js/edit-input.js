
// click edit button to display input div
const allEditButtons = document.getElementsByClassName('edit-input');
for(editBtn of allEditButtons){
editBtn.addEventListener('click',function(event){
    // event.target.parentNode.parentNode.nextSibling.nextSibling.style.display = 'block';
    const inputDiv = event.target.parentNode.parentNode.nextElementSibling;
    inputDiv.style.display = 'block';
})
}

// submit input value and hide input div
const allSubmitButtons = document.getElementsByClassName('submit-input');
for (submitBtn of allSubmitButtons){
    submitBtn.addEventListener('click', function(event){
        // console.log(event.target.parentNode.parentNode.firstChild.nextSibling.value);
        const parentDiv = event.target.closest('.input_div');
        const firstInputValue = parentDiv.querySelector('.first-input').value;
        const secondInputValue = parentDiv.querySelector('.second-input').value;
        // set these value to the collected data div
        const collectDataElement = parentDiv.previousElementSibling;
        const firstDataElement = collectDataElement.querySelector('.first-value');
        const secondDataElement = collectDataElement.querySelector('.second-value');
        // Error handling
        if (isNaN(firstInputValue) === true || isNaN(secondInputValue) === true ){
            alert('Enter a valid number, no string');
        } else if (firstInputValue === '' || secondInputValue === ''){
            alert('input field can not be empty')
        } else if (firstInputValue <= 0 || secondInputValue <= 0) {
            alert('Enter a positive value')
        } else {
            firstDataElement.innerText = firstInputValue;
            secondDataElement.innerText = secondInputValue;
            // hide input div
            parentDiv.style.display = 'none';
        }
    
    })
}
