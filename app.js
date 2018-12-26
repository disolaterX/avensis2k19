var countDownDate = new Date("Jan 9, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days+" DAYS"
  document.getElementById("hours").innerHTML = hours+" HOURS"
  document.getElementById("minutes").innerHTML = minutes+" MINUTES"

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("apptimer").innerHTML = "We Are Open";
  }
}, 1000);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("homefilter").style.display = "none";
    document.getElementById("homedata").style.display = "none";
    document.getElementById("btnn").style.display = "none";



  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("homefilter").style.display = "block";
    document.getElementById("homedata").style.display = "block";
    document.getElementById("btnn").style.display = "block";

  }
