import { readResume } from "../services/pdfParser";

function ResumeUpload({ setResumeText }) {

  const handleFile = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const text = await readResume(file);

    setResumeText(text);

  };

  return (

    <div>

      <label>
        Upload Resume (PDF)
      </label>

      <br />

      <input
        type="file"
        accept=".pdf"
        onChange={handleFile}
      />

    </div>

  );

}

export default ResumeUpload;