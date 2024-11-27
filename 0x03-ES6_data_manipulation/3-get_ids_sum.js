export default function getStudentIdsSum(anArray) {
  anArray.reduce((acc, Student) => acc + Student.id, 0);
}
