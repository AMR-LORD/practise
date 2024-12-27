

    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statement = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    const optionButtons = document.querySelector("#options");
    // explanation should be the "explanation" div
    const explanation = document.getElementById("explanation");

    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    const fact = {
        statement :"Arrays are like objects",
        answer :true,
        explanation:"Arrays are kind of object with special properties"
    };
    
    // TODO 3: Set the text of the statement element to the fact's statement
    statement.textContent = fact.statement;
        

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    const disable = (button)=>{
        button.setAttribute("disabled","");
    };
    // enable(button) should remove the attribute "disabled" from the button element
    const enable = (button)=>button.removeAttribute("disabled");


    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(guessString){
        return guessString === fact.answer.toString();
    }


    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let button of optionButtons.children) {
        button.addEventListener("click", (event) => { 
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
            explanation.textContent = fact.explanation;
            
            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons
            for (let btn of optionButtons.children) {
                disable(btn);
            }
            
            
            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            let guessedValue = event.target.textContent;
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate
            if (isCorrect(guessedValue)) {
                // Add the "correct" class as appropriate
                event.target.classList.add("correct");
            } else {
                // Add the "incorrect" class as appropriate
                event.target.classList.add("incorrect");
            }
        });
    }