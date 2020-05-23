export const UPDATE_TRANSACTION = "transaction:updatetransaction";

export default function updateTransaction(T) {
  return {
    type: UPDATE_TRANSACTION,
    payload: T
  };
}
