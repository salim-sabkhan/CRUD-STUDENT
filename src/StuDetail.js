import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const StuDetail = () => {
    const { stuid } = useParams();

    const [studata, studatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/student/" + stuid).then((res) => {
            return res.json();
        }).then((resp) => {
            studatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Student Create</h2>
                </div>
                <div className="card-body"></div>

                {studata &&
                    <div>
                        <h2>The Student name is : <b>{studata.name}</b>  ({studata.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {studata.email}</h5>
                        <h5>Phone is : {studata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            
        </div >
    );
}

export default StuDetail;