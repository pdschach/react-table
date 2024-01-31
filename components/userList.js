import { useEffect, useState, useRef } from "react";
import UserRow from "./userRow";




const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const headers = { 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDY2ODYwOTMsImV4cCI6MTcwNjc3MjQ5Mywicm9sZXMiOlsiUk9MRV9IT1NQSVRBTF9BRE1JTiJdLCJ1c2VybmFtZSI6ImdlYnJ1aWtlcjEwMUBhbWFuZHVzLmJyb2VkZXJzdmFubGllZmRlLmJlIiwibG9naW5faGFzaCI6IjdhZTZhOWQzMWE2ZGVlYTg4NTgyZDYyYTUyZDgyNzEwZGU4YjEwZWQifQ.J3rh5xFBDYGpLgcss7jEBco7diX40UBs3LfKE_C4B-LxXZVGRfsrBtRQSsDphs0wcfCYF9hYDo-ZRUrsjOwuLFsH19nBVTRFjlf1EQ0eBgV-v0rjBRgeg4IpOILVO7KXeSQtz-wyAX5NMO0Vm3xS6jjt-xA3tc8DE4Vg9J0pmAKOrPNuebADRm6Do0TWkMRRdhDl0n7hhgFv1-jMIdVAg60NUzx7TwfqjjFM4NG4uYm9_81EhRj1iJNcaMjqO8JxSP8krc_ASizObQu3gUT21OohVN9kUxRcoA-pctXNc61H7A2BpyP9tgDkgYeqfQBanN_OaeNZ8ok2Yfk2PtsPhBL0rMAH4dJzbhtIFEE--fW4CnbK1W9mv7fx-j68FDDqryz9jxWezQSqUXXwmg4tGfTwbT47J1njgHRk_BH0oiDmcbdpBZ9yVM27EUkMwxNQiLL95L7HdOCy8RzDpRrfMkY-Emo9r7LUSUMHoxVu1-_lACJiFPWBFU1n_4TF2WCON8TMPjNoAq0U_uX7fEG_qQn7H9QOMynOis6sXcLHHx9NbBAk9_Z-2n7z2raGVcl3ebeU09nIpslHSfT7gqTsnD9AA9wlofsQXw6sejAI6-0kNFUV9SWXGS2mVxJ2G5KtToGQSKR8ugKAB269U9JgvATq3Jfap-vsdtfWXTo_4gg" };
      fetch('https://api.interneo.pro/internship/daterange/2023-01-26/2025-01-25?getBadges=true', { headers })
          .then(response => response.json())
          .then(data => {setUsers(data.data)
          }
          ); 
      }, []);

      let inputSearch = useRef(null);
      useEffect(() => {
          inputSearch.current.focus();
      });

      const[searchUser,setSearchUser] = useState('');

      return (
        <div>
        <div className="text-center">
            <input 
            type="text" 
            placeholder="Zoek op email" 
            className="mb-2 p-1" 
            ref={inputSearch}
            onChange={(e)=>setSearchUser(e.target.value)}
            ></input>
        </div>
            
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>School</th>
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
                {users.filter((user) => { 
                  if (searchUser === "" ) {
                    return user;
                  } else if (!user.email)
                  {
                    return "";
                  }
                  else if (
                    (user.email)
                    .toLocaleLowerCase()
                    .includes(searchUser.toLocaleLowerCase())
                    ) {
                      return user;
                    }
                }).map(user => 
                (<UserRow key={user.id} user={user} />))}
            </tbody>
              </table>
        </div>
      );
};

export default UserList;