document.getElementById("container").style.backgroundColor = "pink"

document.getElementById("header-container").style.backgroundColor = "green"

document.getElementById("footer-container").style.backgroundColor = "black"

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "yellow"

document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "red"

let h3 = document.getElementsByTagName("h3").length
for (let i = 0; i < h3; i++) {
  document.getElementsByTagName("h3")[i].style.backgroundColor = "black"
}

