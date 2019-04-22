var x = 0;
var y = 0;
var counter = 0;
var ans;
var updatex = true;
var operator = null;

function storeNumber(n) {
  if (counter>1) {
    document.getElementById('screen').innerHTML = "I don't work anymore thanks to you.";
  }
  else {
    if (operator == null) {
      x = x*10 + n;
      if (x==14) {
        document.getElementById("secret2").innerHTML = "14: The number of languages/software tools I can add to my future resume now: HTML, CSS, XML, Java, JavaScript, C, C++, Android Studio, React.js, React Native, MATLAB, CMD, UNIX, SolidWorks";
      }
      else if (x==6) {
        document.getElementById("secret1").innerHTML = "6: The number of weeks I interned at Volvo";
      }
      else if (x==5) {
        document.getElementById("secret3").innerHTML = "5: The number of projects I worked on: SPORTS, Audit Manager App (React Native), Audit Manager App (Android Studio), App Launcher, Videos";
      }
      else if(x==50) {
        document.getElementById("secret4").innerHTML = "50: The number of cups of coffee I probably drank while I was here";
      }

      document.getElementById("screen").innerHTML = x;
      updatex = true;
    }
    else
    {
      y = y*10 + n;
      document.getElementById("screen").innerHTML = y;
      updatex = false;
    }
  }
}

function oper(op) {
  if (counter>1) {
    document.getElementById('screen').innerHTML = "Didn't I tell you I was broken?!";
  }
  else {
    operator = op;
    if (x == 0)
      x = ans;
  }
}
function enter() {
  if (counter>1) {
    document.getElementById('screen').innerHTML = "I'm broken. Why are you still pressing my buttons?";
  }
  else if (y==0 && (operator == 1 || operator == 2 || operator == 3)) {
    document.getElementById("screen").innerHTML = "Are you dumb?"
  }
  else {
    switch (operator) {
      case 1:
        x+=y;
        break;
      case 2:
        x-=y;
        break;
      case 3:
        x*=y;
        break;
      case 4:
        x/=y;
        break;
      default:
        x = x + 0;
    }
    if(x==NaN || x==Infinity) {
      document.getElementById('screen').innerHTML = "I'm sorry, but why are you trying to break me?";
      counter++;
      if (counter > 1) {
        document.getElementById('screen').innerHTML = "You broke me";
      }
    }
    else {
      document.getElementById("screen").innerHTML = x;
    }
    ans = x;
    x = 0;
    y = 0;
    operator = null;
  }
}

function del() {
  if (counter>1) {
    document.getElementById('screen').innerHTML = "Leave me alone.";
  }
  else {
    if (updatex == true) {
      x = parseInt(x/10);
      document.getElementById("screen").innerHTML = x;
    }
    else {
      y = parseInt(y/10);
      document.getElementById("screen").innerHTML = y;
    }
  }
}
