import { useState } from 'react';

export default function Education() {
  const [schoolName, setSchoolName] = useState('');
  const [course, setCourse] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function edit(e) {
    e.preventDefault();
    setIsSubmitted(false);
  }

  const heading = <h2>Education</h2>;

  if (isSubmitted) {
    return (
      <>
        {heading}
        <div>{schoolName}</div>
        <div>{course}</div>
        <div>{date}</div>
        <form onSubmit={edit}>
          <button type="submit">Edit</button>
        </form>
      </>
    );
  }

  return (
    <>
      {heading}
      <form onSubmit={submit}>
        <div>
          <label htmlFor="school-name">School Name </label>
          <input
            type="text"
            id="school-name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="course">Course </label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
