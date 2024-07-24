export default function EducationEdit({
  schoolName,
  course,
  date,
  setSchoolName,
  setCourse,
  setDate,
  handleSubmit,
}) {
  return (
    <>
      <li>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="school-name">School Name </label>
            <input
              type="text"
              id="school-name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="course">Course </label>
            <input
              type="text"
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Date </label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </li>
    </>
  );
}
