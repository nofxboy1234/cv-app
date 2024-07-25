export default function EducationShow({ experience, toggleEdit }) {
  return (
    <>
      <li>
        <div>{experience.company}</div>
        <div>{experience.positionTitle}</div>
        <div>{experience.responsibilities}</div>
        <div>{experience.dateStart}</div>
        <div>{experience.dateEnd}</div>
        <form onSubmit={toggleEdit}>
          <button type="submit">Edit</button>
        </form>
      </li>
    </>
  );
}
