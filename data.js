/**
 * AIR-CPES 2027 — Centralized Configuration & Content Data
 * Edit this file to update the Microsoft CMT link, dates, speakers, fees, or committees.
 */

window.CONFERENCE_CONFIG = {
  shortName: "AIR-CPES 2027",
  edition: "1st International Conference",
  fullTitle: "Artificial Intelligence for Resilient Cyber-Physical Energy Systems",
  subtitle: "Proceedings of the 1st International Conference on Artificial Intelligence for Resilient Cyber-Physical Energy Systems (AIR-CPES 2027)",
  dates: "March 8–9, 2027",
  mode: "Hybrid Mode — Parallel Sessions in Delhi, India & Birmingham, UK",
  domain: "https://www.air-cpes.com",

  // =========================================================================
  // MICROSOFT CMT SUBMISSION LINK PLACEHOLDER
  // Replace the URL below with your live Microsoft CMT portal URL once active
  // =========================================================================
  cmtSubmissionUrl: "https://cmt3.research.microsoft.com/AIRCPES2027",
  cmtPortalStatus: "Portal Opening Soon — Microsoft CMT",

  // Template download links (Springer LNEE Official Templates)
  templates: {
    wordUrl: "https://www.springer.com/gp/livingreviews/latex-templates",
    latexUrl: "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines",
    cfpBrochureAction: "print"
  },

  deadlines: [
    {
      id: "sub-open",
      date: "October 15, 2026",
      isoDate: "2026-10-15T00:00:00+05:30",
      title: "Call for Papers & CMT Portal Opens",
      desc: "Online manuscript submission opens via Microsoft CMT in PDF format (up to 8 pages, Springer LNEE format).",
      badge: "Open",
      status: "completed"
    },
    {
      id: "sub-deadline",
      date: "January 10, 2027",
      subDate: "Extended / Final Full Paper: February 1, 2027",
      isoDate: "2027-01-10T23:59:59+05:30",
      title: "Paper Submission Deadline",
      desc: "Early-bird full paper submission deadline via Microsoft CMT (double-blind format, Turnitin similarity < 15%).",
      badge: "Upcoming Priority",
      status: "active"
    },
    {
      id: "notif-date",
      date: "February 1, 2027",
      subDate: "Late Track Notification: February 15, 2027",
      isoDate: "2027-02-01T23:59:59+05:30",
      title: "Notification of Acceptance",
      desc: "Peer review decisions dispatched to authors (minimum 3 independent reviewers per paper; at least 2 positive recommendations required).",
      badge: "Peer Review",
      status: "upcoming"
    },
    {
      id: "camera-ready",
      date: "February 15, 2027",
      subDate: "Final Proceedings Files: February 20, 2027",
      isoDate: "2027-02-15T23:59:59+05:30",
      title: "Camera-Ready Paper Submission",
      desc: "Submission of final revised manuscript, Springer copyright form, and response to reviewer comments.",
      badge: "Publication",
      status: "upcoming"
    },
    {
      id: "reg-deadline",
      date: "February 25, 2027",
      isoDate: "2027-02-25T23:59:59+05:30",
      title: "Author Registration Deadline",
      desc: "At least one author per accepted paper must register and present at the conference for inclusion in Springer LNEE proceedings.",
      badge: "Mandatory",
      status: "upcoming"
    },
    {
      id: "conf-dates",
      date: "March 8–9, 2027",
      isoDate: "2027-03-08T09:00:00+05:30",
      title: "AIR-CPES 2027 Conference Days",
      desc: "Parallel hybrid technical sessions, keynotes, and panel discussions hosted at MAIT (Delhi, India) and BCU (Birmingham, UK).",
      badge: "Flagship Event",
      status: "highlight"
    }
  ],

  venues: {
    india: {
      name: "Maharaja Agrasen Institute of Technology (MAIT)",
      affiliation: "Affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi",
      address: "Plot No. 1, Sector 22, PSP Area, Rohini, Delhi – 110086, India",
      coordinates: "28.7197° N, 77.0661° E",
      timezone: "IST (UTC +5:30)",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      description: "Located in North-West Delhi's institutional hub, MAIT is one of India's premier engineering institutions with 4,000+ engineering students and 150+ faculty members driving research in AI, Smart Grids, and Computer Science.",
      highlights: [
        "Main Auditorium & Smart Conference Halls (Hybrid AV Equipped)",
        "45 mins from Indira Gandhi International Airport (DEL)",
        "Connected via Delhi Metro Red & Yellow Lines (Rithala / Rohini)"
      ],
      mapUrl: "https://maps.google.com/?q=Maharaja+Agrasen+Institute+of+Technology+Rohini+Delhi"
    },
    uk: {
      name: "Birmingham City University (BCU)",
      affiliation: "School of Architecture, Built Environment, Computing and Engineering",
      address: "Millennium Point, Curzon Street, Birmingham B4 7AP, United Kingdom",
      coordinates: "52.4830° N, 1.8858° W",
      timezone: "GMT (UTC +0:00)",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      description: "Situated in the heart of Birmingham's Eastside Innovation Quarter at Millennium Point, BCU's Computing and Engineering precinct hosts state-of-the-art cyber-physical systems and sustainable energy laboratories.",
      highlights: [
        "Millennium Point Hybrid Lecture Theatre & Engineering Labs",
        "10 mins walk from Birmingham New Street & Moor Street Stations",
        "20 mins by train from Birmingham International Airport (BHX)"
      ],
      mapUrl: "https://maps.google.com/?q=Millennium+Point+Curzon+St+Birmingham+B4+7AP+UK"
    }
  },

  contacts: [
    {
      name: "Prof. (Dr.) Neelu Nagpal",
      role: "Conference Convener (MAIT, India)",
      dept: "Professor, Dept. of Electronics & Communication Engineering, MAIT, Delhi",
      email: "neelunagpal@mait.ac.in",
      phone: "+91 98118 93230"
    },
    {
      name: "Dr. Sandeep Dhundhara",
      role: "Conference Convener (BCU, UK)",
      dept: "Dept. of Engineering, School of Architecture, Built Environment, Computing & Engineering, BCU, UK",
      email: "sandeep.dhundhara2@bcu.ac.uk",
      phone: "+44 7884 289573"
    },
    {
      name: "Mr. Ravi Sharma",
      role: "Co-Convener (MAIT, India)",
      dept: "Assistant Professor, Dept. of Electrical & Electronics Engineering, MAIT, Delhi",
      email: "ravisharma@mait.ac.in",
      phone: "+91 98113 87672"
    },
    {
      name: "Dr. Mini Aggarwal",
      role: "Organizing Secretary (MAIT, India)",
      dept: "Assistant Professor, Dept. of Computer Science & Engineering, MAIT, Delhi",
      email: "miniaggarwal@mait.ac.in",
      phone: "+91 87438 91304"
    }
  ]
};

