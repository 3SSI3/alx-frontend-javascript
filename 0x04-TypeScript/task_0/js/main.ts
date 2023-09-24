// Interface named Student that accepts the listed elements.
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
// create 2 students, & create an array named studentsList containing two varibles

const student1: Student = {
    firstName: "Anna",
    lastName: "Laser",
    age: 10,
    location: "Mafia"
};

const student2: Student = {
    firstName: "Joe",
    lastName: "Smith",
    age: 30,
    location: "Mafia"
};

const studentsList: Student[] = [student1, student2];

//using vanilla js render a table and for each elements in the array append a new row to the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "peachpuff";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

//each row should contain the first name of the student & location
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "1px solid peachpuff";
    locationCell.style.border = "1px solid peachpuff";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);