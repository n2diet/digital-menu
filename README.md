# DNS Troubleshooting Web App

A beautiful, functional Next.js web application for troubleshooting DNS_PROBE_FINISHED_NXDOMAIN errors, specifically designed to help fix Vercel deployment issues.

## 🌟 Features

### Arabic Language Support
- **Full RTL (Right-to-Left) layout** for proper Arabic text rendering
- **Native Arabic interface** with comprehensive troubleshooting steps
- **Culturally appropriate design** elements and user experience

### Interactive Elements
- **Clickable checklists** to track troubleshooting progress
- **Visual feedback** with emoji indicators (☐/✅)
- **Hover effects** and smooth transitions throughout the interface
- **Progress tracking** across multiple troubleshooting steps

### Modern UI/UX
- **Beautiful gradient backgrounds** (orange to green theme)
- **Card-based layout** for organized content sections
- **Responsive design** that works on desktop, tablet, and mobile
- **Professional styling** using Tailwind CSS and Radix UI components

### Comprehensive Troubleshooting Guide
1. **Quick Fix Section** - Immediate solutions to try first
2. **Vercel Configuration Check** - Step-by-step Vercel dashboard review
3. **DNS Resolution** - Multiple DNS server options and cache clearing instructions
4. **Project Redeployment** - Complete guide for recreating lost projects
5. **Final Testing** - Comprehensive checklist to verify everything works

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd /workspace
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
   - Main page: http://localhost:3000
   - DNS Troubleshooting: http://localhost:3000/dns-troubleshooting

## 📱 Pages

### Main Page (`/`)
- Overview of the project
- Navigation to the DNS troubleshooting guide
- Access to other project features

### DNS Troubleshooting (`/dns-troubleshooting`)
- Complete step-by-step troubleshooting guide
- Interactive checklists for progress tracking
- External links to relevant resources
- Code examples for technical solutions

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)

## 📖 Usage Guide

### For Users Experiencing DNS Issues:

1. **Start with Quick Fixes**:
   - Click through the checklist items as you complete them
   - Try the alternative Vercel URLs provided
   - Access your Vercel Dashboard directly

2. **Check Vercel Configuration**:
   - Follow the numbered steps to verify your project settings
   - Use the provided code snippets for reference
   - Copy the correct URL from your Vercel project

3. **DNS Troubleshooting**:
   - Clear your DNS cache using the provided commands
   - Try alternative DNS servers (Google, Cloudflare, OpenDNS)
   - Use the external DNS configuration guide

4. **Redeploy if Necessary**:
   - Follow the redeployment checklist
   - Use the direct link to create a new Vercel project
   - Connect your GitHub repository

5. **Final Testing**:
   - Complete the final checklist to ensure everything works
   - Test on multiple devices and browsers

### For Developers:

The interactive checklist functionality is implemented using React hooks:

```typescript
const [checklist, setChecklist] = useState<ChecklistItem[]>([
  { id: '1', text: 'Task description', checked: false }
])

const toggleChecklistItem = (id: string) => {
  setChecklist(prev =>
    prev.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
  )
}
```

## 🎨 Design Features

- **Gradient backgrounds** for visual appeal
- **Color-coded sections** for different types of information:
  - Red: Problems and warnings
  - Orange/Yellow: Urgent actions and tips  
  - Green: Success states and confirmations
  - Gray: Code blocks and technical content

- **Typography hierarchy** with clear heading levels
- **Consistent spacing** using Tailwind's spacing system
- **Professional button styling** with hover states

## 🔧 Customization

To modify the troubleshooting steps:

1. Edit the checklist arrays in `/app/dns-troubleshooting/page.tsx`
2. Update the content sections as needed
3. Modify styling by adjusting Tailwind classes
4. Add new troubleshooting steps following the existing pattern

## 📱 Mobile Responsiveness

The app is fully responsive with:
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly interactive elements**
- **Readable font sizes** on mobile devices
- **Optimized spacing** for touch interactions

## 🌐 Browser Support

Tested and working on:
- Chrome/Chromium browsers
- Firefox
- Safari
- Edge

## 🤝 Contributing

Feel free to submit issues and enhancement requests. The codebase is well-structured for easy modifications and additions.

## 📄 License

This project is part of a larger Next.js application. Refer to the main project license.

---

**Live Demo**: Visit http://localhost:3000/dns-troubleshooting after running the development server.