class Student {
    constructor( name , birthYear ) {
        this.name = name;
        this.birthYear = birthYear;
    }
    getAge() {
        const date = new Date();
        return date.getFullYear() - this.birthYear
    }
    isAdult() {
        if ( this.getAge() < 18 ) {
            return "Failed , Your age is less than 18"
        } else { return " Pass !!! " };
    }
}

const myStudent = new Student ( "Ahmad" , 2003 )
 console.log( "Student age is :" + " " + myStudent.getAge() + " " + " Years old " );
console.log( myStudent.isAdult() )
