export default function EducationShow({
  schoolName,
  course,
  date,
  handleEdit,
}) {
  return (
    <>
      <li>
        <div>{schoolName}</div>
        <div>{course}</div>
        <div>{date}</div>
        <form onSubmit={handleEdit}>
          <button type="submit">Edit</button>
        </form>
      </li>
    </>
  );
}
