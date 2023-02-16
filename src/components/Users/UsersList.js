import React from 'react'
import Card from '../UI/Card';
import classes from './UserList.module.css';

const UsersList = (props) => {
  return (
    <div>
      
      <Card classProp = {classes.users}>
        <ul>
            {props.users.map((user) => (
            <li>
                {user.name} ({user.age} years old)
            </li>
            ))}
        </ul>
      </Card>
      
    </div>
  )
}

export default UsersList;