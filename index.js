let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//initialize the cout as 0
let count = 0;

//listen for clicks on the increment button
function increment() {
    //increment the count on button click
    count++ ;

    //console.log(count);

    //change the count-el in HTML to reflect the new count
    countEl.innerText = count;
}

function decrement() {
    //check if the count is 0 then it stays the same
    if(count<=0) {
        count=0;
    }

    //decrement the count on button click
    else
    count-- ;
    //change the count-el in HTML to reflect the new count
    countEl.innerText = count;
}

function save() {
    //adding a string to record previous entries
    let countString = count + "-"
    saveEl.textContent += countString;

    //reseting the counter and displaying
    count = 0;
    countEl.innerText = count;
}




