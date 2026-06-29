function CoverLetterOutput({ letter }) {

  const copyLetter = () => {

    navigator.clipboard.writeText(letter);

    alert("Copied Successfully");

  };

  return (

    <div className="output">

      <h2>Generated Cover Letter</h2>

      <p style={{whiteSpace:"pre-wrap"}}>
        {letter}
      </p>

      <button onClick={copyLetter}>
        Copy to Clipboard
      </button>

    </div>

  );

}

export default CoverLetterOutput;