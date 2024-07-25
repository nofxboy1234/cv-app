export default function ExperienceEdit({
  experience,
  handleChangeExperience,
  toggleEdit,
}) {
  return (
    <>
      <li>
        <form onSubmit={toggleEdit}>
          <div>
            <label htmlFor="company">Company </label>
            <input
              type="text"
              id="company"
              value={experience.company}
              onChange={(e) => {
                handleChangeExperience({
                  ...experience,
                  company: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="position-title">Position Title </label>
            <input
              type="text"
              id="position-title"
              value={experience.positionTitle}
              onChange={(e) => {
                handleChangeExperience({
                  ...experience,
                  positionTitle: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="responsibilities">Responsibilities </label>
            <input
              type="text"
              id="responsibilities"
              value={experience.responsibilities}
              onChange={(e) => {
                handleChangeExperience({
                  ...experience,
                  responsibilities: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="date-start">Date Start </label>
            <input
              type="date"
              id="date-start"
              value={experience.dateStart}
              onChange={(e) => {
                handleChangeExperience({
                  ...experience,
                  dateStart: e.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="date-end">Date End </label>
            <input
              type="date"
              id="date-end"
              value={experience.dateEnd}
              onChange={(e) => {
                handleChangeExperience({
                  ...experience,
                  dateEnd: e.target.value,
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