window.VOLUME_EDITORS = [
  {
    name: "Dr. Neelu Nagpal",
    title: "Professor, Dept. of Electronics & Communication Engineering",
    institution: "Maharaja Agrasen Institute of Technology (MAIT), Rohini, Delhi, India",
    email: "neelunagpal@mait.ac.in",
    initials: "NN",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Prof. Sachin Gupta",
    title: "Professor & Dean (Research & Innovation), Dept. of Computer Science",
    institution: "Maharaja Agrasen Institute of Technology (MAIT), Rohini, Delhi, India",
    email: "Sachin.gupta@mait.ac.in",
    initials: "SG",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Prof. Ashwani Kumar",
    title: "Professor, Department of Electrical Engineering",
    institution: "National Institute of Technology (NIT), Kurukshetra, India",
    email: "ashwani.k.sharma@nitkkr.ac.in",
    initials: "AK",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Sandeep Dhundhara",
    title: "Department of Engineering, School of Architecture, Built Environment, Computing & Engineering",
    institution: "Birmingham City University (BCU), Millennium Point, Birmingham, UK",
    email: "sandeep.dhundhara2@bcu.ac.uk",
    initials: "SD",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  }
];

window.KEYNOTE_SPEAKERS = [
  {
    name: "Dr. Hassan Haes Alhelou",
    role: "Plenary Keynote Speaker (Placeholder)",
    affiliation: "Massachusetts Institute of Technology (MIT), USA",
    topic: "AI-Driven Cyber-Physical Resilience and Self-Healing Architectures for Next-Generation Smart Grids",
    badge: "MIT · USA",
    session: "Day 1 Opening Plenary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Prof. Pierluigi Siano",
    role: "Distinguished Keynote Speaker (Placeholder)",
    affiliation: "University of Salerno, Italy",
    topic: "Decentralised Energy Markets, Transactive Energy, and Intelligent Prosumer Communities",
    badge: "Univ. of Salerno · Italy",
    session: "Day 1 Keynote II",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Florimond Guéniat",
    role: "General Chair & Host Keynote (Placeholder)",
    affiliation: "Birmingham City University (BCU), United Kingdom",
    topic: "Physics-Informed Machine Learning and Digital Twins for Sustainable Energy Infrastructure",
    badge: "BCU · UK",
    session: "UK Hybrid Plenary",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Prof. Bhim Singh",
    role: "Distinguished Keynote Speaker (Placeholder)",
    affiliation: "Indian Institute of Technology (IIT) Delhi, India",
    topic: "Solar PV Integration, Smart Microgrids, and EV Charging Infrastructure in Emerging Economies",
    badge: "IIT Delhi · India",
    session: "India Hybrid Plenary",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Marta Molinas",
    role: "Invited Keynote Speaker (Placeholder)",
    affiliation: "Department of Engineering Cybernetics, NTNU, Norway",
    topic: "AI-Based Control and Stability of Low-Inertia Grids with Grid-Forming Converters",
    badge: "NTNU · Norway",
    session: "Day 2 Keynote I",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Prof. Akshay Rathore",
    role: "Invited Keynote Speaker (Placeholder)",
    affiliation: "Singapore Institute of Technology (SIT), Singapore",
    topic: "Intelligent Power Electronics, E-Mobility, and High-Efficiency Energy Conversion Systems",
    badge: "SIT · Singapore",
    session: "Day 2 Keynote II",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
  }
];

