import { useEffect, useState, React } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'



export const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            <h1 style={{textAlign:"center", margin:20}}>LIST USERS</h1>
            <Table striped bordered hover >
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Adress</th>
                        <th>Phone</th>
                        <th>Web Site</th>
                        <th>Company</th>
                    </tr>
                </thead>
                {users.map(
                    user =>

                        <tbody key={user.id}>
                            <tr >
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        </tbody>
                )}
            </Table>

        </div>
    )
}

export default UserList