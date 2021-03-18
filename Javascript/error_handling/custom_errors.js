class Error{
    constructor(message){
        this.name = "error";
        this.message = message;

    }
}
class validateError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function test() {
    throw new validateError("Whoops!");
  }
  try {
    test();
  } catch(err) {
    console.log(err.message); // Whoops!
    console.log(err.name); // ValidationError
    console.log(err.stack);
  }
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new validateError("No field: age");
    }
    if (!user.name) {
      throw new validateError("No field: name");
    }
  
    return user;
  }
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof validateError) {
        console.log("Invalid data: " + err.message); 
    } else if (err instanceof SyntaxError) { 
        console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err;
    }
  }
