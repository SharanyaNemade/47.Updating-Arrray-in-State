import { useState } from "react";

const DerivedState = () =>{

    const[users,setUsers] = useState([]);
    const[user,setUser] = useState('');

    
    const handleAddUsers = () => {
        setUsers([...users,user])
    }


    const total = users.length;
    const last = users[users.length - 1];
    const unique = [...new Set(users)].length

    return(
        <div>
            <h1>Derived State in React Js</h1>


            <h2>Total User: {total}</h2>
            <h2>Last User: {last}</h2>
            <h2>Unique User: {unique}</h2>


            <input onChange={(event) => setUser(event.target.value)} type="text" placeholder="Add New User"/>
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item,index) => {
                    return <h4 key={index}>{item}</h4>
                    
                })
                
            }
        </div>
    )
}


export default DerivedState;