window.TRACKS_DATA = [
  {
    id: "track-1",
    number: "TRACK 01",
    volume: "Volume I",
    title: "Artificial Intelligence and Data-Driven Energy Systems",
    shortSummary: "Core AI/ML, deep learning, reinforcement learning, generative AI, physics-informed ML, and explainable AI for modern energy systems.",
    description: "Artificial intelligence, machine learning, deep learning, reinforcement learning, generative AI, computational intelligence, big data analytics, data-driven modelling, optimisation, forecasting, decision-making and intelligent control for modern energy systems, including explainable and trustworthy AI, federated and privacy-preserving learning, physics-informed machine learning, transfer learning, edge AI/TinyML, and open datasets and benchmarks for energy AI.",
    tags: ["Deep Learning", "Reinforcement Learning", "Explainable AI (XAI)", "Physics-Informed ML", "Federated Learning", "Edge AI / TinyML"]
  },
  {
    id: "track-2",
    number: "TRACK 02",
    volume: "Volume I",
    title: "Cyber-Physical Energy Systems, Smart Grids and Microgrids",
    shortSummary: "Smart grids, microgrids, DERs, virtual power plants, state estimation, grid-forming inverters, and low-inertia grid control.",
    description: "Cyber-physical energy systems, smart grids, intelligent microgrids, distributed energy resources, distributed generation, energy management, demand response, virtual power plants, real-time monitoring and control, grid automation, system stability and intelligent coordination of interconnected energy assets, including AI for power system state estimation, power flow, unit commitment, congestion management and transmission/distribution planning; AI-based control of grid-forming and grid-following inverters, low-inertia grids, HVDC/FACTS and power quality; and AI for island, remote, off-grid and disaster-relief microgrids.",
    tags: ["Smart Grids", "Microgrids", "Virtual Power Plants", "State Estimation", "Grid-Forming Inverters", "HVDC / FACTS"]
  },
  {
    id: "track-3",
    number: "TRACK 03",
    volume: "Volume I",
    title: "Resilience, Reliability and Cybersecurity",
    shortSummary: "Cyber-threat and intrusion detection, self-healing grids, adversarial robustness, 5G/6G security, and climate-outage prediction.",
    description: "Energy system resilience, reliability, cyber-physical security, cyber-threat detection, intrusion detection, anomaly detection, cybersecurity risk assessment, fault detection and diagnosis, self-healing systems, intelligent protection and control, disaster-resilient infrastructure and secure-by-design energy systems, including adversarial robustness of AI models, secure AI-enabled communication (5G/6G, IoT, satellite networks) and AI for extreme-weather and climate-driven outage prediction.",
    tags: ["Cyber-Resilience", "Intrusion Detection", "Self-Healing Grids", "Adversarial AI", "5G/6G Comms", "Outage Prediction"]
  },
  {
    id: "track-4",
    number: "TRACK 04",
    volume: "Volume I & II",
    title: "Renewable and Sustainable Energy Systems",
    shortSummary: "Solar PV, agrivoltaics, wind, green hydrogen, power-to-X, carbon accounting, CCUS, and rural decentralised energy access.",
    description: "AI for renewable energy integration, solar photovoltaic systems, agrivoltaics, wind and hybrid renewable energy systems, renewable energy forecasting, resource assessment, energy efficiency, sustainable energy planning, decentralised and rural energy systems, energy access and climate-resilient energy infrastructure, including AI for hydro, geothermal, biomass, waste-to-energy and ocean energy; AI for green hydrogen, electrolysers, fuel cells and power-to-X; AI for carbon accounting, emissions tracking, CCUS and life-cycle assessment; and the AI-driven energy-water-food nexus and energy harvesting.",
    tags: ["Solar & Wind AI", "Agrivoltaics", "Green Hydrogen", "Power-to-X", "Carbon Accounting", "Rural Microgrids"]
  },
  {
    id: "track-5",
    number: "TRACK 05",
    volume: "Volume II",
    title: "Energy Storage, Batteries and Electric Mobility",
    shortSummary: "BMS, SoC/SoH/RUL prediction, second-life batteries, smart EV charging, battery swapping, V2G/V2B, and heavy transport electrification.",
    description: "Battery energy storage systems, battery management systems, state-of-charge and state-of-health estimation, battery degradation and remaining useful life prediction, second-life batteries, battery health grading and assessment, electric vehicles, smart EV charging, battery swapping, vehicle-to-grid (V2G), vehicle-to-building (V2B) and intelligent coordination of storage and electric mobility, including thermal and hydrogen storage, AI-based charging infrastructure planning, wireless EV charging, and electrification of heavy-duty, rail, maritime and aviation transport.",
    tags: ["Battery Management (BMS)", "SoH & RUL Prediction", "Second-Life Batteries", "Smart EV Charging", "V2G / V2B", "Battery Swapping"]
  },
  {
    id: "track-6",
    number: "TRACK 06",
    volume: "Volume I & II",
    title: "Digital Twins, Predictive Maintenance and Intelligent Energy Infrastructure",
    shortSummary: "Digital twins, condition monitoring, IoT/edge sensors, thermal systems, and IEC 61850 / OpenADR / IEEE 2030 standards.",
    description: "Digital twins for energy systems, AI-enabled predictive maintenance, condition monitoring, asset management, intelligent diagnostics, IoT-enabled monitoring, intelligent sensors, edge and cloud computing, system modelling and simulation, virtual commissioning and AI-based operational decision support, including AI for thermal systems (district heating and cooling, heat pumps, CHP), industrial energy systems and process-industry efficiency, and interoperability standards (IEC 61850, OpenADR, IEEE 2030) for AI-enabled infrastructure.",
    tags: ["Digital Twins", "Predictive Maintenance", "IIoT Sensors", "District Heating/CHP", "IEC 61850 / IEEE 2030", "Asset Management"]
  },
  {
    id: "track-7",
    number: "TRACK 07",
    volume: "Volume II",
    title: "Intelligent Energy Markets, Smart Buildings and Smart Cities",
    shortSummary: "P2P energy trading, blockchain, AMI analytics, NILM, smart buildings, multi-energy systems, and energy justice.",
    description: "AI applications in energy markets, electricity pricing and trading, peer-to-peer energy trading, blockchain-enabled energy transactions, prosumers and energy communities, demand-side flexibility, smart homes and buildings, building energy management, smart cities, integrated energy systems, intelligent mobility and data-driven energy services, including smart metering and AMI analytics, non-intrusive load monitoring (NILM), consumer load profiling, multi-energy and sector-coupled systems, AI for market design and regulation, and consumer behaviour, social acceptance and energy justice.",
    tags: ["P2P Energy Trading", "Smart Buildings", "Smart Cities", "NILM & AMI Analytics", "Blockchain Energy", "Energy Justice"]
  },
  {
    id: "track-8",
    number: "TRACK 08",
    volume: "Volume II",
    title: "Emerging Technologies, Applications and Case Studies",
    shortSummary: "LLMs & foundation models for energy, agentic AI, AI data centres integration, quantum computing, and utility field pilots.",
    description: "Emerging AI technologies and applications in energy systems, generative AI and large language models for energy, AI for climate adaptation and resilience, industry and utility applications, AI data centres integration, pilot and demonstration projects, community and rural energy applications, smart city deployments, interdisciplinary case studies, field demonstrations, lessons learned and future directions, including agentic AI, foundation models for energy, quantum and neuromorphic computing for energy applications, energy-efficient and sustainable AI (the energy footprint of AI itself), and AI governance, ethics and regulation in the energy sector.",
    tags: ["LLMs & Foundation Models", "Agentic AI", "AI Data Centres", "Quantum & Neuromorphic", "Sustainable AI", "Utility Case Studies"]
  }
];

window.TOPICS_LIST = [
  "AI and Machine Learning for Energy Systems",
  "Smart Grids, Microgrids and Cyber-Physical Energy Systems",
  "Resilient and Secure Energy Systems",
  "Cybersecurity and Cyber-Resilience",
  "Digital Twins and Predictive Maintenance",
  "Renewable Energy and Energy Integration",
  "Energy Storage and Battery Management",
  "Second-Life Batteries and Battery Health Assessment",
  "Electric Vehicles, Smart Charging and Battery Swapping",
  "AI-Based Energy Forecasting and Optimisation",
  "Intelligent Energy Management Systems",
  "IoT, Sensors and Edge Computing for Energy",
  "Fault Detection, Protection and Intelligent Control",
  "Distributed Energy Resources and Virtual Power Plants",
  "Energy Efficiency and Smart Buildings",
  "Smart Cities and Integrated Energy Systems",
  "AI for Rural and Decentralised Energy Systems",
  "Explainable and Trustworthy AI for Energy Applications",
  "Emerging AI Technologies and Future Energy Systems"
];

