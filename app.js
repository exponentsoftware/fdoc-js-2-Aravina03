// Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.


let countries = [
  'ALBANIA',
  'BOLIVIA',
  'CANADA',
  'DENMARK',
  'ETHIOPIA',
  'FINLAND',
  'GERMANY',
  'HUNGARY',
  'IRELAND',
  'JAPAN',
  'KENYA'
]

function createArrayOfArrays(countries){
    let result=new Array
    result=countries.map(n =>
        [n,n.slice(0,3),n.length]
    )
    return result
  
}
console.log(createArrayOfArrays(countries))

createArrayOfArrays(countries)
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]




// for (let i=0;i<countries.length;i++){
//     result.push(countries[i],countries[i].slice(0,3),countries[i].length)

// }
// console.log(result)