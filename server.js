const express=require("express")
const bodyparser=require("body-parser")
const axios=require("axios")

const server=express()
const port=3000

server.use(bodyparser.json())

server.get('/api/listusers',async(req,res) =>{

    try {

        const result= await axios.get('https://reqres.in/api/users?page=2')

        const data=result.data.data

        res.json(data)
        
    } catch (error) {

        res.status(404).json({error:"Users not found"})
        
    }

    
})

server.get('/api/singleuser',async(req,res)=>{

    try {

            const result=await axios.get('https://reqres.in/api/users/2')

            const data=result.data.data
            res.json({user:data})

        
    } catch (error) {

            res.status(404).json({error:"User not found"})
        
    }

})


server.get('/api/listres', async (req, res) => {
    try {

            
            const result = await axios.get('https://reqres.in/api/unknown')
  
      
            const data = result.data.data
  
      res.json({ resources:data })
    } catch (error) {
     
      res.status(404).json({ error: 'Resources not found' })
    }
  })

  server.get('/api/singleres', async (req, res) => {
    try {
      
            const result = await axios.get('https://reqres.in/api/unknown/2')
  
        
            const data = result.data.data
  
    
            res.json({ resource: data })
    } catch (error) {

      res.status(404).json({ error: 'resource not found' })
    }
  })



 server.get('/api/singleresnotfound', async (req, res) => {
    try {
      
            const result = await axios.get('https://reqres.in/api/unknown/23')
  
     
            const data = result.data
  
    
            res.json({ data })
    } catch (error) {
      
      res.status(404).json({ error: 'resource not found' })
    }
  }) 


  server.get('/api/singleusernotfound', async (req, res) => {
    try {
      
            const result = await axios.get('https://reqres.in/api/users/23')
  
     
            const data = result.data
  
    
            res.json({ data })
    } catch (error) {
      
      res.status(404).json({ error: 'user not found' })
    }
  })








  
  server.post('/api/createuser', async (req, res) => {
    try {
      
          const name="John"
          const job='Smith'


            const response = await axios.post('https://reqres.in/api/users',{name,job})
  
     
             const newdata = response.data
  
    
            res.json({ users: newdata })
    
    } catch (error) {
    
      res.status(404).json({ error: 'User not added' })
    }
  }) 







server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  });
  