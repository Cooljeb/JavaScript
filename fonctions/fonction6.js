const startTimer = (timeout) => {
  let seconds = 0;
  const timer = setInterval(() => {
    console.log("chrono:" + seconds);
    seconds++;
    if (seconds > timeout) {
      console.log("temps écoulé");
      clearInterval(timer);
    }
  }, 1000);
};

startTimer(10);
