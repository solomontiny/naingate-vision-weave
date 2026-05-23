export const site = {
  name: "Naingate Insurance Brokers",
  parent: "Digital Space Capital",
  tagline: "Protection engineered for the modern economy.",
  email: "info@naingate.com",
  phone: "+234 (0) 700 NAINGATE",
  address: "5a Adekunle Lawal Street, off Oba Adeyinka Oyekan Road, Ikoyi, Lagos, Nigeria",
  social: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/claims", label: "Claims" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/partners", label: "Partners" },
  { to: "/careers", label: "Careers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const products = [
  {
    slug: "motor",
    name: "Motor Insurance",
    summary: "Comprehensive cover for private, commercial and fleet vehicles.",
    highlights: ["Third-party & comprehensive", "24/7 roadside assistance", "Nationwide claims network"],
    icon: "Car",
  },
  {
    slug: "engineering",
    name: "Engineering Insurance",
    summary: "Risk transfer for construction, erection and machinery breakdown.",
    highlights: ["Contractors All Risk", "Plant & machinery cover", "Project delay protection"],
    icon: "HardHat",
  },
  {
    slug: "property",
    name: "Property Insurance",
    summary: "Protecting buildings, contents and assets against named perils.",
    highlights: ["Fire & special perils", "Burglary & theft", "Business interruption"],
    icon: "Building2",
  },
  {
    slug: "agric",
    name: "Agric Insurance",
    summary: "Specialised cover for crops, livestock and agri-business.",
    highlights: ["Yield-based indemnity", "Livestock mortality", "Greenhouse & aquaculture"],
    icon: "Sprout",
  },
  {
    slug: "special-risk",
    name: "Special Risk Insurance",
    summary: "Tailored solutions for energy, aviation and marine exposures.",
    highlights: ["Oil & gas operations", "Aviation hull & liability", "Marine cargo & hull"],
    icon: "ShieldAlert",
  },
  {
    slug: "life-personal",
    name: "Life & Personal Insurance",
    summary: "Financial security for individuals, families and key persons.",
    highlights: ["Group life schemes", "Personal accident", "Education endowment"],
    icon: "HeartPulse",
  },
  {
    slug: "pecuniary",
    name: "Pecuniary Insurance",
    summary: "Cover against financial loss from fraud, fidelity and bonds.",
    highlights: ["Fidelity guarantee", "Money in transit", "Performance bonds"],
    icon: "Banknote",
  },
  {
    slug: "liability",
    name: "Liability Insurance",
    summary: "Protection against third-party legal and professional claims.",
    highlights: ["Public liability", "Professional indemnity", "Directors & officers"],
    icon: "Scale",
  },
];

export const stats = [
  { value: "₦12B+", label: "Claims paid" },
  { value: "98%", label: "Settlement rate" },
  { value: "25k+", label: "Policies in force" },
  { value: "48hr", label: "Average claim turnaround" },
];

export const partners = [
  "Digital Space Capital", "FirstLine Bank", "Equator Energy", "Northstar Logistics",
  "Pinegrove Realty", "Helio Agritech", "Marina Shipping", "Cobalt Engineering",
  "Verdant Foods", "Anchor Microfinance", "Lumen Health", "Apex Aviation",
];

export const jobs = [
  { title: "Senior Underwriter — Energy & Marine", location: "Lagos", type: "Full-time", team: "Underwriting" },
  { title: "Claims Operations Lead", location: "Abuja", type: "Full-time", team: "Claims" },
  { title: "Product Manager, Digital", location: "Remote", type: "Full-time", team: "Technology" },
  { title: "Actuarial Analyst", location: "Lagos", type: "Full-time", team: "Actuarial" },
  { title: "Bancassurance Relationship Manager", location: "Port Harcourt", type: "Full-time", team: "Distribution" },
  { title: "Customer Experience Associate", location: "Lagos", type: "Contract", team: "Operations" },
];

export const faqs = [
  { q: "How do I file a claim?", a: "Notify us within 7 days via the Claims page, email, or our 24/7 hotline. You'll receive a claim reference and a dedicated handler within 24 hours." },
  { q: "What documents are required to buy a policy?", a: "Most policies require valid ID, proof of address and asset documentation (e.g. vehicle papers for motor). Our team will guide you through the specifics." },
  { q: "Can I manage my policy online?", a: "Yes. Our customer portal lets you view policies, download certificates, pay premiums and track claims in real time." },
  { q: "How are premiums calculated?", a: "Premiums reflect the sum insured, risk profile, claims history and policy term. We provide transparent quotes with no hidden charges." },
  { q: "Do you offer corporate and group cover?", a: "Absolutely. We design bespoke programs for SMEs, multinationals and government MDAs across all product lines." },
  { q: "Is Naingate licensed and regulated?", a: "Naingate Insurance Brokers operates under the regulatory framework governing Nigerian insurers and is a subsidiary of Digital Space Capital." },
];

export const team = [
  { name: "Adaeze Okonkwo", role: "Group Managing Director" },
  { name: "Tunde Akinwale", role: "Chief Underwriting Officer" },
  { name: "Fatima Bello", role: "Chief Claims Officer" },
  { name: "Chinedu Eze", role: "Chief Technology Officer" },
];
