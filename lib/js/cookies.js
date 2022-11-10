const cookies = (function () {
  const CookiesBack = document.getElementById("screenms");
  const AcceptButton = document.querySelector("#cookies_accept");
  const DeclineButton = document.querySelector("#cookies_decline");

  function checkCookies() {
    if (document.cookie.includes("ckaccepted=true")) {
      CookiesBack.style.display = "none";
      // TODO Function call function who want to collect data about user
      devicedata();
    } else {
      CookiesBack.style.display = "flex";
    }
  }

  function wasAccepted() {
    document.cookie = "ckaccepted=true";
    checkCookies();
  }
  function wasDeclined() {
    window.history.back();
  }

  checkCookies();

  DeclineButton.addEventListener("click", wasDeclined);
  AcceptButton.addEventListener("click", wasAccepted);
})();
