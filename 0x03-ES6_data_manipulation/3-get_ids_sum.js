export default function getStudentIdsSum(anArray) {
  return anArray.reduce((acc, Student) => acc + Student.id, 0);
}
