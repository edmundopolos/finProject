export const UPDATE_NOTIFICATION = "screen:updatenotification";

export default function updateNotification(screen) {
  return {
    type: UPDATE_NOTIFICATION,
    payload: screen
  };
}
