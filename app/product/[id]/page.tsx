"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  detail: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#777',
  },
};

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  stock: number;
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduct() {
      const unwrappedParams = await params;
      const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
      const foundProduct = products.find((p) => p.id === Number(unwrappedParams.id));
      setProduct(foundProduct || null);
    }

    fetchProduct();
  }, [params]);

  if (!product) return <p style={styles.loading}>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{product.name}</h2>
        <p style={styles.detail}><strong>Price:</strong> ${product.price}</p>
        <p style={styles.detail}><strong>Category:</strong> {product.category}</p>
        <p style={styles.detail}><strong>Description:</strong> {product.description}</p>
        <p style={styles.detail}><strong>Stock Quantity:</strong> {product.stock}</p>
        <button style={styles.button} onClick={() => router.push('/products')}>
          Back to Products
        </button>
      </div>
    </div>
  );
}
