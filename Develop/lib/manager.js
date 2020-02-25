const Employees = require("./employees");

class Manager extends Employees {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum
  };

  getOfficeNum() {
    return this.officeNum;
  };

  getRole() {
    return "Manager";
  };

};

module.exports = Manager;