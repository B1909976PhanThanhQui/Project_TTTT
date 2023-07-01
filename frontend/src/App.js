import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './page/HomePage';
import FlashCardPage from './page/FlashCardPage';

function App() {
  return (
    <div className="container" style={{ backgroundColor: "#f9ffff" }}>
      {/* Header */}
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ marginBottom: "30px" }}
      >
        <div class="container-fluid">
          <p
            style={{ fontSize: "30px", color: "#4ab89f ", fontWeight: "bold" }}
          >
            English Dictionary
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginLeft: "60%" }}
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active btn btn-success text-white fw-bold"
                  aria-current="page"
                  to="/"
                  style={{ marginRight: "20px" }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link fw-bold" to="/flashCard">
                  Flash Card
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        {/*  Theo dang in hoa - Element not follow write form CamelCase*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/flashCard" element={<FlashCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
