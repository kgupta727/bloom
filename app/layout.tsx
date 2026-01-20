import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bloom Interactive Playground',
  description: 'Live visual editor for Bloom screen components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
