  /* 
            Ready to write some DOM code?

            PART I:
            Let's start simple, 
                1. USING JAVASCRIPT, create a <div> element
                2. add the "container" class
                3. append as a child, to the body

            Let's fill that container
                1. USING JAVASCRIPT create 3 <p> elements
                2. fill them with the text...
                    [1] "Yesterday was good" [2] "Today is great" [3] "Tomorrow will be better"
                3. append them as children, to the "container" above

            Now, REFACTOR (update) the code above to use forEach on this array of strings:
                var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        */
        var newElement = document.createElement("div");
        newElement.classList.add("container");
        newElement.style.background = "bisque";
        console.log(newElement);
        document.body.appendChild(newElement);
        
        var newPara1 = document.createElement("p");
        newPara1.textContent = "Yesterday was good";
        var newPara2 = document.createElement("p");
        newPara2.textContent = "Today is great";
        var newPara3 = document.createElement("p");
        newPara3.textContent = "Tomorrow will be better";
        newElement.appendChild(newPara1);
        newElement.appendChild(newPara2);
        newElement.appendChild(newPara3);

        var copy = ["Yesterday was good", "Today is great", "Tomorrow will be better"];
        var newPara = document.createElement("p");
        var paraContent = copy.filter(p => p);
        console.log(paraContent);
        newPara.textContent = paraContent;
        newElement.appendChild(newPara);




        /*
            PART II:
            Start by creating another element
                1. create a button element
                2. set its text to be "enable dark mode"
                3. set style: 15px padding, no border, "black" background, "white" (text) color -- CAN YOU DO THIS WITH A LOOP?
                4. append as a child, to the "container" class div
        */

                  /*  
            Ready to write an event listener?
                1. add a click event listener to the black button
                2. inside the 'click' function, write code that...
                    - changes the background color of the html "body" to "black"
                    then, 
                    - change the background of ".container" to "#777" and color to white
                    - change the button text to black, and the background to white
         */

         /*
            BONUS (CHALLENGING): 
            Once dark mode is enabled, can you write code to switch it back to light mode?
                HINT #1: create a boolean variable that indicates whether dark mode is active
                HINT #2: use this for an if statement inside your event listener
                HINT #3: change the button text as well, depending on the state
        */