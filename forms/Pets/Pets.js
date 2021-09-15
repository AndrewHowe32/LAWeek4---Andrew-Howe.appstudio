let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withSal = ["Sal"]
petNames.push(`${withSal}`)

console.log(`The third pet is named ${petNames[2]}.`)

let lengthwithSal = withSal.length

console.log(`The array has ${lengthwithSal} names in it.`)

petNames.pop()