import { useState } from "react";

import CoverLetterForm from "./components/CoverLetterForm";
import CoverLetterOutput from "./components/CoverLetterOutput";
import Loading from "./components/Loading";

import "./styles/style.css";

function App() {
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">

      <h1>AI Cover Letter Generator</h1>

      <CoverLetterForm
        setLetter={setLetter}
        setLoading={setLoading}
      />

      {loading && <Loading />}

      {!loading && letter !== "" && (
        <CoverLetterOutput
          letter={letter}
        />
      )}

    </div>
  );
}

export default App;