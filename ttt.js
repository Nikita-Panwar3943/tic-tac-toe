let boxes=document.querySelectorAll(".box1");
let resetbtn=document.queryselector(".rbox");
let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];

boxes.forEach((box1)=>{
    box1.addEventListener("click", ()=>{
        console.log("box was clicked"); 
    }
    );
});
