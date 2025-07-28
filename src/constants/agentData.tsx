import { ArrowRight, Sparkles, Zap, Bot, Users, TrendingUp, Globe, Shield } from 'lucide-react';

export const agentsData = [
  {
    id: 1,
    name: "Software Testing Copilot",
    description: "Automates test case creation, generates Selenium scripts, and transforms test documentation into a smart, searchable knowledge base for faster and more reliable software testing.",
    category: "Software Testing",
    status: "Coming Soon",
    interactions: 0,
    accuracy: 0,
    features: ["Test Case Generation", "Selenium Script Creation", "Smart Documentation", "Knowledge Base"],
    gradient: "from-green-500 via-green-600 to-green-700",
    icon: Bot,
    longDescription: "The software testing copilot is designed to support QA teams under pressure to release quickly and with fewer bugs. By analyzing user flows and UI patterns, this agent creates dynamic test cases, generates ready-to-use Selenium scripts, and converts existing documentation into an intelligent, searchable knowledge base.",
    capabilities: [
      "Generate end-to-end test cases from UI/UX flows",
      "Create Selenium automation scripts from real websites",
      "Transform test documentation into searchable knowledge base",
      "Detect gaps in test coverage",
      "Integrate with CI/CD pipelines for automated test execution",
      "Analyze test run results and identify flaky tests"
    ],
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/Testing+Flow.mp4"
  },
  {
    id: 2,
    name: "Automotive Customer Service Copilot",
    description: "Streamlines automotive service operations with intelligent automation. Handles appointment booking, conversational service insights, and context-aware support through a smart agent.",
    category: "Customer Service",
    status: "Coming Soon",
    interactions: 0,
    longDescription: "The automotive customer service copilot enhances customer experience by enabling intelligent service booking, conversational troubleshooting, and seamless integration with dealer management systems. It empowers service teams to focus on vehicle care while the AI handles the repetitive tasks.",
    capabilities: [
      "Automate appointment bookings with calendar integration",
      "Provide real-time service status updates",
      "Offer maintenance reminders and recall alerts",
      "Answer customer queries conversationally",
      "Deliver contextual service recommendations",
      "Integrate with existing automotive CRMs and ERPs"
    ],
    accuracy: 0,
    features: ["Calendar Integration", "Conversational Insights", "Contextual Recommendations", "Service Automation"],
    gradient: "from-green-400 via-green-500 to-green-600",
    icon: TrendingUp,
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/Automotive+Co-pilot.mp4"
  },
  {
    id: 3,
    name: "Accounting Copilot",
    description: "Automates invoice creation from purchase orders and streamlines reconciliation processes, supporting accounting teams across the entire finance cycle.",
    category: "Accounting",
    status: "Coming Soon",
    url: "https://master.d327pty55h917v.amplifyapp.com",
    longDescription: "The accounting copilot brings automation to core finance operations like invoice creation, PO matching, and account reconciliation. It reduces manual data entry, catches mismatches early, and ensures faster month-end closes, helping teams operate with precision and agility.",
    capabilities: [
      "Create invoices automatically from purchase orders",
      "Match POs and invoices to detect inconsistencies",
      "Automate ledger entries and adjustments",
      "Generate reports for accounts payable and receivable",
      "Support compliance with financial standards",
      "Assist in month-end close activities with smart validation"
    ],
    interactions: 0,
    accuracy: 0,
    features: ["Invoice Generation", "PO Reconciliation", "Accounts Payable Automation", "Month-End Close Support"],
    gradient: "from-green-600 via-green-700 to-green-800",
    icon: Shield,
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/Accounting+Copilot.mp4"
  },
  {
    id: 4,
    name: "Product Discovery Copilot",
    description: "Helps users quickly discover product details, resolve support queries, and access real-time information using a contextual and searchable AI agent.",
    category: "Product Discovery",
    status: "Coming Soon",
    url: "https://main.d13455ryyqm07k.amplifyapp.com",
    longDescription: "The product discovery copilot helps users quickly locate information about products, components, and technical documentation. It reduces support load by resolving queries instantly through contextual understanding and intelligent search across product data and manuals.",
    capabilities: [
      "Search across product catalogs and tech documentation",
      "Answer product-related queries in real-time",
      "Assist in troubleshooting and solution finding",
      "Support multilingual queries and regional specs",
      "Recommend related products or upgrades",
      "Integrate with customer support platforms for ticket deflection"
    ],
    interactions: 0,
    accuracy: 0,
    features: ["Contextual Q&A", "Product Data Search", "Solution Discovery", "Real-Time Assistance"],
    gradient: "from-green-700 via-green-800 to-green-900",
    icon: Sparkles,
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/Abb+demo(simple-no-voice).mp4"
  },
  {
    id: 5,
    name: "Insurance Copilot",
    description: "Assists brokers and customers in finding the right insurance products and answering complex queries with accuracy and speed.",
    category: "Insurance",
    status: "Coming Soon",
     capabilities: [
      "Match user needs to insurance policies using contextual AI",
      "Explain policy terms, benefits, and exclusions",
      "Answer FAQs and claim-related queries in real-time",
      "Support lead generation with guided conversations",
      "Automate policy comparison and quote generation",
      "Integrate with CRM and underwriting platforms"
    ],
    interactions: 0,
    accuracy: 0,
    features: ["Policy Guidance", "Customer Q&A", "Product Recommendation", "Sales Enablement"],
    gradient: "from-green-300 via-green-400 to-green-500",
    icon: Bot,
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/AIG+Demo.mp4"
  },
  {
    id: 6,
    name: "Auditor Copilot",
    description: "Supports internal audit teams by analyzing data in real-time, flagging anomalies, and ensuring compliance for faster and smarter audits.",
    category: "Auditing",
    status: "Coming Soon",
    url: "https://master.d31ln2qvo3vrnd.amplifyapp.com",
    longDescription: "The audit copilot accelerates internal audits by analyzing large volumes of transactional data in real time, identifying anomalies, and ensuring regulatory compliance. It reduces manual workload, flags risks early, and increases audit coverage with greater efficiency.",
    capabilities: [
      "Scan financial records to detect anomalies and inconsistencies",
      "Automate compliance rule validation",
      "Generate audit trails and reports on demand",
      "Flag risky transactions or activities",
      "Provide audit summaries and executive dashboards",
      "Support integration with ERP and GRC systems"
    ],
    interactions: 0,
    accuracy: 0,
    features: ["Real-Time Analysis", "Anomaly Detection", "Compliance Monitoring", "Decision Support"],
    gradient: "from-green-800 via-green-900 to-green-950",
    icon: TrendingUp,
    demoVideoUrl: "https://s3.ap-south-1.amazonaws.com/agents.kloudstac-platform-video-bucket/agent-videos/Auditor+Copilot+(1).mp4"
  }
];