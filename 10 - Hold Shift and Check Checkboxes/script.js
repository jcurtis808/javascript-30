let checkboxes = document.querySelectorAll('input'); //selecting all checkboxes (input elements)


//creating for loop to get the last index of the checked boxes. This loop starts from the highest index and returns first matching index (last checked).
const lastIndex = (arr) => {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i].checked === true) return i;
    }
    return -1;
}

function handleCheck(e) {
    if(!e.shiftKey) return;  //found that click events have a property directly related to the shiftkey
    let inputs = Array.from(checkboxes);  //creating array from nodeList for method use
    let first = inputs.findIndex(input => input.checked);  //index of first checked box
    let last = lastIndex(inputs);  //index of last checked box
    inputs.filter((input, i) => {  //filtering original array with only indices that are between first and last (including first and last) 
        if(i >= first && i <= last)
        return input;
    }).forEach(input => input.checked = true);  //checking all boxes that meet the filter
}



checkboxes.forEach(input => input.addEventListener('click', handleCheck));