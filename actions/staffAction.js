export const UPDATE_STAFF = "staff:updatestaff";

export default function updateStaff(screen) {
  return {
    type: UPDATE_STAFF,
    payload: screen
  };
}
