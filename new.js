const axios = require('axios')

const URL = 'https://reqres.in/api'



//list users
async function getAllUsers() {
  try {
    const response = await axios.get(`${URL}/users?page=2`)
    const userData = response.data
    console.log('All Users Data:', userData)
  } catch (error) {
    console.error('Error fetching all users:', error.message)
  }
}

//single user
async function getUsers() {
    try {
      const response = await axios.get(`${URL}/users/2`)
      const userData = response.data
      console.log('User Data:', userData)
    } catch (error) {
      console.error('Error fetching users:', error.message)
    }
  }
  

//single user not found
async function singleusernotfound() {
    try {
      const response = await axios.get(`${URL}/users/23`)
      const userData = response.data
      console.log( userData)
    } catch (error) {
      console.error( "single user not found",error.message)
    }
  }


//resource list

async function getreslist() {
    try {
      const response = await axios.get(`${URL}/unknown`)
      const userData = response.data
      console.log('Resource list:', userData)
   
    } catch (error) {
      console.error('Error loading resources:', error.message)
    }
  }

//single resource

async function getsingleres() {
    try {
      const response = await axios.get(`${URL}/unknown/2`)
      const userData = response.data
      console.log('single resource:', userData)
   
    } catch (error) {
      console.error('Error loading resources:', error.message)
    }
  }


//single resource not found
async function singleresnotfound() {
    try {
      const response = await axios.get(`${URL}/unknown/23`)
      const userData = response.data
      console.log('single resource:', userData)
   
    } catch (error) {
      console.error("single resource not found", error.message)
    }
  }


//create user POST
async function createUser() {
  try {
    const response = await axios.post(`${URL}/users`, { name: 'dinesh', job: 'trainee' })
    const newUserData = response.data
    console.log('New User Data:', newUserData)
    console.log('User added successfully')
  } catch (error) {
    console.error('Error creating user:', error.message)
  }
}




getAllUsers()
getUsers()
getreslist()
getsingleres()
singleresnotfound()
singleusernotfound()
createUser()


