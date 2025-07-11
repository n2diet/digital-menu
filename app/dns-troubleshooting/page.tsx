'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckIcon, AlertTriangleIcon, SearchIcon, SettingsIcon, RefreshCwIcon, CheckCircleIcon, HelpCircleIcon, ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

interface ChecklistItem {
  id: string
  text: string
  checked: boolean
}

export default function DNSTroubleshootingPage() {
  const [quickFixChecklist, setQuickFixChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'فتحت Vercel Dashboard', checked: false },
    { id: '2', text: 'وجدت مشروع N2 Diet', checked: false },
    { id: '3', text: 'نسخت الرابط الصحيح', checked: false },
    { id: '4', text: 'جربت الرابط الجديد', checked: false },
  ])

  const [redeployChecklist, setRedeployChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'تأكدت من وجود الكود في GitHub', checked: false },
    { id: '2', text: 'أنشأت مشروع جديد في Vercel', checked: false },
    { id: '3', text: 'ربطت GitHub repository', checked: false },
    { id: '4', text: 'نجح النشر', checked: false },
    { id: '5', text: 'حصلت على رابط جديد', checked: false },
  ])

  const [finalTestChecklist, setFinalTestChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'الرابط الجديد يعمل', checked: false },
    { id: '2', text: 'الموقع يحمل بالكامل', checked: false },
    { id: '3', text: 'جميع الصور تظهر', checked: false },
    { id: '4', text: 'التنقل بين الأقسام يعمل', checked: false },
    { id: '5', text: 'الموقع يعمل على الهاتف', checked: false },
  ])

  const toggleChecklistItem = (
    checklist: ChecklistItem[],
    setChecklist: React.Dispatch<React.SetStateAction<ChecklistItem[]>>,
    id: string
  ) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const ChecklistComponent = ({ 
    items, 
    setItems 
  }: { 
    items: ChecklistItem[]
    setItems: React.Dispatch<React.SetStateAction<ChecklistItem[]>>
  }) => (
    <ul className="space-y-0">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => toggleChecklistItem(items, setItems, item.id)}
          className={`flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer transition-all text-base hover:bg-gray-50 ${
            item.checked
              ? 'bg-green-50 text-green-700'
              : ''
          }`}
        >
          <span>{item.text}</span>
          <div className="text-2xl text-gray-500">
            {item.checked ? '✅' : '☐'}
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div 
      className="min-h-screen p-5 leading-relaxed"
      style={{
        background: 'linear-gradient(135deg, #eb662b, #27914c)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        {/* Navigation Back */}
        <div className="mb-6">
          <Button asChild variant="outline" className="bg-white/90 hover:bg-white mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4" />
              العودة للصفحة الرئيسية
            </Link>
          </Button>
        </div>

        {/* Main Container */}
        <div 
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}
        >
          {/* Header */}
          <div 
            className="text-white p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
            }}
          >
            <h1 className="text-5xl font-bold mb-3">🚨 DNS_PROBE_FINISHED_NXDOMAIN</h1>
            <p className="text-xl">حل مشكلة عدم العثور على النطاق n2diet.vercel.app</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Problem Description */}
            <div 
              className="rounded-xl p-6 text-center border-4"
              style={{
                background: '#fee2e2',
                borderColor: '#ef4444'
              }}
            >
              <h2 className="text-3xl font-bold text-red-600 mb-4">🔍 تشخيص المشكلة</h2>
              <p className="text-lg mb-4">
                <strong>DNS_PROBE_FINISHED_NXDOMAIN</strong> يعني أن النطاق{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-sm">n2diet.vercel.app</code>{' '}
                غير موجود في DNS
              </p>
              <p className="text-amber-600 font-bold text-lg mb-4">⚠️ هذا يعني أن النطاق قد يكون:</p>
              <ul className="text-right space-y-2 max-w-md mx-auto">
                <li>غير مُعرَّف في Vercel</li>
                <li>محذوف أو معطل</li>
                <li>لم ينتشر في DNS بعد</li>
              </ul>
            </div>

            {/* Step 1: Quick Fix */}
            <div 
              className="rounded-xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              style={{
                background: '#f8f9fa',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #eb662b, #27914c)'
                  }}
                >
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🚀 الحل العاجل - ابدأ هنا</h3>

                  <div 
                    className="rounded-xl p-5 mb-6 border-4"
                    style={{
                      background: 'linear-gradient(135deg, #fef3cd, #fde68a)',
                      borderColor: '#f59e0b'
                    }}
                  >
                    <h4 className="text-xl font-bold text-amber-700 mb-4">🎯 جرب هذه الروابط البديلة:</h4>
                    <p className="mb-4">استخدم الرابط المباشر من Vercel Dashboard:</p>
                    <div 
                      className="p-5 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500"
                      style={{
                        background: '#2d3748',
                        color: '#e2e8f0'
                      }}
                    >
                      <div className="whitespace-pre">{`# الروابط المحتملة لمشروعك:
https://n2-diet-menu.vercel.app
https://n2-diet.vercel.app
https://n2diet-[random-string].vercel.app

# أو ابحث في Vercel Dashboard عن الرابط الصحيح`}</div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-4">📋 خطوات سريعة:</h4>
                  <ChecklistComponent items={quickFixChecklist} setItems={setQuickFixChecklist} />

                  <div className="mt-6">
                    <Button 
                      asChild 
                      className="font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #eb662b, #27914c)',
                        color: 'white'
                      }}
                    >
                      <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">
                        فتح Vercel Dashboard
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Vercel Check */}
            <div 
              className="rounded-xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              style={{
                background: '#f8f9fa',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #eb662b, #27914c)'
                  }}
                >
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🔧 فحص إعدادات Vercel</h3>

                  <h4 className="text-xl font-bold mb-4">🔍 تحقق من هذه النقاط في Vercel:</h4>
                  <ol className="space-y-4 mb-6">
                    <li><strong>اسم المشروع:</strong> تأكد من اسم المشروع الصحيح</li>
                    <li><strong>Domain Settings:</strong> تحقق من إعدادات النطاق</li>
                    <li><strong>Deployment Status:</strong> تأكد من نجاح آخر نشر</li>
                    <li><strong>Custom Domain:</strong> إذا كنت تستخدم نطاق مخصص</li>
                  </ol>

                  <div 
                    className="p-5 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500 mb-6"
                    style={{
                      background: '#2d3748',
                      color: '#e2e8f0'
                    }}
                  >
                    <div className="whitespace-pre">{`# خطوات الفحص في Vercel:
1. اذهب إلى vercel.com/dashboard
2. ابحث عن مشروع "N2 Diet" أو "n2-diet"
3. انقر على المشروع
4. انسخ الرابط من "Visit" button
5. تحقق من "Domains" tab`}</div>
                  </div>

                  <div 
                    className="rounded-lg p-5 border-2"
                    style={{
                      background: '#d1fae5',
                      borderColor: '#10b981'
                    }}
                  >
                    <h4 className="font-bold text-green-700 mb-3">✅ إذا وجدت المشروع:</h4>
                    <p className="text-green-700">انسخ الرابط الصحيح واستخدمه بدلاً من n2diet.vercel.app</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: DNS Fix */}
            <div 
              className="rounded-xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              style={{
                background: '#f8f9fa',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #eb662b, #27914c)'
                  }}
                >
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🌐 إصلاح مشاكل DNS</h3>

                  <h4 className="text-xl font-bold mb-4">🔧 جرب هذه الحلول:</h4>

                  <div 
                    className="rounded-xl p-5 mb-6 border-4"
                    style={{
                      background: 'linear-gradient(135deg, #fef3cd, #fde68a)',
                      borderColor: '#f59e0b'
                    }}
                  >
                    <h4 className="text-xl font-bold text-amber-700 mb-4">⚡ حلول سريعة:</h4>
                    <div 
                      className="p-5 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500"
                      style={{
                        background: '#2d3748',
                        color: '#e2e8f0'
                      }}
                    >
                      <div className="whitespace-pre">{`# مسح DNS Cache (Windows)
ipconfig /flushdns
ipconfig /release
ipconfig /renew

# إعادة تشغيل DNS Client
net stop dnscache
net start dnscache`}</div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-4">🌍 تغيير خوادم DNS:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { name: 'Google DNS', primary: '8.8.8.8', secondary: '8.8.4.4' },
                      { name: 'Cloudflare DNS', primary: '1.1.1.1', secondary: '1.0.0.1' },
                      { name: 'OpenDNS', primary: '208.67.222.222', secondary: '208.67.220.220' }
                    ].map((dns) => (
                      <div key={dns.name} className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center">
                        <h5 className="font-bold text-orange-600 mb-3">{dns.name}</h5>
                        <div className="text-lg font-mono">{dns.primary}</div>
                        <div className="text-lg font-mono">{dns.secondary}</div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className="font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, #eb662b, #27914c)',
                      color: 'white'
                    }}
                  >
                    <a href="https://developers.google.com/speed/public-dns/docs/using" target="_blank" rel="noopener noreferrer">
                      دليل تغيير DNS
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 4: Redeploy */}
            <div 
              className="rounded-xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              style={{
                background: '#f8f9fa',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #eb662b, #27914c)'
                  }}
                >
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">🔄 إعادة النشر</h3>

                  <h4 className="text-xl font-bold mb-4">إذا لم تجد المشروع في Vercel:</h4>

                  <div 
                    className="rounded-xl p-5 mb-6 border-4"
                    style={{
                      background: 'linear-gradient(135deg, #fef3cd, #fde68a)',
                      borderColor: '#f59e0b'
                    }}
                  >
                    <h4 className="text-xl font-bold text-amber-700 mb-4">🚨 قد يكون المشروع محذوف!</h4>
                    <p className="text-amber-700">إذا لم تجد المشروع، فقد تحتاج لإعادة النشر:</p>
                  </div>

                  <div 
                    className="p-5 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500 mb-6"
                    style={{
                      background: '#2d3748',
                      color: '#e2e8f0'
                    }}
                  >
                    <div className="whitespace-pre">{`# إعادة النشر من GitHub
1. اذهب إلى vercel.com
2. انقر "New Project"
3. اربط GitHub repository
4. اختر مشروع N2 Diet
5. انقر "Deploy"

# أو من الكود المحلي
npm install -g vercel
vercel --prod`}</div>
                  </div>

                  <h4 className="text-xl font-bold mb-4">📋 قائمة إعادة النشر:</h4>
                  <ChecklistComponent items={redeployChecklist} setItems={setRedeployChecklist} />

                  <div className="mt-6">
                    <Button 
                      asChild 
                      className="font-bold text-lg px-8 py-4 rounded-lg transition-transform hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                        color: 'white'
                      }}
                    >
                      <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
                        إنشاء مشروع جديد
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Final Test */}
            <div 
              className="rounded-xl p-6 border-2 border-gray-300 transition-all duration-300 hover:border-orange-500 hover:-translate-y-1"
              style={{
                background: '#f8f9fa',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}
            >
              <div className="flex items-start gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #eb662b, #27914c)'
                  }}
                >
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">✅ الاختبار النهائي</h3>

                  <h4 className="text-xl font-bold mb-4">🎯 تأكد من أن كل شيء يعمل:</h4>
                  <ChecklistComponent items={finalTestChecklist} setItems={setFinalTestChecklist} />

                  <div 
                    className="rounded-lg p-5 border-2 mt-6"
                    style={{
                      background: '#d1fae5',
                      borderColor: '#10b981'
                    }}
                  >
                    <h4 className="font-bold text-green-700 mb-3">🎉 تهاني!</h4>
                    <p className="text-green-700">
                      موقعك يبدو رائعاً في الصورة! بمجرد حل مشكلة DNS، سيعمل بشكل مثالي.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div 
              className="rounded-xl p-6 text-center border-4"
              style={{
                background: '#d1fae5',
                borderColor: '#10b981'
              }}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">💡 هل تحتاج مساعدة؟</h2>
              <p className="text-lg mb-4">إذا لم تحل المشكلة، شاركني:</p>
              <ul className="text-right space-y-2 text-green-700 max-w-md mx-auto">
                <li>الرابط الصحيح من Vercel Dashboard</li>
                <li>اسم المشروع في Vercel</li>
                <li>هل تجد المشروع في Dashboard أم لا</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}