import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error:any){
        alert("unexpected error occurs");
    }
}