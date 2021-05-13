var user = function (name,email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    console.log(this.name);
  }
}

user.prototype.getEmail = function () {
  console.log(this.email);
}

let user1 = new user('sandeep' , 'ahuja538@hmail.com');


let user2 = new user('sandeep2' , 'ahuja2538@hmail.com');


user1.getName();
user2.getName();

user2.getEmail();
