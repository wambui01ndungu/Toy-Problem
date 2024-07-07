function speedDetector(speed){
  if (isNaN(speed)||speed<0){
    console.log ("invalid input, please enter a valid number.");
    return;
  }
    //speed limit
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit){
      console.log ("OK")
    } else {
   
    //calculate the number of demerit points
    let demeritPoints = math.floor((speed-speedLimit)/ kmPerDelimeterPoint);{    console.log("points:"+ derimeterPoints);
  
    //Check if demerit points exceed 12
    if (demeritPoints > 12)
      console.log ("licence suspended");
    }
    
  }

//call function to execute
speedDetector(70);