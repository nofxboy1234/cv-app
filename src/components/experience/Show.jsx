export default function EducationShow({ experience, toggleEdit }) {
  return (
    <>
      <div>{experience.company}</div>
      <div>{experience.positionTitle}</div>
      <div>{experience.responsibilities}</div>
      <div>{experience.dateStart}</div>
      <div>{experience.dateEnd}</div>
      <form onSubmit={toggleEdit}>
        <div className="submit-container">
          <button type="submit">Edit</button>
        </div>
      </form>
    </>
  );
}
