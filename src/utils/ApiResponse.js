class ApiResponse{
    constructor(statusCode,message,data){
        this.statusCode = statusCode;
        this.message = message; 
        this.message = message;
        this.sucess = statusCode >= 200 && statusCode < 400;
    }
}