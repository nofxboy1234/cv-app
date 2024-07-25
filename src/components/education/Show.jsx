export default function EducationShow({ education, toggleEdit }) {
  return (
    <>
      <li>
        <div>{education.schoolName}</div>
        <div>{education.course}</div>
        <div>{education.date}</div>
        <form onSubmit={toggleEdit}>
          <button type="submit">Edit</button>
        </form>
      </li>
    </>
  );
}
