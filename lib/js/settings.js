const settings = (function () {
  const settingsButton = document.querySelector("#settings");
  const resetbut = document.getElementById("reset");
  resetbut.style.display = "none";
  resetbut.style.opacity = "0";

  function DisplayBut() {
    if (resetbut.style.display == "flex") {
      resetbut.style.transition = "ease-in 300ms";
      setTimeout(() => {
        resetbut.style.opacity = "0";
        setTimeout(() => {
          resetbut.style.display = "none";
        }, 310);
      }, 300);
    } else if (resetbut.style.display == "none") {
      resetbut.style.transition = "ease-in 300ms";
      setTimeout(() => {
        resetbut.style.display = "flex";
        setTimeout(() => {
          resetbut.style.opacity = "1";
        }, 310);
      }, 300);
    }
  }
  function resetAll() {
    document.cookie = "useros=;";
    document.cookie = "ckaccepted=;";
    location.reload();
  }
  resetbut.addEventListener("click", resetAll);
  settingsButton.addEventListener("click", DisplayBut);
})();
