export default function EducationShow({ education, toggleEdit }) {
  return (
    <>
      <div>{education.schoolName}</div>
      <div>{education.course}</div>
      <div>{education.date}</div>
      <form onSubmit={toggleEdit}>
        <div className="submit-container">
          <button type="submit">Edit</button>
        </div>
      </form>
    </>
  );
}
