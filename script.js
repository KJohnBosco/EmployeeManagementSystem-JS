"use strict";
// EMPLOYEE MANAGEMENT SYSTEM PROJECT (JAVASCRIPT)
/*
 ***Features
 *Add Employee✔
 *Remove Employee✔
 *Edit/Update Employee Details✔
 *Display Employee Details✔
 *Display All Employee Details✔
 *Display Department Employees
 */

///////////// SYSTEM CODE LOGIC /////////////////

const employee = {
  // Object Variables
  id: "Unregisterd",
  name: "Employee",
  title: "Regular",
  department: "None",
  gender: "Unknown",
  age: "Unknown",
  salary: "Hidden",
  paymentPeriod: "Unknown",
  dropedEmployees: 0,
  employeeList: [],

  // Add new Employee method
  addEmployee(
    employeeName,
    employeeTitle,
    employeeDepartment,
    employeeGender,
    employeeAge,
    employeeSalary,
    employeePaymentPeriod,
    employeeid,
  ) {
    this.name = employeeName ?? "Employee";
    this.title = employeeTitle ?? "Unknown";
    this.department = employeeDepartment ?? "Unknown";
    this.gender = employeeGender ?? "Unknown";
    this.age = employeeAge ?? "Unknown";
    this.salary = employeeSalary ?? "Unknown";
    this.paymentPeriod = employeePaymentPeriod ?? "Unknown";
    this.id = employeeid ?? "Unregistered";

    // Push new employee data to the employeesList Array
    this.employeeList.push({
      id: this.id,
      name: this.name,
      title: this.title,
      department: this.department,
      gender: this.gender,
      age: this.age,
      salary: this.salary,
      paymentPeriod: this.paymentPeriod,
    });
  },

  // Show all employees method
  showEmplyeesList() {
    if (this.employeeList.length === 0) {
      console.log("Employee database is empty");
    } else {
      for (const employee of this.employeeList) console.log(employee);
    }
  },

  // Remove employee
  removeEmployeeID(employeeID) {
    // Re-assigning to a new array of values
    this.employeeList = this.employeeList.filter(
      (employee) => employee.id !== employeeID,
    );
  },

  // Edit/Update Employee details
  editEmployeeDetails(employeeID, target, value) {
    // Filter employees to get the desired employee
    const targetEmployee = this.employeeList.filter(
      (employee) => employee.id === employeeID,
    );

    // If Employee ID is not found
    if (targetEmployee.length === 0) {
      console.log("Employee does not exist...");

      // If ID exists update data based on employee property
    } else {
      switch (target) {
        case "name":
          targetEmployee[0].name = value;
          break;
        case "title":
          targetEmployee[0].title = value;
          break;
        case "department":
          targetEmployee[0].department = value;
          break;
        case "gender":
          targetEmployee[0].gender = value;
          break;
        case "age":
          targetEmployee[0].age = value;
          break;
        case "salary":
          targetEmployee[0].salary = value;
          break;
        case "pay":
          targetEmployee[0].paymentPeriod = value;
          break;
      }
    }

    // Display updated version of the employee
    this.employeeDetails(targetEmployee[0].id);
  },

  // Display All Employees
  allEmployees() {
    console.log(`ALL EMPLOYEES DETAILS`);
    for (const employee of this.employeeList) {
      console.log(`
        ID: ${employee.id}

        Name: ${employee.name}
    
        Title: ${employee.title}
    
        Department: ${employee.department}
    
        Gender: ${employee.gender}
    
        Age: ${employee.age}
    
        Salary: ${employee.salary}
    
        Pay: ${employee.paymentPeriod}`);
      console.log(employee);
    }
  },

  // Display Employee details
  employeeDetails(employeeID) {
    const targetEmployee = this.employeeList.filter(
      (employee) => employee.id === employeeID,
    );

    console.log(`EMPLOYEE DETAILS ${employeeID}

    ID: ${targetEmployee[0].id}

    Name: ${targetEmployee[0].name}

    Title: ${targetEmployee[0].title}

    Department: ${targetEmployee[0].department}

    Gender: ${targetEmployee[0].gender}

    Age: ${targetEmployee[0].age}

    Salary: ${targetEmployee[0].salary}

    Pay: ${targetEmployee[0].paymentPeriod}`);
    console.log(targetEmployee[0]);
  },
};

// Adding new employees
employee.addEmployee(
  "James Kasule",
  "Manager",
  "Marketing",
  "Male",
  25,
  "21M",
  "monthly",
);
employee.addEmployee("Johnson Male", "Secretary", "Finance", "Male");
employee.addEmployee("Jacob Bbosa");
employee.addEmployee();

// Displaying Employees
employee.showEmplyeesList();

// Remove Employee
employee.removeEmployeeID("Unregistered");

// New employees List
console.log("New List");
employee.showEmplyeesList();

// Add new employees and show list
employee.addEmployee(
  "David Lubwama",
  "Regular",
  "Finance",
  "Male",
  24,
  "15.5M",
  "Monthly",
  "FD001RGEMP26M",
);
employee.addEmployee(
  "Charlse Makula",
  "Regular",
  "Marketing",
  "Male",
  22,
  "11.5M",
  "Monthly",
  "MD001RGEMP26M",
);
employee.addEmployee(
  "Naluze Jean",
  "Secretary",
  "Finance",
  "Female",
  26,
  "25.5M",
  "Monthly",
  "FD001MCEMP26F",
);
employee.showEmplyeesList();

