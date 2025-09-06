
let input = document.getElementById("itemInput");

let resetBtn = document.getElementById("reset");
let list = document.getElementById("itemList");


 function  add() {
    let text = input.value;

   
        
        let li = document.createElement("li");
        li.innerText = text;

        
        list.appendChild(li);

        
        input.value = "";
    
};
 function reset() {
    list.innerHTML = "";
    input.value = "";
};
let colors = ["red","blue","green","yellow","pink","purple","orange"];

function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}


let images = ["https://i.pinimg.com/736x/c5/11/14/c511147237f0f286e023c74ee0fc983e.jpg", "https://i.pinimg.com/736x/c9/08/73/c90873bd83bb8033ec1dbd2e10b35853.jpg"];
let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("myImage").src = images[index];
}



let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("count").innerText = count;
}
