import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const  AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

  return (
    <div>
{/* here we send prop to the card component and classes are add here with props */}
    <Card classProp = {classes.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor="username">User Name</label>
        <input id='username' type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id='age' type="number" />

        <Button type='submit'>Add User</Button>

      </form>
    </Card>
      
    </div>
  )
}
export default  AddUser;