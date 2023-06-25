function StopWatch() {
  let isRunning = false;
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;
  this.start = function () {
    if (!isRunning) {
      startTime = new Date().getTime();
      isRunning = true;
    } else {
      console.error(`Stop watch is already running`);
    }
  };
  this.stop = function () {
    if (isRunning) {
      stopTime = new Date().getTime();
      isRunning = false;
      duration += (stopTime - startTime) / 1000;
    } else {
      console.error(`Stop watch is already stopped`);
    }
  };
  this.reset = function () {
    isRunning = false;
    stopTime = 0;
    startTime = 0;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
const sw = new StopWatch();
