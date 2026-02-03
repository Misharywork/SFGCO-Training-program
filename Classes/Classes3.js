
class Employee {
    constructor(name, salary, hireYear) {
        this.name = name;
        this.salary = salary;
        this.hireYear = hireYear;
    }
    getExperience() {
        const Date = new Date();
        return Date.getFullYear() - this.hireYear
    }
    getAnnualSalary() {
        return this.salary * 12
    }
    isEligibleForBouns() {
        if (this.getExperience > 5) { return " True " }
        else { return " False " }
    }
}

const emp = new Employee(
    { "Ali" , 8000, 2018 },
    { "Mohammed", 9500 , 2017 },
    { "Jaber" , 13423 , 2005 },
)

console.log(" Experience ", emp.getExperience(), " Years ");
console.log(" Annual Salary : ", emp.getAnnualSalary());
console.log(emp.isEligibleForBouns() "Bouns Approved" : " No Bouns ");