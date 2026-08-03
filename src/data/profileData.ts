export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogoKey: 'amazon' | 'pwc' | 'chaturait';
  type: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  workMode: 'On-site' | 'Hybrid' | 'Remote';
  domain?: string;
  description: string;
  highlights: string[];
  skills: string[];
  subRoles?: {
    role: string;
    type: string;
    duration: string;
    description: string;
    skills: string[];
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  logoKey: 'cvr' | 'kv';
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  logoKey: 'wipro' | 'gfg' | 'gate' | 'leetcode';
  skills: string[];
  rank?: string;
  percentile?: string;
  verificationUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Backend' | 'Security' | 'Mobile' | 'DSA';
  stars?: number;
  forks?: number;
  githubUrl?: string;
  featured?: boolean;
}

export interface ProfileData {
  name: string;
  pronouns: string;
  headline: string;
  currentRole: string;
  exRoles: string;
  location: string;
  analytics: {
    profileViews: number;
    postImpressions: number;
    searchAppearances: number;
    timeframe: string;
  };
  followers: number;
  connections: string;
  about: string;
  contactInfo: {
    email: string;
    linkedin: string;
    github: string;
    leetcode: string;
    location: string;
    phone?: string;
  };
  keyStats: {
    gateRanks: string;
    leetCodeRating: number;
    experienceYears: string;
    skillsCount: number;
  };
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  gateResults: {
    year: string;
    paper: string;
    code: 'CS' | 'DA';
    rank: number;
    percentileEst?: string;
  }[];
  skills: {
    category: 'Backend & Microservices' | 'Security & IAM' | 'DSA & Competitive Coding' | 'Mobile & Languages';
    list: string[];
  }[];
  connectedApps: { name: string; icon: string; desc: string }[];
  projects: ProjectItem[];
  activity: { text: string; time: string; target: string; type: string }[];
}

