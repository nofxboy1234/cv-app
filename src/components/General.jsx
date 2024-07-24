import { useState } from 'react';

export default function General() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function edit(e) {
    e.preventDefault();
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return (
      <>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
        <form onSubmit={edit}>
          <button type="submit">Edit</button>
        </form>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>General</h2>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="first-name">First Name </label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name </label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone number </label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
