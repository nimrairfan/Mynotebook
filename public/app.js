
function addbtn(){
    var notes = document.getElementById("notes")
    var title = document.getElementById("title").value
    var detail = document.getElementById("addTxt").value
    

if (title === "" && detail === "" ){
    alert("Nothing to show! Write any Note ")
}else {
    notes.innerHTML += `<div class="card maincard" id="myUL" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" id="title">Title :<br> ${title}</h5>
      <p class="card-text">Note : <br> ${detail}</p>
      <button class="btn btn-warning" onclick="del(this)"> Delete</button>
    </div>
  </div>`;

}
document.getElementById("title").value = ""
document.getElementById("addTxt").value = ""

}
function delAll(){
    notes.innerHTML = ""
}
function del(e){
    e.parentNode.remove();
    
}

  