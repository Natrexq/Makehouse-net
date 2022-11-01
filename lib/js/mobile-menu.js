var main = (function () {
  const mobilenav = document.getElementById("nvmob");
  mobilenav.style.height = "0%";
  const rollbut = document.getElementById("rlmenu");
  rollbut.className = "roll";

  function firstGate() {
    const screenX = window.innerWidth;
    if (screenX <= 700) {
      Gate();
    } else {
      //
    }
  }

  function Gate() {
    if (mobilenav.style.height == "0%") {
      mobilenav.style.transition = "ease-in 300ms";
      rollbut.style.transition = "ease-in 150ms";
      setTimeout(() => {
        mobilenav.style.height = "100%";

        rollbut.className = "rollaf";
      }, 310);
    } else {
      mobilenav.style.height = "0%";
      rollbut.className = "roll";
    }
  }

  var menuFunc = (function () {
    const home_sec = document.querySelector("#home_sec");
    const offer_sec = document.querySelector("#offer_sec");
    const news_sec = document.querySelector("#news_sec");
    const end_sec = document.querySelector("#end_sec");

    const homebuts = document.querySelectorAll("#gohome");
    const offerbuts = document.querySelectorAll("#gooffer");
    const newsbuts = document.querySelectorAll("#gonews");
    const contactbuts = document.querySelectorAll("#gocontact");

    for (let i = 0; i < homebuts.length; i++) {
      homebuts[i].addEventListener("click", function () {
        firstGate();
        home_sec.scrollIntoView();
      });
    }
    for (let i = 0; i < offerbuts.length; i++) {
      offerbuts[i].addEventListener("click", function () {
        firstGate();
        offer_sec.scrollIntoView();
      });
    }
    for (let i = 0; i < newsbuts.length; i++) {
      newsbuts[i].addEventListener("click", function () {
        firstGate();
        news_sec.scrollIntoView();
      });
    }
    for (let i = 0; i < contactbuts.length; i++) {
      contactbuts[i].addEventListener("click", function () {
        firstGate();
        end_sec.scrollIntoView();
      });
    }
  })();

  rollbut.addEventListener("click", Gate, false);
})();
