function People() {
    return (
      <div className="container  px-3 py-5 ">
        <h2 className="text-center fs-1 mt-5 mb-5" style={{ color: "#424242" }}>People</h2>
        <div className="row">
          <div className="col text-center">
            <img
              src="media/images/0001.JPG"
              alt="developer img"
              className="img-fluid"
              style={{
                width: "295px",
                height: "295px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <h5 className="mt-3"style={{ color: "#424242" }}>Mithilesh Salunkhe</h5>
            <p>Web Developer</p>
          </div>
          <div className="col-12 col-md-7 text-sm-start text-center text-muted">
            <p className="mt-3">
              Mithilesh Santosh Salunkhe is a passionate web developer
              specializing in the MERN stack. With a strong foundation in both
              front-end and back-end development, he focuses on building scalable,
              user-friendly web applications. His experience in databases, API
              development, and responsive design enables him to create seamless
              digital solutions.
            </p>
            <p>Playing cricket is his zen.</p>
            <p>
              <div className="flex space-x-4 mt-4">
              Connect on
                <a
                  href="https://www.linkedin.com/in/mithilesh-salunkhe-777921256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-decoration-none mx-2"
                >
                  LinkedIn
                </a>
                <span>|</span>
                <a
                  href="https://github.com/Mithilesh-salunkhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500  text-decoration-none mx-2"
                >
                  GitHub
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default People;