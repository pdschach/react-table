import moment from "moment"
import { format } from 'date-fns'
import DisplayStatus from "@/helpers/statusFormatter";

export const COLUMNS = [
    {
        Header: 'id',
        accessor: 'id'
    },
    {
        Header: 'School',
        accessor: 'schoolName'
    },
    {
        Header: 'Voornaam',
        accessor: 'firstname'
        
    },
    {
        Header: 'Familienaam',
        accessor: 'lastname'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Startdatum',
        accessor:  'startDate.date',
        Cell: ({ value }) => { return format(value, 'dd/MM/yyyy')}
          
          
    },
    {
        Header: 'EindDatum',
        accessor:  'endDate.date',
        Cell: ({ value }) => { return format(value, 'dd/MM/yyyy')}
          
    },
    {
        Header: 'Afdeling',
        accessor: 'sectorName'
    },
    {
        Header: 'Opleiding',
        accessor: 'newSectionName'
    },
    
    {
        Header: 'Account',
        accessor: 'freefields[0].fieldValue'
    },
    {
        Header: 'Laptop',
        accessor: 'freefields[1].fieldValue'
    },
    {
        Header: 'Datum Aangemaakt',
        accessor:  'createdAt.date',
        Cell: ({ value }) => { return format(value, 'dd/MM/yyyy')}
    },
    {
        Header: 'Status',
        accessor: 'state',
        Cell: ({ value }) => { return DisplayStatus(value)}
    }
]