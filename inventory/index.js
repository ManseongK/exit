const ret = window.open(
  "./inventory.html",
  "",
  "channelmode=yes,menubar=no,status=no,titlebar=no,toolbar=no",
);

document.oncontextmenu = function () {
  return false;
};
