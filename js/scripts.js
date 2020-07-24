const section = document.querySelector("section")
document.getElementById("displayTypeAndText").addEventListener("click", function () {
  /**
 * Axios AJAX Library Example
 */
  // @link https://github.com/axios/axios
  // axios; // If we don't get an error on this line, Axios is installed and working!

  // Location for our request...
  axios.get("https://cat-fact.herokuapp.com/facts") // Type of request is GET.
    // Handle response...
    .then(response => {
      if (response.status >= 200 && response.status <= 299) { // 200 range status/response codes are SUCCESSES!
        // Test test test! Are we getting anything?
        console.log(response); // Yep! Looks like our info we want is in response.data
        const allDetails = response.data.all; // Object containing all properties.

        for (const details of allDetails) {

          
          const dl = document.createElement("dl");

          const dtname = document.createElement("dt");
          dtname.textContent = "Full Name is:"
          const ddname = document.createElement("dd");
          ddname.textContent = `${details.user.name.first} ${details.user.name.last} `;

          const dttype = document.createElement("dt");
          dttype.textContent = "The type is:"
          const ddtype = document.createElement("dd");
          ddtype.textContent = details.type;

          const dttext = document.createElement("dt");
          dttext.textContent = "The text is:"
          const ddtext = document.createElement("dd");
          ddtext.textContent = details.text;

          dl.appendChild(dtname);
          dl.appendChild(ddname);
          dl.appendChild(dttype);
          dl.appendChild(ddtype);
          dl.appendChild(dttext);
          dl.appendChild(ddtext);
          // Put this into the page (<section>)!
          section.appendChild(dl);
        }
      }
      else { // If it is another range, we are unsuccessful...
        throw Error(response.statusText); // Display a formal error message reporting the concern.
      }

    })

});

document.getElementById("closeTypeAndText").addEventListener("click", function () {
  
  section.style.display = "none";
})

