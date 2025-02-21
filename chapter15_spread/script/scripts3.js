let student = [
    {id: 1, name: "김일", grade: 85},
    {id: 2, name: "김이", grade: 100},
    {id: 3, name: "김삼", grade: 78},
    {id: 4, name: "김사", grade: 55},
    {id: 5, name: "김오", grade: 92},
    {id: 5, name: "김육", grade: 37},
];

// 1. 성적이 80점 이상인 학생만 추출
// const topStudents = students.filter(topStudent => topstudent.grade >= 80);
const topStudents = students.filter(function(topStudent) {
    return topStudent.grade >= 80;
})

console.log(`성적 우수 학생 : `, topStudents);

// 2. 성적이 60점 미만 학생만 추출
// const lowStudents = students.filter(lowstudent => lowstudent.grade < 60);
const lowStudents = students.filter(function(lowstudent) {
    return lowstudent.grade < 60;
})

// console.log(`성적 미흡 학생 : ${lowStudents}`);
console.log(`성적 미흡 학생 :`, lowStudents);

// 3. 이름이 '김'으로 시작하는 학생만 추출
const kimStudents = students.filter(kimStudent => kimStudent.name.startsWith('김'));

console.log('김씨 학생 : ', kimStudents);

console.log(`성적 우수 학생 : ${JSON.stringify(topStudents)}`);

console.log(`성적 우수 학생 : ${topStudents.map(student => `$
    student.name} (${student.grade})`).join(',')}`);

// let numbers = [1,2,3,4,5];

// // 각 요소를 2 배로 변환
// let doubleNumbers = numbers.map(num => num*2);

// console.log(numbers);           // [1,2,3,4,5]
// console.log(doubleNumbers);     // [2,4,6,8,10]

// let fruits = ['apple', 'banana', 'cherry', 'durian'];

// // 이걸 다 대문자로 바꾸겠습니다. -> .toUpperCase()를 사용하시면 됩니다.

// let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(upperCaseFruits);

let nums = [1,2,3,4,5];

// num은 [1,2,3,4,5]의 각 element인 1,2,3,4,5에 해당
// index는 [1,2,3,4,5]의 각 index넘버인 0,1,2,3,4에 해당
let result = nums.map((num, index) => `${index+1}번째 요소 : ${num}`);

console.log(result);

