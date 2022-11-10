const devicedata = function () {
  function CollectData() {
    const device = navigator.userAgent;

    var useros = "";
    if (device.search("Windows")) {
      useros = "windows";
    } else if (device.search("Android")) {
      useros = "android";
    } else if (device.search("Mac")) {
      useros = "macos";
    } else if (device.search("Linux")) {
      useros = "linux";
    } else {
      useros = "unkown";
    }
    //Create new cookie with information about user system
    // This function is calling after the user accept cookie settings

    document.cookie = "useros=" + useros;
  }
  CollectData();
};
