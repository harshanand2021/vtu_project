import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