export const initialProfileData: ProfileData = {
  name: 'Athithya Ithayan',
  pronouns: 'He/Him',
  headline: 'Building in stealth | Ex - SDE @ Amazon | Ex - PwC | GATE Qualified (CS & DA) | LeetCode - 1725',
  currentRole: 'Building in stealth',
  exRoles: 'Ex - SDE I @ Amazon, Ex - Associate Developer @ PwC Acceleration Centers',
  location: 'Hyderabad, Telangana, India',
  analytics: {
    profileViews: 142,
    postImpressions: 28,
    searchAppearances: 45,
    timeframe: 'Past 7 days'
  },
  followers: 1850,
  connections: '500+',
  about: 'Building something in stealth.',
  contactInfo: {
    email: 'akilanathithyaithayan@gmail.com',
    linkedin: 'https://www.linkedin.com/in/athithya-ithayan-4891151bb/',
    github: 'https://github.com/ADIIS007',
    leetcode: 'https://leetcode.com/u/ADIIS007/',
    location: 'Hyderabad, Telangana, India'
  },
  keyStats: {
    gateRanks: 'AIR 1955 (DA) | AIR 2534 (CS)',
    leetCodeRating: 1725,
    experienceYears: '2.5+',
    skillsCount: 34
  },
  experiences: [
    {
      id: 'exp-amazon',
      role: 'Software Development Engineer I',
      company: 'Amazon',
      companyLogoKey: 'amazon',
      type: 'Full-time (Ex-Amazon)',
      duration: 'Apr 2025 – Jul 2026',
      startDate: 'Apr 2025',
      endDate: 'Jul 2026',
      location: 'Hyderabad, Telangana, India',
      workMode: 'On-site',
      domain: 'Engineering and Software Development',
      description: 'Engaged in designing and building scalable precompute services using Amazon’s proprietary technology stack.',
      highlights: [
        'Designed and deployed scalable precompute backend services operating under high concurrency.',
        'Improved microservice communication and system reliability through efficient architectural solutions.',
        'Contributed to robust backend development using Java and Kotlin across high-availability systems.'
      ],
      skills: ['Java', 'Kotlin', 'Precompute Services', 'Microservices', 'Distributed Systems', 'Low-Level Design', 'System Reliability']
    },
    {
      id: 'exp-pwc',
      role: 'Associate Developer – Identity and Access Management',
      company: 'PwC Acceleration Centers in India',
      companyLogoKey: 'pwc',
      type: 'Full-time & Internship',
      duration: 'Feb 2024 – Apr 2025',
      startDate: 'Feb 2024',
      endDate: 'Apr 2025',
      location: 'Karnataka, India',
      workMode: 'Hybrid',
      description: 'Built enterprise-grade applications and cloud-native services as part of the Identity and Access Management (IAM) engineering team.',
      highlights: [
        'Built enterprise-grade applications and automated provisioning workflows, reducing manual operational effort and improving consistency.',
        'Developed reusable software libraries to enhance scalability and maintainability of core IAM features.'
      ],
      skills: ['Java', 'Spring Boot', 'Identity and Access Management (IAM)', 'Workflow Automation', 'API Design', 'Security Governance'],
      subRoles: [
        {
          role: 'Associate Developer – IAM',
          type: 'Full-time',
          duration: 'Aug 2024 – Apr 2025',
          description: 'Engineered automated provisioning workflows and reusable technical modules for global IAM implementations.',
          skills: ['Java', 'Spring Boot', 'IAM Automation', 'Enterprise Architecture']
        },
        {
          role: 'Intern Developer – Cyber Risk & IAM',
          type: 'Internship',
          duration: 'Feb 2024 – Aug 2024',
          description: 'Developed security identity workflows and risk compliance tooling.',
          skills: ['Java', 'Spring Boot', 'Cyber Security', 'Identity Governance']
        }
      ]
    },
    {
      id: 'exp-chaturait',
      role: 'SDE Intern',
      company: 'ChaturaIT Learnings',
      companyLogoKey: 'chaturait',
      type: 'Internship',
      duration: 'Dec 2023 – Feb 2024',
      startDate: 'Dec 2023',
      endDate: 'Feb 2024',
      location: 'Hyderabad, Telangana, India',
      workMode: 'Hybrid',
      description: 'Developed full-stack web features and backend API services for student learning platforms.',
      highlights: [
        'Developed dynamic web components and integrated RESTful API services.',
        'Engineered backend database schemas and Node.js server handlers.'
      ],
      skills: ['Full-Stack Development', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs']
    }
  ],
  education: [
    {
      id: 'edu-cvr',
      institution: 'CVR College of Engineering, Hyderabad',
      degree: "Bachelor's degree",
      field: 'Computer Science and Engineering',
      duration: '2020 – 2024',
      logoKey: 'cvr',
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Object-Oriented Programming', 'Computer Networks', 'Java']
    },
    {
      id: 'edu-kv',
      institution: 'Kendriya Vidyalaya',
      degree: '12th Grade',
      field: 'MPC (Mathematics, Physics, Chemistry with Computer Science)',
      duration: 'Mar 2018 – Mar 2020',
      logoKey: 'kv',
      skills: ['Mathematics', 'C++', 'Computer Science Fundamentals']
    }
  ],
  certifications: [
    {
      id: 'cert-gate-da-2024',
      title: 'GATE 2024 Qualified - Data Science & AI (DA)',
      issuer: 'IIT GATE Authority',
      issuedDate: '2024',
      logoKey: 'gate',
      rank: 'AIR 1955',
      percentile: 'Top 98.5%+ Nationwide',
      skills: ['Data Science', 'Artificial Intelligence', 'Linear Algebra', 'Probability & Statistics', 'Machine Learning']
    },
    {
      id: 'cert-gate-cs-2024',
      title: 'GATE 2024 Qualified - Computer Science (CS)',
      issuer: 'IIT GATE Authority',
      issuedDate: '2024',
      logoKey: 'gate',
      rank: 'AIR 2534',
      percentile: 'Top 98.2%+ Nationwide',
      skills: ['Algorithms', 'Theory of Computation', 'Operating Systems', 'DBMS', 'Computer Networks']
    },
    {
      id: 'cert-gate-cs-2025',
      title: 'GATE 2025 Qualified - Computer Science (CS)',
      issuer: 'IIT GATE Authority',
      issuedDate: '2025',
      logoKey: 'gate',
      rank: 'AIR 2540',
      percentile: 'Top 98.2%+ Nationwide',
      skills: ['Data Structures', 'Compiler Design', 'System Architecture', 'Algorithms']
    },
    {
      id: 'cert-gfg',
      title: 'Data Structures and Algorithms - Self Paced',
      issuer: 'GeeksforGeeks',
      issuedDate: 'Aug 2023',
      logoKey: 'gfg',
      skills: ['Data Structures', 'Algorithm Design', 'Problem Solving', 'Competitive Coding']
    },
    {
      id: 'cert-wipro',
      title: 'TalentNext Java Certification',
      issuer: 'Wipro',
      issuedDate: 'Oct 2023',
      logoKey: 'wipro',
      skills: ['Java', 'Spring MVC', 'Core Java', 'Enterprise Web Applications']
    }
  ],
  gateResults: [
    {
      year: '2024',
      paper: 'Data Science & Artificial Intelligence',
      code: 'DA',
      rank: 1955,
      percentileEst: 'Top 98.5%+ Nationwide'
    },
    {
      year: '2024',
      paper: 'Computer Science and Information Technology',
      code: 'CS',
      rank: 2534,
      percentileEst: 'Top 98.2%+ Nationwide'
    },
    {
      year: '2025',
      paper: 'Computer Science and Information Technology',
      code: 'CS',
      rank: 2540,
      percentileEst: 'Top 98.2%+ Nationwide'
    }
  ],
  skills: [
    {
      category: 'Backend & Microservices',
      list: [
        'Java',
        'Kotlin',
        'Spring Boot',
        'Microservices Architecture',
        'Distributed Systems',
        'REST API Design',
        'Node.js',
        'Express.js',
        'Low-Level Design',
        'High-Availability Backend'
      ]
    },
    {
      category: 'Security & IAM',
      list: [
        'Identity and Access Management (IAM)',
        'Cyber Risk & Compliance'
      ]
    },
    {
      category: 'DSA & Competitive Coding',
      list: [
        'Data Structures & Algorithms',
        'LeetCode (Rating 1725)',
        'GATE CS Qualified (3x)',
        'GATE DA Qualified (2x)',
        'Object-Oriented Programming (OOP)'
      ]
    },
    {
      category: 'Mobile & Languages',
      list: [
        'Flutter',
        'Dart',
        'Java (DSA)',
        'Kotlin',
        'Python',
        'TypeScript',
        'JavaScript',
        'C++',
        'PowerShell'
      ]
    }
  ],
  connectedApps: [
    { name: 'IntelliJ IDEA', icon: 'Code', desc: 'Primary Development Environment for Java & Spring Boot' },
    { name: 'Android Studio', icon: 'Smartphone', desc: 'Mobile Development for Flutter & Android' },
    { name: 'Git & GitHub', icon: 'GitBranch', desc: 'Source Code & Version Control' },
    { name: 'Postman', icon: 'Terminal', desc: 'API Testing & Workflow Validation' }
  ],
  projects: [
    {
      id: 'proj-namma-guest-spring-boot',
      title: 'namma-guest-spring-boot',
      category: 'Backend',
      description: 'Production-ready Spring Boot microservices backend for the Namma Guest hospitality platform.',
      longDescription: 'High-availability Spring Boot backend engine powering the Namma Guest hospitality ecosystem. Features clean domain-driven design, RESTful endpoint controllers, database integrations, and automated request workflows.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'Backend', 'Microservices'],
      stars: 6,
      forks: 9,
      githubUrl: 'https://github.com/ADIIS007/namma-guest-spring-boot',
      featured: true
    },
    {
      id: 'proj-namma-guest-flutter',
      title: 'namma-guest-flutter',
      category: 'Mobile',
      description: 'Cross-platform mobile client application for Namma Guest built with Flutter and Dart.',
      longDescription: 'Feature-rich Flutter mobile frontend connecting seamlessly to the Namma Guest backend APIs. Features responsive viewports, reactive state management, guest onboarding, and real-time interface feedback.',
      tags: ['Dart', 'Flutter', 'Mobile', 'UI/UX', 'State Management'],
      stars: 4,
      forks: 4,
      githubUrl: 'https://github.com/ADIIS007/namma-guest-flutter',
      featured: true
    },
    {
      id: 'proj-sih-backend',
      title: 'SIH_BACKEND',
      category: 'Backend',
      description: 'Scalable Java backend architecture engineered for Smart India Hackathon solution workflows.',
      longDescription: 'Robust Java backend developed for the Smart India Hackathon. Focuses on efficient data handling, secure API routes, and high-performance server processing under tight competition constraints.',
      tags: ['Java', 'Spring Boot', 'REST API', 'Hackathon'],
      githubUrl: 'https://github.com/ADIIS007/SIH_BACKEND',
      featured: true
    },
    {
      id: 'proj-personal-diary',
      title: 'Personal-Dairy',
      category: 'Mobile',
      description: 'Cross-platform personal diary application working natively as a mobile app.',
      longDescription: 'Mobile diary application built with Flutter/C++ offering local persistent encryption, daily note logging, intuitive user interfaces, and structured timeline records.',
      tags: ['Flutter', 'Dart', 'C++', 'Mobile App'],
      githubUrl: 'https://github.com/ADIIS007/Personal-Dairy',
      featured: false
    },
    {
      id: 'proj-stock-game',
      title: 'STOCK_GAME',
      category: 'Mobile',
      description: 'Interactive stock market simulation game frontend built on Flutter & Dart.',
      longDescription: 'Mobile stock market game frontend featuring virtual trading interactions, real-time balance calculations, dynamic charts, and financial portfolio simulation.',
      tags: ['Dart', 'Flutter', 'Financial Simulation', 'Mobile'],
      githubUrl: 'https://github.com/ADIIS007/STOCK_GAME',
      featured: false
    },
    {
      id: 'proj-adiis007-profile',
      title: 'ADIIS007 GitHub Portfolio Showcase',
      category: 'DSA',
      description: 'Central developer repository and configuration configs for GitHub profile showcase.',
      longDescription: 'Personal developer repository containing system configurations, project blueprints, technical statistics, and portfolio showcase metadata.',
      tags: ['GitHub Config', 'Java', 'DSA', 'Documentation'],
      githubUrl: 'https://github.com/ADIIS007/ADIIS007',
      featured: false
    }
  ],
  activity: [
    { text: 'Athithya Ithayan published new open-source repository namma-guest-spring-boot', time: '1w ago', target: 'Java / Spring Boot Backend', type: 'repo' },
    { text: 'Athithya Ithayan verified GATE 2025 Computer Science result', time: '2w ago', target: 'AIR 2540 CS · Top 98.2%+ Percentile', type: 'certification' },
    { text: 'Athithya Ithayan updated LeetCode profile solutions', time: '3w ago', target: '1725 Rating Milestone · 300+ Solved', type: 'code' }
  ]
};


