// const maximumgrade = 500;

// const student = [
// {name : "ali", grade : 499 }, 
// {name : "Mohammed", grade : 430 },
// {name : "hamad", grade : 389 },
// {name : "ahmad", grade : 372 },
// {name : "khaled", grade : 437 },
// {name : "mishary", grade : 389 },
// {name : "ibrahim", grade : 412 },
// ]

// console.log(student[1])

// student.map(e=>{

//     console.log(e.name + " Grade = " + e.grade + ' % ' + (e.grade / maximumgrade )*100 )
// })

const student = [
    {name : 'Mohammed', grade : 99},
    {name : 'Ahmad', grade : 72},
    {name : 'Khaled', grade : 78},
    {name : 'Saber', grade : 83},
    {name : 'Rayan', grade : 92},
    {name : 'Mishary', grade : 61},
    {name : 'Hussam', grade : 88},
    {name : 'Ibrahim', grade : 60},
    {name : 'Gamal', grade : 56},
]
 student.forEach(student => {
let letter;

if ( student.grade >= 95 ) 
    { letter = 'A+'; }
  else if (student.grade >= 90) 
    { letter = 'A' }
  else if ( student.grade >= 85)
    { letter = 'B+' }
  else if ( student.grade >= 80 )
    { letter = 'B' }
  else if ( student.grade >= 75 )
    { letter = 'C+' }
  else if ( student.grade >= 70 )
    { letter = 'C' }
  else if ( student.grade >= 65 )
    { letter = 'D+' }
  else if ( student.grade >= 60 )
    { letter = 'D' }
  else { letter = 'F' }

console.log ( student.name + ' :  ' + student.grade + '  -->  ' + letter )

 } )
