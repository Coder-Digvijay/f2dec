const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === 'developer');
    console.log(developers);
  
  }
  
  function addData() {
    const newName = prompt('Enter name:');
    const newAge = parseInt(prompt('Enter age:'), 10);
    const newProfession = prompt('Enter profession:');
  
    if (!newName || isNaN(newAge) || !newProfession) {
      alert('Invalid input. Please enter valid details.');
      return;
    }
  
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
    console.log(data);
  
  }
  
  function removeAdmin() {
    const filteredData = data.filter((person) => person.profession !== 'admin');
    console.log(filteredData);

  }
  
  function concatenateArray() {
    const dummyArray = [
        { name: 'Draken', age: 30, profession: 'tester' },
        { name: 'Rony', age: 25, profession: 'designer' }
    ];

    const resultArray = data.concat(dummyArray);
    console.log("Concatenated Array:", resultArray);
  }
  
  function averageAge() {
    const sum = data.reduce((acc, dev) => acc + dev.age, 0);
    const average = sum / data.length;
    console.log("Average Age:", average.toFixed(2));
  }
  
  function checkAgeAbove25() {
    const isAbove25 = data.some(dev => dev.age > 25);
    console.log("At last one person is above 25:", isAbove25);
  }
  
  function uniqueProfessions() {
    const professions = [...new Set(data.map((person) => person.profession))];
    console.log(professions);
  
    
  }
  
  function sortByAge() {
    const sortedData = [...data].sort((a, b) => a.age - b.age);
    console.log(sortedData);

  }
  
  function updateJohnsProfession() {
    const updatedData = data.map((person) => {
        if (person.name === 'john') {
          return { ...person, profession: 'manager' };
        }
        return person;
      });
      console.log(updatedData);
    
  }
  
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
        count[person.profession] = (count[person.profession] || 0) + 1;
        return count;
      }, {});
      console.log(professionCount);
    
  }