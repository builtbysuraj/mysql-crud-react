import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const { Id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/read/${Id}`)
      .then((res) => setData(res.data[0]));
  }, []);

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Product Details</h2>
        <Link className="btn btn-primary" to={"/"}>
          Back
        </Link>
        <div className="pt-3">
          <h3> ID: {data.id} </h3>
          <h3>Name: {data.name} </h3>
          <h3>Description: {data.description} </h3>
        </div>
        <Link className="btn btn-primary" to={`/edit/${data.id}`}>
          Edit
        </Link>
      </div>
    </div>
  );
}
