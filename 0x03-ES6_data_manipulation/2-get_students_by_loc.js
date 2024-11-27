export default function getStudentsByLocation(anArray, city) {
  return anArray.filter((Student) => Student.location === city);
}
