



function change(){
    let values = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let color = "#";
    let hex = document.getElementById("hex")

   for(let i = 0; i < 6; i++){
        color = color + values[Math.floor(Math.random() * 16)];
    }
    hex.innerText = color;
    document.body.style.backgroundColor = color
    return color;
}
