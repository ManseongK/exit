document.oncontextmenu = function () {
  return false;
};

const ret = window.open(
  "./inventory.html",
  "_blank",
  "fullscreen=yes, width=300, height=300, menubar=no, titlebar=no, resizable=no",
);
