import React from 'react';
import './EmptyTodos.css';

function EmptyTodos()  {
    return (
        <div className="btn-container">
            <a href="#" className="btn-shine">Crea tu primer TODO!</a>
        </div>
    );
}

export {EmptyTodos};