import { Link } from "react-router-dom";


function NotFound() {
    return ( 
        <div className="container">
            <div className="row mt-5 mb-5 ms-4">
                <h1 className="text-dange">404 Not Found</h1>
                <p className="fs-5">Sorry, page you are looking for does not exist</p>
                <p className="fs-5">
                We couldn’t find the page you were looking for. <br/>Visit <Link to="/" className="text-decoration-none fw-semibold"> Stock pulse's home page</Link> 
                </p>
            </div>
        </div>
     );
}

export default NotFound;