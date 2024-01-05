let x = () => {
  let future_time = new Date("Dec 31 2024, 12:00:00").getTime();

  let current_time = new Date().getTime();

  let Time = future_time - current_time;

  let day = Math.floor(Time / 1000 / 60 / 60 / 24);

  let hour = Math.floor(Time / 1000 / 60 / 60) % 24;
  let min = Math.floor(Time / 1000 / 60) % 60;
  let Sec = Math.floor(Time / 1000) % 60;

  document.getElementById('time').innerHTML =day+ " Day "+ hour+" hour "+min+" min "+Sec+" sec "
   
};

x();
setInterval(x, 1000);
