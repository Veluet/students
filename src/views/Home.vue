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
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "api/Students.json"
        : "http://apitest.sertifi.net/api/Students";

    axios.get(apiUrl).then((students) => {
      // Move response into local variable.
      let studentData = students.data;

      /* Start: De-normalize time! */

      // De-normalizing: The GPA Record Array in the students.data
      // New: Build a list of all Years
      // Adding:  Attendence by year for each student in students.data

      // Declare yearRows; used to return calculated values.
      let yearRows = {};

      // Declare allYears; used to generate content.
      let allYears = [];

      // Declare attendence by year
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
    });
  },
};
</script>
