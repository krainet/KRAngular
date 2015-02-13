/* 
 * Configuration File
 */

//URL from api to test api resources
var API_URL = 'http://validate.jsontest.com/';

//Send custom header in your request and response headers
//Used for example to send auth-cookies in headers
var USE_CUSTOM_HEADER = false;
var CUSTOM_HEADER = 'Accept-Language';


//To test login with facebook you need to setup krangular.com as your local virtualhost
//to obtain login responses , try it!
var LOGIN_FACEBOOK_REDIRECT_URI = "http://krangular.com:8080/auth/facebook/";
var LOGIN_FACEBOOK_CLIENT_ID    = "723035201084388";
var LOGIN_FACEBOOK_SCOPE        = ["email"];
