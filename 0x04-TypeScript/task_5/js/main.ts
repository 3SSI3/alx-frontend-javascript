//Each interface defines a number named credits
//Add a brand property to each interface in order to uniquely identify each of them
interface MajorCredits {
    credits: number;
    brand: 'void';
}

interface MinorCredits {
    credits: number;
    brand: 'void'
}

//Each function takes two arguments subject1 and subject2
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2:MinorCredits) {
    return subject1.credits + subject2.credits;
}