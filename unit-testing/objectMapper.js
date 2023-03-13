const studentData = require("./data");

export function objectMapper(students) {
    const newArray =
    students.map((student) => ({
      name: student.name,
      physicalCharactics: {
        age: student.age,
        height: student.height,
        hairColor: student.hairColor,
      },
      address: {
        streetNumber: student.streetNumber,
        streetName: student.streetName,
        city: student.city,
        state: student.state,
        zipcode: student.zipcode,
      },
      personalInformation: {
        isMarried: student.isMarried,
        hasChildren: student.hasChildren,
        childrenCount: student.childrenCount,
      },

    }));
    return newArray
  }

console.log(objectMapper(studentData));
