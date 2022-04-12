import { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { GET_getOneInvoice } from '../../mock-db/data.interface';

function InvoiceDetail() {
  // #region behaviour
  const [invoice, setInvoice] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const { invoiceId } = params;

  // useEffect(() => {
  //   console.log('navigate: ', navigate);
  //   console.log('search Params: ', searchParams);
  //   console.log('location: ', location);
  //   console.log('params: ', params);
  // }, []);

  useEffect(() => {
    (async function impl() {
      setInvoice(null);

      const invoice = await GET_getOneInvoice(parseInt(invoiceId, 10));

      setInvoice(invoice);
    })();
  }, [invoiceId]);

  if (!invoice) {
    return (
      <main style={s.root}>
        <h2>Loading invoice detail ...</h2>
      </main>
    );
  }
  // #endregion behaviour

  // #region jsx
  return (
    <main style={s.root}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: #{invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
  // #endregion jsx
}

export default InvoiceDetail;

const s = {
  root: {
    padding: '1rem',
  },
};
