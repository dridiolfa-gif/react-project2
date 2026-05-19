import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BootstrapImage from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";

const firstName = "Olfa";
const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";
const welcomeImage =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231d4ed8'/%3E%3Cstop offset='100%25' stop-color='%230f172a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' rx='200' fill='url(%23bg)'/%3E%3Ccircle cx='200' cy='170' r='78' fill='%23fde68a'/%3E%3Ccircle cx='170' cy='160' r='8' fill='%23111827'/%3E%3Ccircle cx='230' cy='160' r='8' fill='%23111827'/%3E%3Crect x='178' y='170' width='44' height='10' rx='5' fill='%23111827'/%3E%3Cpath d='M138 152c18-28 46-42 62-42s44 14 62 42' fill='none' stroke='%23111827' stroke-width='12' stroke-linecap='round'/%3E%3Cpath d='M122 165h22c8 0 14 6 14 14v0c0 8-6 14-14 14h-22c-8 0-14-6-14-14v0c0-8 6-14 14-14Zm154 0h22c8 0 14 6 14 14v0c0 8-6 14-14 14h-22c-8 0-14-6-14-14v0c0-8 6-14 14-14Z' fill='none' stroke='%23111827' stroke-width='8'/%3E%3Cpath d='M144 179h-28m168 0h-28' stroke='%23111827' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M155 242c17-20 73-20 90 0' fill='none' stroke='%23111827' stroke-width='10' stroke-linecap='round'/%3E%3Cpath d='M136 258c19 14 39 20 64 20s45-6 64-20' fill='none' stroke='%23f8fafc' stroke-width='26' stroke-linecap='round'/%3E%3C/svg%3E";

function App() {
  return (
    <main className="app-shell">
      <Container className="py-4 py-md-5">
        <Card className="product-card border-0 overflow-hidden">
          <Row className="g-0 align-items-stretch">
            <Col md={5} className="d-flex align-items-stretch">
              <Image />
            </Col>
            <Col md={7} className="d-flex">
              <Card.Body className="product-content d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">
                    Featured product
                  </Badge>
                  <span className="text-uppercase small text-info-emphasis fw-semibold letter-spaced">
                    React-Bootstrap
                  </span>
                </div>
                <Name />
                <Price />
                <Description />
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <section className="text-center mt-4 mt-md-5 welcome-panel">
          <p className="welcome-message mb-3">{greeting}</p>
          {firstName ? (
            <BootstrapImage
              src={welcomeImage}
              alt={`${firstName}'s portrait`}
              roundedCircle
              className="welcome-avatar shadow"
            />
          ) : null}
        </section>
      </Container>
    </main>
  );
}

export default App;
