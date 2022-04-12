import { useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import QueryNavLink from '../../comp/link/QueryNavLink';

import GoBackToHome from '../../comp/link/GoBackToHome';
import { GET_getAllInvoices } from '../../mock-db/data.interface';

function Invoices() {
  // #region behaviour
  const params = useParams();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [invoices, setInvoices] = useState([]);

  console.log('params: ', params);
  console.log('searchParams: ', searchParams);
  console.log('location: ', location);

  useEffect(() => {
    (async function impl() {
      const data = await GET_getAllInvoices();
      setInvoices(data);
    })();
  }, []);

  // console.log(invoices);

  if (invoices.length == 0) {
    return (
      <div style={s.root}>
        <h1>Loading ...</h1>
      </div>
    );
  }
  // #endregion behaviour

  // #region handler
  function onInputChanged(e) {
    e.preventDefault();

    const filter = e.target.value;

    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }
  const foundInvoicesJSX = invoices?.filter(invoice => {
    const filter = searchParams.get('filter');

    if (!filter) {
      return true;
    }

    const name = invoice.name.toLowerCase();
    return name.startsWith(filter.toLowerCase());
  });

  // #endregion handler

  // #region jsx
  return (
    <main style={s.root}>
      <input
        value={searchParams.get('filter') || ''}
        onChange={onInputChanged}
      />
      <ul>
        {foundInvoicesJSX &&
          foundInvoicesJSX.map(invoice => (
            <li key={invoice.number}>
              <QueryNavLink
                to={`/invoices/${invoice.number}`}
                style={s.invoiceItem}
              >
                {invoice.name}
              </QueryNavLink>
            </li>
          ))}
      </ul>
      <Outlet />
      <GoBackToHome />
    </main>
  );
  // #endregion jsx
}

export default Invoices;

const s = {
  root: {
    padding: '1rem 0',
  },
  invoiceItem: ({ isActive }) => ({
    display: 'block',
    margin: '1rem 0',
    color: isActive ? 'red' : '',
  }),
};
