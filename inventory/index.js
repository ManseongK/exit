const ret = window.open("./inventory.html", "_parent", "resizable=yes");

document.oncontextmenu = function () {
  return false;
};
