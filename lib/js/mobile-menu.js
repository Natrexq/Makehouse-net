var main = (function () {
  const mobilenav = document.getElementById("nvmob");
  mobilenav.style.height = "0%";
  const rollbut = document.getElementById("rlmenu");

  function Gate() {
    if (mobilenav.style.height == "0%") {
      mobilenav.style.transition = "ease-in 300ms";
      setTimeout(() => {
        mobilenav.style.height = "100%";
      }, 310);
    } else {
      mobilenav.style.height = "0%";
    }
  }

  rollbut.addEventListener("click", Gate, false);
})();
