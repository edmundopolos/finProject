export const UPDATE_INVOICE = "screen:updateInvoice";

export default function updateInvoice(t) {
  // console.log(t)
  return {
    type: UPDATE_INVOICE,
    payload: t
  };
}
