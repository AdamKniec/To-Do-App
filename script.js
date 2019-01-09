
var ourList = document.getElementById("ourList");
//Function responsible for creating new list elements after clicking enter
taskName.addEventListener("keydown", keyDownAddItem, false);
function keyDownAddItem(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        createItem();
    }
}
//Function responsible for adding new list elements after clicking the button
button.addEventListener("click", createItem);
function createItem() {
    var button = document.getElementById("button");
    var taskName = document.getElementById("taskName");
    var li = document.createElement("li");
    var t = document.createTextNode(taskName.value);
    var counterValue = document.getElementById("counterValue");    
    // Adding new list elements and simple validation
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
    // Creating an icon responsible for deleting the list record
    var mySpan = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    mySpan.className = "close";
    mySpan.appendChild(txt);
    li.appendChild(mySpan);
    deleteListItem(this);
    // Adding class responsible for animating the list item addition
    setTimeout(function() {
        li.className = li.className + " show";
      }, 10);
}
// Deleting and counting li elements
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
    if (e.target.nodeName = "LI") {
        var childrenLength = e.target.parentNode.children.length;
        for (i = 0; i < childrenLength; i++) {
             e.target.parentNode.children[i].classList.remove("activatedItem");
}
    e.target.classList.add("activatedItem");
    }
}
// Adding date and time
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
  