export const projectsData = [
  {
    id: "institute-management-system",
    title: "Institute Management System",
    category: "Full Stack",
    subtitle: "Web-based institutional platform for managing academic operations",
    featured: true,
    problemStatement: "Educational institutes often struggle with disconnected manual workflows for student registration, faculty class assignments, monthly attendance tracking, and fee receipt generation leading to data inconsistencies and slow processing.",
    solution: "A centralized web application engineered with Java JSP, Servlets, and MySQL that provides secure role-based portals for administrators, faculty members, and students to streamline institutional management.",
    description: "Built as an enterprise-style web portal, the Institute Management System automates student records management, course allocations, fee payment ledgering, and lecture-wise attendance logging with automated monthly summary reports.",
    technologies: ["Java", "JSP", "Servlet", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    keyFeatures: [
      "Role-Based Authentication & Authorization (Admin, Faculty, Student)",
      "Student Enrollment & Profile Management with Course Allocation",
      "Faculty Class Schedule Assignment & Course Distribution",
      "Lecture-Wise Attendance Tracking & Monthly Percentage Reports",
      "Fee Payment Recording, Outstanding Balance Calculation & Digital Receipts",
      "Dynamic Administrative Dashboard with Aggregate Operational Analytics"
    ],
    architecture: [
      "Layered MVC Architecture (JSP Views, Servlet Controllers, Java DAO Model Layers)",
      "Relational Schema Design in MySQL with foreign key integrity across Students, Courses, and Fees",
      "Session-based Authentication with HTTP Servlet Session filter guards",
      "JDBC Connection Pooling for optimized database transaction handling"
    ],
    github: "https://github.com/dev-deepak-prajapati/Institute-Management-System",
    live: "https://institute-mgmt-demo.vercel.app",
    status: "Completed Project",
    badge: "Core Capstone Project"
  },
  {
    id: "devpulse-dashboard",
    title: "DevPulse - Developer Activity & Metrics Hub",
    category: "React / Frontend",
    subtitle: "Interactive developer portfolio & GitHub metrics application",
    featured: false,
    problemStatement: "Technical recruiters and engineering leads require a clear, structured view of a developer's real-world projects, commit history, and system architecture skills beyond plain text resumes.",
    solution: "Designed and developed a responsive React application featuring live project filtering, interactive code preview terminal, technical skill matrix, and dynamic project deep-dive modals.",
    description: "DevPulse presents software projects through interactive UI cards, architectural breakdowns, filterable tech categories, and live demo access built with React, Vite, and Tailwind CSS.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Lucide Icons", "REST APIs"],
    keyFeatures: [
      "Client-side Project Filtering by Category (Full Stack, Java, React, Python)",
      "Interactive Terminal Emulator with executable custom developer CLI commands",
      "Dynamic Light/Dark Theme Switcher with persisted user preference",
      "Project Detail Modal with Architecture Diagrams & Code Snippets",
      "Mobile-first responsive drawer menu and keyboard accessible navigation"
    ],
    architecture: [
      "Modular React Component Hierarchy with clear prop contract separation",
      "Global Theme Context API managing DOM class toggles and localStorage caching",
      "Data-driven Architecture consuming decoupled JSON state modules"
    ],
    github: "https://github.com/dev-deepak-prajapati/developer-portfolio",
    live: "https://deepakprajapati.dev",
    status: "Live Production",
    badge: "Web Engineering"
  },
  {
    id: "smart-attendee-system",
    title: "Smart Attendee - Student Attendance Tracker",
    category: "Java / Backend",
    subtitle: "Automated student lecture attendance & attendance percentage calculator",
    featured: false,
    problemStatement: "Paper attendance registers make it time-consuming to calculate monthly attendance percentages required for exam eligibility verification.",
    solution: "Engineered a Java Servlet & MySQL backend application that logs student class attendance daily and automatically computes attendance statistics per subject.",
    description: "Smart Attendee provides a clean interface for teachers to mark daily attendance with one click and allows students to inspect their subject-wise attendance percentages.",
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3"],
    keyFeatures: [
      "Subject-wise daily attendance marking grid",
      "Automated attendance percentage calculator with low-attendance warnings",
      "Exportable monthly attendance summary for institutional records",
      "Student login portal to track personal attendance status in real time"
    ],
    architecture: [
      "Java Servlet HTTP Request Handlers routing to specialized DAO methods",
      "PreparedStatement SQL execution preventing SQL Injection vulnerabilities",
      "Clean CSS styling with responsive tables and status indicators"
    ],
    github: "https://github.com/dev-deepak-prajapati/smart-attendee-system",
    live: "#",
    status: "Completed Project",
    badge: "Database System"
  },
  {
    id: "algorithm-visualizer",
    title: "Algorithm Visualizer & Practice Lab",
    category: "React / Frontend",
    subtitle: "Interactive visualizer for searching & sorting algorithms",
    featured: false,
    problemStatement: "Understanding complex sorting algorithms and graph traversals from static textbook code can be abstract and difficult for computer science students.",
    solution: "Created an interactive web application that visually step-renders array transformations, comparisons, and swaps in real time with adjustable animation speeds.",
    description: "Built with React and Tailwind CSS, this tool allows users to visualize Bubble Sort, Selection Sort, Insertion Sort, Binary Search, and Linear Search with color-coded array bar transitions.",
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "CSS Animations"],
    keyFeatures: [
      "Real-time visual step execution of Bubble, Selection, and Insertion Sort",
      "Color-coded state indicators (Comparing, Swapping, Sorted)",
      "Adjustable animation speed controller and randomized array generator",
      "Step-by-step code execution highlight for student learning"
    ],
    architecture: [
      "Asynchronous state stepping using Promise-based delay functions",
      "Pure functional component layout ensuring 60fps smooth CSS transitions"
    ],
    github: "https://github.com/dev-deepak-prajapati/algo-visualizer",
    live: "#",
    status: "Open Source Project",
    badge: "Algorithm Visualizer"
  },
  {
    id: "pyscript-automation-toolkit",
    title: "PyScript - Student Data Automation Suite",
    category: "Python",
    subtitle: "Python automation scripts for data extraction, verification & reporting",
    featured: false,
    problemStatement: "Processing batch student data files manually for verification and formatting report spreadsheets requires excessive repetitive labor.",
    solution: "Developed a Python utility suite that automates CSV parsing, validates formatting rules, syncs records to SQLite databases, and generates summary reports.",
    description: "A lightweight Python automation tool built for parsing academic records, detecting duplicate entries, and exporting formatted clean data files for institutional analysis.",
    technologies: ["Python 3", "SQLite3", "CSV / Data Parsing", "CLI Utilities"],
    keyFeatures: [
      "Automated CSV file parser with data validation rules",
      "Duplicate record detector and data sanitizer",
      "Local SQLite database synchronization engine",
      "Command-line interactive menu for batch operations"
    ],
    architecture: [
      "Modular Python script architecture using standard libraries",
      "Exception handling and logging module for transaction audit trails"
    ],
    github: "https://github.com/dev-deepak-prajapati/pyscript-data-toolkit",
    live: "#",
    status: "Utility Suite",
    badge: "Python Automation"
  }
];
