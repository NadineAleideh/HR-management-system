'use strict'

let allEmployee = [];
let form= document.getElementById('newEmployeeForm');
form.addEventListener('submit',addNewEmployee);

function Employee( fullName, department, level, imgUrl) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl = `./assets/imgs/${this.fullName}.png`;
    this.employeeId=0;
    this.salary=0;

    allEmployee.push(this);
   
}


Employee.prototype.generateEmpId=function () {
   
       return this.employeeId= Math.floor(Math.random() * 9000) + 1000;

}

Employee.prototype.calculateSalary = function () {

        if (this.level == "Senior") {

            this.salary = randomNumberForSalary (1500,2000);//random salary
            this.salary = this.salary - (this.salary * 0.075);//net salary
        }
        if (this.level == "Mid-Senior") {
    
            this.salary = randomNumberForSalary (1000,1500);
            this.salary = this.salary - (this.salary * 0.075);
        }
        if (this.level == "Junior") {
            
            this.salary = randomNumberForSalary (500,1000);
            this.salary = this.salary - (this.salary* 0.075);
        }
        return this.salary;
}

function randomNumberForSalary (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Employee.prototype.renderData = function () {
    
if(this.department=="Administration"){
    const container = document.getElementById('Administration');
        const divEl = document.createElement('div');
        divEl.classList.add("card");
        container.appendChild(divEl);

        const imgEl = document.createElement('img');
        imgEl.classList.add("empImg");
        divEl.appendChild(imgEl);
        imgEl.src=this.imgUrl;

        const pEl = document.createElement('p');
        pEl.classList.add("p1");
        pEl.textContent = `Name:  ${this.fullName}- ID:  ${this.employeeId}`;
        divEl.appendChild(pEl);
    
        const pE2 = document.createElement('p');
        pE2.classList.add("p2");
        pE2.textContent = `Department:  ${this.department}- Level:  ${this.level}`;
        divEl.appendChild(pE2);
    
        const pE3 = document.createElement('p');
        pE3.classList.add("p3");
        pE3.textContent = `Salary:  ${this.salary}`;
        divEl.appendChild(pE3);
    }
    if(this.department=="Marketing"){
        const container = document.getElementById('Marketing');
            const divEl = document.createElement('div');
            divEl.classList.add("card");
            container.appendChild(divEl);
    
            const imgEl = document.createElement('img');
            imgEl.classList.add("empImg");
            divEl.appendChild(imgEl);
            imgEl.src=this.imgUrl;
    
            const pEl = document.createElement('p');
            pEl.classList.add("p1");
            pEl.textContent = `Name:  ${this.fullName}- ID:  ${this.employeeId}`;
            divEl.appendChild(pEl);
        
            const pE2 = document.createElement('p');
            pE2.classList.add("p2");
            pE2.textContent = `Department:  ${this.department}- Level:  ${this.level}`;
            divEl.appendChild(pE2);
        
            const pE3 = document.createElement('p');
            pE3.classList.add("p3");
            pE3.textContent = `Salary:  ${this.salary}`;
            divEl.appendChild(pE3);
        }
        if(this.department=="Development"){
            const container = document.getElementById('Development');
                const divEl = document.createElement('div');
                divEl.classList.add("card");
                container.appendChild(divEl);
        
                const imgEl = document.createElement('img');
                imgEl.classList.add("empImg");
                divEl.appendChild(imgEl);
                imgEl.src=this.imgUrl;
        
                const pEl = document.createElement('p');
                pEl.classList.add("p1");
                pEl.textContent = `Name:  ${this.fullName}- ID:  ${this.employeeId}`;
                divEl.appendChild(pEl);
            
                const pE2 = document.createElement('p');
                pE2.classList.add("p2");
                pE2.textContent = `Department:  ${this.department}- Level:  ${this.level}`;
                divEl.appendChild(pE2);
            
                const pE3 = document.createElement('p');
                pE3.classList.add("p3");
                pE3.textContent = `Salary:  ${this.salary}`;
                divEl.appendChild(pE3);
            }
            if(this.department=="Finance"){
                const container = document.getElementById('Finance');
                    const divEl = document.createElement('div');
                    divEl.classList.add("card");
                    container.appendChild(divEl);
            
                    const imgEl = document.createElement('img');
                    imgEl.classList.add("empImg");
                    divEl.appendChild(imgEl);
                    imgEl.src=this.imgUrl;
            
                    const pEl = document.createElement('p');
                    pEl.classList.add("p1");
                    pEl.textContent = `Name:  ${this.fullName}- ID:  ${this.employeeId}`;
                    divEl.appendChild(pEl);
                
                    const pE2 = document.createElement('p');
                    pE2.classList.add("p2");
                    pE2.textContent = `Department:  ${this.department}- Level:  ${this.level}`;
                    divEl.appendChild(pE2);
                
                    const pE3 = document.createElement('p');
                    pE3.classList.add("p3");
                    pE3.textContent = `Salary:  ${this.salary}`;
                    divEl.appendChild(pE3);
                }
            
}

function addNewEmployee(event){
    event.preventDefault();
    let fullName = event.target.fullname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgUrl = event.target.imgurl.value;

    let newEmployee = new Employee(fullName,department,level,imgUrl);
    
    newEmployee .generateEmpId();
    newEmployee .calculateSalary();
    newEmployee .renderData();
}


// let employee1 = new Employee('Ghazi Samer', 'Administration', 'Senior');
// let employee2 = new Employee('Lana Ali', 'Finance', 'Senior');
// let employee3 = new Employee('Tamara Ayoub', 'Marketing', 'Senior');
// let employee4 = new Employee('Safi Walid', 'Administration', 'Mid-Senior');
// let employee5 = new Employee('Omar Zaid', 'Development', 'Senior');
// let employee6 = new Employee('Rana Saleh', 'Development', 'Junior');
// let employee7 = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior');



console.log(allEmployee);