window.REGISTRATION_FEES = [
  {
    category: "UG / PG / Ph.D. Research Scholar (Author)",
    earlyInr: "₹ 6,500",
    regularInr: "₹ 7,500",
    earlyIntl: "$ 150 / £ 120",
    regularIntl: "$ 180 / £ 145",
    perks: "Full Paper Presentation, Springer LNEE Consideration, E-Certificate & Conference Kit"
  },
  {
    category: "Academician / Faculty Member (Author)",
    earlyInr: "₹ 7,500",
    regularInr: "₹ 8,500",
    earlyIntl: "$ 200 / £ 160",
    regularIntl: "$ 240 / £ 190",
    perks: "Full Paper Presentation, Springer LNEE Consideration, E-Certificate & Conference Kit"
  },
  {
    category: "Industry Professional / R&D Organization (Author)",
    earlyInr: "₹ 9,000",
    regularInr: "₹ 10,500",
    earlyIntl: "$ 250 / £ 200",
    regularIntl: "$ 300 / £ 240",
    perks: "Full Paper Presentation, Springer LNEE Consideration, Industry Networking & Kit"
  },
  {
    category: "Attendee / Listener / Co-Author (Non-Presenting)",
    earlyInr: "₹ 2,500",
    regularInr: "₹ 3,000",
    earlyIntl: "$ 75 / £ 60",
    regularIntl: "$ 90 / £ 75",
    perks: "Access to All Hybrid Keynotes, Technical Tracks & Participation Certificate"
  }
];

window.SCHEDULE_DATA = {
  day1: {
    dateLabel: "Day 1 — Monday, March 8, 2027",
    events: [
      {
        ist: "09:30 – 10:30 IST",
        gmt: "04:00 – 05:00 GMT",
        title: "Registration & Morning Welcome Desk (MAIT Delhi Venue)",
        venue: "MAIT Main Auditorium Foyer, Delhi",
        type: "Ceremony"
      },
      {
        ist: "10:30 – 12:00 IST",
        gmt: "05:00 – 06:30 GMT",
        title: "Inaugural Ceremony & Opening Plenary Keynote I",
        venue: "MAIT Main Auditorium & Hybrid Global Stream",
        speaker: "Dr. Hassan Haes Alhelou (MIT, USA) & Chief Patrons",
        type: "Keynote"
      },
      {
        ist: "12:00 – 13:30 IST",
        gmt: "06:30 – 08:00 GMT",
        title: "Parallel Technical Sessions I (Tracks 01, 02 & 03)",
        venue: "MAIT Halls A–C & Microsoft Teams / Zoom Hybrid Rooms",
        speaker: "AI for Energy Systems, Smart Grids & Cyber-Resilience",
        type: "Technical"
      },
      {
        ist: "14:30 – 16:00 IST",
        gmt: "09:00 – 10:30 GMT",
        title: "Joint UK–India Hybrid Opening & Plenary Keynote II",
        venue: "BCU Millennium Point (Birmingham, UK) & MAIT (Delhi, India)",
        speaker: "Dr. Florimond Guéniat (BCU, UK) & Prof. Pierluigi Siano (Italy)",
        type: "Keynote"
      },
      {
        ist: "16:15 – 18:00 IST",
        gmt: "10:45 – 12:30 GMT",
        title: "Parallel Hybrid Technical Sessions II (Tracks 04 & 05)",
        venue: "BCU Engineering Precinct & MAIT Smart Halls",
        speaker: "Renewable Energy Integration, Battery Management & E-Mobility",
        type: "Technical"
      }
    ]
  },
  day2: {
    dateLabel: "Day 2 — Tuesday, March 9, 2027",
    events: [
      {
        ist: "10:00 – 11:15 IST",
        gmt: "04:30 – 05:45 GMT",
        title: "Distinguished Keynote III (India Session)",
        venue: "MAIT Main Auditorium & Hybrid Stream",
        speaker: "Prof. Bhim Singh (IIT Delhi, India)",
        type: "Keynote"
      },
      {
        ist: "11:30 – 13:15 IST",
        gmt: "06:00 – 07:45 GMT",
        title: "Parallel Technical Sessions III (Tracks 06 & 07)",
        venue: "MAIT Halls A–C & Virtual Technical Rooms",
        speaker: "Digital Twins, Predictive Maintenance & Smart Energy Markets",
        type: "Technical"
      },
      {
        ist: "14:30 – 15:45 IST",
        gmt: "09:00 – 10:15 GMT",
        title: "Joint UK–India Plenary Keynotes IV & V",
        venue: "BCU Millennium Point (UK) & MAIT (Delhi)",
        speaker: "Dr. Marta Molinas (NTNU, Norway) & Prof. Akshay Rathore (SIT, Singapore)",
        type: "Keynote"
      },
      {
        ist: "16:00 – 17:30 IST",
        gmt: "10:30 – 12:00 GMT",
        title: "Parallel Technical Sessions IV (Track 08 & Industry Case Studies)",
        venue: "BCU Curzon Rooms & MAIT Hybrid Rooms",
        speaker: "Generative AI, Foundation Models, AI Data Centres & Field Pilots",
        type: "Technical"
      },
      {
        ist: "17:30 – 18:30 IST",
        gmt: "12:00 – 13:00 GMT",
        title: "Best Paper Awards, Volume Editors' Remarks & Valedictory Ceremony",
        venue: "Joint Live Broadcast — Delhi & Birmingham",
        speaker: "General Chairs, Volume Editors & Organizing Committee",
        type: "Ceremony"
      }
    ]
  }
};

