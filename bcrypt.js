//import bcrypt from 'bcryptjs';
const bcrypt=require('bcryptjs');
let user={
    name:'Rukmini',
    email:'midudalarukku@123',
    Password:'rukmini@2002'

};
let salt=bcrypt.genSaltSync(10);
let hashedPassword=bcrypt.hashSync(user.Password,salt);
console.log(hashedPassword);

let updatedUser={
    ...user,
    Password:hashedPassword
};
//console.log(updateduser);
//comparing passwords
if(bcrypt.compareSync('midudalarukku@123',hashedPassword))
{
    console.log("password is matched,you are logged");
}
else{
    console.log("enter the password");
}