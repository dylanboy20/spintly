const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/users', async (req, res) => {
  try {
   
    const response = await axios.get('https://reqres.in/api/users/2');

   
    const userData = response.data.data;
    console.log(userData)

    //res.json({ users: userData });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/allusers', async (req, res) => {
    try {
  
      const response = await axios.get('https://reqres.in/api/users?page=2');
  
     
      const userData = response.data.data;
  
      res.json({ users: userData });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/usernotfound', async (req, res) => {
    try {
     
      const response = await axios.get('https://reqres.in/api/users/23');
  
 
      const userData = response.data.data;
  
      
      res.json({ users: userData });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }); 


  app.get('/api/listres', async (req, res) => {
    try {

      const response = await axios.get('https://reqres.in/api/unknown');
  
      
      const userData = response.data.data;
  
      res.json({ users: userData });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }); 

  app.get('/api/singleres', async (req, res) => {
    try {
      
      const response = await axios.get('https://reqres.in/api/unknown/2');
  
     
      const userData = response.data.data;
  
    
      res.json({ users: userData });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }); 

  app.get('/api/singleresnotfound', async (req, res) => {
    try {
      
      const response = await axios.get('https://reqres.in/api/unknown/23');
  
     
      const userData = response.data.data;
  
    
      res.json({ users: userData });
    } catch (error) {
      console.error('Error', error.message);
      res.status(404).json({ error: 'resource not found' });
    }
  }); 

  
  app.post('/api/createuser', async (req, res) => {
    try {
      
          const name="dylan"
          const job='trainee'


      const response = await axios.post('https://reqres.in/api/users',{name,job});
  
     
      const newdata = response.data;
  
    
      res.json({ users: newdata });
      console.log("user added succesfully")
    } catch (error) {
      console.error('Error', error.message);
      res.status(404).json({ error: 'resource not found' });
    }
  }); 




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
