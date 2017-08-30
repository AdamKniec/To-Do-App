
var ourList = document.getElementById("ourList");
//Tworzymy funkcję odpowiedzialną za dodawanie nowych elementów listy (po kliknięciu na Enter)
taskName.addEventListener("keydown", keyDownAddItem, false);
function keyDownAddItem(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        createItem();
    }
}
//Tworzymy funkcję odpowiedzialną za dodawanie nowych elementów listy (po kliknięciu na button)
button.addEventListener("click", createItem);
function createItem() {
    //deklarowanie zmiennych
    var button = document.getElementById("button");
    var taskName = document.getElementById("taskName");
    var li = document.createElement("li");
    var t = document.createTextNode(taskName.value);
    var counterValue = document.getElementById("counterValue");    
    //Dodawanie nowego elementu listy. W przypadku braku wartości wyświetlamy komunikat
    li.appendChild(t);
    if (taskName.value == null || taskName.value.trim() == "") {
        taskName.style.border = "2px solid red";
    } else {
        document.getElementById("ourList").appendChild(li);
        var listSize = li.parentNode.children.length;
        for (var i = 0; i < listSize; i++) {
            counterValue.textContent = " " + li.parentNode.children.length;
        }
        taskName.style.border = "";
      }
    document.getElementById("taskName").value = "";
    //Tworzymy ikonkę, która po kliknięciu będzie usuwać element listy, w którym się znajduje
    var mySpan = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    mySpan.className = "close";
    mySpan.appendChild(txt);
    li.appendChild(mySpan);
    deleteListItem(this);
    //ANIMOWANIE DODAWANIA ELEMENTU LISTY
    setTimeout(function() {
        li.className = li.className + " show";
      }, 10);
}
//FUNCTION RESPONSIBLE FOR DELETING THE LI ELEMENT AND COUNTING THE LI ELEMENTS
function deleteListItem () {
    var close = document.getElementsByClassName("close");
    var closeLength = close.length;
    for (i = 0; i < closeLength; i++) {
      close[i].onclick = function() {
        this.parentElement.remove();
        counterValue.textContent = close.length;
      } 
    }
}
// Function allowing to clear the whole app
document.getElementById("clearAllButton").addEventListener("click", clearAll);
function clearAll () {
    if (confirm("Are you sure?") == true) {
        ourList.innerHTML = "";
        counterValue.textContent = " " + 0;
    }
}
// Function allowing to select the particular list item
ourList.addEventListener("click", activateItem);
function activateItem(e) {
    // var header = document.getElementById("header");
    if (e.target.nodeName = "LI") {
        // header.innerHTML = e.target.innerHTML;
        var childrenLength = e.target.parentNode.children.length;
        for (i = 0; i < childrenLength; i++) {
             e.target.parentNode.children[i].classList.remove("activatedItem");
}
    e.target.classList.add("activatedItem");
    }
}
//DATA I GODZINA
(function showMeTheDateAndTime() {
    var date = new Date();
    var dayToday = date.getDay();
    var month = date.getMonth();
    var dayInMonth = date.getDate();
    var year = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthsInYear = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
    if (s<10) {
       s="0"+s;
        }
    if (m<10) {
         m="0"+m;
    }
    document.getElementById("date").innerHTML = (week[dayToday] + " " + monthsInYear[month] + " " + dayInMonth + "." + " " + year);
    document.getElementById("time").innerHTML = (h + ":" + m + ":" + s);
    window.setTimeout(showMeTheDateAndTime, 500);
  })();
  