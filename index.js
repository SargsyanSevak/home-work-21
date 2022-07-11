"use strict";
// 1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես forEach - ը

function myforEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
      fun(arr[i]);
    }
  }
  myforEach([1, 2, 3], function(el) {
    console.log(el);
  })

// 2. ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով

let person = {
    firstName: 'John',
    lastName: 'Smith',
    address: {
        street: 'North 1st street',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA'
    }
};

const newPerson = {...person};
person.firstName = "Gago"
console.log(person);
console.log(newPerson);

// 3. ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով
//================ Տարբերակ 1 ==================

const arr = [1, 2, 3, 4, 5, 6, 8, 9, 14]
const arr2 = [] 
arr.forEach(function(arg) {
  arr2.push(arg) 
  return arr2
})
arr2[0] = 12;
console.log(arr);
console.log(arr2);
//================ Տարբերակ 2 ================

const arr2 = [...arr];
arr2[0] = 15;
console.log(arr);
console.log(arr2);

// 4. ստեղծել ֆունկցիա, որը կաշխատի split - ի նման(տողը կվերցնի, կկտրի կդարձնի զանգված)

const str = 'this is some string';
String.prototype.mySplit = (sep) => {
   const arr = [];
   let temp = '';
   for(let i = 0; i < str.length; i++){
      const el = str[i];
      if(el === sep || sep === '' && temp){
         arr.push(temp);
         temp = '';
      };
      if(el !== sep){
         temp += el;
      }
   };
   if(temp){
      arr.push(temp);
      temp = '';
   };
   return arr;
};
console.log(str.mySplit(' ')); 

// 🔥 Ոչ պարտադիր / Բարդ
// 5. ստեղծել ֆունկցիա SORT անունով, որը կաշխատի այնպես ինչպես SORT ալգորիմթը

let arr = [4, 5, 1, 2, 6, 8, 7];

function mySort(arr, n = arr.length) {
  for (let i = 0; i < n - 1; i++) {
    let x = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[x]) {
        let temp = arr[x];
        arr[x] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(mySort(arr))
