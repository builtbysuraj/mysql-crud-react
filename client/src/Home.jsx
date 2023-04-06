import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/`);
        if (!res.ok) throw new Error("Res not OK");
        const data = await res.json();
        setData(data);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/delete/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Product List</h2>
        <span className="d-flex justify-content-end">
          <Link to={"/create"} className="btn btn-success">
            Create
          </Link>
        </span>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td> {e.name} </td>
                  <td> {e.description} </td>
                  <td>
                    <Link to={`/read/${e.id}`} className="btn btn-sm btn-info">
                      Read
                    </Link>
                    <Link
                      to={`/edit/${e.id}`}
                      className="btn btn-sm btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(e.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
