import obasify from "@/helpers/obasiFormatter";

const UserRow = ({user}) => {
    return (
        <tr >
        <td style={{color: user.status ? 'green' : 'red'}}>{user.Naam}</td>
        <td>{user.Voornaam}</td>
        <td>{user.email}</td>
        <td>{obasify(user.Obasinaam)}</td>
        <td>{user.afgewerkt}</td>  
      
    </tr>
    );
};

export default UserRow;

// function obasify(obasinaam)
// {
//     return (obasinaam.substring(0, 6));
// }

