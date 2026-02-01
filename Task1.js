const num = [3, 5, 6, 4, 8, 8, 9, 1, 2]
console.log(num)

const num_without_duplicates = [ ...new Set(num)];
num_without_duplicates.sort()
console.log(num_without_duplicates)