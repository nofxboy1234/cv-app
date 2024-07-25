import { useState } from 'react';
import GeneralShow from './Show';
import GeneralEdit from './Edit';

const initialGeneral = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};

export default function General() {
  const [general, setGeneral] = useState(initialGeneral);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChangeGeneral(updatedGeneral) {
    setGeneral(updatedGeneral);
  }

  function toggleEdit(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }

  return (
    <>
      <div className="cv-section">
        <h2>General</h2>
        {isSubmitted ? (
          <GeneralShow general={general} toggleEdit={toggleEdit} />
        ) : (
          <GeneralEdit
            general={general}
            handleChangeGeneral={handleChangeGeneral}
            toggleEdit={toggleEdit}
          />
        )}
      </div>
    </>
  );
}
