import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [city , setCity] = useState(user.city);
  const [error, setError] = useState(null);

  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);

  const  handleCity= (e)=>setCity(e.target.value);
 

  const handleClick = () => {
    if (fname && lname && city ) {
      dispatch(
        userUpdated({
          id: userId,
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
  };

  return (
    <div>
      <div>
        <h1>EDIT NAME FIELD</h1>
      </div>
      <div>
        <div>
          <label htmlFor="nameInput">FIRST NAME :</label>
          <input
            
            type="text"
            placeholder="Your first name "
            id="nameInput"
            onChange={handleFname}
            value={fname}
          />
         
           <label htmlFor="nameInput">LAST NAME :</label>
          <input
            
            type="text"
            placeholder="Your last Name"
            id="nameInput"
            onChange={handleLname}
            value={lname}
          />
          <label htmlFor="nameInput">City :</label>
          <select value={city} onChange={handleCity}> 
          <option value="" disabled hidden>Select City</option>
          <option value="Mehasana">Mehasana</option> 
          <option value="Gandhinagar">Gandhinagar </option> 
          <option value="Surat">Surat</option> 
          <option value="Patan">Patan</option> 
          </select>  
          <br/>
          {error && error}
          <br/>
          <button onClick={handleClick} 
          style={{backgroundColor:'green', color:'white'}}>
            Save Name
          </button>
        </div>
      </div>
    </div>
  );
}
