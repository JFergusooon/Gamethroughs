package ferguson.jeffrey.walkthroughproject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class ExceptionHandlingConfiguration extends ResponseEntityExceptionHandler {
	
        @ExceptionHandler(NoSuchAuthorityException.class)
        protected ResponseEntity<ResponseBody> handleNoSuchAuthorityException(
                NoSuchAuthorityException ex,
                WebRequest request) {
            
            ResponseBody responseBody = new ResponseBody();
            responseBody.setCode("NO_SUCH_AUTHORITY");
            responseBody.setMessage("Cannot Give Authority as that Authority Level Does Not Exist");
            
            ResponseEntity<ResponseBody> response = new ResponseEntity<>(
                    responseBody, 
                    HttpStatus.BAD_REQUEST);
            return response;
        }
        
        public static class ResponseBody {
            private String code;
            private String message;
            
            public String getCode() {
                return code;
            }
            public void setCode(String code) {
                this.code = code;
            }
            public String getMessage() {
                return message;
            }
            public void setMessage(String message) {
                this.message = message;
            }
            
            
        }
    }
    
