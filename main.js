// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡';

const FULL_HEART = '♥';

// Your JavaScript code goes here!

const liker = document.body
const errorShow = document.getElementById("modal")

liker.addEventListener("click", (e) => {
  if (e.target.className.includes('like')) {

    mimicServerCall()

    .then(res => {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART
        e.target.classList.add("activated-heart")
      } else if (
        e.target.textContent === FULL_HEART
      ) {
        e.target.textContent = EMPTY_HEART
        e.target.classList.remove("activated-heart")
      }
    })

    .catch((err) => {

      console.log("error", err)
      errorShow.classList.remove("hidden")

      setTimeout(() => {
        errorShow.classList.add("hidden")
      }, 3000)
    });
  };
}
);


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
