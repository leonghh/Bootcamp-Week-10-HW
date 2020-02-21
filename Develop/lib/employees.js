class Employees {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
  }

  getName(name) {
    return this.name;
  };
  
  getId(id) {
    return this.id;
  };

  getEmail(email) {
    return this.email;
  };

  getTitle(title) {
    return this.title;
  };

  getRole() {
    return "Employee";
  };

};

module.exports = Employees;
  