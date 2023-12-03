const {match} = require('assert')
const fs = require('fs')

/* *** PART 1 ANSWER ***

const getData = () => {
  const txt = fs.readFileSync('./day1_input.txt', 'utf-8')
  let filteredTxt = txt.split('\r\n')
  filteredTxt = filteredTxt.map((str) => str.replace(/[a-z]/g, ''))

  return filteredTxt
}

const getAnswer = () => {
  let numbers = getData()
  numbers = numbers.map((n) => Number(n[0] + n[n.length - 1]))

  return numbers.reduce((a, c) => a + c)
}

console.log(getAnswer())
*/

/* PART TWO */

const getData = () => {
  const txt = fs.readFileSync('./day1_input.txt', 'utf-8')
  let filteredTxt = txt.split('\r\n')

  return filteredTxt
}

const numbersMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

const partTwo = () => {
  let arr = getData()

  arr = arr.map((str) => {
    var regex = /(?:one|two|three|four|five|six|seven|eight|nine)/g
    let newStr = str
    let matches = str.matchAll(regex)
    let end = false

    while (!end) {
      let match = matches.next()
      // console.log(match)
      //if no more iterables in matches, end loop
      if (match.done) {
        end = true
        break
      }
      newStr = newStr.replace(match.value[0], numbersMap[match.value[0]])
    }
    newStr = newStr.replace(/[a-z]/g, '')

    return newStr
  })

  arr = arr.map((n) => Number(n[0] + n[n.length - 1]))
  console.log(arr)
  let sum = 0
  for (let number of arr) {
    sum += number
  }

  return sum
}

console.log(partTwo())

// Actual answer, handles dumb edge case eighthreeighthreeight
function findSum(arr) {
  arr = arr
    .map((x, i) => {
      const first = x[x.search(/[1-9]/)]
      const reverse = x.split('').reverse().join('')
      const last = reverse[reverse.search(/[1-9]/)]
      return parseFloat(first + last)
    })
    .reduce((a, c) => a + c, 0)
  return arr
}

let result2 = Array.from(getData()).map((x) => {
  x = x
    .replaceAll('eightwo', '82')
    .replaceAll('twone', '21')
    .replaceAll('oneight', '18')
    .replaceAll('one', '1')
    .replaceAll('two', '2')
    .replaceAll('three', '3')
    .replaceAll('four', '4')
    .replaceAll('five', '5')
    .replaceAll('six', '6')
    .replaceAll('seven', '7')
    .replaceAll('eight', '8')
    .replaceAll('nine', '9')
  return x
})

console.log(findSum(result2))
