import { useState } from "react";
import ResumeUpload from "./ResumeUpload";
import { generateCoverLetter } from "../services/gemini";

function CoverLetterForm({ setLetter, setLoading }) {

  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [resumeText, setResumeText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const result = await generateCoverLetter(
        name,
        jobRole,
        company,
        skills,
        resumeText
      );

      setLetter(result);

    } catch (error) {

      alert("Error generating cover letter.");

    }

    setLoading(false);
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Candidate Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Job Role"
        value={jobRole}
        onChange={(e)=>setJobRole(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Target Company"
        value={company}
        onChange={(e)=>setCompany(e.target.value)}
        required
      />

      <textarea
        rows="5"
        placeholder="Key Skills"
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}
      ></textarea>

      <ResumeUpload
        setResumeText={setResumeText}
      />

      <button type="submit">
        Generate Cover Letter
      </button>

    </form>

  );
}

export default CoverLetterForm;