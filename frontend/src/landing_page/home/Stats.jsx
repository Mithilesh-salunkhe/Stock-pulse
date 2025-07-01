import { FaArrowRightLong } from "react-icons/fa6";

function Stats() {
    const statsData = [
      {
        title: "Customer-first always",
        description:
          "That's why 1.5+ crore customers trust Stock Pulse with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
      },
      {
        title: "No spam or gimmicks",
        description:
          'No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps that you use at your pace, the way you like.',
      },
      {
        title: "The Stock Pulse universe",
        description:
          "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
      },
      {
        title: "Do better with money",
        description:
          "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
      },
    ];
  
    return (
      <div className="container p-5 md:p-5 mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 text-gray-700 ml-sm-5 text-center text-md-start"  style={{ color: "#424242" }}>
            <h2 className="mb-5">Trust with confidence</h2>
            {statsData.map((item , index)=>(
                <div key={index} className="mb-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="w-75 text-muted">{item.description}</p>
                </div>
            ))}
          </div>
          <div className="col-md-6 col-12 p-md-5 text-center md:text-start mt-5 md:mt-0">
            <img
              src="media/images/ecosystem.png"
                
              alt="Stats"
              className="img-fluid max-w-full h-auto"
            />
            <p className="mt-4 text-center">
                <a className=" fw-semibold text-decoration-none mx-5" href="">Explore our products<FaArrowRightLong style={{fontWeight:"200",marginLeft:"9px"}} /></a>
                <a className=" fw-semibold text-decoration-none" href="">Try Kite demo<FaArrowRightLong style={{fontWeight:"200",marginLeft:"9px"}}/></a>
            </p>

          </div>
        </div>
        <a
            href=""
             className="row mt-5 align-items-center mb-5">
            <img src="media/images/pressLogos.png" 
            alt="Press Logos"  
            className="img-fluid mx-auto d-block" style={{ width: "75%", maxWidth: "700px" }} />
            
        </a>

      </div>
    );
  }
  
  export default Stats;
  