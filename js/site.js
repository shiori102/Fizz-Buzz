function printNumbers() {
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value);
    let fizz = parseInt(document.getElementById("numThree").value);
    let buzz = parseInt(document.getElementById("numFour").value);
    let numbers = getRange(start, end, fizz, buzz);
    displayData(numbers);
}

function getRange(start, end, fizz, buzz) {
    let numberArray = [];
    //fizzbuzz things go here
    //This generates an array containing either 'Fizz', 'Buzz', 'FizzBuzz', or a number
    //This is the 'data' of FizzBuzz
    //The array is passed to displayData where the markup is added to make it pretty
    for (let i = start; i <= end; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            numberArray.push("FizzBuzz");
        } else if (i % fizz == 0) {
            numberArray.push("Fizz");
        } else if (i % buzz == 0) {
            numberArray.push("Buzz");
        } else {
            numberArray.push(`${i}`);
        }
    }
    //mortgage things go here
    // for (let index = start; index <= end; index++) {
    //     numberArray.push(index);
    // }

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
            // let value = numbers[i + colIndex];
            //we add the i value from the first for loop to the colIndex value of this for loop
            //that allows us to go through our data one at a time
            if (numbers[i + colIndex] == "FizzBuzz") {
                cols[colIndex].classList.add("fizzBuzz");
                cols[colIndex].textContent = "FizzBuzz";
            } else if (numbers[i + colIndex] == "Fizz") {
                cols[colIndex].classList.add("fizz");
                cols[colIndex].textContent = "Fizz";
            } else if (numbers[i + colIndex] == "Buzz") {
                cols[colIndex].classList.add("buzz");
                cols[colIndex].textContent = "Buzz";
            } else {
                cols[colIndex].textContent = numbers[i + colIndex];
            }

            resultsBody.appendChild(dataRow);
        }
    }
}