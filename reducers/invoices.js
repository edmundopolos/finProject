import { UPDATE_INVOICE } from "../actions/invoiceAction";

const inv = [
  {
    to: 'sandra inc',
    category: 'fees',
    items:[
      {
        item: 'Fees',
        amount: 400000,
        quantity:1
      },
      {
        item: 'Fees',
        amount: 400000,
        quantity:1
      }
    ],
    due: '2020-05-21',
    total: 800000,
    tel: '090811110202',
    myName: 'Nekki Inc'
  },
  {
    to: 'Joel inc',
    category: 'fees',
    items:[
      {
        item: 'Fees',
        amount: 400000,
        quantity:1
      }
    ],
    due: '2020-05-21',
    total: 400000,
    tel: '090811110202',
    myName: 'Nekki Inc'
  }
]

export default function invoiceReducer(state = inv, { type, payload }) {
  switch (type) {
    case UPDATE_INVOICE:
      state.push(payload)
      return state;

    default:
      return state;
  }
}
