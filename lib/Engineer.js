// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email); //brings in the characcteristics from the main employee.js
    this.github = github;
   
  }

  getGithub() { //getters
    // return something...
    return this.github
  }

  setGithub() { //setters
    // do something...
    return this.github
  }
    
}

module.exports = Engineer;