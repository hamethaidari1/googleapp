import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information."
      />

      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Effective date: January 1, 2024</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <p className="text-gray-700 leading-relaxed">
                This Personal Website is owned and operated by <strong>[YOUR NAME]</strong>. We
                respect your privacy and are committed to protecting it through our compliance with
                this policy.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect several types of information from and about users of our website:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Personal information you provide directly to us, such as your name and email
                    address when you contact us through our contact form
                  </li>
                  <li>
                    Usage data collected automatically through cookies and similar technologies,
                    such as pages visited, time spent on pages, and browser type
                  </li>
                  <li>
                    Information collected through third-party services like Google Analytics to
                    understand how visitors use our website
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Use of Cookies and Analytics
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to analyze site traffic and
                  improve the user experience. These technologies help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Understand how visitors navigate our website</li>
                  <li>Remember your preferences and settings</li>
                  <li>Measure the effectiveness of our content</li>
                  <li>Improve our website's performance and functionality</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We may use Google Analytics to collect visitor information. You can opt-out of
                  Google Analytics tracking by visiting the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Advertising</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may display advertising provided by third-party services such as Google AdSense.
                  These providers may use cookies and similar technologies to display advertisements
                  that are relevant to your interests based on your browsing activity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We do not share your personal data with advertisers beyond what their services
                  automatically collect through cookies. You can control cookie preferences through
                  your browser settings or opt-out of personalized advertising by visiting{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    aboutads.info
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Responding to your inquiries and contact requests</li>
                  <li>Improving our website's content and functionality</li>
                  <li>Analyzing website usage and trends</li>
                  <li>Sending periodic emails if you have opted in to receive them</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for
                  the privacy practices or content of these external sites. We encourage you to read
                  the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the internet is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to the processing of your personal information</li>
                  <li>Withdraw consent for data processing at any time</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{' '}
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    your.email@example.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website is not intended for children under the age of 13. We do not knowingly
                  collect personal information from children under 13. If you believe we have
                  collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted on
                  this page with an updated effective date. We encourage you to review this policy
                  periodically to stay informed about how we protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or concerns about this privacy policy or our data
                  practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 font-medium">[YOUR NAME]</p>
                  <p className="text-gray-700">
                    Email:{' '}
                    <a
                      href="mailto:your.email@example.com"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      your.email@example.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
