const Grade = new Map([
    ['Ali', 89],
    ['Mohammed', 93],
    ['Khaled', 95],
    ['Ahmad', 83],
    ['Saleh', 72],
    ['Ibrahim',68]
]);
Grade.set('Hamad',99)

function printGrades(gradesMap) {
    gradesMap.forEach(function(value, key){
        console.log(key + ' : ' + value);

    });
}

printGrades(Grade);

console.log("=============================")

function printhighestgrade() {
    let max = -Infinity;
    let topstudent = "";

    Grade.forEach(function(value, key){
        if (value > max) {
            max = value;
            topstudent = key;
        }
    })

console.log('Highest grade :'+ max);
console.log('Student: ' + topstudent);

}

printhighestgrade();

console.log("=============================")

function printlowestgrade() {
    let min = Infinity;
    let lowstudent = '';

    Grade.forEach(function(value, key){
        if (value < min){
            min = value;
            lowstudent = key;

        }
    })

console.log('LowestGrade: ' + min + '  --->  Student : ' + lowstudent);

}

printlowestgrade();

console.log("=============================")

function comparetwostudent(name1, name2) {
    if (!Grade.has(name1) || !Grade.has(name2)) {
        console.log( ' ONE OF THE STUDENT IT DOSEN`T HERE ' )
        return;
    }

let g1 = Grade.get(name1);
let g2 = Grade.get(name2);

if (g1 > g2) {
    console.log(name1 + " Highest Grade Than " + name2);
    } else if (g2 > g1) {
        console.log(name2 + " Best Grade Than  " + name1); 
    } else {
        console.log(' The Grade Is =EQUAL= ')

    }


}

comparetwostudent('Hamad', 'Ibrahim')

console.log("=============================")

function printpassfail(passmark) {
    Grade.forEach(function(value, key){
        if (value >= passmark) {
            console.log(" Pass : " + key);
        } else {
            console.log(" Fail : " + key);
        }
    });
}

printpassfail(65);

console.log("=============================")

function printsortedgrade() {
    let arr = Array.from(Grade);

    arr.sort(function(a, b){
        return b[1] - a[1];
    });

    arr.forEach(function(item){
        console.log(item[0] + " : " + item[1]);

    });
}

printsortedgrade();