import User from "../models/userModel";
 const seedUser = async ()=>{

    await  User.bulkCreate([
        {userName:'test',
            email:'test@gmail.com',
            age:21,
            gender:'M',
            location:'kigali',
            fullname:'test data',
            phone:250780000000,
            password:'234',
            isBlocked:false,
            isVerified:false}
])
 }
 seedUser()
 .then(()=>
{
    console.log('user seeded ')
})
.catch(err=>{
    console.error('failed to seed user', err)
})