// Removed employee by id
employee.removeEmployeeID("FD001RGEMP26M");

// New employee list
console.log("New Employee List");
employee.showEmplyeesList();

// Display single employee details
console.log("Single Employee details");

employee.editEmployeeDetails("FD001MCEMP26F", "name", "Matildah Miles");
employee.editEmployeeDetails("FD001MCEMP26F", "title", "Assistant CEO");

employee.allEmployees();

////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// HOME PANEL CODES
// Display active employees
document.getElementById("employeeNo").textContent =
  employee.employeeList.length;

// Display droped employees
document.getElementById("passedEmployeeNo").textContent =
  employee.dropedEmployees;

// CHECK PROFILES PANEL CODES
function checkID(searchID) {
  switch (searchID) {
    case "checkProfilesSearchIcon":
      const employeeID = document.getElementById(
        "checkProfilesSearchBar",
      ).value;

      // Check empty ID
      if (employeeID === "") {
        const comment = document.getElementById("checkProfilesComment");
        comment.textContent = "Please enter a valid ID";
        comment.style.color = "yellow";
      } else {
        const comment = document.getElementById("checkProfilesComment");

        // Get .filter returned number of employee profiles
        const listSize = employee.employeeList.filter(
          (employee) => employee.id === employeeID,
        ).length;

        ////// Check ID availability
        // Valid ID
        if (listSize > 0) {
          comment.textContent = "ID valid";
          comment.style.color = "lime";

          // Get target employee profile
          const employeeProfile = employee.employeeList.filter(
            (employee) => employee.id === employeeID,
          );

          // Display Employee profile
          document.getElementById("checkID").textContent =
            employeeProfile[0].id;
          document.getElementById("checkName").textContent =
            employeeProfile[0].name;
          document.getElementById("checkTitle").textContent =
            employeeProfile[0].title;
          document.getElementById("checkDepartment").textContent =
            employeeProfile[0].department;
          document.getElementById("checkGender").textContent =
            employeeProfile[0].gender;
          document.getElementById("checkAge").textContent =
            employeeProfile[0].age;
          document.getElementById("checkSalary").textContent =
            employeeProfile[0].salary;
          document.getElementById("checkPay").textContent =
            employeeProfile[0].paymentPeriod;

          console.log(employeeProfile[0]);

          // Invalid ID
        } else if (listSize === 0) {
          comment.textContent = "ID Doesn't Exist";
          comment.style.color = "yellow";

          // Defaults
        } else {
          // Defaults
        }
      }
      break;
    case "removeEmployeesSearchIcon":
      break;
    case "editProfilesSearchIcon":
      break;
  }
}

////////////////////////////////////////
///////////////////////////////
//////////////////
// IMPLEMENTATIONS
// Get Started Button function
function hideSplash() {
  document.getElementById("splashScreen").style.height = "0vh";
}

// Show Mobile Side Menu
function menu() {
  const sideMenu = document.getElementById("navigationsPanel");
  console.log(sideMenu.style.width);

  if (sideMenu.style.width === "") {
    sideMenu.style.width = "fit-content";
  } else {
    sideMenu.style.width = "";
  }
}

// hide all panels function
function deactivatePanels() {
  // Retrieve all elements with "panel" class
  const allPanels = document.querySelectorAll(".panel");
  const allNavs = document.querySelectorAll(".nav");

  // Remove the "activePanel" class from any of the panels containing it
  for (const panel of allPanels) {
    panel.classList.contains("activePanel")
      ? panel.classList.remove("activePanel")
      : console.log();
  }

  // Remove the "current" class from any of the navs containing it
  for (const nav of allNavs) {
    nav.classList.contains("current")
      ? nav.classList.remove("current")
      : console.log();
  }
}

// Triger panel display using panel id
// function addActive(panelID) {}

// NAVIGATION PANEL SWITCH
function showPanel(buttonID) {
  let panel;

  switch (buttonID) {
    // HOME PANEL
    case "homeNav":
      // Retrieve home panel
      panel = document.getElementById("home");

      // deactivate all active panels & current navigation buttons
      deactivatePanels();

      // activate home panel
      panel.classList.add("activePanel");

      // Update current nav button
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;

    // ADD EMLOYEES PANEL
    case "addEmpNav":
      panel = document.getElementById("addEmployees");
      deactivatePanels();
      panel.classList.add("activePanel");
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;

    // REMOVE EMPLOYEES PANEL
    case "removeEmpNav":
      panel = document.getElementById("removeEmployees");
      deactivatePanels();
      panel.classList.add("activePanel");
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;

    // EDIT EMPLOYEES DETAILS PANEL
    case "editEmpNav":
      panel = document.getElementById("editProfiles");
      deactivatePanels();
      panel.classList.add("activePanel");
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;

    // CHECK EMPLOYEE DETAILS PANEL
    case "checkEmpNav":
      panel = document.getElementById("checkProfiles");
      deactivatePanels();
      panel.classList.add("activePanel");
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;

    // SHOW ALL EMPLOYEES PANEL
    case "showAllEmpNav":
      panel = document.getElementById("allProfiles");
      deactivatePanels();
      panel.classList.add("activePanel");
      document.getElementById(buttonID).classList.add("current");

      // visual data testing
      console.log(panel.classList, panel.id);
      break;
  }
}
