import { useState } from 'react';
import Education from './Education';
import { Fragment } from 'react';

let nextId = 1;
const initialEducations = [
  {
    id: 0,
    schoolName: '',
    course: '',
    date: '',
  },
];

export default function EducationIndex() {
  const [educations, setEducations] = useState(initialEducations);

  function handleAddEducation() {
    setEducations([
      ...educations,
      { id: nextId++, schoolName: '', course: '', date: '' },
    ]);
  }

  function handleChangeEducation(updatedEducation) {
    setEducations(
      educations.map((education) => {
        if (education.id === updatedEducation.id) {
          return updatedEducation;
        } else {
          return education;
        }
      })
    );
  }

  // function handleDeleteEducation(educationId) {
  //   setEducations(
  //     educations.filter((education) => education.id !== educationId)
  //   );
  // }

  return (
    <>
      <h2>Education</h2>
      <button onClick={handleAddEducation}>Add</button>
      <ul>
        {educations.map((education) => (
          <Fragment key={education.id}>
            <Education
              initialEducationId={education.id}
              educations={educations}
              handleChangeEducation={handleChangeEducation}
            />
            {/* <button>Delete</button> */}
          </Fragment>
        ))}
      </ul>
    </>
  );
}
