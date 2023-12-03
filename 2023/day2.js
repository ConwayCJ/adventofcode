const fs = require('fs')

const normalizeGame = () => {
  let data = fs.readFileSync('./day2_input.txt', 'utf-8')
  data = data.split('\r\n')

  data = data.map((line, index) => {
    line = line.split(': ')
    line = line.pop()
    line = line.split('; ')

    line = line.map((ln) => {
      ln = ln.split(', ')
      ln = ln.reduce((hand, cube) => {
        const [number, color] = cube.split(' ')
        // console.log(number, color)
        hand[color] = Number(number)
        return hand
      }, {})

      return ln
    })
    return line
  })

  return data
}

const normalizeHand = () => {
  let games = normalizeGame()
  games = games.map((game) => {
    game = game.reduce(
      (accumulator, current) => {
        const {green, red, blue} = accumulator

        const updatedValues = {
          green: Math.max(green, current.green || 0),
          red: Math.max(red, current.red || 0),
          blue: Math.max(blue, current.blue || 0),
        }
        return updatedValues
      },
      {green: 0, red: 0, blue: 0}
    )

    return game
  })
  return games
}

const partOne = () => {
  const data = normalizeHand()

  let sum = 0

  data.forEach((game, i) => {
    if (game.red > 12 || game.green > 13 || game.blue > 14) {
    } else {
      sum += i + 1
    }
  })

  return sum
}

console.log(partOne())

const partTwo = () => {
  const data = normalizeHand()

  const cubePowers = data.map((game) => game.red * game.green * game.blue)
  const sum = cubePowers.reduce((a, c) => a + c)
  console.log(cubePowers)
  return sum
}

console.log(partTwo())
