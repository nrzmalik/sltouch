window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var xDown = null;
var yDown = null;
var player = GetPlayer();
player.SetVar("swipeLeft",false);
document.addEventListener('touchstart', function(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xDiff = xDown - event.touches[0].clientX;
  var yDiff = yDown - event.touches[0].clientY;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
    
      // swipe left detected
      // do something here
        
        player.SetVar("swipeLeft",true);
        player.SetVar("swipeLeft",false);
    }
    xDown = null;
    yDown = null;
  }
}, false);

document.addEventListener('touchend', function(event) {
  xDown = null;
  yDown = null;
}, false);

}

window.Script2 = function()
{
  var player = GetPlayer();
player.SetVar("swipeRight",false);
var xDown = null;
var yDown = null;

document.addEventListener('touchstart', function(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xDiff = xDown - event.touches[0].clientX;
  var yDiff = yDown - event.touches[0].clientY;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff < 0) {
     
      // swipe right detected
      // do something here
        
        player.SetVar("swipeRight",true);
        player.SetVar("swipeRight",false);
     
    }
    xDown = null;
    yDown = null;
  }
}, false);

document.addEventListener('touchend', function(event) {
  xDown = null;
  yDown = null;
}, false);

}

window.Script3 = function()
{
  var xDown = null;
var yDown = null;
var player = GetPlayer();
player.SetVar("swipeUp",false);
document.addEventListener('touchstart', function(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xDiff = xDown - event.touches[0].clientX;
  var yDiff = yDown - event.touches[0].clientY;

  if (Math.abs(xDiff) < Math.abs(yDiff)) {
    if (yDiff > 0) {
    
      // swipe up detected
      // do something here
       
        player.SetVar("swipeUp",true);
        player.SetVar("swipeUp",false);
    }
    xDown = null;
    yDown = null;
  }
}, false);

document.addEventListener('touchend', function(event) {
  xDown = null;
  yDown = null;
}, false);

}

window.Script4 = function()
{
  var xDown = null;
var yDown = null;
var player = GetPlayer();
player.SetVar("swipeDown",false);
document.addEventListener('touchstart', function(event) {
  xDown = event.touches[0].clientX;
  yDown = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
  if (!xDown || !yDown) {
    return;
  }

  var xDiff = xDown - event.touches[0].clientX;
  var yDiff = yDown - event.touches[0].clientY;

  if (Math.abs(xDiff) < Math.abs(yDiff)) {
    if (yDiff < 0) {
    
      // swipe down detected
      // do something here
         
        player.SetVar("swipeDown",true);
        player.SetVar("swipeDown",false);
      
    }
    xDown = null;
    yDown = null;
  }
}, false);

document.addEventListener('touchend', function(event) {
  xDown = null;
  yDown = null;
}, false);

}

};
