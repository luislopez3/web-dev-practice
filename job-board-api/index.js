// 1. Sebd AJAX request to https://REMOTEOK.com/api
// 2. Test that request to make sure it worked
// 3. Use the data to create HMTL

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    var data = JSON.parse(xhttp.responseText);
    var container = document.getElementById("container");
    console.log(data);
    data.slice(1).forEach((row, i) => {
      var rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      rowDiv.innerHTML = `
           <div class="left-section">
                <h5 class="company">${row.company}</h5>
                <h3 class="position">${row.position}</h3>
                <p class="location">${row.location}</p>
           </div>
           <div class="mid-section>
                ${row.tags
                  .map((tag) => {
                    return `<div class="tag">${tag}</div>`
                  })
                  .join("")}
           </div>
           <div class="right-section">
                <a href=${row.url}>
                    <button class="apply">Apply</button?
           </div>
           `;
      container.appendChild(rowDiv);
    });
  }
};
xhttp.open("GET", "https://REMOTEOK.com/api", true);
xhttp.send();
