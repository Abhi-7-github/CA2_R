const express=require("express")
const app=express()
app.use(express.json())

port=8394

app.get("/test",async()=>{
    console.log("Server is running")
})

app.post("/submit",async(req,res)=>{
    const {email,username,password,DateOfBirth}=req.body
    try {
        if(!email || !username){
            return res.status(404).json({message:"Email or Username cannot be empty"})
        }
        if(!password){
            return res.status(404).json({message:"Password is requried"})
        }
        if(!password.length<8 || !password.length>16){
             return res.status(404).json({message:"Password length should be greater than or equal to 8 or less than 16"})
        }
        return res.status(200).json({message:"Signup Succesful"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Server Error"})
    }
})


app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`)
})