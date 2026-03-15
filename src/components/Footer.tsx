import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-5 group">
              <img
                src="/remake-this-logo-make-it-high-quality-an_1lOeaXi_S9e63QashsobSg_MX1MnvEZTemJ90OSV9f1Iw_hd-removebg-preview.png"
                alt="Paint Works Pro"
                className="h-24 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-slate-300 mb-5 leading-relaxed max-w-sm">
              San Diego's trusted painting professionals. Licensed, insured, and committed to delivering exceptional results for interior and exterior projects across all of San Diego County.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+16193047732"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors font-medium"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                +1 619-304-7732
              </a>
              <a
                href="mailto:info@paintworks.pro"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-amber-400" />
                info@paintworks.pro
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-amber-400 mb-5 text-sm uppercase tracking-widest">Services</h3>
            <div className="space-y-2.5">
              {[
                'Interior Painting',
                'Exterior Painting',
                'Cabinet Painting',
                'Drywall Repair',
                'Popcorn Ceiling Removal',
                'Fence Staining',
              ].map((s) => (
                <p key={s} className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-default">{s}</p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-amber-400 mb-5 text-sm uppercase tracking-widest">Quick Links</h3>
            <div className="space-y-2.5">
              <Link to="/" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Home</Link>
              <Link to="/blog" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Blog</Link>
              <Link to="/colors" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Color Guide</Link>
              <Link to="/service-areas" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Service Areas</Link>
              <a href="#privacy" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="block text-slate-400 hover:text-slate-200 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="text-center text-slate-400 text-sm">
            <p className="mb-2 font-semibold text-slate-300">
              &copy; {new Date().getFullYear()} Paint Works Pro. All rights reserved. San Diego, CA
            </p>
            <p className="text-xs text-slate-500 max-w-2xl mx-auto">
              By using this website and providing your contact information, you acknowledge that you have read and agree to our Privacy Policy and Terms of Service.
              For SMS communications, standard message and data rates may apply. You can opt-out at any time by replying STOP.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
