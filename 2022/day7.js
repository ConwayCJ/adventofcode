/*To begin, find all of the directories with a total size of at most 100000,
then calculate the sum of their total sizes. In the example above,
these directories are a and e; the sum of their total sizes is 95437
(94853 + 584). (As in this example, this process can count files more than once!)

Find all of the directories with a total size of at most 100000. What is the sum 
of the total sizes of those directories? */

const testData = [
['$ cd /']
['$ ls']
['dir a']
['14848514 b.txt']
['8504156 c.dat']
['dir d']
['$ cd a']
['$ ls']
['dir e']
['29116 f']
['2557 g']
['62596 h.lst']
['$ cd e']
['$ ls']
['584 i']
['$ cd ..']
['$ cd ..']
['$ cd d']
['$ ls']
['4060174 j']
['8033020 d.log']
['5626152 d.ext']
['7214296 k']]

const fs = require('fs/promises');

async function readInput() {
  return (await fs.readFile('day7_input.txt', {encoding: 'utf8'})).split(/\r\n/g)
}

(async function main() {
  const input = await readInput()
  let totalSum = 0
  let totalSizeOfDirectory = 0
  let directoryIndex = 0

  while (counter !== input.length) {
    
    if (input[counter].startsWith('$ cd ..')) {
      directoryIndex--
    }

    

    counter++
  }

  


  console.log(input)

})()