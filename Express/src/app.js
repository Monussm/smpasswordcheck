const express=require("express");
const app=express();
const port=process.env.port || 3000
const path=require("path");
const hbs=require("hbs")
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}));
app.use(express.static(mypublic));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb+srv://monug1513:monu123@mangement.4fzmmsn.mongodb.net/');
}
const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
    emailid:String,
    mobilenumber:Number,
    password:String,
    confirmpassword:String
  });
const Teacher = mongoose.model('Teacher',teacherSchema);

app.get("/",(req,res)=>{

res.render("index")

})
app.get("/teachersign",(req,res)=>{

res.render("teachersign")


})
app.get("/teachersignup",(req,res)=>{
res.render("teachersignup")
})

app.post("/teachersignup",async(req,res)=>{

const password=req.body.password
const confirmpassword=req.body.confirmpassword
const check=await Teacher.findOne()
console.log(password,confirmpassword,check)
if(check.password===password){
if(check.confirmpassword==confirmpassword){

res.send("Password and confirmpassowrd match")
console.log("match")


}
else{

res.send("Passwor and confirmpassowrd not match")
console.log("Password and confirmpassowrd not match")


}




}
else{

console.log("match")


}



const teacherinfo = new Teacher({ 
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  emailid:req.body.emailid,
  mobilenumber:req.body.mobilenumber,
  password:req.body.password,
  confirmpassword:req.body.confirmpassword
});
// teacherinfo.save()
// res.send("Successful")
console.log(teacherinfo)

})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")



})