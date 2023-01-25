import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StuListing = () => {
    const [studata, studatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/student/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/student/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/student/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/student").then((res) => {
            return res.json();
        }).then((resp) => {
            studatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Student Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="student/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {studata &&
                                studata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a href="" onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a href="" onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a href="" onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default StuListing;