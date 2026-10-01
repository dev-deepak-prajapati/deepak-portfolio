import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './common/SocialIcons';
import { profileData } from '../data/profile';
import { Container } from './common/Container';
import { SectionHeading } from './common/SectionHeading';
import { Button } from './common/Button';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending form payload gracefully
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onShowToast("Thank you! Your message has been prepared.", "success");
      
      // Also construct a mailto link fallback
      const mailtoUrl = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard!", "success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/40">
      <Container>
        <SectionHeading
          badge="Initiate Contact"
          title="Let's Build Something Reliable"
          subtitle="Open for full-time Software Developer opportunities, technical project inquiries, and engineering collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              
              <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Contact Details
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Feel free to reach out directly via email or LinkedIn for career opportunities, full-stack development roles, or technical discussions.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400">Direct Email</div>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${profileData.contact.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-cyan-400 hover:underline truncate"
                  >
                    {profileData.contact.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{profileData.contact.location}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                  <span>{profileData.contact.availableFor}</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400">Social & Professional Networks</div>
                
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-all"
                  >
                    <Github className="w-4 h-4 text-slate-100" />
                    GitHub
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-mono transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              
              <h3 className="text-xl font-bold font-heading text-slate-100 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-cyan-400" />
                Send a Direct Message
              </h3>

              {submittedSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Message details processed!</p>
                    <p className="mt-1 text-slate-300">
                      Your default mail client has been opened to dispatch this email directly to <strong>{profileData.contact.email}</strong>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 text-slate-100 text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 text-slate-100 text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Position / Project Inquiry"
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 text-slate-100 text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message Content <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-slate-950 text-slate-100 text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  disabled={isSubmitting}
                  className="w-full mt-2"
                >
                  {isSubmitting ? "Processing..." : "Send Message"}
                </Button>

              </form>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
