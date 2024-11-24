import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const clsroom = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(19)];
  return clsroom;
}
