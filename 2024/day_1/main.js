import fs from "fs";

const input = fs.readFileSync("./input.txt", {
  encoding: "utf-8",
});

function main() {
  let inp = input.split("\r\n");
  let arr1 = [];
  let arr2 = [];

  inp.forEach((str) => {
    const fm = str.replace(/\s+/g, ",").split(",");
    arr1.push(fm[0]);
    arr2.push(fm[1]);
  });

  const p1 = () => {
    const reduceToPairs = (arr1, arr2) => {
      const sarr1 = arr1.sort();
      const sarr2 = arr2.sort();

      const pairs = [];

      for (let i = 0; i < sarr1.length; i++) {
        const n1 = sarr1[i];
        const n2 = sarr2[i];
        pairs.push([n1, n2]);
      }

      return pairs;
    };

    const pairs = reduceToPairs(arr1, arr2);

    const sumPairs = (pairsArr) => {
      const pairsReduced = pairsArr.map((pair) => pair.reduce((a, c) => Math.abs(a - c)));
      return pairsReduced;
    };

    const answer = sumPairs(pairs).reduce((a, c) => a + c);

    return answer;
  };

  const p2 = () => {
    let simScore = 0;
    const counts = {};
    arr1 = arr1.map((n) => Number(n));

    arr2.forEach((num) => {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    });

    arr1.forEach((n) => {
      simScore += counts[n] ? n * counts[n] : 0;
    });

    console.log(counts);
    return simScore;
  };

  console.log(p1());
  console.log(p2());
}

main();
