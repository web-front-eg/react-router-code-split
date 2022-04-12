import { invoices } from './data';
import { delayAsync } from '../util/time';

export async function GET_getAllInvoices() {
  await delayAsync(3000); // fake delay
  return [...invoices];
}

export async function GET_getOneInvoice(invoiceId) {
  await delayAsync(2000); // fake delay
  return invoices.find(id => id.number == +invoiceId);
}

export async function DELETE_deleteOneInvoice(deleteInvoiceId) {
  const id = deleteInvoiceId;
  await delayAsync(1000); // fake delay

  invoices = invoices.filter(invoice => invoice.number != +id);
}
