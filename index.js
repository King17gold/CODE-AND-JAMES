 


function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("userBalanceText").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("userBalanceText").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
