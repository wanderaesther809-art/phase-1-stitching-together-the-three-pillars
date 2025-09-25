// Objects to control toggling like / unlike status
const glyphStates = {
  "♡": "♥",
  "♥": "♡",
};

const colorStates = {
  red: "",
  "": "red",
};

// STEP 1: Find all the heart glyphs on the page
const articleHearts = document.querySelectorAll(".like-glyph");

// Function to handle clicks on hearts
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      // STEP 2: Update heart only if server call "succeeds"
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      // STEP 2: Show error if server call "fails"
      alert("Something went wrong!");
    });
}

// STEP 3: Add click event listeners to all hearts
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
function mimicServerCall() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
