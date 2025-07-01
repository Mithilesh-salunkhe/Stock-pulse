function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center mt-5 p-3 mb-5">
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid "
            style={{ maxWidth: "80%" }}
          />
        </div>
        <div className="col-md-6 p-3">
          <h1 style={{ color: "#424242" }}>{productName}</h1>
          <p style={{ maxWidth: "70%", color: "#424242" }} className="mt-5">
            {productDescription}
          </p>
          <div className="d-flex gap-3 mt-3">
            <a
              href={tryDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Try Demo →
            </a>
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              Learn more →
            </a>
          </div>
          <div className="mt-4 d-flex gap-3">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="img-fluid"
              />
            </a>
            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
