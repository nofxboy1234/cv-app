export default function GeneralShow({ general, toggleEdit }) {
  return (
    <>
      <div className="show-data">
        <div>
          <div>First Name </div>
          <div className="show-data-value">{general.firstName}</div>
        </div>
        <div>
          <div>Last Name </div>
          <div className="show-data-value">{general.lastName}</div>
        </div>
        <div>
          <div>Email </div>
          <div className="show-data-value">{general.email}</div>
        </div>
        <div>
          <div>Phone number </div>
          <div className="show-data-value">{general.phoneNumber}</div>
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
