import { useEffect, useState } from "react";
import UserRow from "./userRow";




const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isShaking, setShaking] = useState(false);


    useEffect(() => {
      const fetchUsers = async () => {
      const response = await fetch("/api/users"); 
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
    }, []);

  

    const addUser = () => {
      setUsers([
        ...users,
        {
          id: 5,
          Naam: "John",
          Voornaam: "Revak",
          email: "John.Revak@telenet.be",
          Obasinaam: "johnrevak",
          status: false
        },
      ])
    };

    return (
            <>
           
              <div className="">
                <h5 className="themeFontColor text-center ">
                 users
                </h5>
              </div>
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th>Naam</th>
                    <th>Voornaam</th>
                    <th>email</th>
                    <th>Obasinaam</th>
                  </tr>
                </thead>
            <tbody>
                {users.map(u => 
                (<UserRow key={u.id} user={u} />))}
            </tbody>
              </table>
              {/* <button className="btn btn-primary" onClick={addUser}> */}
              <button className="btn btn-primary" onClick={addUser}>
                Add
              </button>
            </> 
    );
};

export default UserList;