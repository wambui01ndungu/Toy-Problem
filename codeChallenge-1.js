function getStudentGrade() {
    // Request user input for the student's mark
    const mark = 82;

  
    // Convert the user input to a number and check if it is a valid number
    // between 0 and 100
    const markNumber = Number(mark);
    if (isNaN(markNumber) || markNumber < 0 || markNumber > 100) {
      console.log("Invalid input. Please enter a mark between 0 and 100.");
      return;
    }
  
    // Determine the student's grade based on the mark
    let grade;
    if (markNumber > 79) {
      grade = "A";
    } else if (markNumber >= 60) {
      grade = "B";6                                                                                                                                                                                                                                                                                                                                                                                                                            
    } else if (markNumber >= 50) {
      grade = "C";
    } else if (markNumber >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // Print the student's grade
    
    console.log(`The student's grade is: ${grade}`);
  }
  
  // Example:
  getStudentGrade(82);
            
        
