// ! TASK 1
let myResume = {
  basics: {
    name: "Tamilselvan",
    email: "tamilselvan@gmail.com",
    phone: 9876543210,
    degree: "B.E",
    location: {
      address: "18, pallavaram",
      postalCode: 600117,
      city: "Chennai",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: [
      {
        github: "https://github.com/nareshselvan6",
      },
    ],
  },
  education: [
    {
      institution: "VISTAS",
      department: "ELECTONICS AND COMMUNICATION",
      studyType: "fulltime",
      "batch start year": 2015,
      "batch end year": 2019,
      gpa: 6,
    },
  ],
  skills: [
    {
      name: "corejava,selenium,javascript",
      level: "beginner",
    },
  ],
  languages: [
    {
      language: "Tamil,English",
    },
  ],
  interests: [
    {
      name: "playing online games,",
    },
  ],
};
console.log(myResume);

// ! TASK 2
let json = [
  {
    name: "Tamilselvan ",
    email: "tamilselvan@gmail.com",
    phone: "9876543210",
    degree: "B.E",
  },
  {
    name: "Tamilselvan tamil",
    email: "tamilselvantamil@gmail.com",
    phone: "9876543212",
    degree: "B.E",
  },
];

// for loop
for (var i = 0; i < json.length; i++) {
  console.log("using for loop:-" + json[i].name);
  console.log("using for loop:-" + json[i].email);
  console.log("using for loop:-" + json[i].phone);
  console.log("using for loop:-" + json[i].degree);
}

// for in
for (var forin in json) {
  console.log("using for in:-" + json[forin].name);
}

// for of
for (var forof of json) {
  console.log("using for of:-" + forof.email);
}

// for each
json.forEach(function (obj) {
  console.log(" using for each :" + obj.phone);
});
