import axios from 'axios'

export default class EmployeesService {
    static getListOfEmployees = async () =>  axios.get('/api/employee?pageSize=1000&Include=EmployeeDepartments&Include=EmployeeDepartment').then(({ data }) => data);
}
