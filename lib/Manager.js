// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
  
const Employee = require("./Employee");

class Manager extends Employee {
   constructor(name, id, email, managerOffice) {
      super(name, id, email, managerOffice);
      this.managerOffice = managerOffice;
   }

   getmanagerOffice() {
      return this.managerOffice;
   }

   setGithub() { 
    return this.managerOffice;
  }
    
}

module.exports = Manager;
