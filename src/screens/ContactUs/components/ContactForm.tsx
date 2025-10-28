import { useState } from 'react';
import { Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

interface ContactFormProps {
  language: 'en' | 'ur';
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ language }: ContactFormProps) {
  const isUrdu = language === 'ur';
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    // Validate fields
    if (!formData.name.trim()) {
      setErrorMessage(isUrdu ? 'براہ کرم اپنا نام درج کریں' : 'Please enter your name');
      setFormState('error');
      return;
    }

    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage(isUrdu ? 'براہ کرم صحیح ای میل درج کریں' : 'Please enter a valid email');
      setFormState('error');
      return;
    }

    if (!formData.phone || formData.phone.length < 10) {
      setErrorMessage(isUrdu ? 'براہ کرم صحیح فون نمبر درج کریں' : 'Please enter a valid phone number');
      setFormState('error');
      return;
    }

    if (!formData.subject.trim()) {
      setErrorMessage(isUrdu ? 'براہ کرم موضوع درج کریں' : 'Please enter a subject');
      setFormState('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage(isUrdu ? 'براہ کرم اپنا پیغام درج کریں' : 'Please enter your message');
      setFormState('error');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In production, this would send to a backend API
      // For now, we'll simulate a successful submission
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setErrorMessage(isUrdu ? 'کوئی خرابی ہوئی۔ براہ کرم دوبارہ کوشش کریں' : 'An error occurred. Please try again');
      setFormState('error');
    }
  };

  const subjectOptions = [
    { valueEn: 'general', valueUr: 'general', labelEn: 'General Inquiry', labelUr: 'عام سوال' },
    { valueEn: 'support', valueUr: 'support', labelEn: 'Technical Support', labelUr: 'تکنیکی مدد' },
    { valueEn: 'feedback', valueUr: 'feedback', labelEn: 'Feedback', labelUr: 'تاثرات' },
    { valueEn: 'partnership', valueUr: 'partnership', labelEn: 'Partnership', labelUr: 'شراکت' },
    { valueEn: 'other', valueUr: 'other', labelEn: 'Other', labelUr: 'دوسرا' },
  ];

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h2 className={`text-3xl font-bold text-green-600 mb-2 ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'شکریہ!' : 'Thank You!'}
        </h2>
        <p className={`text-gray-700 mb-4 ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu
            ? 'ہمیں آپ کا پیغام موصول ہو گیا۔ ہم جلد ہی آپ سے رابطہ کریں گے۔'
            : 'We have received your message. We will get back to you soon.'}
        </p>
        <p className={`text-sm text-gray-600 ${isUrdu ? 'font-urdu' : ''}`}>
          {isUrdu ? 'اگر ضروری ہو تو براہ کرم براہ راست رابطہ کریں' : 'For urgent matters, please call us directly'}
        </p>
        <a
          href="tel:+923010900903"
          className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#7a0000] transition-colors font-semibold"
        >
          <Phone className="w-5 h-5" />
          {isUrdu ? '+92-301-0900903' : '+92-301-0900903'}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl shadow-lg p-8 ${isUrdu ? 'font-urdu' : ''}`} dir={isUrdu ? 'rtl' : 'ltr'}>
      <h2 className={`text-2xl font-bold text-gray-900 mb-6 ${isUrdu ? 'font-urdu' : ''}`}>
        {isUrdu ? 'ہمیں پیغام بھیجیں' : 'Send us a Message'}
      </h2>

      {/* Error Message */}
      {formState === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className={`text-red-800 text-sm ${isUrdu ? 'font-urdu text-right' : ''}`}>{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isUrdu ? 'text-right' : ''}`}>
            {isUrdu ? 'نام *' : 'Full Name *'}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={isUrdu ? 'آپ کا نام' : 'Your Name'}
            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
              isUrdu ? 'text-right' : ''
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isUrdu ? 'text-right' : ''}`}>
            {isUrdu ? 'ای میل *' : 'Email Address *'}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={isUrdu ? 'آپ کی ای میل' : 'your@email.com'}
            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
              isUrdu ? 'text-right' : ''
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Phone */}
        <div>
          <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isUrdu ? 'text-right' : ''}`}>
            {isUrdu ? 'فون نمبر *' : 'Phone Number *'}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder={isUrdu ? '+92 فون نمبر' : '+92 Phone Number'}
            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
              isUrdu ? 'text-right' : ''
            }`}
          />
        </div>

        {/* Subject */}
        <div>
          <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isUrdu ? 'text-right' : ''}`}>
            {isUrdu ? 'موضوع *' : 'Subject *'}
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors ${
              isUrdu ? 'text-right' : ''
            }`}
          >
            <option value="">
              {isUrdu ? 'موضوع منتخب کریں' : 'Select Subject'}
            </option>
            {subjectOptions.map((option) => (
              <option key={option.valueEn} value={option.valueEn}>
                {isUrdu ? option.labelUr : option.labelEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isUrdu ? 'text-right' : ''}`}>
          {isUrdu ? 'پیغام *' : 'Message *'}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={isUrdu ? 'اپنا پیغام یہاں لکھیں...' : 'Type your message here...'}
          rows={6}
          className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8b0000] transition-colors resize-none ${
            isUrdu ? 'text-right' : ''
          }`}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className={`w-full py-3 bg-[#8b0000] text-white font-semibold rounded-lg hover:bg-[#7a0000] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 ${
          isUrdu ? 'font-urdu' : ''
        }`}
      >
        {formState === 'submitting' ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            {isUrdu ? 'بھیج رہے ہیں...' : 'Sending...'}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {isUrdu ? 'پیغام بھیجیں' : 'Send Message'}
          </>
        )}
      </button>

      <p className={`text-xs text-gray-600 text-center mt-4 ${isUrdu ? 'font-urdu' : ''}`}>
        {isUrdu
          ? 'ہم عام طور پر 7-14 کاروباری دن میں جواب دیتے ہیں'
          : 'We typically respond within 7-14 business days'}
      </p>
    </form>
  );
}
