const changeSecond = (second) => {
  let deg = (second + 1) * 6;
  const secondElement = document.getElementById("circle-second");
  const secondTimeElement = document.getElementById("second-time");
  secondElement.style.background = `conic-gradient(greenyellow ${deg}deg, white 0deg)`;
  secondTimeElement.textContent =
    second + 1 < 10 ? `0${second + 1}` : second + 1;
};

const changeMinute = (minute) => {
  let deg = (minute + 1) * 6;
  const minuteElement = document.getElementById("circle-minute");
  const minuteTimeElement = document.getElementById("minute-time");
  minuteElement.style.background = `conic-gradient(blue ${deg}deg, white 0deg)`;
  minuteTimeElement.textContent =
    minute + 1 < 10 ? `0${minute + 1}` : minute + 1;
};

const changeHour = (hour) => {
  let deg = (hour + 1) * 6;
  const hourElement = document.getElementById("circle-hour");
  const hourTimeElement = document.getElementById("hour-time");
  hourElement.style.background = `conic-gradient(red ${deg}deg, white 0deg)`;
  hourTimeElement.textContent = hour + 1 < 10 ? `0${hour + 1}` : hour + 1;
};

const drawSecond = (ctxt, endRadian) => {
  ctxt.beginPath();
  ctxt.strokeStyle = "orange";
  ctxt.arc(200, 150, 60, 4.9218284906240095, endRadian);
  ctxt.stroke();
};

const drawMinute = (ctxt, endRadian) => {
  ctxt.beginPath();
  ctxt.strokeStyle = "blue";
  ctxt.arc(200, 150, 70, 4.9218284906240095, endRadian);
  ctxt.stroke();
};

const drawHour = (ctxt, endRadian) => {
  ctxt.beginPath();
  ctxt.strokeStyle = "red";
  ctxt.arc(200, 150, 80, 4.9218284906240095, endRadian);
  ctxt.stroke();
};

const clearCanvas = (ctxt, canvas) => {
  ctxt.clearRect(0, 0, canvas.width, canvas.height);
};

const drawAll = (ctxt, secondRadian, minuteRadian, hourRadian) => {
  drawHour(ctxt, hourRadian);
  drawMinute(ctxt, minuteRadian);
  drawSecond(ctxt, secondRadian);
};

const writeText = (ctxt, second, minute, hour) => {
  ctxt.font = "20px serif";
  ctxt.fillText(
    `${hour < 10 ? `0${hour}` : hour} :  ${
      minute < 10 ? `0${minute}` : minute
    } : ${second < 10 ? `0${second}` : second} `,
    155,
    155
  );
};

window.addEventListener("DOMContentLoaded", () => {
  let hour = 0;
  let minute = 0;
  let second = 0;

  var c = document.getElementById("newCanvas");
  var ctxt = c.getContext("2d");
  let secondDegree = 288;
  let minuteDegree = 288;
  let hourDegree = 288;

  let secondRadian = secondDegree * (Math.PI / 180);
  let minuteRadian = minuteDegree * (Math.PI / 180);
  let hourRadian = hourDegree * (Math.PI / 180);

  const fullCircleRadian = 11.21;

  drawAll(ctxt, secondRadian, minuteRadian, hourRadian);

  setInterval(() => {
    second += 1;
    secondDegree += 6;
    secondRadian = secondDegree * (Math.PI / 180);

    drawSecond(ctxt, secondRadian);
    if (second === 60) {
      minute += 1;
      minuteDegree += 6;
      minuteRadian = minuteDegree * (Math.PI / 180);
      drawMinute(ctxt, minuteRadian);
      if (minute === 60) {
        hour += 1;
        hourDegree += 6;
        hourRadian = hourDegree * (Math.PI / 180);
        drawHour(ctxt, hourRadian);
        minute = 0;
        minuteDegree = 282;
        minuteRadian = minuteDegree * (Math.PI / 180);
      }

      second = 0;
      secondDegree = 282;
      secondRadian = secondDegree * (Math.PI / 180);
      clearCanvas(ctxt, c);
      drawAll(ctxt, secondRadian, minuteRadian, hourRadian);
    }
    clearCanvas(ctxt, c);
    writeText(ctxt, second, minute, hour);
    drawAll(ctxt, secondRadian, minuteRadian, hourRadian);
  }, 1);
});
