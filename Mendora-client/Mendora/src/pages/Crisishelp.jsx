import React from "react";
import "./CrisisHelp.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Col, Row } from "react-bootstrap";

const CrisisHelp = () => {
  const handleQuickExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="crisis-help-page" style={{
      backgroundColor: "#e6f4f1",
      minHeight: "100vh",
      padding: "2rem",
    }}>
      <div className="sticky-top" style={{ top: "20px", zIndex: 1000 }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 p-3 rounded-4" 
             style={{ 
               background: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
               boxShadow: "0 4px 20px rgba(0,150,136,0.15)"
             }}>
          <h2 className="mb-0" style={{
            background: "linear-gradient(90deg, #00796b, #00bcd4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
            letterSpacing: "0.5px"
          }}>
            <i className="fas fa-hands-helping me-2"></i>
            Crisis Help Center
          </h2>
          <Button
            variant="outline-primary"
            onClick={handleQuickExit}
            className="rounded-pill border-2 fw-bold px-3"
            style={{
              color: "#00796b",
              borderColor: "#00796b",
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#00796b";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#00796b";
            }}
          >
            <i className="fas fa-sign-out-alt me-1"></i> Quick Exit
          </Button>
        </div>

        {/* Two Column Layout - Now Solid */}
        <div className="row g-4 mb-4">
          {/* National Helplines */}
          <div className="col-md-6">
            <div className="h-100 p-4 rounded-4 position-relative overflow-hidden"
                 style={{
                   background: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
                   boxShadow: "0 4px 15px rgba(0,150,136,0.1)",
                   border: "1px solid rgba(0,150,136,0.2)",
                   transition: "all 0.3s"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div className="position-absolute top-0 end-0 bg-info rounded-bl-4 px-2 py-1"
                   style={{
                     clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                     width: "120px",
                     height: "120px"
                   }}>
                <span className="text-white fw-bold d-block text-center mt-1">National</span>
              </div>
              
              <h5 className="mb-5" style={{
                color: "#00695c",
                fontWeight: "600",
                textShadow: "1px 1px 2px rgba(0,0,0,0.05)"
              }}>
                <i className="fas fa-flag me-2"></i>
                National Helplines
              </h5>
              
              <div className="mb-3 d-flex align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ color: "#00897b" }}>AASRA Suicide Prevention</h6>
                  <p className="small mb-2" style={{ color: "#4db6ac" }}>For loneliness, distress, or suicidal thoughts</p>
                </div>
                
                       <a href="tel:9152987821" className="btn btn-outline-success rounded-pill px-3 d-flex align-items-center"
                     style={{
                       minWidth: "100px",
                       transition: "all 0.3s",
                       borderColor: "#4caf50",
                       color: ""
                     }}>
                    <i className="fas fa-phone me-2"></i> 9152987821
                  </a>


                      
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ color: "#00897b" }}>Tele-MANAS</h6>
                  <p className="small mb-2" style={{ color: "#4db6ac" }}>24/7 multilingual support</p>
                </div>
            <a href="tel:14416" className="btn btn-outline-success rounded-pill px-3 d-flex align-items-center"
                     style={{
                       minWidth: "100px",
                       transition: "all 0.3s",
                       borderColor: "#4caf50",
                       color: ""
                     }}>
                    <i className="fas fa-phone me-2"></i> 14416
                  </a>

                




              </div>
            </div>
          </div>

          {/* Kerala Helplines */}
          <div className="col-md-6">
            <div className="h-100 p-4 rounded-4 position-relative overflow-hidden"
                 style={{
                   background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                   boxShadow: "0 4px 15px rgba(30,136,229,0.1)",
                   border: "1px solid rgba(30,136,229,0.2)",
                   transition: "all 0.3s"
                 }}
                 onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                 onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              <div className="position-absolute top-0 end-0 bg-primary rounded-bl-4 px-2 py-1"
                   style={{
                     clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                     width: "120px",
                     height: "120px"
                   }}>
                <span className="text-white fw-bold d-block text-center mt-1">Kerala</span>
              </div>
              
              <h5 className="mb-5" style={{
                color: "#1565c0",
                fontWeight: "600",
                textShadow: "1px 1px 2px rgba(0,0,0,0.05)"
              }}>
                <i className="fas fa-palm-tree me-2"></i>
                Kerala Helplines
              </h5>
              
              <div className="mb-3 d-flex align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ color: "#1976d2" }}>DISHA Helpline</h6>
                  <p className="small mb-2" style={{ color: "#64b5f6" }}>24/7 Malayalam, English support</p>
                </div>
                <div className="d-flex flex-column gap-2">
            <a href="tel:1056" className="btn btn-outline-primary rounded-pill px-3 d-flex align-items-center"
                     style={{
                       minWidth: "100px",
                       transition: "all 0.3s",
                       borderColor: "#1976d2",
                       color: ""
                     }}>
                    <i className="fas fa-phone me-2"></i> 1056
                  </a>
                 
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="flex-grow-1">
                  <h6 className="fw-bold mb-1" style={{ color: "#1976d2" }}>CHILDLINE</h6>
                  <p className="small mb-2" style={{ color: "#64b5f6" }}>For Children in Crisis</p>
                </div>
    <a href="tel:1908" className="btn btn-outline-primary rounded-pill px-3 d-flex align-items-center"
                     style={{
                       minWidth: "100px",
                       transition: "all 0.3s",
                       borderColor: "#1976d2",
                       color: ""
                     }}>
                    <i className="fas fa-phone me-2"></i> 1908
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Button */}
        <div className="text-center mt-4">
          <Button 
            variant="danger" 
            size="lg" 
            className="rounded-pill px-4 py-2 fw-bold"
            style={{
              background: "linear-gradient(135deg, #ff5252 0%, #b71c1c 100%)",
              border: "none",
              boxShadow: "0 4px 15px rgba(244,67,54,0.4)",
              letterSpacing: "0.5px",
              transition: "all 0.3s"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <i className="fas fa-exclamation-triangle me-2"></i> 🚨 Get Immediate Help
          </Button>
        </div>
      </div>
      <br />

      {/* Crisis Types - Now Transparent Cards */}
      <div className="row">
        <div>
          <Row>
            {[1, 2, 3, 4].map((item) => (
              <Col key={item}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "25px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
                      background: "rgba(255, 255, 255, 0.9)"
                    },
                  }}
                  className="crisis-card"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Crisis"
                    style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Suicide Prevention
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <br />

      <div className="row">
        <div>
          <Row>
            {[1, 2, 3, 4].map((item) => (
              <Col key={item}>
                <Card
                  sx={{
                    maxWidth: 345,
                    borderRadius: "25px",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
                      background: "rgba(255, 255, 255, 0.9)"
                    },
                  }}
                  className="crisis-card"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Crisis"
                    style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Suicide Prevention
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Safety Plan & Chat */}
      <div className="d-flex flex-wrap justify-content-between mt-5">
        <Button variant="success" className="mb-3">
          📝 Create Safety Plan
        </Button>
        <Button variant="info" className="mb-3">
          💬 Open Chat Support
        </Button>
      </div>
    </div>
  );
};

export default CrisisHelp;