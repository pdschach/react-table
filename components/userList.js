import { useState } from "react";
import UserRow from "./userRow";


const usersArray = [
  {
    id: 1,
    Naam: "Jos",
    Voornaam: "Cross",
    email: "Jos.Cross@test.be",
    Obasinaam: "joscross",
    status: false
  },
  {
    id: 2,
    Naam: "Pol",
    Voornaam: "Hol",
    email: "Pol.Hol@telenet.be",
    Obasinaam: "polhol",
    status: true
  },
];



const UserList = () => {
    const [users, setUsers] = useState(usersArray);
    const [counter, setCounter] = useState(0); 
    
    const buttonClicked = () => setCounter(counter + 1);

    const addUser = () => {
      setUsers([
        ...users,
        {
          id: 3,
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
            {counter}
              <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                 users
                </h5>
              </div>
              <table className="table table-hover">
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
              <button className="btn btn-primary" onClick={addUser}>
                Add
              </button>
            </> 
    );
};

export default UserList;