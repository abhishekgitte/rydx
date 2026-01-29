import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, Database, Users } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, such as when you create an account, use our reading tests, or contact us for support.",
        "This may include:",
        "• Personal information (name, email address)",
        "• Reading performance data (reading speed, comprehension scores)",
        "• Usage data (how you interact with our platform)",
        "• Device information (browser type, operating system)",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Personalize your reading training experience",
        "• Track your progress and show you insights",
        "• Respond to your comments, questions, and requests",
        "• Send you technical notices and support messages",
        "• Detect, prevent, and address technical issues",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share your information only in the following circumstances:",
        "• With your explicit consent",
        "• To comply with legal obligations",
        "• To protect our rights and safety",
        "• With service providers who assist us in operating our platform (under strict confidentiality agreements)",
      ],
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "You have the right to:",
        "• Access your personal information",
        "• Correct inaccurate or incomplete information",
        "• Request deletion of your personal information",
        "• Object to processing of your personal information",
        "• Request restriction of processing",
        "• Data portability",
        "To exercise these rights, please contact us at support@rydx.com",
      ],
    },
    {
      icon: Shield,
      title: "Cookies and Tracking",
      content: [
        "We use cookies and similar tracking technologies to track activity on our platform and hold certain information.",
        "Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
        "However, if you do not accept cookies, you may not be able to use some portions of our platform.",
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
                Privacy <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-violet-300 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                At RydX, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our reading training platform.
              </p>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                By using RydX, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Policy Sections */}
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

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 md:p-10 border border-blue-200/60 dark:border-blue-800/40 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <a 
                href="mailto:support@rydx.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-lg"
              >
                support@rydx.com
              </a>
            </div>

            {/* Changes to Policy */}
            <div className="mt-8 bg-white dark:bg-slate-900/60 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
