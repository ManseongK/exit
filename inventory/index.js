document.oncontextmenu = function () {
  return false;
};

const ret = window.open(
  "./inventory.html",
  "",
  "width=300, height=300, menubar=no, titlebar=no, resizable=no",
);
