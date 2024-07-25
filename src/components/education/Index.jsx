import { useState } from 'react';
import Education from './Education';
import { Fragment } from 'react';
import { format } from 'date-fns';

const dateNow = format(new Date(), 'yyyy-MM-dd');

const blankEducation = {
  schoolName: '',
  course: '',
  date: dateNow,
};

let nextId = 1;
const initialEducations = [
  {
    id: 0,
    ...blankEducation,
  },
];

export default function EducationIndex() {
  const [educations, setEducations] = useState(initialEducations);

  function handleAddEducation() {
    setEducations([...educations, { id: nextId++, ...blankEducation }]);
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
      <div className="cv-section">
        <h2>Education</h2>
        <button onClick={handleAddEducation}>Add</button>
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
      </div>
    </>
  );
}
