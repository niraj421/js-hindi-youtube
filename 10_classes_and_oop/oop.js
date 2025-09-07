
const getUserDetails = {
    username: "hitesh",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
     //  console.log(`Username: ${this.username}`);
    // console.log(this);

      }
}
function user(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
    
  }



//  return this
}



//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);
const userOne = new user("hitesh",12,true)
const userTwo = new user("chaiAurCode",11,false)
console.log(userOne.constructor);
//console.log(userTwo);

