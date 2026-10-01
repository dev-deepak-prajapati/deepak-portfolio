import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Code2, Briefcase, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from './common/Button';

export const ResumeModal = ({ onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownload = () => {
    // Generate text/markdown resume blob download
    const resumeText = `
DEEPAK PRAJAPATI
Software Developer (Java | Python | Web Engineering)
Email: ${profileData.contact.email}
Location: ${profileData.contact.location}
GitHub: ${profileData.contact.github}
LinkedIn: ${profileData.contact.linkedin}

ACADEMIC SUMMARY
Degree: BCA (Bachelor of Computer Applications)
Institution: Mahadev PG College, Bariyasanpur, Varanasi
University: Mahatma Gandhi Kashi Vidyapith (MGKVP)
Graduation Year: 2026
Aggregate Score: 73.33%

TECHNICAL SKILLS
- Languages: Java, Python, JavaScript (ES6+), C/C++
- Web & Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap
- Backend & DB: Java JSP & Servlets, JDBC, MySQL, Node.js basics, REST APIs
- Tools: Git, GitHub, VS Code, Eclipse, NetBeans, Postman

KEY CAPSTONE PROJECTS
1. Institute Management System (Java, JSP, Servlets, JDBC, MySQL, Bootstrap)
   - Role-based portal for Admin, Faculty, and Students.
   - Attendance tracking, fee management, and performance reports.
2. DevPulse Developer Activity Hub (React.js, Vite, Tailwind CSS)
   - Dynamic portfolio application with filterable projects & CLI terminal.

EXPERIENCE & PRACTICAL WORK
- Full-Stack Project Developer (2024-2026): Designed and architected web applications using MVC architecture, JDBC DAO layers, and relational MySQL schemas.
- Computer Applications Practical Lab (2023-2025): Developed object-oriented Java modules and database SQL schemas.
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Deepak_Prajapati_Software_Developer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (onShowToast) {
      onShowToast("Resume downloaded successfully!", "success");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
      <div 
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-700 shadow-2xl overflow-y-auto flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-950/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-heading font-bold text-slate-100 text-lg">
            <FileText className="w-5 h-5 text-cyan-400" />
            Resume Preview — {profileData.name}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formatted ATS Resume Document */}
        <div className="p-6 sm:p-10 space-y-8 bg-slate-950 text-slate-200 font-sans">
          
          {/* Header Contact Card */}
          <div className="border-b border-slate-800 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold font-heading text-slate-100">
              {profileData.name}
            </h1>
            <p className="text-cyan-400 font-mono text-sm font-semibold">
              Software Developer | Java | Python | Modern Web Development
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {profileData.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {profileData.contact.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" /> {profileData.contact.github}
              </span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Academic Background
            </h2>
            <div className="flex justify-between items-start text-xs sm:text-sm">
              <div>
                <p className="font-bold text-slate-100">Bachelor of Computer Applications (BCA)</p>
                <p className="text-slate-400">Mahadev PG College, Bariyasanpur, Varanasi (University: MGKVP)</p>
              </div>
              <div className="text-right font-mono text-xs text-slate-400">
                <p className="font-bold text-emerald-400">Aggregate: 73.33%</p>
                <p>Graduation: 2026</p>
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              <div><strong className="text-slate-100">Core Languages:</strong> Java SE, Python, JavaScript (ES6+), C/C++</div>
              <div><strong className="text-slate-100">Web & Frontend:</strong> HTML5, CSS3, React.js, Tailwind CSS, Bootstrap</div>
              <div><strong className="text-slate-100">Backend & Web APIs:</strong> Java JSP, Servlets, JDBC, REST APIs</div>
              <div><strong className="text-slate-100">Databases & Tools:</strong> MySQL, Git, GitHub, VS Code, Postman</div>
            </div>
          </div>

          {/* Key Capstone Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Key Software Projects
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between font-bold text-slate-100">
                  <span>Institute Management System (Java Capstone)</span>
                  <span className="font-mono text-xs text-cyan-400">Java · JSP · Servlet · MySQL · Bootstrap</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  Engineered web platform managing student registration, faculty class allocation, attendance logging, fee processing, and monthly reports using MVC architecture.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-100">
                  <span>DevPulse Portfolio & Metrics Application</span>
                  <span className="font-mono text-xs text-cyan-400">React.js · Vite · Tailwind CSS</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  Designed responsive portfolio with client-side project filtering, interactive code terminal, and dark/light theme switching.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between gap-4 z-10">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Preview
          </Button>

          <Button
            variant="primary"
            size="sm"
            icon={Download}
            onClick={handleDownload}
          >
            Download Resume (.txt)
          </Button>
        </div>

      </div>
    </div>
  );
};