window.ORGANIZING_COMMITTEE = [
  {
    role: "Chief Patrons",
    featured: true,
    members: [
      { name: "Dr. Nand Kishore Garg", affiliation: "Founder & Chief Advisor, MATES, Delhi, India" },
      { name: "Mr. Vineet Kumar Gupta (Lohia)", affiliation: "Chairman, MATES, Delhi, India" }
    ]
  },
  {
    role: "General Chairs",
    featured: true,
    members: [
      { name: "Dr. Vikram Bali", affiliation: "Professor & Director, Maharaja Agrasen Institute of Technology (MAIT), Delhi, India" },
      { name: "Dr. Florimond Guéniat", affiliation: "Dept. of Engineering, School of Architecture, Built Environment, Computing & Engineering, Birmingham City University (BCU), UK" }
    ]
  },
  {
    role: "Co-General Chairs",
    featured: true,
    members: [
      { name: "Dr. Satvir Singh Deswal", affiliation: "Professor & Additional Director, MAIT, Delhi, India" },
      { name: "Dr. Sachin Gupta", affiliation: "Professor & Dean (R&I), Dept. of CSE, MAIT, Delhi, India" }
    ]
  },
  {
    role: "Conveners & Co-Convener",
    featured: true,
    members: [
      { name: "Prof. (Dr.) Neelu Nagpal", affiliation: "Professor, ECE, MAIT, Delhi, India — Convener" },
      { name: "Dr. Sandeep Dhundhara", affiliation: "Birmingham City University (BCU), UK — Convener" },
      { name: "Mr. Ravi Sharma", affiliation: "Assistant Professor, EEE, MAIT, Delhi, India — Co-Convener" }
    ]
  },
  {
    role: "Organising Secretaries",
    members: [
      { name: "Dr. Mini Aggarwal", affiliation: "Assistant Professor, CSE, MAIT, Delhi" },
      { name: "Dr. Nitesh Wadhera", affiliation: "Assistant Professor, IT, MAIT, Delhi" },
      { name: "Dr. Naveen Solanki", affiliation: "Associate Professor, ME, MAIT, Delhi" }
    ]
  },
  {
    role: "Publication Chair",
    members: [
      { name: "Dr. Neelam Sharma", affiliation: "Associate Professor, CSE, MAIT, Delhi" }
    ]
  },
  {
    role: "Publicity Chairs",
    members: [
      { name: "Dr. Ratika Sikand", affiliation: "Assistant Professor, MBA, MAIT, Delhi" },
      { name: "Dr. Deepak Gupta", affiliation: "Associate Professor, CSE, MAIT, Delhi" }
    ]
  },
  {
    role: "Technical Program Chairs",
    members: [
      { name: "Dr. Anupam Kumar", affiliation: "Associate Professor, CSE, MAIT, Delhi" },
      { name: "Dr. Anubha Goel", affiliation: "Associate Professor, ECE, MAIT, Delhi" },
      { name: "Dr. Sandeep Tayal", affiliation: "Associate Professor, CSE, MAIT, Delhi" }
    ]
  },
  {
    role: "Finance Chair",
    members: [
      { name: "Dr. Bhoomi Gupta", affiliation: "HoD-CSE & Professor, MAIT, Delhi" }
    ]
  },
  {
    role: "Tutorial / Special Session / Keynotes Chairs",
    members: [
      { name: "Dr. Kavita Saxena", affiliation: "Assistant Professor, CSE, MAIT, Delhi" },
      { name: "Dr. Poonam Juneja", affiliation: "Assistant Professor, EEE, MAIT, Delhi" },
      { name: "Dr. Nitesh Wadhera", affiliation: "Assistant Professor, IT, MAIT, Delhi" }
    ]
  },
  {
    role: "Industry & Sponsorship Chairs",
    members: [
      { name: "Dr. Neelam Kassarwani", affiliation: "Professor, EEE, MAIT, Delhi" },
      { name: "Dr. Deepak Gupta", affiliation: "Associate Professor, CSE, MAIT, Delhi" },
      { name: "Dr. Tripti Lamba", affiliation: "Associate Professor, CSE, MAIT, Delhi" }
    ]
  },
  {
    role: "Logistics Committee",
    members: [
      { name: "Dr. Naveen Solanki", affiliation: "Associate Professor, ME, MAIT, Delhi" },
      { name: "Dr. Sunil Kumar Pandey", affiliation: "Associate Professor, EEE, MAIT, Delhi" },
      { name: "Dr. Vipin Kumar Sharma", affiliation: "Assistant Professor, ME, MAIT, Delhi" }
    ]
  },
  {
    role: "Registration Chairs",
    members: [
      { name: "Dr. Neeraj Rathi", affiliation: "Associate Professor, ECE, MAIT, Delhi" },
      { name: "Dr. Surabhi Lata", affiliation: "Assistant Professor, ME, MAIT, Delhi" },
      { name: "Dr. Deepika Bansal", affiliation: "Assistant Professor, CSE, MAIT, Delhi" },
      { name: "Dr. Varun Goel", affiliation: "Assistant Professor, IT, MAIT, Delhi" }
    ]
  }
];

window.ADVISORY_INTERNATIONAL = [
  { name: "Prof. Pierluigi Siano", affiliation: "University of Salerno, Italy" },
  { name: "Prof. Ali Al-Awami", affiliation: "University of Technology Sydney, Australia" },
  { name: "Dr. Hassan Haes Alhelou", affiliation: "Massachusetts Institute of Technology (MIT), USA" },
  { name: "Prof. Li Li", affiliation: "University of Technology Sydney, Australia" },
  { name: "Prof. Akshay Rathore", affiliation: "Singapore Institute of Technology / NUS, Singapore" },
  { name: "Dr. Marta Molinas", affiliation: "Dept. of Engineering Cybernetics, NTNU, Norway" },
  { name: "Prof. R. C. Bansal", affiliation: "University of Sharjah, UAE" },
  { name: "Prof. Akhtar Kalam", affiliation: "Victoria University, Australia" },
  { name: "Dr. Jahangir Hossain", affiliation: "University of Technology Sydney, Australia" },
  { name: "Prof. Mohan Kolhe", affiliation: "University of Agder, Norway" },
  { name: "Dr. Emre Çelik", affiliation: "Düzce University, Turkey" },
  { name: "Dr. Haluk Gözde", affiliation: "National Defence University, Turkey" },
  { name: "Prof. Valentina Emilia Balas", affiliation: "Aurel Vlaicu University of Arad, Romania" },
  { name: "Prof. Hany Hasanien", affiliation: "Ain Shams University, Cairo, Egypt" },
  { name: "Dr. Wen Zhong Gao", affiliation: "University of Denver, USA" },
  { name: "Dr. Sanjeevikumar Padmanaban", affiliation: "University of South-Eastern Norway, Norway" },
  { name: "Dr. Swati Aggarwal", affiliation: "Molde University College, Norway" },
  { name: "Dr. Surender Reddy Salkuti", affiliation: "Woosong University, Republic of Korea" },
  { name: "Dr. Hasmat Malik", affiliation: "Universiti Teknologi Malaysia (UTM), Malaysia" },
  { name: "Dr. Leo John", affiliation: "Prowess University, USA" },
  { name: "Dr. Minakshi Memoria", affiliation: "King Khalid University, Abha, Saudi Arabia" },
  { name: "Dr. John Martin", affiliation: "Jazan University, Saudi Arabia" }
];

