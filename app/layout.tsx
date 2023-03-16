import './globals.css'

export const metadata = {
  title: 'Gamaleon - playground',
  description: 'Φτιάξε περίεργες εικόνες',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
