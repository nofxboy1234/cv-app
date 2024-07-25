import { useState } from 'react';
import EducationEdit from './Edit';
import EducationShow from './Show';

export default function Education({
  initialEducationId,
  educations,
  handleChangeEducation,
}) {
  const education = educations[initialEducationId];
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleEdit(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }

  if (isSubmitted) {
    return <EducationShow education={education} toggleEdit={toggleEdit} />;
  }

  return (
    <EducationEdit
      education={education}
      handleChangeEducation={handleChangeEducation}
      toggleEdit={toggleEdit}
    />
  );
}
