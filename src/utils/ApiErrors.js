class ApiErrors extends Error {
   constructor(
    statuesCode,
    message = "Something went Wrong",
    error = [],
    stack = ""

   ){
       super(message);
       this.statuesCode = statuesCode;
       this.error = error;
       this.stack = stack;
       this.data = null;
       this.message = message;

       if(stack){
        this.stack =stack;
       }
       else{
          Error.captureStackTrace(this,this.constructor);
       }
   }
}

export default ApiErrors;