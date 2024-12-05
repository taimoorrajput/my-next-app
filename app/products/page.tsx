"use client";

import Link from 'next/link';
import { useEffect, useState, CSSProperties } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    setProducts(savedProducts);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Product List</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} style={styles.card}>
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </Link>
        ))}
      </div>
      <Link href="/add-product" style={styles.addProductLink}>Add a New Product</Link>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  addProductLink: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#0070f3',
    textDecoration: 'none',
  },
};
