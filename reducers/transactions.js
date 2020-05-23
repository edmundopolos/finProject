import { UPDATE_TRANSACTION } from "../actions/transactionAction";
const date = new Date()
const usedate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
const transactions =[
  {
    name: "maiden loft",
    payer:"Marco Draipe",
    amount: -600000,
    type: "debit",
    date: usedate
  },
  {
    name: "wema",
    payer: "Alfonso Reed",
    amount: 10000000,
    type: "credit",
    date: usedate
  },
  {
    name: "malmo furnishes",
    payer:"Marco Draipe",
    amount: -60000,
    type: "debit",
    date: usedate
  }, {
    name: "Craig's Shelves",
    payer:"Marco Draipe",
    amount: -60000,
    type: "debit",
    date: usedate
  },
  {
    name: "Spectranet",
    payer:"Marco Draipe",
    amount: -60000,
    type: "debit",
    date: '19-2-2020'
  },
]
export default function transactionReducer(state = transactions, { type, payload }) {
  switch (type) {
    case UPDATE_TRANSACTION:
      return payload;

    default:
      return state;
  }
}
