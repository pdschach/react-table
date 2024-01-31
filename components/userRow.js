import obasify from "@/helpers/obasiFormatter";
import moment from "moment";
import DisplayStatus from "@/helpers/statusFormatter";

const UserRow = ({ user }) => {
    
    let today = new Date();
    let dateTD;

    if(new Date(user.endDate.date) < today)
        dateTD = <td>{user.id}</td>;



    else 
        dateTD = <td className="text-primary">{user.id}</td>


    return(
        <tr>  
            {dateTD}
            <td>{user.schoolName}</td>
            <td>{user.firstname}</td>
            <td className={`${new Date(user.endDate.date) > today ? "text-primary" : "" }`}>{user.lastname}</td>
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

