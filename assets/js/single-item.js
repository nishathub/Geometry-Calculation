
// click edit button to display input div
const allEditBtns = document.getElementsByClassName('edit-input');
for(editBtn of allEditBtns){
editBtn.addEventListener('click',function(event){
    // event.target.parentNode.parentNode.nextSibling.nextSibling.style.display = 'block';
    const inputDiv = event.target.parentNode.parentNode.nextElementSibling;
    inputDiv.style.display = 'block';
})
}

// submit input value and hide input div
const allSubmitBtns = document.getElementsByClassName('submit-input');
for (submitBtn of allSubmitBtns){
    submitBtn.addEventListener('click', function(event){
        // console.log(event.target.parentNode.parentNode.firstChild.nextSibling.value);
        const parentDiv = event.target.closest('.input_div');
        const firstInputValue = parentDiv.querySelector('.first-input').value;
        const secondInputValue = parentDiv.querySelector('.second-input').value;
        // set these value to the collected data div
        const collectDataBox = parentDiv.previousElementSibling;
        const firstDataBox = collectDataBox.querySelector('.first-value');
        const secondDataBox = collectDataBox.querySelector('.second-value');
        firstDataBox.innerText = firstInputValue;
        secondDataBox.innerText = secondInputValue;
        // hide input div
        parentDiv.style.display = 'none';
    
    })
}
