import { UPDATE_STAFF } from "../actions/staffAction";

const task = [
  {
    id:'1',
    role:'Management',
    description: 'Manager IT',
    name: 'Olarewaju',
    
  },
  {
    id:'1',
    role:'Staff',
    description: 'Developer',
    name:'Dave okinja',
   
  },
  {
    id:'1',
    role:'Operations',
    description: 'Head of HR',
    name:'West Tosic',
   
  }
]

export default function staffReducer(state = task, { type, payload }) {
  switch (type) {
    case UPDATE_STAFF:
      state.push(payload)
      return state;

    default:
      return state;
  }
}
