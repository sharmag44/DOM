function addRow() {
  // get Value from name,email,password
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  //Table id
  let myTable = document.querySelector("#mytable");
  //create table row
  let tr = document.createElement("TR");

  //update button
  let edit = document.createElement("BUTTON");
  let editText = document.createTextNode("Update");
  edit.classList.add("btn");
  edit.classList.add("btn-success");
  edit.appendChild(editText);
  //delete button
  let deleteButton = document.createElement("BUTTON");
  let deleteText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteText);
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.setAttribute("onclick", function (row) {
    document.getElementById("mytable").remove(row);
  });
  // create td
  tr.insertCell(0).innerHTML = name;
  tr.insertCell(1).innerHTML = email;
  tr.insertCell(2).innerHTML = pass;
  // create td for update and delete button
  tdOne = document.createElement("td");
  tdOne.append(edit);
  tdTwo = document.createElement("td");
  tdTwo.append(deleteButton);
  // and append it on the last
  tr.append(tdOne);
  tr.append(tdTwo);
  myTable.append(tr);

  // delete row
}
