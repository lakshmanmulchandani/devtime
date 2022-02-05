//How to approach??
//we will be given angle of projection and intial velocity of projectile
//we'll be changing the position of the ball in such a way that it follows a path
//given by the projectile formulas
// i.e. x= u*t*cos(θ) and y= u*t*sin(θ) + 1/2(g*t^2)
//step1- we'll grab the values of u and θ
//step2- we'll convert θ into radians by applying radians= pie*θ/180 (javascript need angle value in radians)
//step3- we'll calculate x and y positions of projectile at time t using x= u*t*cos(θ) and y= u*t*sin(θ) + 1/2(g*t^2)
//step4- we'll use a function which will change position of ball every 10 milliseconds as per x and y at that particular time
//by altering the css from the javascript

//algorithm to mark the path
//every 10ms we'll be generating a new point and giving them position using x= u*t*cos(θ) and y= u*t*sin(θ) + 1/2(g*t^2)
//these points will make a visual path for us helping  to trace the trajectory of the ball
//1.in order to make a point we'll make a div with position same as of ball at that particular instant
//2.these divs will be having permanent positions and will not move unlike the ball

function launch() {
  var u = document.getElementById("velocity").value;
  var angle = document.getElementById("angle").value;
  var ball = document.getElementById("projectile");
  var θ = (Math.PI * angle) / 180;
  var t = 0;
  const g = 9.8;
  var tmax = (2 * u * Math.sin(θ)) / g;
  var interval = setInterval(function () {
    var x = (u * t * Math.cos(θ)) / 1000;
    var y = (u * t * Math.sin(θ)) / 1000 - (0.5 * (g * t * t)) / 1000000;
    document.getElementById("position").innerHTML = x + " " + y;
    path(x, y);
    ball.style.transform = "translate(" + x * 10 + "px ," + y * -1 * 10 + "px)";
    if (t / 1000 >= tmax) {
      clearInterval(interval);
      alert(
        "the ball has come to ground!! your time of flight was " +
          t / 1000 +
          "s"
      );
    }
    t += 10;
  }, 10);
}

function path(x, y) {
  console.log(x, y);
  const path = document.createElement("div");
  path.className = "path";
  path.style.bottom = y * 10 + "px";
  path.style.left = x * 10 + "px";
  document.getElementById("container").appendChild(path);
}
