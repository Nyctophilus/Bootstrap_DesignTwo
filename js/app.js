// change toggle icon in navbar
document.querySelector(".navbar-toggle").onclick = () => {
  const navbarIcon = document.querySelector(
    ".navbar-toggle i"
  );

  navbarIcon.classList.toggle("fa-toggle-on");
  navbarIcon.classList.toggle("fa-toggle-off");
};

// add class to navbar when scroll
$(function () {
  $(window).scroll(function () {
    const navbar = $(".navbar");
    if ($(window).scrollTop() >= navbar.height()) {
      if (!navbar.hasClass("scrolled"))
        navbar.addClass("scrolled");
    } else {
      navbar.removeClass("scrolled");
    }
  });

  // tabs active
  $(".tab-switch li").click(function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".tabs .tabs-content > div").hide();
    $("." + $(this).data("class")).show();
  });
});

// test when reach the navbar stick it to top

// const navbar = document.querySelector(".navbar");
// window.onscroll = () => {
//   if (navbar.offsetTop <= window.scrollY - 7) {
//     navbar.style.position = `sticky`;
//     navbar.style.top = `0`;
//   }

//   if (navbar.offsetTop < 937) {
//     navbar.style.position = `relative`;
//     navbar.style.top = `94.5vh`;
//   }
// };
