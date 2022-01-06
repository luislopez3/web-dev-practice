/* 
            Let's start from scratch. 

            First, Go ahead and install jQuery using a CDN (Google it, I'll wait...)
            
            Now, confirm it worked by typing $ in the chrome console 

            Let's just get comfortable with jQuery first...
            You can execute the following commands in the chrome console, OR here in index.html
            1. Select the "#main" container and set a border of "1px solid grey" (HINT: .css + object)
            2. Now APPEND a Fourth paragraph to "#main" with text "Fourth" (HINT: use an HTML string)
            3. Keeping in mind that jQuery methods always return jQuery objects...
                Can you "chain" all of the above into a single line? 
        */
$("#main").css({ border: "1px solid grey" }).append(`<p>Fourth</p>`);

/*
            Now, let's notice something interesting about jQuery
            1. Select all "p" elements with jQuery, and set a color "red" (same way as above)
                - Notice how you just set the "style" attribute on 4 elements at the same time
            2. Using this same jQuery "p" object, append a <span> that contains "item" (HINT: appendTo)
                - Notice what happened again!
            3. Finally, we want to set the color to "orange" JUST on the second paragraph
                - What happens if you try "direct indexing" (ex [1]), combined with the .css() method?
                - What if you try .first().next().css() ?
                - And finally [1].style.color = "blue" ?
        */
$("p").css({ color: "red" }).append("<span> item</span>");
$("p").first().next().css({ color: "orange" });
$("p")[1].style.color = "blue";

/*
            Next up, can you REFACTOR the following event listener into jQuery?

            Try both...
                1. setting this event listener on $('p')
                2. and setting it on on $('p').first()
            ...and note the difference
        */
document.querySelector("p").addEventListener("click", function (e) {
  console.log("clicked ", e.currentTarget.textContent);
});

$("p").on("click", (e) => {
  console.log("clicked ", e.currentTarget.textContent);
});

$("p")
  .first()
  .on("click", (e) => {
    console.log("clicked ", e.currentTarget.textContent);
  });

/*
                Final challenge...
                Can you do all the following in a single line with JQUERY chaining?
                (Google anything you don't know how to do!)
    
                1. Create a new <button>
                2. Set its (text) color as "white", background color as "red"
                3. Set its text content as "Hide Text"
                4. Set a click event listener on this button, which...
                    - Selects all "p" and "hides" them
                    (HINT: use .hide() -- a jQuery method that sets display: none)
                5. now, append this new "button" to #main 
    
                You did it in one line, right? :)
            */
$(`<button>Hide Text</button>`)
  .css({ color: "white", backgroundColor: "red" })
  .on("click", () => {
    $("p").toggle();
  })
  .appendTo($("#main"));
