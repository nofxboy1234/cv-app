export default function EducationEdit({
  education,
  handleChangeEducation,
  toggleEdit,
}) {
  return (
    <>
      <li>
        <form onSubmit={toggleEdit}>
          <div>
            <label htmlFor="school-name">School Name </label>
            <input
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
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </li>
    </>
  );
}
