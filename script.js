document.addEventListener('DOMContentLoaded', function(){
    
    //elements
    const color_box = document.getElementById('color-box');
    const change_btn = document.getElementById('change-color-btn');

    //function
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;  
    }

    //add event listener to btn
    change_btn.addEventListener('click', function() {
        const newColor = getRandomColor();
        color_box.style.backgroundColor = newColor;
        console.clear();
        console.log(newColor);
    });
})
