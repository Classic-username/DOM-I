var tenSec = document.querySelector('#secondTens');
var oneSec = document.querySelector('#secondOnes');
var mSHundo = document.querySelector('#msHundreds');
var mSTen = document.querySelector('#msTens');



tenSec.textContent = '0';
oneSec.textContent = '0';
mSHundo.textContent = '0';
mSTen.textContent = '0';


window.setInterval(() => {
    if(tenSec.textContent == 1 && oneSec.textContent == 0 && mSHundo.textContent == 0 && mSTen.textContent == 0){
        document.querySelectorAll('.digit').forEach(element => element.style.color = 'red')
        clearInterval(msHundo)
        clearInterval(msTen)
        clearInterval(second)
    }
}, 1)

let msTen = window.setInterval(() => {
    if(mSTen.textContent < 9){
        mSTen.textContent ++
    } else if(mSTen.textContent == 9){
        mSTen.textContent = 0
    }
}, 10)

let msHundo = window.setInterval(() => {
    if(mSHundo.textContent < 9){
        mSHundo.textContent ++;
    } else if(mSHundo.textContent == 9){
        mSHundo.textContent = 0;
    }
}, 100)

let second = window.setInterval(() => {
    
    if(oneSec.textContent < 9){
        oneSec.textContent ++
    } else if(oneSec.textContent == 9){
        oneSec.textContent = 0
        tenSec.textContent = 1
    }
}, 1000)



// ## Objectives
//  * Manipulate the DOM using JavaScript
//  * Choose selectors for a given problem
//  * Work with the object the different selectors return

// ## Project Description
//  You will be making a timer that:
//   * Counts up to 10 seconds
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds

//  You will also need to look up and use `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated.


