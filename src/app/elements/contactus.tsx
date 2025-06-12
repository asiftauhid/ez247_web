'use client';

import { FormEvent, useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  const emails = [
    'info@ez247.ai',
    'partners@ez247.ai',
    'sales@ez247.ai',
    'customer@ez247.ai',
    'investors@ez247.ai'
  ];

  return (
    <section id="contact" className="py-6 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        {/* Contact Form */}
        <div className="flex-1 w-full md:max-w-lg bg-white rounded-2xl p-5 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name and Email side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                rows={2}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="relative flex-shrink-0 pl-0 md:pl-8 space-y-8 pt-5">
          <div className="absolute left-0 top-0 w-[1px] h-[85%] bg-gray-200 mt-5" />
          {emails.map((email, index) => (
            <div key={index} className="relative">
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 