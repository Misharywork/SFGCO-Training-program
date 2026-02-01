const prog = [ 
    'Code' ,
    'Run' ,
    'Server' ,
    'Network',
    'Javascript',
    'TCP',
    'html',
    'debug',
    'Website',
    'Programming',
    'Computer',
    'Coffee',
    'CO-OP',
     ]


function groupLength(string) {

let result = {}
for ( let i = 0; i < string.length; i++) {

    let str = string[i]
    let length = str.length

    if ( result[length] === undefined ) {
        result[length] = []
    }

    result[length].push(str)

}

return result;

}

console.log(groupLength(prog));
