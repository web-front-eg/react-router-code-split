import { Link } from 'react-router-dom';

const liStyle = { marginRight: '2rem', fontSize: 24, fontWeight: 600 };

function Nav() {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderBottom: 'solid 1px',
        // alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
        {/* 1. Link to Login */}
        <li>
          <Link to="/login" style={liStyle}>
            login
          </Link>
        </li>

        {/* 2. Link to Contact  */}
        <li>
          <Link to="/contact" style={liStyle}>
            contact
          </Link>
        </li>

        {/* 3. Link to Profile */}
        <li>
          <Link to="/profile" style={liStyle}>
            profile
          </Link>
        </li>

        {/* 4. Link to Invoices */}
        <li>
          <Link to="/invoices" style={liStyle}>
            invoices
          </Link>
        </li>

        {/* 5. Link to Expenses */}
        <li>
          <Link to="/expenses" style={liStyle}>
            expenses
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
