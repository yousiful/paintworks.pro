import { PaintBucket, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl">
                <PaintBucket className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                Paintworks
              </span>
            </div>
            <p className="text-blue-100 mb-4">
              Professional painting and renovation services bringing your vision to life with quality craftsmanship and exceptional customer service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-yellow-300">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+16193047732"
                className="flex items-center gap-2 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 619-304-7732</span>
              </a>
              <a
                href="mailto:info@paintworks.pro"
                className="flex items-center gap-2 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@paintworks.pro</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-pink-300">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/colors" className="block text-blue-200 hover:text-pink-300 transition-colors">
                Color Guide
              </Link>
              <Link to="/service-areas" className="block text-blue-200 hover:text-pink-300 transition-colors">
                Service Areas
              </Link>
              <a href="#privacy" className="block text-blue-200 hover:text-pink-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-blue-200 hover:text-pink-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8">
          <div className="text-center text-blue-100 text-sm">
            <p className="mb-2 font-semibold">
              &copy; {new Date().getFullYear()} Paintworks. All rights reserved.
            </p>
            <p className="text-xs text-blue-200">
              By using this website and providing your contact information, you acknowledge that you have read and agree to our Privacy Policy and Terms of Service.
              For SMS communications, standard message and data rates may apply. You can opt-out at any time by replying STOP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
