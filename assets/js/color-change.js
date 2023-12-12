const allItemBoxes = document.getElementsByClassName('single_box');
for (itemBox of allItemBoxes){
    // whenever the mouse enter into an item, function works
    itemBox.addEventListener('mouseenter',function(event){
       let randomColorCode =  getRandomCode (); // get random color code by function
       // set the color code to item style
        event.target.style.backgroundColor = randomColorCode;
    })
}