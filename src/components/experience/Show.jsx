export default function EducationShow({ experience, toggleEdit }) {
  return (
    <>
      <div className="show-data">
        <div>
          <div>Company </div>
          <div className="show-data-value">{experience.company}</div>
        </div>

        <div>
          <div>Position Title </div>
          <div className="show-data-value">{experience.positionTitle}</div>
        </div>

        <div>
          <div>Responsibilities </div>
          <div className="show-data-value">{experience.responsibilities}</div>
        </div>

        <div>
          <div>Date Start </div>
          <div className="show-data-value">{experience.dateStart}</div>
        </div>

        <div>
          <div>Date End</div>
          <div className="show-data-value">{experience.dateEnd}</div>
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
