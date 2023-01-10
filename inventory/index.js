document.oncontextmenu = function () {
  return false;
};

alert("dd");

const ret = window.open(
  "./inventory.html",
  "_blank",
  "width=300, height=300, menubar=no, titlebar=no, resizable=no",
);
