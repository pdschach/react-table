import { useEffect, useState } from "react";
import UserRow from "./userRow";




const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
      const headers = { 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDY1MzQ5NzMsImV4cCI6MTcwNjYyMTM3Mywicm9sZXMiOlsiUk9MRV9IT1NQSVRBTF9BRE1JTiJdLCJ1c2VybmFtZSI6ImdlYnJ1aWtlcjEwMUBhbWFuZHVzLmJyb2VkZXJzdmFubGllZmRlLmJlIiwibG9naW5faGFzaCI6IjdhZTZhOWQzMWE2ZGVlYTg4NTgyZDYyYTUyZDgyNzEwZGU4YjEwZWQifQ.EBiH_OV_2_Sjiz29mgx_8rpNL9lx3qBuX9ecoAHA596Ju9lz9bJ3CZ7MBbZUaFYm2vP9nI1gVe2Wu4PQ263B7JfSjhqW1Z39chD0AldRxGFl9Al5Z8DUj5LNeQMuf6C04pXtDxNCx2mpqjMDwDibwgLLrYCH6U2LK1eWLuUlFPeuuds8dqxXv-Ukn_7qGf2wYozdEXHr4qe6tHnEA4JS-cNiPh1xEXaX7vrv-CgcLSCqsE5Kp7sfRQUWgLuVOGjuGNbRZ6qH0E5t3AFTlrDVpTnT6lPLcKMxHPRGTftHiIFSnoi5zVLgGKnnS9uB2T3KNy17sOyKC9LRKL36j4xSGu0o8opci26GbeAgl49a2YCFnxe2WVNwWgiAZm1GulfRBbjdHnYDbVapUTB-t0UjjNW7l-n0EoYqxDOa4vgMBEOt0-mcN5ohTvuontprUuJ1bMe6B_lzB18mseJ1D50onBEvb17AN_G-bD7sVKK_Inl-f0I-dP1pU3pN6TCnHCsSu-cQAIlJ_CCnA3IAoZuayhvtz0UaPQkemg9yN-8frPn0uxXrNerZbNq-4wVinZpK4Dlw28MioBJKRv8FKi5POCRuGEE273pP4jv1X8JKvqxmoC0lPh7peUdKh9RgPxJBECo3UZORToSNDTcD_yHO2_i8SRKzxob6YSAFjCQ0fCI" };
      fetch('https://api.interneo.pro/internship/daterange/2023-01-26/2025-01-25?getBadges=true', { headers })
          .then(response => response.json())
          .then(data => {setUsers(data.data)
          }
          ); 
      }, []);

  


      return (
        <div>

           { console.log(users) }
            {/* { console.log(interns)  }
            
            {interns.map(intern => 
                (<p key={intern.id}>{intern.email}</p> ))} */}
            
            <table className="table table-hover ">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th >School</th>
                    <th>Voornaam</th>
                    <th>Familienaam</th>
                    <th>Email</th>
                    <th>Afdeling</th>
                    <th>Oppleiding</th>
                    <th>Start</th>
                    <th>Eind</th>
                    <th>Account</th>
                    <th>Laptop</th>
                    <th>Datum Aangemaakt</th>
                    <th>Status</th>
                  </tr>
                </thead>
                
            <tbody>
                {users.map(user => 
                (<UserRow key={user.id} user={user} />))}
            </tbody>
              </table>
        </div>
      );
};

export default UserList;