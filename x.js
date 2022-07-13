let addbtn = document.getElementById("add-btn");
let addTitle = document.getElementById("note-title");
let addTxt = document.getElementById("note-text");
addbtn.addEventListener("click", (e) => {
    if (addTitle.value == "") {
        alert("enter sone title");
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    };
    notesobj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTitle.value = "";
    addTxt.value = "";
    show();
});
function show() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div id = "note">
        <p class = "count"> note ${index + 1} </p>
        <p class = "optitle"> ${element.title} </p>
        <p class="optext"> ${element.text} </p><br>
        <button id = "${index}" onclick = "del(this.id)" class = "delete"> Delete </button>
        <button id = "${index}" onclick = "edit(this.id)" class = "editnote">Edit </button>     
        <p id = "dat"></p>
        </div>
        `;
    });
    let noteelement = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteelement.innerHTML = html;
    }
    else {
        noteelement.innerHTML = "nothing yet";
    }
    let date = new Date();
    var h = date.getHours();
    var m = date.getminutes();
    var s = date.getseconds();
    var d = date.getDate();
    document.getElementById("dat").innerHTML = h + m + s + d;

}
function del(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    show();
}
function edit(index) {
    let notes = localStorage.getItem("notes");
    if (addtitle.value != "" || addtxt.value1 == "") {
        alert("enter something");
    }
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.findindex((element, index) => {
        addtitle.value = element.title;
        addtxt.value = element.text;
    })
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    show();
}
show();