import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'حل مشكلة DNS_PROBE_FINISHED_NXDOMAIN',
  description: 'دليل شامل لحل مشكلة DNS_PROBE_FINISHED_NXDOMAIN وإصلاح مشاكل Vercel',
  lang: 'ar',
}

export default function DNSTroubleshootingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans" dir="rtl">
      {children}
    </div>
  )
}