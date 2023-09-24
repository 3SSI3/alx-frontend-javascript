interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
}

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


//isDirector accepts employee as arg, will be used as a type predicate if empoloyee is director
export function isDirector(employee: TeacherInterface | DirectorInterface): boolean {
    return employee instanceof Director;
}
//if employee is director call workDirectorTasks & vv
function executeWork(employee: TeacherInterface | DirectorInterface): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

//string literal types

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return `Teaching Math`;
    }
    else if (todayClass === "History") {
        return `Teachin History`;
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));