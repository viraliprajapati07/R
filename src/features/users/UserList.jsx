import {  userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };

  return (
    <div>
      <div>
        <h1> LISTING NAME </h1>
      </div>
      <div>
        <div>
          <Link to="/add-user">
            <button style={{backgroundColor:'navy', color:"white"}}> + ADD NAME</button>
          </Link>
        </div>
      </div>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>FNAME</th>
                <th>LNAME</th>
                
                <th>CITY</th>
                
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, fname, lname,  city, }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{fname}</td>
                    <td>{lname}</td>
                    <td>{city}</td>
                    
                    <td>
                      <button onClick={() => handleDelete(id)}
                      style={{backgroundColor:'black', marginRight:'3px', color:'white'}}>Delete</button>
                      <Link to={`/edit-user/${id}`}>
                        <button style={{backgroundColor: "darkgrey", marginLeft:"5px", color:'white'}}>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
