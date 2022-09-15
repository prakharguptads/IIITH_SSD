function ValidateEmail(mail) 
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mail.value.match(mailformat))
  {
    return (true)
  }
    alert("Invalid Email Address")
    return (false)
}
function Validate() {
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
function ValidateAll()
{
    Validate();
    if(document.getElementById("mname").value=="")
    alert("Enter Manager Name")
    else if(document.getElementById("username").value=="")
    alert("Enter Username")
    else
    alert("Email : "+document.getElementById("mail").value+
    "\nManager Name : "+document.getElementById("mname").value+
    "\nTeam Lead : "+document.getElementById("lead").value+
    "\nTeam Member : "+document.getElementById("list1").value)
}
document.body.addEventListener("keydown", function (ev) {
    ev = ev || window.event;
    var key = ev.which || ev.keyCode;
    var ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17)
        ? true : false);
    if (key == 77 && ctrl) {
        document.body.style.backgroundColor = 'black';
    }
}, false);
function userValid()
{
  var n,u,i=0;
  var user=document.getElementById("username");
  console.log(user);
  while (i <= user.length){
    character = users.charAt(i);
    if (!isNaN(character * 1)){
        n=1;
    }
        if (character == character.toUpperCase()) {
            u=1;
        }
    i++;
    return true;
}
if(u==0 || n==0)
alert("invalid Username")
}
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }
  
  function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
  }