window.ADVISORY_NATIONAL = [
  { name: "Dr. Sukumar Mishra", affiliation: "EED, IIT Delhi" },
  { name: "Dr. Bhim Singh", affiliation: "IIT Delhi" },
  { name: "Dr. N. P. Padhy", affiliation: "EED, IIT Roorkee" },
  { name: "Dr. B. K. Panigrahi", affiliation: "EED, IIT Delhi" },
  { name: "Dr. S. N. Singh", affiliation: "EED, IIT Kanpur" },
  { name: "Dr. B. Kalyan Kumar", affiliation: "EED, IIT Madras" },
  { name: "Dr. Prabodh Bajpai", affiliation: "Dept. of Sustainable Energy Engineering, IIT Kanpur" },
  { name: "Dr. Barjeev Tyagi", affiliation: "EED, IIT Roorkee" },
  { name: "Dr. Bharat Singh Rajpurohit", affiliation: "EED, IIT Mandi" },
  { name: "Dr. Ranjan Behera", affiliation: "EED, IIT Patna" },
  { name: "Dr. Arun Kumar Verma", affiliation: "EED, IIT Jammu" },
  { name: "Prof. T. S. Bhatti", affiliation: "IIT Delhi" },
  { name: "Dr. Narender Kumar", affiliation: "EED, DTU Delhi" },
  { name: "Dr. Dheeraj Joshi", affiliation: "EED, DTU Delhi" },
  { name: "Dr. Ashok De", affiliation: "ECED, DTU Delhi" },
  { name: "Prof. K. S. Sandhu", affiliation: "NIT Kurukshetra" },
  { name: "Dr. S. K. Gupta", affiliation: "DCRUST, Murthal, Sonepat" },
  { name: "Dr. D. K. Jain", affiliation: "DCRUST, Murthal, Sonepat" },
  { name: "Dr. Manoj Duhan", affiliation: "DCRUST, Murthal, Sonepat" },
  { name: "Prof. R. K. Sahu", affiliation: "VSSUT, Burla, Odisha" },
  { name: "Prof. H. D. Mathur", affiliation: "BITS Pilani" },
  { name: "Prof. Nidul Sinha", affiliation: "NIT Silchar" },
  { name: "Dr. L. C. Saikia", affiliation: "NIT Silchar" },
  { name: "Dr. R. J. Abraham", affiliation: "IIST, Kerala" },
  { name: "Prof. A. P. Mittal", affiliation: "NSUT, Delhi" },
  { name: "Prof. K. P. S. Rana", affiliation: "NSUT, Delhi" },
  { name: "Prof. Yajvender Pal Verma", affiliation: "Panjab University, Chandigarh" },
  { name: "Prof. J. N. Rai", affiliation: "Delhi Technological University, Delhi" },
  { name: "Prof. Mukhtiyar Singh", affiliation: "DTU, Delhi" },
  { name: "Dr. Alka Singh", affiliation: "EED, DTU, Delhi" },
  { name: "Prof. Sanjeev Singh", affiliation: "MANIT, Bhopal" },
  { name: "Prof. Prerna Gaur", affiliation: "NSUT, Delhi" },
  { name: "Dr. Vijayant Agarwal", affiliation: "NSUT, Delhi" },
  { name: "Dr. Ram Naresh Sharma", affiliation: "EED, NIT Hamirpur" },
  { name: "Dr. Dilbag Singh", affiliation: "EED, NIT Jalandhar" },
  { name: "Dr. D. M. Vinod Kumar", affiliation: "EED, NIT Warangal" },
  { name: "Dr. Pravin Chandra", affiliation: "GGSIPU, Delhi" },
  { name: "Dr. Amit Prakash Singh", affiliation: "GGSIPU, Delhi" },
  { name: "Dr. Arun Sharma", affiliation: "Dean Academics, IGDTUW, Delhi" },
  { name: "Prof. Anuradha Tomar", affiliation: "FoT, University of Delhi" },
  { name: "Prof. J. V. Desai", affiliation: "Ramaiah Institute of Science and Management, Bengaluru" },
  { name: "Prof. R. S. Gupta", affiliation: "MAIT, Delhi" },
  { name: "Prof. V. N. Mathur", affiliation: "MAIT, Delhi" },
  { name: "Prof. Sunil Kumar", affiliation: "MAIT, Delhi" },
  { name: "Prof. Vinay Saini", affiliation: "MAIT, Delhi" },
  { name: "Prof. Monika Gupta", affiliation: "MAIT, Delhi" },
  { name: "Prof. Amita Goel", affiliation: "MAIT, Delhi" },
  { name: "Prof. Puja Singh", affiliation: "MAIT, Delhi" },
  { name: "Prof. Vaibhav Jain", affiliation: "MAIT, Delhi" }
];

