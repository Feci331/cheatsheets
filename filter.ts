function numbersOverFive(numbers: number[]) {
  let result: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
      result = [...result, element];
    }
  }
  return result;
}
let numbers: any = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0,
];
let szoveg: any = ["alma", "kati bela", "Aladár"]
type jelszavak = {name: string, Password: string}
let jelszavak: any = [
    {
      Name: "Alma",
      Password: "kiscica",
    },
    { Name: "béla", Password: "asd" },
  ];
  


//console.log(numbersOverFive([2, 8, 4, 6, 10]));
//console.log(numbersOverFive([4, 8, 4, 4, 17]));
//console.log(numbersOverFive([2, 88, 4, 3, 77]));

function greaterThanfive(num: number) {
  if (num > 5) {
    return true;
  }
  return false;
}
function strAback(element: string) {
  if (element[0] === "a" || element[0] === "A") {
    return true;
  }
  return false;
}
function passwordCheck(element: jelszavak) {
  if (element.Password.length > 5) {
    return true;
  }
  return false;
}




function myFilter(array: [], filterFunction: any) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (filterFunction(item)) {
      result = [...result, item];
    }
  }
  return result;
}

console.log(myFilter(numbers, greaterThanfive));
console.log(myFilter(szoveg, strAback));
console.log(myFilter(jelszavak, passwordCheck));

function giveBackA(str: string) {
    let result: string[] = []
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element[0] === "a" || element[0] === "A") {
            result = [... result, element]
        }
    } return result
} 





//console.log(giveBackA(["alma", "béka", "Aladás"])); 


function giveBackPassw5(str: string) {
  let result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const element: any = str[i];
    if (element[i].Password.length > 5) {
      result = [...result, element];
    }
  }
  return result;
}

//console.log(giveBackPassw5(obj));

