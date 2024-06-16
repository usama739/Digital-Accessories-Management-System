const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const Users=require('../schema/users')
const {getUserByEmail,hashPassword,deleteUserByEmail,getUserById}=require('../helpers/helpers')

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    
    const user=await getUserByEmail(email);
    console.log(user);
    if(!user)
     res.status(404).json({error:'Email & Password do not match'});
    
    const pascode=await bcrypt.compare(password,user.password);
    if(!pascode)
     res.status(401).json({error:'Invalid Credentials'});
     
     res.status(200).json({message:'user signed in succesfuly',user}); 
});

 router.post('/signup',async (req,res)=>{
     
    const {fullName,email,password,confirmPassword}=req.body;
    if (password!=confirmPassword)
     res.status(400).json({error:'passwords do not match!'})
    
     try {
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=new Users({fullName,email,password:hashPassword});
        
        newUser.save().then((user)=>{
            res.json({message:'user registered successfuly',user})
         })
     } catch (error) {
         console.error("Error",Error);
     }
    

});

router.get('/find/:id',async (req,res)=>{
    let userId=req.params.id;
      try {
        const user=await Users.findById(userId)
       
        if(!user)
        res.status(404).json({error:' get by id not succesful'})
        
         res.json({message:'User getById successfuly',user})
      } catch (error) {
         console.error({message:"Error finding User"});
         res.status(404).send({error:"User not found by id : "+userId});
      }    

    });
router.get('/email/:email',async (req,res)=>{
        let userEmail=req.params.email;
          try {
            const user=await Users.findOne({email:userEmail})
           
            if(!user)
            res.status(404).json({error:' getByEmail not succesful'})
            
             res.json({message:'User getByEmail successfuly',user})
          } catch (error) {
             console.error({message:"Error finding User"});
             res.status(404).send({error:"User not found by id : "+userId});
          }    
    
        });
        
router.get('/body/email',async (req,res)=>{

            const {email}=req.body;
            
            console.log(email)
              try {
                const user=await Users.findOne({email:email})
               
                if(!user)
                res.status(404).json({error:' getByEmail not succesful'})
                
                res.json({message:'User getByEmail successfuly',user})
              } catch (error) {
                 console.error({message:"Error finding User"});
                 res.status(404).send({error:"User not found by id : "});
              }    
        
            });

router.delete('/delete',async (req,res)=>{
   
   try {
      const {email}=req.body
    const user=await getUserByEmail(email);
    console.log(user)
    if(!user)
    res.status(404).json({error:'User not found'});
    
    await deleteUserByEmail(email)
    res.status(200).json({message:'User deleted '});
      
   } catch (error) {
      console.log('Error deleting user ',error);
   }
});

router.patch('/update/:id',async (req,res)=>{
    try {
   
   const id=req.params.id;
   const user=await getUserById(id);

   if(!user)
   res.status(404).json({error:'Error Finding the user : '});
   const {fullName,email,password}=req.body;

   const updateableFields={}
   if(fullName)
   updateableFields.fullName=fullName;
   if(email)
   updateableFields.email=email;
   if(password){
      updateableFields.password=bcrypt.hashSync(password,10);
   }

   const updatedUser=await Users.findByIdAndUpdate(id,{$set:updateableFields},{new:true});

   if(!updatedUser)
   res.status(404).json({error:'User not updated'});

   res.status(200).json({message:'User updated Successfuly ',updatedUser});
}
   catch (error) {
   console.log('Error Updating User : ',error);   
   }
});

module.exports=router;