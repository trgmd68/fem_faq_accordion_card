var acc = document.getElementsByClassName("accordion__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* activeItems = document.getElementsByClassName("active");
    if (activeItems.length) {
      activeItems[0].nextElementSibling.style.display = "none";
      activeItems[0].classList.toggle("active");
    }
     */ /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */ this.classList.toggle(
      "active"
    );

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
