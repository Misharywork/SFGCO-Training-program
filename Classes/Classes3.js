class Employee {
    constructor(name, salary, hireYear) {
        this.name = name;
        this.salary = salary;
        this.hireYear = hireYear;
    }
    getExperience() {
        const date = new Date();
        return date.getFullYear() - this.hireYear
    }
    getAnnualSalary() {
        return this.salary * 12
    }
    isEligibleForBouns() {
        if (this.getExperience() > 5) { return " True " }
        else { return " False " }
    }
}

const emp = new Employee("Ali", 2000, 2026)

console.log(" Experience ", emp.getExperience(), " Years ");
console.log(" Annual Salary : ", emp.getAnnualSalary());
console.log(emp.isEligibleForBouns() ? "Bouns Approved" : " No Bouns ");