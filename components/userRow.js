import obasify from "@/helpers/obasiFormatter";
import moment from "moment";
import DisplayStatus from "@/helpers/statusFormatter";


const UserRow = ({ user }) => {
    return(
        <tr>  
            <td>{user.id}</td>
            <td>{user.schoolName}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.sectorName}</td>
            <td>{user.newSectionName}</td>
            <td>{(moment(user.startDate.date).format('DD-MM-YYYY'))}</td>
            <td>{(moment(user.endDate.date).format('DD-MM-YYYY'))}</td>
            <td>{!user.freefields ? "blanco" : user.freefields[0].fieldValue}</td>
            <td>{!user.freefields ? "blanco" : user.freefields[1].fieldValue}</td>
            <td>{(moment(user.createdAt.date).format('DD-MM-YYYY'))}</td>
            <td>{DisplayStatus(user.state)}</td>
        </tr>);
    
};


export default UserRow;

// function obasify(obasinaam)
// {
//     return (obasinaam.substring(0, 6));
// }

