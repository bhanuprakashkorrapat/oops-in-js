function Student(name, rollNum, isPresent, subject) {
  this.name = name;
  this.rollNum = rollNum;
  this.isPresent = isPresent;
  this.subject = subject;
  this.studentInfo = function () {
    return this.detailsOfStudent() + " and " + this.subjectInfo();
  };
}
Student.prototype.detailsOfStudent = function () {
  if (this.isPresent) {
    return `A student with roll number ${this.rollNum} is present in class`;
  }
  return `A student with roll number ${this.rollNum} is absent from class`;
};
Student.prototype.subjectInfo = function () {
  return `${this.name} chose the subject ${this.subject}`;
};

const student = new Student("Bhanu", 4, true, "JavaScript");
console.log(student.studentInfo());
