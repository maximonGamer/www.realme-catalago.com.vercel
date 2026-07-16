// Caminho: components/Catalog.tsx
import React, { useState } from 'react';
import { productsData, Spec } from '../app/data/products';

export default function Catalog() {
  const [interestMessage, setInterestMessage] = useState<string | null>(null);

  const handleInterest = (productName: string) => {
    setInterestMessage(
      `Opa! Gostei do ${productName}. Entrando em contato com nosso especialista de atendimento.`
    );
    setTimeout(() => setInterestMessage(null), 5000);
  };

  return (
    <div className="p-4">
      {interestMessage && (
        <div className="fixed top-5 right-5 bg-yellow-400 text-black p-4 rounded-lg shadow-lg font-bold border-2 border-black z-50 animate-bounce">
          {interestMessage}
        </div>
      )}

      <div className="grid gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="border p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.highlight}</p>
            
            <ul className="text-xs mb-4">
              {product.specs.map((s: Spec, i: number) => (
                <li key={i}><strong>{s.label}:</strong> {s.value}</li>
              ))}
            </ul>

            <button 
              onClick={() => handleInterest(product.name)}
              className="bg-black text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-gray-800"
            >
              Tenho Interesse
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}