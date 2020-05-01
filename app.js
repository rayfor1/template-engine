const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];


// STUDENT: This function generates all the questions for creating the manager. You need to add more to this.
function createManager(){
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is your manager's name: ",
      // Note how the validate function works
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },

    {
      type: "input",
      name: "managerId",
      message: "Enter manager's employee ID: ",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    
    {
      type: "input",
      name: "managerEmail",
      message: "Enter mamanger's e-mail: ",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    
    {
        type: "input",
        name: "managerOffice",
        message: "Enter manager's office number: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
    },
  
    ]).then(answers => {
// STUDENT: Process the response by instatiating a new object in the Manager class
        let managerName = answers.managerName;
        let managerId = answers.managerId;
        let managerEmail = answers.managerEmail;
        let managerOffice = answers.managerOffice;
        let manager = new Manager(
          managerName,
          managerId,
          managerEmail,
          managerOffice
        );

        teamMembers.push(manager);
        idArray++;

        console.log("The next part will collect information about all the members that will be part of the team:")

// Now call the next question set
    createTeam();
  });
  }

// This function starts team creation.
function createTeam() {
  inquirer.prompt([
    // STUDENT: Ask which type of team member should be created with a list of choices
    {
      type: "list",
      name: "memberChoice",
      message: "What type of team member should be created next? ",
      choices: ["Engineer", "Intern", "None"]
    }

  ]).then(userChoice => {
    // STUDENT: Based on which choice they make, call the correct function to ask more questions.
    // If no choice is made, then go to the rendering function.


  });
}

// This function starts team creation.
function createEngineer() {
  inquirer.prompt([
    // STUDENT:  Engineer questions:
    function createEngineer(){
      console.log("Please build your team");
      inquirer.prompt([
    
      {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name: ",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
      },
      {
          type: "input",
          name: "engineerId",
          message: "Enter engineer's employee ID: ",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
      },
      {
          type: "input",
          name: "engineerEmail",
          message: "Enter engineer's e-mail: ",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
      },
      {
          type: "input",
          name: "engineerGithub",
          message: "Enter engineer's GitHub username: ",
          validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
      },

      ]).then(userChoice => {
        // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
        // instantiate the Engineer constructor.
          // STUDENT: Process the response by instatiating a new object in the Manager class
          let engineerName = answers.engineerName;
          let engineerId = answers.engineerId;
          let engineerEmail = answers.engineerEmail;
          let engineerGithub = answers.engineerGithub;
          let engineer = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            engineerGithub
          );
        // STUDENT: When finished:
          // Add the new object to the team member array
          // Pass control back to the createTeam() function

          teamMembers.push(engineer);
          idArray++;
    
          console.log("The next part will collect information about additional members to be added into the team");
 // Now call the next question set
   createTeam();
  });
},

// STUDENT: Now create a function for creating an Intern using the code above as an example

function createIntern(){
  console.log("Please build your team");
  inquirer.prompt([
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    }
  },
  {
    type: "input",
    name: "internId",
    message: "Enter intern's employee ID: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    }
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter intern's e-mail address: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    }
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter intern's school: ",
    validate: answer => {
      if (answer !== "") {
        return true;
      }
      return "Please enter at least one character.";
    }
  },

  ]).then(userChoice => { 
           // STUDENT: Make sure the id supplied is unique, then take the data supplied and 
          // instantiate the intern constructor.
        
          let internName = answers.internName;
          let internId = answers.internId;
          let internEmail = answers.internEmail;
          let internSchool = answers.internSchool;
          let intern = new Intern(
            internName,
            internId,
            internEmail,
            internSchool
          );
        // STUDENT: When finished:
          // Add the new object to the team member array
          // Pass control back to the createTeam() function

          teamMembers.push(intern);
          idArray++;
    
          console.log("The next part will collect information about additional members to be added into the team");
  });

  

// STUDENT: This function will call the render function required near the top (line 12), and pass INTO it the teamMembers area; from there, write the HTML returned back to a file in a directory called output.

function renderHtmlPage(){
  
  
  fs.writeFile("./output/main.html", fullHTML, function(err) {
    if (err) {
       return console.log(err);
    }
 });
}



}

// This is our starter function.
// Note that we use separate functions for different questions in inquirer to 
// help keep code organized.
function startMenu() {

  // Here we start things off by calling the createManager function
  createManager()

}

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


startMenu();