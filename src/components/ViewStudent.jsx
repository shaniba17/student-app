import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewStudent = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Roll No</th>
                        <th scope="col">College</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <td>{value.name}</td>
                                    <td>{value.rollno}</td>
                                    <td>{value.college}</td>
                                    <td>{value.address}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewStudent