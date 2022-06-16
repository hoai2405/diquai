// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const comment = document.querySelector("#list-comment");
// const commentItem = document.querySelectorAll("#list-comment .item");
// var translateY = 0;
// var count = commentItem.length;

// next.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (count == 1) {
//     // Xem hết bình luận
//     return false;
//   }
//   translateY += -400;
//   comment.style.transform = `translateY(${translateY}px)`;
//   count--;
// });

// prev.addEventListener('click', function (event) {
//   event.preventDefault()
//   if (count == 3) {
//     // Xem hết bình luận
//     return false
//   }
//   translateY += 400
//   comment.style.transform = `translateY(${translateY}px)`
//   count++
// })

var toggle = document.querySelector("#menu-toggle");
toggle.style.display = 'none';
var menu = document.querySelector("#menu");

toggle.onclick = function () {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
