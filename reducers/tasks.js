import { UPDATE_TASK } from "../actions/taskAction";

const task = [
  {
    id:'1',
    due:'2020-05-23',
    description: 'give special bonus',
    title: 'special bonuses',
    priority:'3'
  },
  {
    id:'1',
    due:'2020-05-21',
    description: 'stock count',
    title:'stock count',
    priority:'2'
  },
  {
    id:'1',
    due:'2020-05-22',
    description: 'Vacation',
    title:'Paris!!',
    priority:'1'
  }
]

export default function taskReducer(state = task, { type, payload }) {
  switch (type) {
    case UPDATE_TASK:
      state.push(payload)
      return state;

    default:
      return state;
  }
}
