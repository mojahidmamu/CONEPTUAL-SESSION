const person = {
  name: "Mojahid",
  age: 17,
  gender: "male",
  isStudent: true,
  institution: {
    name: "BSPI",
    situated: 1965,
    position: {
      upazila: "Kaftai",
      district: "Rangamati",
    },
  },
};
console.log(person.institution.position.district);
console.log(person.institution.situated.toFixed(0));

const numbers = [12, 32, 26, 45];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const result = numbers.filter((item) => item < 30);
const result2 = numbers.find((item) => item < 30);
console.log(result);
console.log(result2);

setTimeout(() => {}, 3000);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));


