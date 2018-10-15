let inBox = document.getElementById("in");
let outBox = document.getElementById("out");
let btn = document.getElementById("btn");
//let dateIn = "Jan 30, 2030 15:37:25";



btn.addEventListener("click", function () {
    let endValue = new Date(inBox.value).getTime();
    console.log(endValue);
    
    let startValue = new Date().getTime();
    console.log((endValue - startValue) / 1000);
    
    let days = Math.floor(((endValue - startValue) / 1000)/86400);
    console.log(days);
    
    let hours = Math.floor((((endValue - startValue) / 1000) % 84600) / 3600);
    console.log(hours);
    
    let mins = Math.floor((((endValue - startValue) / 1000) % 3600) / 60);
    console.log(mins);
    
    let sec = Math.floor((((endValue - startValue) / 1000) % 60));
    console.log(sec);
});
