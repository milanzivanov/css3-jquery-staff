// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
console.log(typeof myNodelist);

// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

Array.from(myNodelist).forEach(function(item) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
});

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
console.log(typeof Array.from(close));

// old way
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// new way
Array.from(close).forEach(function(itemClose) {
    itemClose.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
});



// experiment2 deliting item
// const list = document.querySelector("#myUL").getElementsByTagName("li");

// Array.from(list).forEach((item) => {
//     item.classList.add("delete");
//     item.classList.remove("checked");

//     // delite book
//     item.addEventListener("click", (e) => {
//         // console.log('e', e);
//         if (e.target.className === "delete") {
//             const li = e.target.parentElement;
//             console.log('li', li);
//             console.log('e', e);
//             // li.parentNode.removeChild(li);
//             li.removeChild(item);
//         }
//     });
// });


// experiment 1
// var myUl = document.getElementById("myUL");
// console.log('myUl', myUl);

// var child = myUl.getElementsByTagName("li")[0];
// console.log('child', child);

// var removed = myUl.removeChild(child);
// console.log('removed', removed);

// myUl.appendChild(removed);



// Create a new list item when clicking on the "Add" button
function newElement() {

    var li = document.createElement("li");
    console.log('li', li);
    
    var inputValue = document.getElementById("myInput").value;
    console.log('inputValue', inputValue);

    var t = document.createTextNode(inputValue);
    console.log('t', t);

    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }

    Array.from(close).forEach(function(itemClose) {
        itemClose.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    });


  }