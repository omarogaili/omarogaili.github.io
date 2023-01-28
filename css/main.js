/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="radio"]');
btn.addEventListener("click", () => {
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
      
    }
  }
  // show the output:
  output.innerText = selectedSize ? `Du valde ${selectedSize}. Rätt svar är Integer`  : `Du har inte valt något`;
})




var form = document.getElementById("post-form");
form.addEventListener("submit", function(e) {
  e.preventDefault(); // för att förhindra formuläret från att skickas till en annan sida
  var input = document.getElementById("post-input");
  var post = input.value;
  // Skicka posten till servern
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/post");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // Visa upp posten på webbsidan
      var output = document.getElementById("output");
      output.innerHTML = response.post;
    }
  };
  xhr.send(JSON.stringify({ post: post }));
});







