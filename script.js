/**
 * ICS3U - 4.4 Interaction with HTML
 * Mr. Brash 🐿️
 * 
 * Make sure you read the lesson and watch the in-class demo.
 * 
 * Author:
 */

'use strict';

document.getElementById("add_click_btn").addEventListener("click", increment)
document.getElementById("sub_click_btn").addEventListener("click", subtract)
document.getElementById("reset_click_btn").addEventListener("click", reset)

let counter = 0;

console.log(document.title);

function increment(){
    counter++
    document.getElementById("click_count").innerText=counter;
    return counter
}
function subtract(){
    counter--
    document.getElementById("click_count").innerText=counter;
    return counter
}
function reset(){
    counter=0
    document.getElementById("click_count").innerText=counter;
    return counter
}