import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });
  const submitHandle = (e) => {
    e.preventDefault();
    try {
      axios.post(`http://localhost:4000/products`, values).then((res) => {
        console.log(res);
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form action="">
          <h2>Add Product</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="description"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <button onClick={(e) => submitHandle(e)} className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
