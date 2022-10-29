var main = (function () {
  const mobilenav = document.getElementById("navbar-mobile");
  const rollbut = document.getElementById("rlmenu");
  mobilenav.style.height = "0";

  function Gate() {
    alert("asdasd");
  }

  rollbut.addEventListener("click", Gate, false);
})();
