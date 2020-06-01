(function() {
  var body = document.body;
  var html = document.documentElement;
  var id = "mouse-coord-div"
  var css = `
    #${id} {
      position: absolute;
      padding: 5px;
      background: rgba(0,0,0, 150);
      opacity: 0.5;
      color: white;
      font-weight: 600;
      z-index: 999999
    }
  `;
  var style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
  var div = document.createElement("div");
  div.id = id;
  body.appendChild(div);
  document.addEventListener("mousemove", function(e){
    var x = e.pageX;
    var y = e.pageY;
    var width = window.innerWidth;
    var height = window.innerHeight;
    div.innerHTML = "X: " + x +" Y: "+y;
    div.style.top = `${y}px`;
    if (x + 200 < width) {
      div.style.left = `${x + 25}px`;
      div.style.right = null;
    } else {
      div.style.right = `${width - x + 25}px`;
      div.style.left = null;
    }
    if (y + 100 < height) {
      div.style.top = `${y + 25}px`;
      div.style.bottom = null;
    } else {
      div.style.bottom = `${height - y + 25}px`;
      div.style.top = null;
    }
  });
})();
