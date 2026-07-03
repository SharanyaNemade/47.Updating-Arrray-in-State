import { useState } from "react";

function UpdatingArray() {
  // const [name, setName] = useState("");

  const [data, setData] = useState(["anil", "sam", "peter", "tom"]);

  const [dataDetails, setDataDetails] = useState([
    { name: "anil", age: "29" },
    { name: "sam", age: "39" },
    { name: "prem", age: "49" },
    { name: "krip", age: "59" },
    { name: "triyam", age: "69" },
  ]);

  const handleUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };

  const handleAge = (age) => {
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails]);
  };

  return (
    <div>
      <h1>Updating Array in React Js</h1>

      <input
        type="text"
        placeholder="Enter Last user name"
        onChange={(e) => handleUser(e.target.value)}/>

      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />


      <input
        type="text"
        placeholder="Enter Last user age"
        onChange={(e) => handleAge(e.target.value)}/>


      {dataDetails.map((item, index) => {
        return (
          <h4 key={index}>
            {item.name},{item.age}
          </h4>
        );
      })}
    </div>
  );
}

export default UpdatingArray;
