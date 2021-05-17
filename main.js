//write your code here to make the tests pass

class Document {
    constructor(name) {
        this.EmployeeName = name;
    }
}
class Employee {
    constructor(name) {
        this.name = name
    }
    
    work(office){
        for (let i = 0; i < 10; i++) {
            let doc = new Document(this.name);
            office.documents.push(doc)

        }
    }
}
class Manager {
    constructor(name) {
        this.employees = [];
        this.name = name;

    }
    hireEmployee(name) {
        let new_employee = new Employee(name);
        this.employees.push(new_employee);
    }
     askEmployeesToWork(office) {
        this.employees.forEach(a => a.work(office));

    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log('Clean');
    }
}
class Office {

    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        let new_cleaner = new Cleaner(name);
        this.cleaners.push(new_cleaner);
    }
    hireManager(name) {
        let new_manger = new Manager(name);
        this.managers.push(new_manger);
    }
    startWorkDay() {
        this.managers.forEach(a =>  a.askEmployeesToWork(this) );
        this.cleaners.forEach(a => a.clean());
    }
    // set documents(doc)
}
