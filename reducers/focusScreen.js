import { UPDATE_FOCUS } from "../actions/focusAction";

export default function focusReducer(state = false, { type, payload }) {
  switch (type) {
    case UPDATE_FOCUS:
      return payload;

    default:
      return state;
  }
}