window.TPC_MEMBERS = [
  { name: "Dr. Anshul Agarwal", affiliation: "NIT Delhi" },
  { name: "Dr. Nizamuddin", affiliation: "Noida Authority, U.P." },
  { name: "Dr. Puja Dash", affiliation: "GVPCE, Visakhapatnam, Andhra Pradesh" },
  { name: "Dr. Nikhil Pathak", affiliation: "Tsinghua University, Beijing, China" },
  { name: "Dr. M. K. Debnath", affiliation: "Siksha 'O' Anusandhan University, Bhubaneswar, Odisha" },
  { name: "Dr. C. K. Shiva", affiliation: "S. R. Engineering College, Warangal" },
  { name: "Dr. Dipayan Guha", affiliation: "MNNIT Allahabad" },
  { name: "Dr. Anil Kumar", affiliation: "Delhi Technological University, Delhi" },
  { name: "Dr. Rajiv Kumar", affiliation: "JUIT, Waknaghat, Solan, H.P." },
  { name: "Dr. Sandeep Dhundhara", affiliation: "CCS HAU, Hisar / BCU, UK" },
  { name: "Dr. Naresh Yadav", affiliation: "DCRUST, Murthal, Sonepat" },
  { name: "Dr. Mandeep Sharma", affiliation: "BHSBIET, Lehragaga, Punjab" },
  { name: "Dr. Lalit Kumar", affiliation: "SVSU, Gurugram, Haryana" },
  { name: "Dr. B. Vedik", affiliation: "S.R. Engineering College, Warangal" },
  { name: "Dr. Pankaj Dahiya", affiliation: "Delhi Technological University, Delhi" },
  { name: "Dr. M. L. Aggarwal", affiliation: "Dean FET, JCBUST, YMCA Faridabad" },
  { name: "Dr. P. R. Sharma", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Rajesh Ahuja", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Anju Gupta", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Munish Vashisth", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Neelam Turk", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Pradeep Dhimri", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Komal Bhatia", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Surender Dhaiya", affiliation: "DCRUST, Murthal, Sonepat" },
  { name: "Dr. Rajeev Saha", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Shilpa Sethi", affiliation: "JCBUST, YMCA Faridabad" },
  { name: "Dr. Vishal Gupta", affiliation: "NSUT, Delhi" },
  { name: "Dr. Priya Goyal", affiliation: "GD Goenka University" },
  { name: "Dr. Anurag Singh", affiliation: "NIT Delhi" }
];

window.REVIEWERS_LIST = [
  { name: "Prof. Cham Athwal", affiliation: "Birmingham City University, UK" },
  { name: "Dr. Shishank Shishank", affiliation: "Birmingham City University, UK" },
  { name: "Dr. Mohammadhossein Nejatiamiri", affiliation: "University of Warwick, UK" },
  { name: "Dr. Alireza Keyhani Asl", affiliation: "Aston University, UK" },
  { name: "Dr. R.K.A Bharadwaj Kolluri", affiliation: "Birmingham City University, UK" },
  { name: "Dr. Khondokar Rahman", affiliation: "Birmingham City University, UK" },
  { name: "Prof. C.K Saha", affiliation: "Bangladesh Agricultural University, Mymensingh, Bangladesh" },
  { name: "Dr. Anisur Rehman", affiliation: "Bangladesh Agricultural University, Mymensingh, Bangladesh" },
  { name: "Dr. Anil Kumar", affiliation: "DCRUST Murthal, India" },
  { name: "Dr. Deepesh Sharma", affiliation: "DCRUST Murthal, India" },
  { name: "Prof. Y. P. Verma", affiliation: "UIET Chandigarh" },
  { name: "Dr. Bhavnesh Kumar", affiliation: "NSUT Delhi" },
  { name: "Dr. Baidynath Bag", affiliation: "NIT Raipur" },
  { name: "Dr. Manish Kumar", affiliation: "Central University of Haryana" },
  { name: "Dr. Rajender Beniwal", affiliation: "GJUST, Hisar" },
  { name: "Dr. Murlidhar", affiliation: "CU Mahendergarh" },
  { name: "Dr. Sunanda Sinha", affiliation: "MNIT Jaipur" },
  { name: "Dr. Parul Mathuriya", affiliation: "MNIT Jaipur" },
  { name: "Prof. K. S. Sandhu", affiliation: "NIT Kurukshetra" },
  { name: "Dr. Babita Yadav", affiliation: "Manav Rachna University, Faridabad" },
  { name: "Dr. Mukhtiyar Singh", affiliation: "DTU, Delhi" },
  { name: "Dr. Lakshmi D", affiliation: "VIT Bhopal University" },
  { name: "Dr. Rudrodip Majumdar", affiliation: "National Institute of Advanced Studies" },
  { name: "Dr. Mayank Srivastava", affiliation: "NIT Jamshedpur" },
  { name: "Dr. Sanjib Ganguly", affiliation: "IIT Guwahati" },
  { name: "Dr. Bhaskar Singh", affiliation: "Central University of Jharkhand" },
  { name: "Dr. Abha Kumari", affiliation: "Muzaffarpur Institute of Technology, Bihar" },
  { name: "Dr. Devanjali Relan", affiliation: "BML Munjal University, Haryana" },
  { name: "Dr. Tasneem Bano Rehman", affiliation: "Muffakham Jah College of Engineering & Technology, Hyderabad" },
  { name: "Dr. Somesubhra Panda", affiliation: "Global Institute of Science & Technology, Dhanbad" },
  { name: "Dr. Sumit Saroha", affiliation: "GJUST, Hisar" },
  { name: "Dr. Amrish Devanshu", affiliation: "NIT Silchar, Assam" },
  { name: "Dr. Om Prakash Jeena", affiliation: "Ravenshaw University, Odisha" },
  { name: "Dr. Namita Mittal", affiliation: "MNIT, Jaipur" },
  { name: "Dr. Vaibhav Aggarwal", affiliation: "O. P. Jindal University, Sonipat" },
  { name: "Dr. Megha Bansal", affiliation: "VIPS-TC, New Delhi" },
  { name: "Dr. Neha Goel", affiliation: "VIPS-TC, New Delhi" },
  { name: "Dr. Nutan Singh", affiliation: "UPES, Dehradun" },
  { name: "Dr. G. B. Pandey", affiliation: "PDEU, Gujarat" },
  { name: "Dr. Pankaj Gupta", affiliation: "IGDTUW, Delhi" },
  { name: "Dr. Kusum Tharani", affiliation: "BVCOE, Delhi" },
  { name: "Dr. Prakash Chittora", affiliation: "Delhi Technological University" },
  { name: "Dr. Amit Kumar", affiliation: "NIT Srinagar, J&K" },
  { name: "Dr. Ravendra Singh", affiliation: "GCET, Greater Noida" },
  { name: "Dr. Rahul Satheesh", affiliation: "Amrita School of Engineering, Coimbatore" },
  { name: "Dr. Poras Kheterpal", affiliation: "BVCOE, Delhi" },
  { name: "Dr. Nikita Gupta", affiliation: "NIT Hamirpur" },
  { name: "Dr. Neeraj Kumar", affiliation: "BVCOE, Delhi" },
  { name: "Dr. Gaurav Yadav", affiliation: "Delhi Technological University" },
  { name: "Dr. Manoj Badoni", affiliation: "Thapar Institute of Engineering & Technology, Patiala" },
  { name: "Dr. Deepak Kumar", affiliation: "UIET Chandigarh" },
  { name: "Dr. Yogendra Arya", affiliation: "J. C. Bose University of Science & Technology, Faridabad" },
  { name: "Dr. Sunil Kumar", affiliation: "GJUST, Hisar" },
  { name: "Dr. Rajender Kumar", affiliation: "CCS HAU, Hisar" },
  { name: "Dr. Parvesh Antil", affiliation: "CCS HAU, Hisar" },
  { name: "Dr. S. Indu", affiliation: "Delhi Technological University" },
  { name: "Dr. Bhawna Aggarwal", affiliation: "FoT, Delhi University" },
  { name: "Dr. Bharat Singh", affiliation: "BVCOE, Delhi" },
  { name: "Dr. Aparna N Mahajan", affiliation: "Maharaja Agrasen University, Solan" },
  { name: "Dr. Sunil Gupta", affiliation: "MSIT, Delhi" },
  { name: "Dr. Nidhi Gupta", affiliation: "MSIT, Delhi" },
  { name: "Dr. Gaurav Kaushik", affiliation: "Delhi Technological University" },
  { name: "Dr. Rahul Gupta", affiliation: "Maharaja Agrasen University, Solan" },
  { name: "Prof. Ashwani Sharma", affiliation: "NIT Kurukshetra" },
  { name: "Dr. P. Kedarnath Dubey", affiliation: "CSIR-NPL, Delhi" },
  { name: "Dr. S. Seela Kumar Titus", affiliation: "CSIR-NPL, Delhi" },
  { name: "Dr. Prashant Giridhar Shambharkar", affiliation: "Delhi Technological University" },
  { name: "Dr. Dheryta Jaisinghani", affiliation: "University of Northern Iowa, USA" },
  { name: "Dr. Inderjeet Kaur", affiliation: "Ajay Kumar Garg Engineering College, Ghaziabad" },
  { name: "Dr. Gubba Naveen", affiliation: "Joginpally B R Engineering College, Hyderabad" },
  { name: "Dr. Shaista Tarannum", affiliation: "Ramaiah University of Applied Sciences, Bengaluru" },
  { name: "Dr. Raquel Castro Madureira", affiliation: "Universidade de Aveiro, Portugal" },
  { name: "Dr. Rajni Bala", affiliation: "Deen Dayal Upadhyaya College, University of Delhi" },
  { name: "Dr. Mansi Subhedar", affiliation: "PHCET, University of Mumbai" },
  { name: "Dr. Taieb Jemal", affiliation: "IIT Sfax / North American University, Tunisia" },
  { name: "Dr. B. Kesava Rao", affiliation: "Mahatma Gandhi Institute of Technology, Hyderabad" },
  { name: "Dr. Chioma Violet Oleka", affiliation: "Enugu State University of Science & Technology, Nigeria" },
  { name: "Dr. Madhu Valavala", affiliation: "Swarnandhra College of Engineering & Technology" },
  { name: "Dr. Ubaid Qureshi", affiliation: "University of Kashmir, Srinagar" },
  { name: "Dr. Arvind Rehalia", affiliation: "BVCOE, Delhi" },
  { name: "Dr. Sonal John", affiliation: "Oriental University, Indore" },
  { name: "Dr. Rajiv Pradhan", affiliation: "Central Agricultural University, Imphal" },
  { name: "Dr. Surekha R Sakhare", affiliation: "A G Patil Institute of Technology, Solapur" },
  { name: "Dr. Pankaj Kawadkar", affiliation: "G. H Raisoni College of Engineering & Management, Nagpur" },
  { name: "Dr. Rakhi Kamra", affiliation: "Maharaja Surajmal Institute of Technology, Delhi" },
  { name: "Dr. Richa Bhatia", affiliation: "GGSIPU, Delhi" },
  { name: "Dr. Krupali Donda", affiliation: "Adani University, Ahmedabad" },
  { name: "Dr. Shweta", affiliation: "NIT Calicut, Kozhikode" },
  { name: "Dr. Sudhamani M J", affiliation: "PES University, Bangalore" },
  { name: "Dr. Smita Nawal", affiliation: "NIT Warangal" },
  { name: "Dr. Monika Yadav", affiliation: "UPES, Dehradun" },
  { name: "Dr. Bhavana Jangid", affiliation: "GIZ GmbH, New Delhi" },
  { name: "Dr. P. Annan Naidu", affiliation: "GMRIT, Rajam, Vizianagaram" },
  { name: "Dr. Sunakshi Mehra", affiliation: "Delhi Technological University" },
  { name: "Dr. Shruti Jain", affiliation: "Jaypee University of Information Technology, Solan" },
  { name: "Dr. Ramesh Singh", affiliation: "Tata Elxsi, Bengaluru" },
  { name: "Dr. Saurabh Agarwal", affiliation: "Yeungnam University, South Korea" },
  { name: "Dr. Lakshmi Mohandas", affiliation: "Amrita Vishwa Vidyapeetham, Faridabad" },
  { name: "Dr. Yuvaraja Teekaraman", affiliation: "American International University, Kuwait" },
  { name: "Dr. Karuna Sitaram Kirwale", affiliation: "Amity University, Mumbai" },
  { name: "Dr. S. Sasikala", affiliation: "Kumaraguru College of Technology, Coimbatore" },
  { name: "Dr. Monalisa Pattanaik", affiliation: "NIT Rourkela" },
  { name: "Dr. Leena Chandrashekhar", affiliation: "RNS Institute of Technology, Bangalore" },
  { name: "Dr. Ahteshamul Haque", affiliation: "Jamia Millia Islamia, New Delhi" },
  { name: "Dr. Amber Khan", affiliation: "Jamia Millia Islamia, New Delhi" },
  { name: "Dr. Mary Christeena Thomas", affiliation: "SRM Institute of Science & Technology, Chennai" },
  { name: "Dr. Suraj Prakash Sahoo", affiliation: "Vellore Institute of Technology, Vellore" },
  { name: "Dr. Tej C Hiremath", affiliation: "Vidyavardhaka College of Engineering, Mysore" },
  { name: "Dr. Sachikanta Dash", affiliation: "Madanapalle Institute of Technology and Science" },
  { name: "Dr. Jyothi A P", affiliation: "Ramaiah Institute of Science and Management, Bengaluru" },
  { name: "Dr. Jyothi Pillai", affiliation: "Bhilai Institute of Technology, Durg" },
  { name: "Dr. Arjun Puri", affiliation: "Chitkara University" },
  { name: "Dr. Nikhil Pathak", affiliation: "Tsinghua University, Beijing, China" }
];
