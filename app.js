// ================================================================================================

// Declaring variables
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let timer;

//starts the countdown timer once user clicks the 'start' button
start = () => {
  timeLeft = 76;
  timer = setInterval(() => {
    timeLeft--;
    timeleft = $("#counter").html(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);

  // next();
};

