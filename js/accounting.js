'use strict'

let allEmployee=[];

let eachDepartment={
    countAdministration:0,
    countMarketing:0,
    countDevelopment:0,
    countFinance:0,
    salaryAdministration:0,
    salaryMarketing:0,
    salaryDevelopment:0,
    salaryFinance:0,
    avgAdministration:0.0,
    avgMarketing:0.0,
    avgDevelopment:0.0,
    avgFinance:0.0,
    totalEmployees:0,
    totalSalary:0,
    totalAvgSalary:0.0
};



function getEmployee(){
    let allEmployeeJson= localStorage.getItem('allEmployee');
    let allEmployeeFromStorage= JSON.parse(allEmployeeJson);
     allEmployee=allEmployeeFromStorage;
} 

getEmployee()
infoEechDepartment()
console.log('new',allEmployee);
console.log(eachDepartment);




function render(){

    // getEmployee()

    if(allEmployee == null){
        allEmployee = [];
    }  

let thead = document.getElementById('thead');
let trEl = document.createElement('tr');
thead.appendChild(trEl);

let thEl1 = document.createElement('th');
thEl1.textContent = "Department";
trEl.appendChild(thEl1);

let thEl2 = document.createElement('th');
thEl2.textContent = "# of Employee";
trEl.appendChild(thEl2);

let thEl3 = document.createElement('th');
thEl3.textContent = "Total Salary";
trEl.appendChild(thEl3);

let thEl4 = document.createElement('th');
thEl4.textContent = "Average";
trEl.appendChild(thEl4);

let tbody = document.getElementById('tbody');
//Row of Administration department
    let trEl1 = document.createElement('tr');
    tbody.appendChild(trEl1);

    let tdEl1 = document.createElement('td');
    tdEl1.textContent = "Administration";
    trEl1.appendChild(tdEl1);

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = eachDepartment.countAdministration;
    trEl1.appendChild(tdEl2);

    let tdEl3 = document.createElement('td');
    tdEl3.textContent = eachDepartment.salaryAdministration;
    trEl1.appendChild(tdEl3);

    let tdEl4 = document.createElement('td');
    tdEl4.textContent = eachDepartment.avgAdministration;
    trEl1.appendChild(tdEl4);

    //Row of Marketing department
    let trEl2 = document.createElement('tr');
    tbody.appendChild(trEl2);

    let tdEl5 = document.createElement('td');
    tdEl5.textContent = "Marketing";
    trEl2.appendChild(tdEl5);

    let tdEl6 = document.createElement('td');
    tdEl6.textContent = eachDepartment.countMarketing;
    trEl2.appendChild(tdEl6);

    let tdEl7 = document.createElement('td');
    tdEl7.textContent = eachDepartment.salaryMarketing;
    trEl2.appendChild(tdEl7);

    let tdEl8 = document.createElement('td');
    tdEl8.textContent = eachDepartment.avgMarketing;
    trEl2.appendChild(tdEl8);


    //Row of Development department
    let trEl3 = document.createElement('tr');
    tbody.appendChild(trEl3);

    let tdEl9 = document.createElement('td');
    tdEl9.textContent = "Development";
    trEl3.appendChild(tdEl9);

    let tdEl10 = document.createElement('td');
    tdEl10.textContent = eachDepartment.countDevelopment;
    trEl3.appendChild(tdEl10);

    let tdEl11 = document.createElement('td');
    tdEl11.textContent = eachDepartment.salaryDevelopment;
    trEl3.appendChild(tdEl11);

    let tdEl12 = document.createElement('td');
    tdEl12.textContent = eachDepartment.avgDevelopment;
    trEl3.appendChild(tdEl12);

    //Row of Finance department
    let trEl4 = document.createElement('tr');
    tbody.appendChild(trEl4);

    let tdEl13 = document.createElement('td');
    tdEl13.textContent = "Finance";
    trEl4.appendChild(tdEl13);

    let tdEl14 = document.createElement('td');
    tdEl14.textContent = eachDepartment.countFinance;
    trEl4.appendChild(tdEl14);

    let tdEl15 = document.createElement('td');
    tdEl15.textContent = eachDepartment.salaryFinance;
    trEl4.appendChild(tdEl15);

    let tdEl16 = document.createElement('td');
    tdEl16.textContent = eachDepartment.avgFinance;
    trEl4.appendChild(tdEl16);
    
    //Row of ToTal
    let trEl5 = document.createElement('tr');
    tbody.appendChild(trEl5);

    let tdEl17 = document.createElement('td');
    tdEl17.textContent = "Total";
    trEl5.appendChild(tdEl17);

    let tdEl18 = document.createElement('td');
    tdEl18.textContent = eachDepartment.totalEmployees;
    trEl5.appendChild(tdEl18);

    let tdEl19 = document.createElement('td');
    tdEl19.textContent = eachDepartment.totalSalary;
    trEl5.appendChild(tdEl19);

    let tdEl20 = document.createElement('td');
    tdEl20.textContent = eachDepartment.totalAvgSalary;
    trEl5.appendChild(tdEl20);

}


function infoEechDepartment(){
    
    for(let i=0; i<allEmployee.length; i++){
        if(allEmployee[i].department=="Administration"){
           
            eachDepartment.countAdministration+=1;
            eachDepartment.salaryAdministration+=Math.floor(allEmployee[i].salary);

            
        }

        if(allEmployee[i].department=="Marketing"){
            eachDepartment.countMarketing+=1;
            eachDepartment.salaryMarketing+=Math.floor(allEmployee[i].salary);
            
        }

        if(allEmployee[i].department=="Development"){
            eachDepartment.countDevelopment+=1;
            eachDepartment.salaryDevelopment+=Math.floor(allEmployee[i].salary);
            
        }

        if(allEmployee[i].department=="Finance"){
            eachDepartment.countFinance+=1;
            eachDepartment.salaryFinance+=Math.floor(allEmployee[i].salary);
                       
        }

    }
   
    eachDepartment.avgAdministration= eachDepartment.salaryAdministration/eachDepartment.countAdministration;
    eachDepartment.avgMarketing= Math.floor(eachDepartment.salaryMarketing/eachDepartment.countMarketing);
    eachDepartment.avgDevelopment= Math.floor(eachDepartment.salaryDevelopment/eachDepartment.countDevelopment);
    eachDepartment.avgFinance= Math.floor(eachDepartment.salaryFinance/eachDepartment.countFinance);

    eachDepartment.totalEmployees= eachDepartment.countAdministration + eachDepartment.countMarketing + eachDepartment.countDevelopment +eachDepartment.countFinance;
    eachDepartment.totalSalary= eachDepartment.salaryAdministration + eachDepartment.salaryMarketing +  eachDepartment.salaryDevelopment + eachDepartment.salaryFinance;
    eachDepartment.totalAvgSalary= Math.floor((eachDepartment.avgAdministration + eachDepartment.avgMarketing + eachDepartment.avgDevelopment + eachDepartment.avgFinance)/eachDepartment.totalEmployees);

    return eachDepartment;
}



render()
