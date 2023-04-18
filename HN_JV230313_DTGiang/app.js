let students = [
  {
    id: 1,
    name: "Nguyen Xuan Bach",
    email: "xuanbach@gmail.com",
    phoneNum: "0989899998",
    gender: "Nam",
    address: "eco park",
  },
];
const form = document.getElementById("mainform");
const tbody = document.getElementById("tbody");
let save = document.getElementById("save");

function renderStudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${students[i].id}">
                    <th>${i + 1}</th>
                    <td>${students[i].name}</td>  
                    <td>${students[i].email}</td>
                    <td>${students[i].phoneNum}</td>
                    <td>${students[i].address}</td>
                    <td>${students[i].gender}</td>
                    <td>
                        <button class="btn btn-edit">Edit</button>
                        <button class="btn btn-delete">Delete</button>
                    </td>
              </tr>`;
  }
}
renderStudents();

let del = document.getElementsByClassName("btn-delete");
let edit = document.getElementsByClassName("btn-edit");
let search = document.getElementById("search");
let searchName = document.getElementById("searchname");
let listAlpha = document.getElementById("listAlpha");
let confirm = document.getElementById("confirm");
let savebtn = document.getElementById("save");

form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.name.value &&
    form.email.value &&
    form.phone.value &&
    form.address.value
  ) {
    let student = {
      id: Math.floor(Math.random() * 1000000000),
      name: form.name.value,
      email: form.email.value,
      phoneNum: form.phone.value,
      address: form.address.value,
      gender: form.gender.value,
    };

    students.push(student);
    renderStudents();
    form.name.value = "";

    form.email.value = "";

    form.phone.value = "";

    form.address.value = "";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
};

tbody.onclick = function (e) {
  console.log(e.target.classList.contains("btn-delete"));
  if (e.target.classList.contains("btn-delete")) {
    e.target.parentElement.parentElement.remove();
    return;
  }

  if (e.target.classList.contains("btn-edit"));
  {
    savebtn.style.display = "none";
    confirm.style.display = "block";
    e.target.parentElement.parentElement.remove();

    let name = e.target.parentElement.parentElement.children[1].innerText;
    form.name.value = name;

    let email = e.target.parentElement.parentElement.children[2].innerText;
    form.email.value = email;

    let phone = e.target.parentElement.parentElement.children[3].innerText;
    form.phone.value = phone;

    let address = e.target.parentElement.parentElement.children[4].innerText;
    form.address.value = address;
    tbody.innerHTML = "";
    confirm.onclick = function () {
      tbody.innerHTML =
        tbody.innerHTML +
        `<tr>
                      <th>${1}</th>
                      <td>${name}</td>  
                      <td>${email}</td>
                      <td>${phone}</td>
                      <td>${address}</td>
                    
                      
                      <td>
                          <button class="btn btn-edit">Edit</button>
                          <button class="btn btn-delete">Delete</button>
                      </td>
                </tr>`;
    };
  }
};

search.onclick = function () {
  console.log(searchName.value);
  for (i = 0; i < students.length; i++) {
    console.log(students[i].name);
    if (searchName.value === students[i].name) {
      tbody.innerHTML = `<tr id="${students[i].id}">
      <th>${i + 1}</th>
      
      <td>${students[i].name}</td>  
      <td>${students[i].email}</td>
      <td>${students[i].phoneNum}</td>
      <td>${students[i].address}</td>
      <td>${students[i].gender}</td>
      <td>
          <button class="btn btn-edit">Edit</button>
          <button class="btn btn-delete">Delete</button>
      </td>
</tr>`;
      console.log(students[i]);
    }
    if (searchName.value != students[i].name) {
      console.log("Khong tim thay");
    }
  }
};

listAlpha.onclick = function () {
  students.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  console.log(students);
};
