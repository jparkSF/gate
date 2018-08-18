let signalOn = function () {
  
  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/gateOpen.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from signalOn()')
      }
    }
  }
  so.send();
}

let signalOff = function () {
  let so = new XMLHttpRequest();
  so.open("GET", "../../utils/allPinsOff.php");
  so.onreadystatechange = function () {
    if (so.readyState == 4) {
      if (so.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from signalOff()')
      }
    }
  }
  so.send();
}

let alarmOff = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/alarmOff.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from alarmOff()')
      }
    }
  }
  ao.send();
}

let gateHold = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/gateHold.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from gateHold()')
      }
    }
  }
  ao.send();
}

let doorOpen = function () {
  let ao = new XMLHttpRequest();
  ao.open("GET", "../../utils/doorOpen.php");
  ao.onreadystatechange = function () {
    if (ao.readyState == 4) {
      if (ao.status == 200) {
      }
      else {
        // alert("HTTP ERRORS");
        console.log('HTTP ERROR from gateHold()')
      }
    }
  }
  ao.send();
}



$(document).ready(function () {
  // send signal to close gate every 10 seconds
  // setInterval(function(){
  //   signalOff();
  //   alarmOff();
  // },10000)

  $('#logout').bind('click touchstart', function (e) {
    e.preventDefault();
    
    let target = $('#logout')
    target.fadeOut();
    target.fadeIn();
    setTimeout(function(){
      window.history.go(0);  
    },700)
  })

  $('#clickON').bind('touchstart click', function (e) {
    signalOn();
    $('#clickON').addClass("btn-success").removeClass("btn-danger");
    // setTimeout(function () { signalOff(); }, 300);
    setTimeout(function () {
      // $('#clickON').prop('disabled', true);
      $('#clickON').addClass("btn-danger").removeClass("btn-success");
      // $('#clickON').prop('disabled', false);
      // alarmOff();
    }, 1000);
  })

  // $('#clickON').bind('touchstart click', function (e) {
  //   signalOn();
  //   $('#clickON').addClass("btn-success").removeClass("btn-danger");
  //   // setTimeout(function () { signalOff(); }, 300);
  //   setTimeout(function () {
  //     // $('#clickON').prop('disabled', true);
  //     $('#clickON').addClass("btn-danger").removeClass("btn-success");
  //     // $('#clickON').prop('disabled', false);
  //     // alarmOff();
  //   }, 1000);
  // })
})
