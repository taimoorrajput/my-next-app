import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
      </header>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/posts/1" className={styles.link}>Post 1</Link>
        <Link href="/posts/2" className={styles.link}>Post 2</Link>
        <Link href="/add-product" className={styles.link}>Add Product</Link>
        <Link href="/products" className={styles.link}>Products</Link>
      </nav>
    </div>
  );
}
