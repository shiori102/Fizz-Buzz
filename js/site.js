function printNumbers() {
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(start, end);
    displayData(numbers);
}

function getRange(start, end) {
    let numberArray = [];
    //fizzbuzz things go here
    //mortgage things go here
    for (let index = start; index <= end; index++) {
        numberArray.push(index);
    }

    return numberArray;
}

//display numbers on the page
function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    resultsBody.innerHTML = "";
    //ImportNode: can get in a different document that its currently not on

    //loop over every number in the array
    //get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        let cols = dataRow.querySelectorAll("td");

        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];
            if (typeof value === "undefined") {
                value = "";
            } else if (value % 2 == 0) {
                cols[colIndex].classList.add("boldIt");
            }


            //td's use textContent to set content
            cols[colIndex].textContent = value;
        }
        //
        resultsBody.appendChild(dataRow);
    }


}