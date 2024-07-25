import { useState } from 'react';
import Experience from './Experience';
import { Fragment } from 'react';
import { format } from 'date-fns';

const dateNow = format(new Date(), 'yyyy-MM-dd');

const blankExperience = {
  company: '',
  positionTitle: '',
  responsibilities: '',
  dateStart: dateNow,
  dateEnd: dateNow,
};

let nextId = 1;
const initialExperiences = [
  {
    id: 0,
    ...blankExperience,
  },
];

export default function ExperienceIndex() {
  const [experiences, setExperiences] = useState(initialExperiences);

  function handleAddExperience() {
    setExperiences([...experiences, { id: nextId++, ...blankExperience }]);
  }

  function handleChangeExperience(updatedExperience) {
    setExperiences(
      experiences.map((experience) => {
        if (experience.id === updatedExperience.id) {
          return updatedExperience;
        } else {
          return experience;
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
      <h2>Experience</h2>
      <button onClick={handleAddExperience}>Add</button>
      <ul>
        {experiences.map((experience) => (
          <Fragment key={experience.id}>
            <Experience
              initialExperienceId={experience.id}
              experiences={experiences}
              handleChangeExperience={handleChangeExperience}
            />
            {/* <button>Delete</button> */}
          </Fragment>
        ))}
      </ul>
    </>
  );
}
