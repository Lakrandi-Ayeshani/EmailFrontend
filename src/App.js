import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeadComponents from "./pages/head";
import MailList from "./pages/SubPages/Inbox";
import SentMails from "./pages/SubPages/Sent";
import Sidebar from "./pages/sideBar";


function App() {
  return (
    <div>
      <Container style={{marginLeft: 0}}>   
        <BrowserRouter>
          <Row> <HeadComponents/></Row>
          <Row>
            <Col xs={4} md={4}><Sidebar/></Col>
            <Col xs={8} md={8}>
              <Routes>
                <Route path='/' element={<MailList/>} />
                <Route path='/sent' element={<SentMails/>} />
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
