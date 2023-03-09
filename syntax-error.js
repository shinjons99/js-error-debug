function isBigger(num){
    if(num>5){
        return true;
    }
    else{
        return false;
    }
}

const result = isBigger(11);
console.log(result);

const sum = (a, b) =>a+b;
const res = sum(3,5);

console.log(res);

const elonMusk ={
    name: 'elon',
    age: 53,
    job: 'Tesla'
}

console.log(elonMusk.age);

const number = [12, 13, 21, 3, 34, 4, 4];
for(let i=0; i<10; i++){
  const n = number[i];
  return n;
}

if((number.length > 5)&&(number[0]===5)){
    console.log('Rule follow');
}
else{
    console.log('Final Game');
}