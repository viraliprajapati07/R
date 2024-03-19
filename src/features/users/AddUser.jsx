import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";
export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  
  const [error, setError] = useState(null);

  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleCity = (e)=> setCity(e.target.value);
  

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = () => {
    if (fname && lname && city) {
      dispatch(
        userAdded({
          id: usersAmount + 1,
          fname,
          lname,
          city
        
        })
      );

      setError(null);
      history.push("/");
    } else {
      alert("PLEASE FILL ALL FIELD")
    }

    setFname("");
    setLname("");
    setCity("");
  
  };

  return (
    <div>
      <div>
        <h1>ADD NAME </h1>
      </div>
      <div>
        <div>
          
          <label htmlFor="nameInput">FIRST NAME :</label>
          <input
            
            type="text"
            placeholder="Your first Name"
            id="nameInput"
            onChange={handleFname}
            value={fname}
          />
          <label htmlFor="emailInput">LAST NAME :</label>
          <input
            
            type="text"
            placeholder="Your last name"
            id="emailInput"
            onChange={handleLname}
            value={lname}
          />
          
          <label htmlFor="nameInput">City :</label>
          <select value={city} onChange={handleCity}> 
          <option value="" disabled hidden>Select City</option>
          <option value="Mehsana">Mehasana</option> 
          <option value="Gandhinagar">Gandhinagar </option> 
          <option value="Surat">Surat</option> 
          <option value="Patan">Patan</option> 
          </select>  
          <br/>
          {error && error}

          <br/>
          <button onClick={handleClick} 
           style={{backgroundColor:'blue', color:'white'}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
