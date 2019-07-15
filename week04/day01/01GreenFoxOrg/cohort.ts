"use strict";

import Student from "./student";
import Mentor from "./mentor";
class Cohort {
  name: string;
  students: Student[] = [];
  mentors: Mentor[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addStudent(Student: Student) {
    this.students.push(Student);
  }
  addMentor(Mentor: Mentor) {
    this.mentors.push(Mentor);
  }
  info() {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${
        this.mentors.length
      } mentors.`
    );
  }
}
export default Cohort;
