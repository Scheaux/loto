import React from 'react';
import ReactDOM from 'react-dom/client';
import Ticket from './Ticket.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className='all-tickets'>
            <Ticket ticketNum={1} />
            <Ticket ticketNum={2} />
            <Ticket ticketNum={3} />
        </div>
    </React.StrictMode>
);
