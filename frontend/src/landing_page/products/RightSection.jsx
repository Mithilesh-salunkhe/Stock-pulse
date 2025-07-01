function RightSection({ 
    imageURL, 
    productName, 
    productDescription, 
    tryDemo, 
    learnMore 
  }) {
    return (
      <div className="container mt-5 p-3"> 
        <div className="row align-items-center p-5 "> 
          <div className="col-md-6 ">
            <h1 style={{ color: "#424242" }}>{productName}</h1>
            <p style={{ maxWidth: "70%", color: "#424242" }} className="mt-5">
              {productDescription}
            </p>
            <div className="d-flex gap-3 mt-3">
              {tryDemo && (
                <a
                  href={tryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Try Demo →
                </a>
              )}
              {learnMore && (
                <a
                  href={learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Learn more →
                </a>
              )}
            </div>
          </div>
          <div className="col-md-6 text-center col-12">
            <img
              src={imageURL}
              alt={productName}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default RightSection;
  