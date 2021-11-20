const save = () => {
    try {
        let EmployeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(EmployeePayrollData);
    }catch (e) {
        return;
    }
}

function createAndUpdateStorage(EmployeePayrollData) {
    let new_EmpPayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(EmployeePayrollList !=undefined){
        EmployeePayrollList.push(EmployeePayrollData);
    }else{
        EmployeePayrollList.push(EmployeePayrollData);
    }
    alert(EmployeePayrollList.tostring());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(EmployeePayrollList))
}