let studentData = [];
const addButton = document.querySelector('#add');


addButton.addEventListener('click', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const gpa = document.querySelector('#GPA').value;
  const age = document.querySelector('#age').value;
  const degree = document.querySelector('#degree').value;

 
  const newID = studentData.length + 1;

 
  const newStudent = {
    ID: newID,
    name: name,
    email: email,
    age: age,
    grade: gpa,
    degree: degree
  };

 
  studentData.push(newStudent);


  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#GPA').value = '';
  document.querySelector('#age').value = '';
  document.querySelector('#degree').value = '';

  displayStudentData();
});

function displayStudentData() {
    let lastElement = studentData[studentData.length - 1];
    const table = document.querySelector('#table');
    const tbody = document.querySelector('#tbody');
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");


    td.textContent = lastElement.ID;
    td1.textContent = lastElement.name;
    td2.textContent = lastElement.email;
    td3.textContent = lastElement.age;
    td4.textContent = lastElement.grade;
    td5.textContent = lastElement.degree;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    td6.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    td7.appendChild(deleteButton);

    deleteButton.addEventListener('click', function (event) {
        const index = studentData.findIndex((student) => student.ID === lastElement.ID);
        studentData.splice(index, 1);
        tbody.removeChild(tr);
    });
    
   
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tbody.append(tr);     
}

const searchFun = () => {
    const filter = document.getElementById("searchterm").value.toUpperCase();
    const table = document.querySelector('#table');
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName("td")[0];
  
      if (cells) {
        const textValue = cells.textContent || cells.innerHTML;
  
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    }
  }
 
  
  

  


