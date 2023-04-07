import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div>
        <h1 style={{ fontWeight: "bold", textAlign: "center" }}>404 Error</h1>
        <h2>Route Not Found</h2>
        <Link className="btn btn-primary mt-2" to={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
