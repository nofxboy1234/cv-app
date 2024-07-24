import { useState } from 'react';
import EducationEdit from './Edit';
import EducationShow from './Show';

export default function Education({
  schoolName: initialSchoolName,
  course: initialCourse,
  date: initialDate,
  handleChangeEducation,
}) {
  const [schoolName, setSchoolName] = useState(initialSchoolName);
  const [course, setCourse] = useState(initialCourse);
  const [date, setDate] = useState(initialDate);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    handleChangeEducation({
      ...education,
      schoolName,
      course,
      date,
    });
  }

  function edit(e) {
    e.preventDefault();
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return (
      <EducationShow
        schoolName={schoolName}
        course={course}
        date={date}
        handleEdit={edit}
      />
    );
  }

  return (
    <EducationEdit
      schoolName={schoolName}
      course={course}
      date={date}
      setSchoolName={setSchoolName}
      setCourse={setCourse}
      setDate={setDate}
      handleSubmit={submit}
    />
  );
}
