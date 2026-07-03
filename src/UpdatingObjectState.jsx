import { useState } from "react";

function UpdatingObjectState(){

    const[data,setData] = useState({
        name:'Anil',
        address:{
            city:"Delhi",
            country:'India'
        }
    })


    const handleName = (val) => {
        data.name=val

        setData({...data})
    }


    const handleCity = (city) => {
    data.address.city = city;

    console.log(data);

    setData({ ...data, address:{...data.address,city} });
};



    return(
        <div>
            <h1>Updating Object State</h1>

            <input type="text" placeholder="update name" onChange={(event) => handleName(event.target.value)}/>

            <input type="text" placeholder="update city" onChange={(event) => handleCity(event.target.value)}/>

            <h2>Name:- {data.name}</h2>
            <h2>City:- {data.address.city}</h2>
            <h2>Country:- {data.address.country}</h2>
            {/* <button onClick={() => setName("Anil Sidhu")}>Update Name</button> */}
        </div>
    )
}


export default UpdatingObjectState;