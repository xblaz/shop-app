import React, { useState } from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0);
    return (
        <div>
            <p className="h4">Clic en el botón para incrementar contador</p>
            <button className="btn btn-primary" onClick={() => setContador(contador+1)}>Incrementar</button>
            <p className="h4">Contador de clic: {contador}</p>
        </div>
    );
}