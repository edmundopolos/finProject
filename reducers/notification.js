import { UPDATE_NOTIFICATION } from "../actions/notificationAction";

const notices = [
  {
    id:'1',
    due:'2020-05-23',
    description: 'give special bonus',
    title: 'special bonuses',
    priority:'1'
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
    title:'New Transaction',
    priority:'3'
  }
]

export default function notificationReducer(state = notices, { type, payload }) {
  switch (type) {
    case UPDATE_NOTIFICATION:
      state.push(payload)
      return state;

    default:
      return state;
  }
}
