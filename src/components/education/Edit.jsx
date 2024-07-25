export default function EducationEdit({
  education,
  handleChangeEducation,
  toggleEdit,
}) {
  return (
    <>
      <form onSubmit={toggleEdit}>
        <div>
          <label htmlFor="school-name">School Name </label>
          <input
            required
            type="text"
            id="school-name"
            value={education.schoolName}
            onChange={(e) => {
              handleChangeEducation({
                ...education,
                schoolName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="course">Course </label>
          <input
            required
            type="text"
            id="course"
            value={education.course}
            onChange={(e) => {
              handleChangeEducation({
                ...education,
                course: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="date">Date </label>
          <input
            required
            className="show-data-date"
            type="date"
            id="date"
            value={education.date}
            onChange={(e) => {
              handleChangeEducation({
                ...education,
                date: e.target.value,
              });
            }}
          />
        </div>
        <div className="submit-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
