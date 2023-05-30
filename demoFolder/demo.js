document.getElementById("submit1").addEventListener("click", () => {
  const xhttp = new XMLHttpRequest();
  let text = document.getElementById("inputBox").value;
  console.log(text);
  console.log("0");
  xhttp.onload = function () {
    console.log("1");
    console.log(this.responseText);
    document.getElementById("displayBox").innerHTML +=
      "123 " + this.responseText;
  };
  xhttp.open("GET", "demo.php?q=" + text);
  console.log("2");
  xhttp.send();
});
