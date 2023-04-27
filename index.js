//OBJECTLERDE İTERATİON

//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
  person4: "JS",
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.
console.log(people);
console.log(people.person2.name);
console.log(people.person2.salary);

//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)
//* 1- For in For of
for (let p in people) {
  console.log(p);
  console.log(people[p].salary);
  console.log(people[p].name);
}
for (let k of Object.keys(people)) {
  console.log(k);
}

for (let v of Object.values(people)) {
  console.log(v);
}

for (let [k, v] of Object.entries(people)) {
  console.log("KEY:", k, "VALUE:", v.job);
}

//* 2- Built-in metodları(Object Metodları) ile keys(),values,entries
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//* 3- Array Metodları ile
Object.keys(people).forEach((p) => console.log(p));
console.log("*********");

Object.values(people).forEach((p) => console.log(p.name));
//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//? job'i developer olanlarin dob degerlerini yazdiriniz.
console.log("*****");

Object.values(people)
  .filter((p) => p.job === "developer")
  .forEach((p) => console.log(p.dob));

console.log("*****");
const dobs = Object.values(people)
  .filter((p) => p.job === "developer")
  .map((p) => p.dob); //? (2) ['1990', '2000']

console.log(dobs);

//
