<template>
  <div class="home container mx-auto px-4" id="top">
    <main-header />
    <div class="md:grid md:grid-flow-col md:grid-cols-2 md:gap-2">
      <school-years :students="students" :years="years" :yearRows="yearRows" />
      <router-view :yearRows="yearRows" />
    </div>
  </div>
</template>

<script>
import mainHeader from "../components/mainHeader";
import schoolYears from "../components/schoolYears";
import axios from "axios";

export default {
  name: "Home",
  components: {
    mainHeader,
    schoolYears,
  },
  props: {
    year: String,
  },
  data() {
    return {
      students: [],
      years: [],
      yearRows: {},
    };
  },
  created() {
    axios.get("http://apitest.sertifi.net/api/Students").then((students) => {
      // students.data = [
      //   {
      //     Id: 1,
      //     Name: "Jack",
      //     StartYear: 2013,
      //     EndYear: 2016,
      //     GPARecord: [3.4, 2.1, 1.2, 3.6],
      //   },
      //   {
      //     Id: 2,
      //     Name: "Jill",
      //     StartYear: 2010,
      //     EndYear: 2013,
      //     GPARecord: [3.3, 2.3, 1.1, 3.7],
      //   },
      //   {
      //     Id: 3,
      //     Name: "Bob",
      //     StartYear: 2010,
      //     EndYear: 2012,
      //     GPARecord: [2.3, 2.5, 2.8],
      //   },
      //   {
      //     Id: 4,
      //     Name: "Alice",
      //     StartYear: 2013,
      //     EndYear: 2016,
      //     GPARecord: [3.6, 2.9, 3.4, 3.7],
      //   },
      //   {
      //     Id: 5,
      //     Name: "Eve",
      //     StartYear: 2012,
      //     EndYear: 2015,
      //     GPARecord: [3.3, 2.5, 1.1, 3.7],
      //   },
      //   {
      //     Id: 6,
      //     Name: "Malcom",
      //     StartYear: 2011,
      //     EndYear: 2014,
      //     GPARecord: [3.8, 2.7, 1.1, 3.7],
      //   },
      //   {
      //     Id: 7,
      //     Name: "Don",
      //     StartYear: 2009,
      //     EndYear: 2012,
      //     GPARecord: [3.1, 2.1, 1.1, 3.7],
      //   },
      //   {
      //     Id: 8,
      //     Name: "Mike",
      //     StartYear: 2009,
      //     EndYear: 2011,
      //     GPARecord: [3.6, 2.2, 1.1],
      //   },
      //   {
      //     Id: 9,
      //     Name: "Stacy",
      //     StartYear: 2015,
      //     EndYear: 2016,
      //     GPARecord: [3.3, 2.3],
      //   },
      //   {
      //     Id: 10,
      //     Name: "Safron",
      //     StartYear: 2016,
      //     EndYear: 2016,
      //     GPARecord: [3.3],
      //   },
      //   {
      //     Id: 11,
      //     Name: "Bill",
      //     StartYear: 2012,
      //     EndYear: 2015,
      //     GPARecord: [3.6, 2.4, 2.3, 3.7],
      //   },
      //   {
      //     Id: 12,
      //     Name: "Quin",
      //     StartYear: 2008,
      //     EndYear: 2012,
      //     GPARecord: [3.3, 2.7, 1.1, 3.7, 2.4],
      //   },
      //   {
      //     Id: 13,
      //     Name: "Erin",
      //     StartYear: 2008,
      //     EndYear: 2011,
      //     GPARecord: [3.8, 2.9, 1.1, 3.7],
      //   },
      //   {
      //     Id: 14,
      //     Name: "Sharon",
      //     StartYear: 2013,
      //     EndYear: 2016,
      //     GPARecord: [3.6, 2.3, 1.1, 3.7],
      //   },
      //   {
      //     Id: 15,
      //     Name: "Lilly",
      //     StartYear: 2011,
      //     EndYear: 2014,
      //     GPARecord: [1.0, 2.5, 1.1, 3.8],
      //   },
      //   {
      //     Id: 16,
      //     Name: "Inara",
      //     StartYear: 2004,
      //     EndYear: 2007,
      //     GPARecord: [3.3, 2.8, 1.1, 3.7],
      //   },
      //   {
      //     Id: 17,
      //     Name: "Harry",
      //     StartYear: 2005,
      //     EndYear: 2007,
      //     GPARecord: [2.4, 2.9, 1.1],
      //   },
      //   {
      //     Id: 18,
      //     Name: "Emma",
      //     StartYear: 2007,
      //     EndYear: 2011,
      //     GPARecord: [3.8, 2.6, 1.6, 3.7, 2.8],
      //   },
      //   {
      //     Id: 19,
      //     Name: "Sharon",
      //     StartYear: 2010,
      //     EndYear: 2013,
      //     GPARecord: [3.5, 2.8, 1.1, 3.7],
      //   },
      //   {
      //     Id: 20,
      //     Name: "Uday",
      //     StartYear: 2002,
      //     EndYear: 2005,
      //     GPARecord: [3.8, 2.5, 1.8, 3.7],
      //   },
      //   {
      //     Id: 21,
      //     Name: "Ross",
      //     StartYear: 2003,
      //     EndYear: 2006,
      //     GPARecord: [3.3, 2.7, 1.5, 3.7],
      //   },
      //   {
      //     Id: 22,
      //     Name: "Michael",
      //     StartYear: 2001,
      //     EndYear: 2004,
      //     GPARecord: [3.7, 2.5, 1.4, 3.7],
      //   },
      //   {
      //     Id: 23,
      //     Name: "Nick",
      //     StartYear: 2001,
      //     EndYear: 2004,
      //     GPARecord: [3.4, 2.0, 1.0, 3.7],
      //   },
      //   {
      //     Id: 24,
      //     Name: "Laura",
      //     StartYear: 2010,
      //     EndYear: 2013,
      //     GPARecord: [1.5, 2.7, 3.2, 4.0],
      //   },
      //   {
      //     Id: 25,
      //     Name: "Kevin",
      //     StartYear: 2000,
      //     EndYear: 2003,
      //     GPARecord: [3.3, 2.4, 1.6, 3.7],
      //   },
      // ];

      // Move response into local variable.
      let studentData = students.data;

      /* This section won't work, possible to add years that don't actually have attendence. */
      // // Find the earliest start year and latest end year.
      // // Reducer returns all years, which has to be done for both start and end
      // const arrYearSpan = studentData.reduce(
      //   (accumulator, currentValue) => {
      //     return [
      //       Math.min(currentValue, accumulator[0]),
      //       Math.max(currentValue, accumulator[1]),
      //     ];
      //   },
      //   [Number.MAX_VALUE, Number.MIN_VALUE]
      // );
      // console.log(arrYearSpan);

      // // Build an array of all unique plausable years
      // const range = (start, stop, step) =>
      //   Array.from(
      //     { length: (stop - start) / step + 1 },
      //     (_, i) => start + i * step
      //   );

      // const allYears = range(arrYearSpan[0], arrYearSpan[1], 1);
      // console.log(allYears);

      // const yearsData = [
      //   ...new Set(
      //     studentData.reduce(
      //       (arr, item) => arr.concat(item.StartYear, item.EndYear).sort(),
      //       []
      //     )
      //   ),
      // ];
      /* */

      /* Start: De-normalize time! */

      // De-normalizing: The GPA Record Array in the students.data
      // New: Build a list of all Years
      // Adding:  Attendence by year for each student in students.data

      // Declare yearRows; used to return calculated values.
      let yearRows = {};

      // Declare allYears; used to generate content.
      let allYears = [];

      // Declare attendence by year
      // It will be easier to interpret if this seperate from allYears.
      // {
      //   "2001": {
      //     "students": [{"john" : {"rollingGPA:" 5.0}],
      //     "rollingGPA": 5.0,1
      //     }
      // }

      studentData.forEach((student) => {
        const thisStudent = student;
        const thisStudentName = thisStudent.Name;
        let attended = [];

        student.GPARecord.forEach((gpa, i) => {
          const currentYear = thisStudent.StartYear + i;

          if (!allYears.includes(currentYear)) allYears.push(currentYear);
          attended.push(currentYear);

          // Create the year entry if it doesn't exist in yearRows.
          if (!(currentYear in yearRows)) {
            yearRows[currentYear] = {
              students: [thisStudentName],
              gpas: [gpa],
              studentRows: {},
            };

            yearRows[currentYear].studentRows[thisStudentName] = {
              Name: thisStudentName,
              GPA: gpa,
            };
            return;
          }

          // Create the student entry if it doesn't exist in yearRows
          if (!yearRows[currentYear].students.includes(thisStudent.Name)) {
            yearRows[currentYear].students.push(thisStudent.Name);

            yearRows[currentYear].studentRows[thisStudentName] = {
              Name: thisStudentName,
              GPA: gpa,
            };
          }

          // Create the gpa entry, it doesn't exist yet!
          yearRows[currentYear].gpas.push(gpa);
        });

        student.averageGPA = student.GPARecord.reduce(
          (a, v, i) => (a * i + v) / (i + 1)
        );

        student.attended = attended;

        // console.log(denormalizedGPA);
      });

      // Sort all years from oldest to newest.
      this.years = allYears.sort();

      for (const year in yearRows) {
        yearRows[year].attendence = yearRows[year].students.length;

        const averageGPA = yearRows[year].gpas.reduce(
          (a, v, i) => (a * i + v) / (i + 1)
        );

        yearRows[year].averageGPA =
          Math.round((averageGPA + Number.EPSILON) * 100) / 100;
      }

      this.yearRows = yearRows;

      /* End: De-normalize time! */

      // const inventory = [
      //   { name: "apples", quantity: 2 },
      //   { name: "bananas", quantity: 0 },
      //   { name: "cherries", quantity: 5 },
      // ];

      // const result = yearRows.find(({ year }) => year === "2016");

      // console.log(result); // { name: 'cherries', quantity: 5 }

      // console.log(allYears);
      // console.log(studentData);

      // /* This is how the above de-normalization works.
      // let obj = {};
      // obj["foo"] = "bar";

      // let colors = ["green", "yellow", "blue", "purple"];
      // obj["colors"] = colors;

      // let betterColors = {};

      // obj["colors"].forEach((color, i) => {
      //   betterColors[2000 + i] = "test";
      // });

      // obj["colors"].splice(0);
      // obj["colors"] = betterColors;

      // console.log(obj);
      // /* */
    });
  },
};
</script>
