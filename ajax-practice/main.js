/* 
           This one will use everything we learned in the web dev section.
           
           For this one, jQuery is already installed for you.

           Ok! Here is a fake API we can use without any security credentials:
           https://jsonplaceholder.typicode.com/todos
           Open this URL browser bar to see the JSON

           (1) write an AJAX request to the URL above WITHOUT jQuery
           (you can copy the code from here... https://www.w3schools.com/xml/xml_http.asp)
                print out the result to the console

            This is a large array of "Todos". You will notice properties for user ID, title, and completed.
            Using this JSON DATA, we want to create HTML.
            */

/*
           (2)  For each user ID, create a new ".container" div, with an <h2> containing the user ID as textContent 
                    - Be careful, we only want ONE container per user ID, there are 10 containers total. (Do this with JavaScript)
                    - Set each container's ID to correspond to a user ID, ex id=1, id=2 and so on (use the "id" property)
                    - HINT: Don't overthink it, just use a simple for loop counting from 1 to 10 (one for each user)
            

            (3) Now,You will need to loop over each todo...
                    - For each todo, create a <p> element with the "title" property as textContent
                        - Not only that, each ToDo should either have a '✔️' or a '☐' depending on whether it is "completed" or not...
                            HINT: if statement + think back to combining strings
                        - Finally, append to the appropriate container ID (each container should have 20 todos)
                            HINT: select container by ID, and append ToDos inside the loop
 
            Your final result should look like the picture inside this folder! (Picture doesn't show full page, but you get the idea)
            Your solution should be 100% JavaScript at this point

            BONUS 1: Can you make it look better with CSS? Maybe find a good looking To-Do list online and copy it?
            BONUS 2: Can you "Re-factor" it to jQUery? (both your AJAX request, and all DOM methods!)
        */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var todos = JSON.parse(xhttp.responseText);

    for (var i = 1; i <= 10; i++) {
      var container = document.createElement("div");
      container.innerHTML = `<h2>User: ${i}</h2>`;
      container.id = i;
      document.body.appendChild(container);
    }

    for (var todo of todos) {
      var paragraph = document.createElement("p");
      if (todo.completed) {
        paragraph.textContent = "✔️" + todo.title;
      } else {
        paragraph.textContent = "☐" + todo.title;
      }
      document.getElementById(todo.userId).appendChild(paragraph);
    }
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhttp.send();

$.ajax({
  url: "https://jsonplaceholder.typicode.com/todos",
  success: function (data) {
    for (var i = 1; i <= 10; i++) {
      var container = $(`<div></div>`)
        .addClass(".container-two")
        .appendTo("body");
      var newP = $(`<h2>User: ${i}</h2>`).appendTo(container);
    }

    for (var todo in data) {
      if (data[todo].completed) {
        $(`<p>User: ${data[todo].userId} ✔️ ${data[todo].title}</p>`).appendTo(
          newP
        );
      } else {
        $(`<p>User: ${data[todo].userId} ☐ ${data[todo].title}</p>`).appendTo(
          newP
        );
      }
    }
  },
});
