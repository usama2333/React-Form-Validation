import React , {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const  AddUser = (props) => {

    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge , setEnteredAge] = useState('');



    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if(+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername,enteredAge);

        // console.log('Test output');
        // console.log(enteredUsername);
        // console.log(enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = ((event) => {
        setEnteredUsername(event.target.value);
    });


    const ageChangeHandler = ((event) => {
        setEnteredAge(event.target.value);
    });

  return (
    <div>
{/* here we send prop to the card component and classes are add here with props */}
    <Card classProp = {classes.input}>
      <form onSubmit={addUserHandler}>

        <label htmlFor="username">User Name</label>
        <input id='username' type="text" value={enteredUsername}  onChange={usernameChangeHandler}/>

        <label htmlFor="age">Age (Years)</label>
        <input id='age' type="number" value={enteredAge}  onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>

      </form>
    </Card>
      
    </div>
  )
}
export default  AddUser;