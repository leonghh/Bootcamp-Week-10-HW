const Employees = require("./employees");

class Intern extends Employees {
  constructor(name, id, email, title, school) {
    super(name, id, email, title);
    this.school = school
  };

  getSchool(school){
    return this.school;
  };

  getRole() {
    return "Intern";
  };
};

module.exports = Intern;
