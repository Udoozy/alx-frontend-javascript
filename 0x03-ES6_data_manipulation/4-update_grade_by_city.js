export default function updateStudentGradeByCity(anArray, city, newGrades) {
  return anArray
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
