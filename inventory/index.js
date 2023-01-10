document.oncontextmenu = function () {
  return false;
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("dd");
    const ret = window.open("./inventory.html", "", "width=100, height=100");
  }
});

// const ret = window.open("./inventory.html", "", "width=100, height=100");
