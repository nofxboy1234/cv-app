export default function EducationShow({ education, toggleEdit }) {
  return (
    <>
      <div className="show-data">
        <div>
          <div>School Name </div>
          <div className="show-data-value">{education.schoolName}</div>
        </div>
        <div>
          <div>Course </div>
          <div className="show-data-value">{education.course}</div>
        </div>
        <div>
          <div>Date</div>
          <div className="show-data-value">{education.date}</div>
        </div>
        <form onSubmit={toggleEdit}>
          <div className="submit-container">
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </>
  );
}
