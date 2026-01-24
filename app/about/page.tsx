import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About RydX</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              RydX is a comprehensive reading speed and comprehension platform designed specifically for students preparing for competitive examinations like CAT, GMAT, IELTS, and other tests that require strong reading comprehension skills.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We believe that reading speed and comprehension don't have to be competing goals. Through innovative reading techniques and structured practice, students can significantly improve both their reading speed and their ability to understand and retain information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-4">
              RydX offers two powerful reading modes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Run Mode:</strong> The entire article is visible while words are highlighted one by one at your chosen speed. This helps train your eyes to follow along while maintaining context.</li>
              <li><strong>Flash Mode:</strong> Words appear one at a time using bionic reading techniques, where the first part of each word is bolded. This helps your brain process words faster by focusing on the most important visual cues.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Features</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Accurate reading speed testing with comprehension questions</li>
              <li>Two distinct reading modes for different learning styles</li>
              <li>Customizable reading speed (50-500 words per minute)</li>
              <li>Adjustable font sizes for comfortable reading</li>
              <li>Progress tracking and performance metrics</li>
              <li>Practice articles tailored for competitive exam preparation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Perfect For</h2>
            <p className="text-gray-700 mb-4">
              RydX is ideal for students preparing for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>CAT (Common Admission Test)</li>
              <li>GMAT (Graduate Management Admission Test)</li>
              <li>IELTS (International English Language Testing System)</li>
              <li>GRE (Graduate Record Examinations)</li>
              <li>Other competitive exams with reading comprehension sections</li>
            </ul>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-medium">
                Ready to improve your reading speed? Start with our free reading speed test and begin your journey to faster, more effective reading.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
