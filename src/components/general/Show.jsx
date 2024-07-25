export default function GeneralShow({ general, toggleEdit }) {
  return (
    <>
      <div>{general.firstName}</div>
      <div>{general.lastName}</div>
      <div>{general.email}</div>
      <div>{general.phoneNumber}</div>
      <form onSubmit={toggleEdit}>
        <button type="submit">Edit</button>
      </form>
    </>
  );
}
