const Employees = require("./employees");

class Manager extends Employees {
  constructor(name, id, email, title, officeNum) {
    super(name, id, email, title);
    this.officeNumber = officeNum
  };

  getOfficeNum(officeNum){
    return this.officeNum;
  };

  getRole() {
    return "Manager";
  };

};

module.exports = Manager;