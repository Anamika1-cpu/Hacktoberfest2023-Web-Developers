let switchh = document.getElementById("button");

switchh.addEventListener("click", () => {
    if (switchh.checked === true) {
      document.body.style.backgroundColor = "#FDE2F3";
    } else {
      document.body.style.backgroundColor = "#2A2F4F";
    }

});