namespace Subjects {
    export interface Teacher {
        firstName: any;
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            const x = this.teacher.experienceTeachingC;
            if (x > 0) {
                return `Available Teacher:` + this.teacher.firstName;
            }
            else {
                return "No available teacher";
            }
        }
    }
}