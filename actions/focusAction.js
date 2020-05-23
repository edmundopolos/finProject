export const UPDATE_FOCUS = "screen:updatefocus";

export default function updateFocus(screen) {
  return {
    type: UPDATE_FOCUS,
    payload: screen
  };
}
