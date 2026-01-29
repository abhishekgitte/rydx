import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertTriangle, Shield, Users, Ban } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using RydX, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "We reserve the right to modify these terms at any time. We will notify users of any changes by updating the \"Last updated\" date of this Terms of Service page.",
      ],
    },
    {
      icon: Users,
      title: "Use License",
      content: [
        "Permission is granted to temporarily use RydX for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on RydX",
        "• Remove any copyright or other proprietary notations from the materials",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by RydX at any time.",
      ],
    },
    {
      icon: Shield,
      title: "User Accounts",
      content: [
        "You are responsible for maintaining the confidentiality of your account and password.",
        "You agree to accept responsibility for all activities that occur under your account or password.",
        "You must notify us immediately of any unauthorized use of your account or any other breach of security.",
        "We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: [
        "The materials on RydX are provided on an 'as is' basis. RydX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        "Further, RydX does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its platform or otherwise relating to such materials or on any sites linked to this site.",
        "Reading improvement results may vary. Individual results depend on various factors including practice consistency, effort, and personal circumstances.",
      ],
    },
    {
      icon: Scale,
      title: "Limitations",
      content: [
        "In no event shall RydX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RydX, even if RydX or a RydX authorized representative has been notified orally or in writing of the possibility of such damage.",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      ],
    },
    {
      icon: Ban,
      title: "Prohibited Uses",
      content: [
        "You may not use RydX:",
        "• In any way that violates any applicable national or international law or regulation",
        "• To transmit, or procure the sending of, any advertising or promotional material without our prior written consent",
        "• To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity",
        "• In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful",
        "• To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the platform",
      ],
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      content: [
        "The service and its original content, features, and functionality are and will remain the exclusive property of RydX and its licensors.",
        "The service is protected by copyright, trademark, and other laws.",
        "Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.",
      ],
    },
    {
      icon: Shield,
      title: "Termination",
      content: [
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
        "If you wish to terminate your account, you may simply discontinue using the service.",
        "All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Terms of <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Please read these terms carefully before using RydX.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Last Updated */}
            <div className="mb-8 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Welcome to RydX. These Terms of Service ("Terms") govern your access to and use of our reading training platform. By accessing or using RydX, you agree to be bound by these Terms.
              </p>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                If you disagree with any part of these terms, then you may not access the service.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {section.content.map((paragraph, pIndex) => (
                        <p 
                          key={pIndex}
                          className={`text-lg text-slate-700 dark:text-slate-300 leading-relaxed ${
                            paragraph.startsWith('•') ? 'ml-4' : ''
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Governing Law */}
            <div className="mt-12 bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which RydX operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-8 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-blue-200/60 dark:border-blue-800/40 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Questions About Terms?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <a 
                href="mailto:support@rydx.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-lg"
              >
                support@rydx.com
              </a>
            </div>

            {/* Changes to Terms */}
            <div className="mt-8 bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
