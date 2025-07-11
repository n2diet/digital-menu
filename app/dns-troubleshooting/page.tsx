'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
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
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => toggleChecklistItem(items, setItems, item.id)}
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all border ${
            item.checked
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}
        >
          <span className="text-base">{item.text}</span>
          <div className="text-2xl">
            {item.checked ? '✅' : '☐'}
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-green-600 p-5" dir="rtl">
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

        <Card className="overflow-hidden shadow-2xl">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center p-8">
            <CardTitle className="text-4xl font-bold mb-4">
              🚨 DNS_PROBE_FINISHED_NXDOMAIN
            </CardTitle>
            <p className="text-xl">حل مشكلة عدم العثور على النطاق n2diet.vercel.app</p>
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            {/* Problem Description */}
            <Card className="border-3 border-red-400 bg-red-50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <SearchIcon className="w-8 h-8 text-red-600" />
                  <h2 className="text-2xl font-bold text-red-600">تشخيص المشكلة</h2>
                </div>
                <p className="text-lg mb-4">
                  <strong>DNS_PROBE_FINISHED_NXDOMAIN</strong> يعني أن النطاق{' '}
                  <code className="bg-gray-200 px-2 py-1 rounded text-sm">n2diet.vercel.app</code>{' '}
                  غير موجود في DNS
                </p>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                  <p className="text-orange-700 font-bold text-lg mb-3">⚠️ هذا يعني أن النطاق قد يكون:</p>
                  <ul className="text-right space-y-2 text-orange-700">
                    <li>• غير مُعرَّف في Vercel</li>
                    <li>• محذوف أو معطل</li>
                    <li>• لم ينتشر في DNS بعد</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 1: Quick Fix */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <RefreshCwIcon className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-orange-600">الحل العاجل - ابدأ هنا</h3>
                    </div>

                    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-300 mb-6">
                      <CardContent className="p-5">
                        <h4 className="text-lg font-bold text-orange-700 mb-3">🎯 جرب هذه الروابط البديلة:</h4>
                        <p className="mb-4">استخدم الرابط المباشر من Vercel Dashboard:</p>
                        <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500">
                          <div className="whitespace-pre">{`# الروابط المحتملة لمشروعك:
https://n2-diet-menu.vercel.app
https://n2-diet.vercel.app
https://n2diet-[random-string].vercel.app

# أو ابحث في Vercel Dashboard عن الرابط الصحيح`}</div>
                        </div>
                      </CardContent>
                    </Card>

                    <h4 className="text-lg font-bold mb-4">📋 خطوات سريعة:</h4>
                    <ChecklistComponent items={quickFixChecklist} setItems={setQuickFixChecklist} />

                    <div className="mt-6">
                      <Button 
                        asChild 
                        className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-bold"
                      >
                        <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">
                          فتح Vercel Dashboard
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Vercel Check */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <SettingsIcon className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-orange-600">فحص إعدادات Vercel</h3>
                    </div>

                    <h4 className="text-lg font-bold mb-4">🔍 تحقق من هذه النقاط في Vercel:</h4>
                    <ol className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                        <div>
                          <strong>اسم المشروع:</strong> تأكد من اسم المشروع الصحيح
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                        <div>
                          <strong>Domain Settings:</strong> تحقق من إعدادات النطاق
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                        <div>
                          <strong>Deployment Status:</strong> تأكد من نجاح آخر نشر
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                        <div>
                          <strong>Custom Domain:</strong> إذا كنت تستخدم نطاق مخصص
                        </div>
                      </li>
                    </ol>

                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500 mb-6">
                      <div className="whitespace-pre">{`# خطوات الفحص في Vercel:
1. اذهب إلى vercel.com/dashboard
2. ابحث عن مشروع "N2 Diet" أو "n2-diet"
3. انقر على المشروع
4. انسخ الرابط من "Visit" button
5. تحقق من "Domains" tab`}</div>
                    </div>

                    <Card className="bg-green-50 border-2 border-green-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-600" />
                          <h4 className="font-bold text-green-700">إذا وجدت المشروع:</h4>
                        </div>
                        <p className="text-green-700">انسخ الرابط الصحيح واستخدمه بدلاً من n2diet.vercel.app</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: DNS Fix */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <RefreshCwIcon className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-orange-600">إصلاح مشاكل DNS</h3>
                    </div>

                    <h4 className="text-lg font-bold mb-4">🔧 جرب هذه الحلول:</h4>

                    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-orange-300 mb-6">
                      <CardContent className="p-5">
                        <h4 className="text-lg font-bold text-orange-700 mb-3">⚡ حلول سريعة:</h4>
                        <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500">
                          <div className="whitespace-pre">{`# مسح DNS Cache (Windows)
ipconfig /flushdns
ipconfig /release
ipconfig /renew

# إعادة تشغيل DNS Client
net stop dnscache
net start dnscache`}</div>
                        </div>
                      </CardContent>
                    </Card>

                    <h4 className="text-lg font-bold mb-4">🌍 تغيير خوادم DNS:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="border-2 border-gray-200 text-center">
                        <CardContent className="p-4">
                          <h5 className="font-bold text-orange-600 mb-2">Google DNS</h5>
                          <div className="text-lg font-mono">8.8.8.8</div>
                          <div className="text-lg font-mono">8.8.4.4</div>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-gray-200 text-center">
                        <CardContent className="p-4">
                          <h5 className="font-bold text-orange-600 mb-2">Cloudflare DNS</h5>
                          <div className="text-lg font-mono">1.1.1.1</div>
                          <div className="text-lg font-mono">1.0.0.1</div>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-gray-200 text-center">
                        <CardContent className="p-4">
                          <h5 className="font-bold text-orange-600 mb-2">OpenDNS</h5>
                          <div className="text-lg font-mono">208.67.222.222</div>
                          <div className="text-lg font-mono">208.67.220.220</div>
                        </CardContent>
                      </Card>
                    </div>

                    <Button 
                      asChild 
                      className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-bold"
                    >
                      <a href="https://developers.google.com/speed/public-dns/docs/using" target="_blank" rel="noopener noreferrer">
                        دليل تغيير DNS
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4: Redeploy */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <RefreshCwIcon className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-orange-600">إعادة النشر</h3>
                    </div>

                    <h4 className="text-lg font-bold mb-4">إذا لم تجد المشروع في Vercel:</h4>

                    <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 mb-6">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangleIcon className="w-6 h-6 text-red-600" />
                          <h4 className="text-lg font-bold text-red-700">قد يكون المشروع محذوف!</h4>
                        </div>
                        <p className="text-red-700">إذا لم تجد المشروع، فقد تحتاج لإعادة النشر:</p>
                      </CardContent>
                    </Card>

                    <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto border-r-4 border-green-500 mb-6">
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

                    <h4 className="text-lg font-bold mb-4">📋 قائمة إعادة النشر:</h4>
                    <ChecklistComponent items={redeployChecklist} setItems={setRedeployChecklist} />

                    <div className="mt-6">
                      <Button 
                        asChild 
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold"
                      >
                        <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
                          إنشاء مشروع جديد
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5: Final Test */}
            <Card className="border-2 border-gray-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </Badge>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircleIcon className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-orange-600">الاختبار النهائي</h3>
                    </div>

                    <h4 className="text-lg font-bold mb-4">🎯 تأكد من أن كل شيء يعمل:</h4>
                    <ChecklistComponent items={finalTestChecklist} setItems={setFinalTestChecklist} />

                    <Card className="bg-green-50 border-2 border-green-300 mt-6">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircleIcon className="w-6 h-6 text-green-600" />
                          <h4 className="font-bold text-green-700">🎉 تهاني!</h4>
                        </div>
                        <p className="text-green-700">
                          موقعك يبدو رائعاً في الصورة! بمجرد حل مشكلة DNS، سيعمل بشكل مثالي.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-green-50 border-2 border-green-400">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <HelpCircleIcon className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-green-700">هل تحتاج مساعدة؟</h2>
                </div>
                <p className="text-lg mb-4">إذا لم تحل المشكلة، شاركني:</p>
                <ul className="text-right space-y-2 text-green-700 max-w-md mx-auto">
                  <li>• الرابط الصحيح من Vercel Dashboard</li>
                  <li>• اسم المشروع في Vercel</li>
                  <li>• هل تجد المشروع في Dashboard أم لا</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}