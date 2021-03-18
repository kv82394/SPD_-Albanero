try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; 
  
    console.log('End of try (never reached)');  // (2)
  
  } catch (err) {
  
    console.log(`Error has occurred!`); // (3)
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  
  }
  try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; 
  
    console.log('End of try (never reached)');  // (2)
  
  } catch  {//without err
  
    console.log(`Error has occurred!`); // (3
  
  }
  //throwing own error
//   try {
//     let str = "ha ha ah blah blahh blah"
//     //let error = new Error(str)
//     console.log('Start of try runs');  // (1) <--
  
//     lalala; 
  
//     console.log('End of try (never reached)');  // (2)

//     throw new Error(str);
//   } catch (err) {
  
//     console.log(err); // (3)
  
//   }
try {

    console.log('Start of try runs');  // (1) <--
  
    lalala; 
  
    console.log('End of try (never reached)');  // (2)
  
  } catch  {//without err
  
    console.log(`Error has occurred!`); // (3
  
  }finally{
      console.log("run at any condition")
  }
