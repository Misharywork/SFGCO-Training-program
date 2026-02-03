export function checkage(age) {
    if ( age < 0) {
        throw new Error("Age Cannot Be Negative");
    }
    if ( age < 18 ) {
        throw new Error("You must be 18 or older");
    }
    return "You Can Watch The Movie!";
}

try {
    console.log(checkage(23))
} catch (error) {
console.log("Error:" , error.message);
}

try {
  console.log(checkage(15));
} catch (error) {
    console.log("error : " , error.message);
}

try {
    console.log(checkage(-5));
} catch (error) {
    console.log("error : " , error.message)
}