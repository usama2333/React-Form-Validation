import React , {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const  AddUser = (props) => {

    const [enteredUsername , setEnteredUsername] = useState('');
    const [enteredAge , setEnteredAge] = useState('');
    const [error , setError] = useState();



    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title : 'Invalid Input',
                message : 'Please enter a valid name or age (Non-empty) values'
            });
            return;
        }

        if(+enteredAge < 1) {
            setError({
                title : 'Invalid Age',
                message : 'Please enter a valid age (age > 0)'
            });
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

    const errorHandler = () => {
        setError(null);
    };

  return (
    <div>
    {error && <ErrorModal title ={error.title} message = {error.message} onConfirm ={errorHandler} />}
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