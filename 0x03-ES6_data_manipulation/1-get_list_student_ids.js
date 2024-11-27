export default function getListStudentIds(anArray) {
  if (!Array.isArray(anArray)) {
    return [];
  }
  return anArray.map((Student) => Student.id);
}
