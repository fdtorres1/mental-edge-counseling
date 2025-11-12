export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mental Edge Counseling LLC</h3>
            <p className="text-gray-400 text-sm">
              Helping people reach their full potential and live life to the fullest.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-medium text-white">Address:</span><br />
                11106 Front Street<br />
                Mokena, IL 60448
              </p>
              <p>
                <span className="font-medium text-white">Phone:</span>{' '}
                <a href="tel:8152771092" className="hover:text-white transition-colors">
                  815-277-1092
                </a>
              </p>
              <p>
                <span className="font-medium text-white">Email:</span>{' '}
                <a 
                  href="mailto:mentaledgecounseling@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  mentaledgecounseling@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/paperwork" className="text-gray-400 hover:text-white transition-colors">
                  New Client Paperwork
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mental Edge Counseling LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

