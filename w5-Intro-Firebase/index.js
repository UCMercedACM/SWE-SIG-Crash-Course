
const firebaseConfig = {
 
  };

firebase.initializeApp(firebaseConfig);

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function close(){
  console.log(this.id)

  firebase.firestore().collection("test").doc("test").get().then((documentSnapshot) =>{
    var temp = documentSnapshot.data().toDo;
    temp.splice(this.id,1);
    firebase.firestore().collection("test").doc("test").update({toDo:temp})
  })


}

firebase.firestore().collection("test").doc("test").get().then((snapshot) => {
  var ul = document.getElementById("myUL");
  ul.innerHTML = "";
  for(var i =0; i < snapshot.data().toDo.length;i++){
    var li = document.createElement("li");
    var inputValue = snapshot.data().toDo[i].title;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);

    var BUTTON = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    
    BUTTON.className = "close";
    BUTTON.onclick = close;
    BUTTON.appendChild(txt);
    BUTTON.id = i;
    li.appendChild(BUTTON);
    
  }
});


function addTodo(){
  var task ={
    title: document.getElementById("myInput").value,
    description: "",
  }
  firebase.firestore().collection("test").doc("test").get().then((documentSnapshot) =>{
    var temp = documentSnapshot.data().toDo;
    temp.push(task);
    firebase.firestore().collection("test").doc("test").update({toDo:temp})
  })

}


