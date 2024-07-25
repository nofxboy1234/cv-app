import { useState } from 'react';
import ExperienceEdit from './Edit';
import ExperienceShow from './Show';

export default function Experience({
  initialExperienceId,
  experiences,
  handleChangeExperience,
}) {
  const experience = experiences[initialExperienceId];
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleEdit(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }

  if (isSubmitted) {
    return <ExperienceShow experience={experience} toggleEdit={toggleEdit} />;
  }

  return (
    <ExperienceEdit
      experience={experience}
      handleChangeExperience={handleChangeExperience}
      toggleEdit={toggleEdit}
    />
  );
}
