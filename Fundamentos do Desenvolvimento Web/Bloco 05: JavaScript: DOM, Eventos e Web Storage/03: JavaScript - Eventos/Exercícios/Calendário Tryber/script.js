function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

function createDaysOfTheWeek() {
  let days = document.getElementById("days")
  for (let i = 0; i < dezDaysList.length; i++) {
    let newList = document.createElement("li")

    if (dezDaysList[i] === 24 | dezDaysList[i] === 31) {
      newList.innerHTML = dezDaysList[i]
      newList.className = "day holiday"
      days.appendChild(newList)
    } else if (dezDaysList[i] === 4 | dezDaysList[i] === 11 | dezDaysList[i] === 18) {
      newList.innerHTML = dezDaysList[i]
      newList.className = "day friday"
      days.appendChild(newList)
    } else if (dezDaysList[i] === 25) {
      newList.innerHTML = dezDaysList[i]
      newList.className = "day holiday friday"
      days.appendChild(newList)
    } else {
      newList.innerHTML = dezDaysList[i]
      newList.className = "day"
      days.appendChild(newList)
    }
  }
}

createDaysOfTheWeek();

function createHolidayButton(buttonName) {
  let button = document.createElement("button")
  document.querySelector(".buttons-container")
  button.innerHTML = buttonName
  button.id = "btn-holiday"
  document.querySelector(".buttons-container").appendChild(button)
}

createHolidayButton("Feriados")

document.getElementById("btn-holiday").addEventListener("click", changeColorHolidays)

function changeColorHolidays() {
  for (let i = 0; i < document.getElementsByClassName("holiday").length; i++) {
    if (document.getElementsByClassName("holiday")[i].style.backgroundColor === "green") {
      document.getElementsByClassName("holiday")[i].style.backgroundColor = "rgb(238,238,238)"
      document.getElementsByClassName("holiday")[i].style.color = "rgb(119,119,119)"
    } else {
      document.getElementsByClassName("holiday")[i].style.color = "white"
      document.getElementsByClassName("holiday")[i].style.backgroundColor = "green"
    }
  }
}

function createFridayButton(buttonName) {
  let button = document.createElement("button")
  document.querySelector(".buttons-container")
  button.innerHTML = buttonName
  button.id = "btn-friday"
  document.querySelector(".buttons-container").appendChild(button)
}

createFridayButton("Sexta-feira")

document.getElementById("btn-friday").addEventListener("click", sextou)



function sextou() {
  let fridays = [4, 11, 18, 25]
  for (let i = 0; i < document.getElementsByClassName("friday").length; i++) {
    if (document.getElementsByClassName("friday")[i].innerText !== "Sextou!") {
      document.getElementsByClassName("friday")[i].innerText = "Sextou!"
    } else {
      document.getElementsByClassName("friday")[i].innerText = fridays[i]
    }
  }
}

function mouseOver() {
  document.querySelector("#days").addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "25px"
    event.target.style.fontWeight = "600"
  })
}

mouseOver()

function mouseOut() {
  document.querySelector("#days").addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px"
    event.target.style.fontWeight = "200"
  })
}

mouseOut()

function newTask(task) {
  let newTask = document.createElement("span")
  newTask.innerHTML = task
  document.querySelector(".my-tasks").appendChild(newTask)
}

newTask("Acordar as 4 AM")

/*function newDiv(color) {
  let newDiv = document.createElement("div")
  newDiv.className = "task"
  newDiv.style.backgroundColor = color
  document.querySelector(".my-tasks").appendChild(newDiv)
}

newDiv("green")

function selectTaskClass() {
  document.querySelector(".task").addEventListener("click", function(event) {
    if (document.getElementsByClassName("task selected").length === 0) {
      event.target.className = "task selected"}
    else { 
      event.target.className = "task"
      }
  })
}*/

/*function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
*/