//firstname(string) & lastname(string) should only be modifiable when a teacher is first initialized.
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    contract: boolean;
    [propName: string]: any;
}

//interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
interface Directors extends Teacher {
    numberOfReports: number;
}
//printing teacher
interface printTeacherfunction {
    (firstName: string, lastName: string): string;
}
//accepts 2 args, returns 1st letter of the firstname & lastname
const printTeacher: printTeacherfunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}}`;
};

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
};

export { printTeacher, StudentClass} ;