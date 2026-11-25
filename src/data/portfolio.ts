import heroStudioAsset from "@/assets/bright-hero-studio.png.asset.json";
import portraitAsset from "@/assets/bright-portrait.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import az900Asset from "@/assets/az900-cert.pdf.asset.json";
import fortinetAsset from "@/assets/fortinet-cert.pdf.asset.json";

export const ASSETS = {
  heroPortrait: heroStudioAsset.url,
  aboutPortrait: portraitAsset.url,
  resumePdf: resumeAsset.url,
  az900Pdf: az900Asset.url,
  fortinetPdf: fortinetAsset.url,
} as const;

export const PROFILE = {
  name: "Bright Eduful",
  firstName: "BRIGHT",
  lastName: "EDUFUL",
  role: "Co-Founder of Synthxos & Cybersecurity Analyst",
  tagline:
    "Building resilient digital products at Synthxos and defending modern infrastructure through threat analysis, vulnerability management, and incident response.",
  location: "Accra, Ghana",
  email: "brighteduful22@gmail.com",
  phone: "+233 24 525 1204",
  linkedin: "https://linkedin.com/in/brighteduful",
  synthxosUrl: "https://www.synthxos.com/",
  education: {
    degree: "BSc Cybersecurity",
    school: "Ghana Communication Technology University",
    period: "Feb 2024 – Present",
    focus: ["Web Programming", "Computer Networking", "Kali Linux & OSINT", "SIEM Tools"],
  },
} as const;

export const CAPABILITIES = [
  { label: "Threat Analysis", icon: "Radar" },
  { label: "Vulnerability Mgmt", icon: "ShieldAlert" },
  { label: "Incident Response", icon: "Flame" },
  { label: "Cloud Security (Azure)", icon: "Cloud" },
  { label: "Penetration Testing", icon: "Terminal" },
  { label: "SIEM & Splunk", icon: "Activity" },
  { label: "Network Defense", icon: "Network" },
  { label: "Synthxos Leadership", icon: "Sparkles" },
] as const;

export const EXPERIENCES = [
  {
    role: "Co-Founder",
    company: "Synthxos",
    period: "Present",
    url: "https://www.synthxos.com/",
    summary:
      "Leading product vision, security-first architecture, and strategic growth for Synthxos.",
    highlights: [
      "Driving end-to-end digital product engineering and security posture",
      "Aligning user experience with enterprise-grade reliability",
    ],
  },
  {
    role: "SOC Analyst Job Simulation",
    company: "Commonwealth Bank",
    period: "Sep 2024 – Oct 2024",
    summary:
      "Hands-on financial sector security operations covering proactive defense and continuity.",
    highlights: [
      "Threat hunting across simulated enterprise banking telemetry",
      "Identity & access management and disaster recovery planning",
    ],
  },
  {
    role: "Cybersecurity Analyst Intern (Simulation)",
    company: "JPMorgan Chase",
    period: "Aug 2024 – Sep 2024",
    summary:
      "Immersive cybersecurity simulation focused on enterprise risk and response frameworks.",
    highlights: [
      "Vulnerability management and structured security analysis framework",
      "Authored actionable incident response playbooks",
    ],
  },
  {
    role: "Cybersecurity Intern (Simulation)",
    company: "Mastercard",
    period: "May 2024 – Jun 2024",
    summary:
      "Network defense simulation testing rapid containment and root-cause investigation.",
    highlights: [
      "Identified and contained simulated cyber attacks via log & traffic analysis",
      "Developed remediation plans to prevent recurring attack vectors",
    ],
  },
] as const;

export const PROJECTS = [
  {
    number: "01",
    title: "Vulnerability Scanner",
    category: "Offensive & Defensive Tooling",
    description:
      "Automated network and service vulnerability scanner built with Python and Nmap to surface open ports, misconfigurations, and exploitable exposures.",
    stack: ["Python", "Nmap", "Network Security"],
    icon: "ScanSearch",
  },
  {
    number: "02",
    title: "SIEM Threat Hunting Lab",
    category: "Detection Engineering",
    description:
      "End-to-end threat hunting pipeline using Splunk and the ELK Stack to ingest telemetry, correlate anomalies, and investigate suspicious network activity.",
    stack: ["Splunk", "ELK Stack", "Log Analysis"],
    icon: "Radar",
  },
  {
    number: "03",
    title: "Security Awareness Campaign",
    category: "Human Risk Management",
    description:
      "Designed and executed a phishing simulation and security quiz program with full methodology and executive risk reporting.",
    stack: ["Phishing Simulation", "Risk Reporting", "ISO / NIST"],
    icon: "ShieldCheck",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet",
    date: "Nov 2025 – Nov 2027",
    credentialId: "4257729190BE",
    pdfUrl: fortinetAsset.url,
    featured: true,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Verified Credential",
    pdfUrl: az900Asset.url,
    featured: true,
  },
  {
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "Active Member",
    featured: false,
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "Certified",
    featured: false,
  },
  {
    title: "API Penetration Testing",
    issuer: "APIsec University",
    date: "Certified",
    featured: false,
  },
  {
    title: "Google Data Analytics & Splunk Expert",
    issuer: "Google / Splunk",
    date: "Certified",
    featured: false,
  },
] as const;