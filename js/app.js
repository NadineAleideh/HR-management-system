'use strict'

let allEmployee=[];

function Employee(employeeId,fullName,department,level,imageURL,salary){
this.employeeId=employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageURL=`./assets/imgs/${this.fullName}.png`;
allEmployee.push(this);
}

Employee.prototype.salary=function(){
    for(let i=0; i<allEmployee.length;i++){
    let min=0;
    let max=0;
    let randomSalary=0;
    let netSalary=0;

    if(allEmployee[i].level=="Senior"){
         min=1500;
         max=2000;
        min = Math.ceil(min);
        max = Math.floor(max);
       randomSalary= Math.floor(Math.random() * (max - min + 1) + min); 
       netSalary= randomSalary -(randomSalary*0.075);


    }
    if(allEmployee[i].level=="Mid-Senior"){
        min=1000;
        max=1500;
        min = Math.ceil(min);
        max = Math.floor(max);
       randomSalary= Math.floor(Math.random() * (max - min + 1) + min); 
       netSalary= randomSalary -(randomSalary*0.075);
        
    }
    if(allEmployee[i].level=="Junior"){
        min=500;
        max=1000;
        min = Math.ceil(min);
        max = Math.floor(max);
       randomSalary= Math.floor(Math.random() * (max - min + 1) + min); 
       netSalary= randomSalary -(randomSalary*0.075);
        
    }
   return netSalary;
}
}


Employee.prototype.renderData=function(){
    for(let i=0; i<allEmployee.length;i++){
        document.write(`<h3>Name:  ${allEmployee[i]['fullName']}<br> Salary:  ${allEmployee[i].salary()}</h3><hr>`);
    }
}


let employee1  = new Employee(1000,'Ghazi Samer','Administration','Senior');
let employee2 = new Employee(1001,'Lana Ali','Finance','Senior');
let employee3 = new Employee(1002,'Tamara Ayoub','Marketing','Senior');
let employee4 = new Employee(1003,'Safi Walid','Administration','Mid-Senior');
let employee5= new Employee(1004,'Omar Zaid','Development','Senior');
let employee6= new Employee(1005,'Rana Saleh','Development','Junior');
let employee7= new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior');

// employee1.salary();
// employee2.salary();
// employee3.salary();
// employee4.salary();
// employee5.salary();
// employee6.salary();
// employee7.salary();
Employee.prototype.salary();
Employee.prototype.renderData();

