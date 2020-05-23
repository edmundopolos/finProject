export const UPDATE_TASK = "screen:updatetask";

export default function updateTask(screen) {
  return {
    type: UPDATE_TASK,
    payload: screen
  };
}
