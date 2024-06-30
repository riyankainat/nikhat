gsap.to("#pho img", {
    xpercent: -100,
    //x:"90vw",
    duration:10,
    repeat:-1,
    yoyo:true,
    ease:"linear",
   //ease:"power1.inOut"
   xPercent: gsap.utils.wrap(-100, 0)
   
})
const bgm = document.getElementById('bgm');
    bgm.play();

    var love = document.querySelector("nav h3")


  var menu = document.querySelector("button");
  var full = document.querySelector("#full");

// var flag = 0;
// menu.addEventListener("click", function() {
//   if (flag == 0) {
//     full.style.top = "0";
//     menu.style.color = "#111";
//     menu.innerHTML = `<i class="ri-close-large-line"></i>`;
//     flag = 1;
//   } else {
//     full.style.top = "-40%";
//     menu.style.color = "#111";
//     menu.innerHTML = `<i class="ri-menu-line"></i>`;
//     flag = 0;
//   }
// });
