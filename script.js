const targetEl = $(".moon");
const targetEl2 = $(".moon");
var rmv = document.getElementById("moon");


$(".nxtJS").click(function () {
  rmv.classList.remove("moon");

  targetEl2.toggleClass("newmoon");
});
