import { useState } from 'react';
import { Phone, Mail, Instagram, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.contact.trim()) {
      errs.contact = 'Please enter your phone number or email address.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact.trim()) &&
      !/^[0-9+\-\s]{8,15}$/.test(formData.contact.trim())
    ) {
      errs.contact = 'Please enter a valid email or phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 5) {
      errs.message = 'Message should be at least 5 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      // Valid frontend simulation
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', contact: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f7f4ef]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-md mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-[#2b1810] tracking-tight mb-4">
            We Would Love to Hear From You
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Planning a private birthday get-together, study group table, or have feedback about your last coffee? Reach out or chat with our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels & WhatsApp Callout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200/90 shadow-2xs space-y-5">
              <h3 className="font-heading font-bold text-xl text-[#2b1810]">
                Direct Contacts
              </h3>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Direct Line</p>
                  <p className="text-sm font-bold text-[#2b1810]">+91 98765 43210</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@urbanbrewcafe.in"
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Email Inquiries</p>
                  <p className="text-sm font-bold text-[#2b1810]">hello@urbanbrewcafe.in</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-medium">Instagram Stories</p>
                  <p className="text-sm font-bold text-[#2b1810]">@urbanbrewcafe_gzb</p>
                </div>
              </a>
            </div>

            {/* Prominent WhatsApp Card */}
            <div className="bg-emerald-900 text-emerald-50 p-6 sm:p-7 rounded-3xl shadow-md border border-emerald-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Fastest Response
              </div>
              <h4 className="font-heading font-bold text-xl text-white mb-2">
                Chat Directly on WhatsApp
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-5">
                Have a question about table availability, special dietary requests, or takeaway orders? We typically reply within minutes on WhatsApp.
              </p>
              <a
                id="contact-whatsapp-cta-btn"
                href="https://wa.me/919876543210?text=Hi%20Urban%20Brew%20Café,%20I'd%20like%20to%20inquire%20about%20your%20menu%20and%20table%20seating."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-2xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 active:scale-98 transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Clean Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-stone-200/90 shadow-2xs">
            {submitted ? (
              <div id="contact-form-success" className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#2b1810]">
                  Thank You, {formData.name}!
                </h3>
                <div className="max-w-md mx-auto space-y-2 text-stone-600 text-sm">
                  <p>
                    Your sample message has been received on this portfolio demonstration.
                  </p>
                  <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200/60 font-medium">
                    Note: This is a front-end portfolio showcase for Urban Brew Café. For actual inquiries, please tap the WhatsApp button.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#2b1810] text-amber-50 text-sm font-semibold hover:bg-[#3d2317] transition-colors"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-[#2b1810] mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500">
                    Fill out the fields below and we'll be glad to assist you.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aryan Sharma"
                    className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.name
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-stone-200 focus:border-amber-600 focus:ring-amber-600/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Contact (Phone or Email) */}
                <div>
                  <label htmlFor="contact-info" className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Phone Number or Email *
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. +91 98111 22233 or aryan@example.com"
                    className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.contact
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-stone-200 focus:border-amber-600 focus:ring-amber-600/20'
                    }`}
                  />
                  {errors.contact && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.contact}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
                    Your Message or Reservation Request *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to ask or reserve..."
                    className={`w-full px-4 py-3 text-sm bg-stone-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-stone-200 focus:border-amber-600 focus:ring-amber-600/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-rose-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-[#2b1810] text-amber-50 hover:bg-[#3d2317] active:scale-98 transition-all shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
