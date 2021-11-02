
"use strict";
       
   let getNameId = document.querySelector("#fname");
   

//the function that will run on every inputs made by user
let forname = function () {
    
    
    let getNameInput = document.querySelector("#fname").value;
    let getNameErrorOutput = document.querySelector("#name_check");

    let veriput = getNameInput.search(" ");

    if (veriput == -1) {
        if (getNameInput.length < 1) {
            getNameErrorOutput.style = "color: red";
            getNameErrorOutput.innerHTML = "oga type ur name na";
        } else if (getNameInput.length <= 2) {
            getNameErrorOutput.style = "color: red";
            getNameErrorOutput.innerHTML = "name too short";
        } else if (getNameInput.length >= 3) {
            getNameErrorOutput.style = "color: green";
            getNameErrorOutput.innerHTML = "good to go";
        }
    } else {
        getNameErrorOutput.style = "color: red";
        getNameErrorOutput.innerHTML = "invalid character";
    }



    
 }

 // called the forname function
 getNameId.oninput = forname;










/*


 let validate = function () {
     
    let getNameInput = document.querySelector("#fname").value;
    let getNameErrorOutput = document.querySelector("#name_check");

    let veriput = getNameInput.search(" ");

    if (veriput == -1) {
        console.log("valid");
    } else {
        console.log("bad");
    }

 }



*/



