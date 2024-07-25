export default function GeneralEdit({
  general,
  handleChangeGeneral,
  toggleEdit,
}) {
  return (
    <>
      <form onSubmit={toggleEdit}>
        <div>
          <label htmlFor="first-name">First Name </label>
          <input
            type="text"
            id="first-name"
            value={general.firstName}
            onChange={(e) => {
              handleChangeGeneral({
                ...general,
                firstName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name </label>
          <input
            type="text"
            id="last-name"
            value={general.lastName}
            onChange={(e) => {
              handleChangeGeneral({
                ...general,
                lastName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={general.email}
            onChange={(e) => {
              handleChangeGeneral({
                ...general,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="phone-number">Phone number </label>
          <input
            type="tel"
            id="phone-number"
            value={general.phoneNumber}
            onChange={(e) => {
              handleChangeGeneral({
                ...general,
                phoneNumber: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
