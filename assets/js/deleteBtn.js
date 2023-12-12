// // select deleteBtn
// const allDeleteButtons = document.getElementsByClassName('remove-result');
// for(button of allDeleteButtons) {
//     button.addEventListener('click',function(event){
//         console.log('delete clicked');
//         let resultItem = event.target.parentNode;
//         resultItem.remove();
//         console.log(resultItem);
//     })
// };

// Above function is not working for later added result item. 
// So, we may utilize event delegation here
// Event Delegation
document.getElementById('result-box').addEventListener('click', function(event){
    if (event.target.classList.contains('remove-result')){
        let resultItem = event.target.parentNode;
        resultItem.remove();
    }
})