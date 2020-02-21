const Employees = require("./employees");

class Engineer extends Employees {
  constructor(name, id, email, title, gitHub) {
    super(name, id, email, title);
    this.gitHub = gitHub
  };

  getGitHub(gitHub){
    return this.gitHub;
  };

  getRole() {
    return "Engineer";
  };
};

module.exports = Engineer;