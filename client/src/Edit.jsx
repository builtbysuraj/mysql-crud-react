import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { Id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    description: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:4000/read/${Id}`).then((res) =>
      setValues({
        ...values,
        name: res?.data[0]?.name,
        description: res?.data[0]?.description,
      })
    );
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/update/${Id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Edit Product</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              value={values?.name ?? ""}
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              value={values?.description ?? ""}
              type="text"
              placeholder="description"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-success mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
