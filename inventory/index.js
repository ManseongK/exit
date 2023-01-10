document.oncontextmenu = function () {
  return false;
};

alert("first");

document.addEventListener("keydown", function (e) {
  alert("dd");
  if (e.key === "Enter") {
    const ret = window.open("./inventory.html", "", "width=100, height=100");
  }
});

// const ret = window.open("./inventory.html", "", "width=100, height=100");
