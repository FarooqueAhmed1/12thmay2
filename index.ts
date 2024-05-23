// forEach
// const names = [`Anas`, `Sajid`,`Nasoo`,`Farooque`]
// const processedName =names.forEach((name:string)=> name+"processed")
// console.log(processedName);

// map
// const names = [`Anas`, `Sajid`,`Nasoo`,`Farooque`]
// const processedName =names.map((name:string)=> name+"processed")
// console.log(processedName);

// join
// const names = [`Anas`, `Sajid`,`Nasoo`,`Farooque`,`danish`]
// const processedName =names.join('SHEIKH')
// console.log(processedName)


// Split
// const names = "Anas-Sajid-Nasoo-Farooque"
// const processedName =names.split('-')
// console.log(processedName)


// Count Sentence words
// const para = "My name is Sajid Rajper"
// console.log(para.split(" ").length)


// // Convert sentence into words
// const para = "My name is Sajid Rajper"
// console.log(para.split(" "))


// Concat
// let students = ['Fahad','Sajid']
// let newStudents = ['Hamza','Farooque']
// let updatedStudents = students.concat(newStudents)
// console.log(updatedStudents)

// Flat
// let students = ['Ali','Bilal',['Shuja','Qurban']]
// console.log(students.flat())


// let students = ['Ali','Bilal',['Shuja','Qurban',['Sajid','Nasir']]]
// console.log(students.flat())


// Object => means print all thing in one command like name,age ETC
// const student = {
//    name:"Abdullah",
//    stdId: "83987",
//    fatherName: "Gaffar",
//    age: 21,
// }
// // console.log(students)
// console.log(student.stdId)
// console.log(student["name"])



// console.log(student["father.Name"])    //<= for special character we use square brackets just like for "Dot", "Space" ETC


// console.log(student.qualification.grade)
// console.log(student['qualification']['grade'])
// console.log(student["qualification"].grade)
// console.log(student.qualification["result"])

// Sajid Practice
// let a=[`sajid`,`farooque`]
// console.log(a.join(`Rajper`))












// 19th May Practice

// Arrow Function
// function checkSalary(salary) {
//     return.salary > 50000
// }
// (salary) => salary > 50000;

// let a = {
//     name: '',
//     fatherName: '',
//     studentId: ''
// }
// let b = {
//     name: '',
//     fatherName: '',
//     age: ''
// }

interface Employee {
    employeeId: number;
    employeeName: string;
    salary: number;
}
let collectionofEmployee: Employee[] = [
    {
        employeeId: 83943,
        employeeName: "Ali Sheikh",
        salary: 105000
    },
    {
        employeeId: 174005,
        employeeName: "Sajid Rajper",
        salary: 95000
    },{
        employeeId: 117923,
        employeeName: "Salam Sheikh",
        salary: 75000
    },
];
// let filteredDatabySalaryRange = collectionofEmployee.filter();

// Arrow Function
// let filterBySalary = collectionofEmployee.filter((employee) => employee.salary > 50000);
// let filterBySalaryId = collectionofEmployee.filter((employee: Employee)=> employee.employeeId == 83943)
// // let filterBySalaryName = collectionofEmployee.filter((employee: Employee)=> employee.employeeName == "Sajid")
// collectionofEmployee[0].employeeName.includes
let filterBySalaryName = collectionofEmployee.filter((employee: Employee)=> employee.employeeName.includes("Sajid"))
// Basic Arrow funtion code
// function filterBySalary(employee: Employee){
//     return employee.salary > 50000;
// }
// (employee) => employee.salary > 50000;
