// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Saya',
  description: 'Dibuat menggunakan Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Header tetap ada */}
        <header style={{
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderBottom: '1px solid #dee2e6'
        }}>
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              LogoBeei
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
              <li><a href="/">Beranda</a></li>
              <li><a href="/profil">Profil</a></li>
            </ul>
          </nav>
        </header>

        {/* Konten dari page.tsx akan muncul di sini */}
        <main style={{ padding: '2rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>

        {/* =================================
          BAGIAN FOOTER TELAH DIHAPUS 
          =================================
        */}
      </body>
    </html>
  );
}
 
