export type SkillGroup = {
  title: string;
  items: string[];
};

export type Experience = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  location: string;
  highlights: string[];
};

export type Project = {
  name: string;
  role?: string;
  period: string;
  description: string;
  tags: string[];
};

export type Certification = {
  name: string;
  note?: string;
};

export type OSSContribution = {
  name: string;
  url: string;
  description: string;
  tags: string[];
};

export type WritingKind = "Article" | "Blog" | "Patent" | "Paper" | "Talk";

export type WritingItem = {
  title: string;
  url: string;
  outlet: string;
  date: string;
  kind: WritingKind;
  lang?: "ja";
};

export const profile = {
  name: "Kazuki Odo",
  title: "Staff Software Engineer",
  subtitle: "MLOps / Infrastructure",
  tags: ["Turing, Inc.", "Tokyo Area, Japan", "13+ years"],
  lead:
    "I turn complex technical challenges into scalable, business-aligned platforms. Full-stack, SRE/DRE, DevOps, and ML platform engineering across multi-cloud (AWS, GCP, Azure) and on-prem — from design to large-scale production.",
  links: {
    linkedin: {
      label: "LinkedIn",
      handle: "/in/kazuki-odo",
      url: "https://www.linkedin.com/in/kazuki-odo-a6a204127/",
    },
    github: {
      label: "GitHub",
      handle: "@kazu0716",
      url: "https://github.com/kazu0716",
    },
    x: {
      label: "X",
      handle: "@kazu_kun0716",
      url: "https://x.com/kazu_kun0716",
    },
  },
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Side Projects" },
  { href: "#open-source", label: "Open Source" },
  { href: "#writing", label: "Writing & Talks" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const about: string[] = [
  "I'm a software engineer specializing in ML platforms and infrastructure. Currently leading MLOps and infra initiatives at Turing, where a three-person platform team builds and operates 1,000+ GPUs of Slurm-based training infrastructure across AWS, GCP, and on-prem to accelerate autonomous-driving research.",
  "Before Turing, I worked across SRE at Splunk (Cisco), ML platform engineering at Preferred Networks on MATLANTIS, customer engineering at Google Cloud, and backend / SRE / security engineering at Recruit and NTT Communications.",
];

export const experience: Experience[] = [
  {
    role: "Staff Software Engineer — MLOps / Infrastructure",
    org: "Turing, Inc.",
    orgUrl: "https://tur.ing/en/",
    period: "Oct 2025 — Present",
    location: "Tokyo",
    highlights: [
      "Build and operate 1,000+ GPUs of training infrastructure across AWS, GCP, and on-prem with a three-person platform team — everything managed as code.",
      "Stood up a 240-GPU (NVIDIA H200) Slurm cluster on Google Cloud in two weeks and have run it in production since, alongside a SageMaker HyperPod GPU cluster on AWS.",
      "Scaled shared training storage from 36 TB to 504 TB of Lustre while in production, and built cross-cloud data pipelines spanning AWS, GCP, and Azure.",
      "Keep large GPU fleets reliable with a small team: observability as code, incident response, self-healing node recovery, and runbook automation.",
    ],
  },
  {
    role: "Senior Site Reliability Engineer",
    org: "Splunk (Cisco)",
    orgUrl: "https://www.splunk.com/",
    period: "Jun 2024 — Sep 2025",
    location: "Tokyo",
    highlights: [
      "Maintained and improved Splunk Cloud infrastructure across AWS, GCP, and Azure.",
      "Automated operational workflows and improved system reliability.",
      "Supported customer environments and collaborated with account teams and solution engineers.",
      "Contributed to incident response and operational excellence across APAC.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Preferred Networks",
    orgUrl: "https://www.preferred.jp/en/",
    period: "Apr 2023 — May 2024",
    location: "Tokyo",
    highlights: [
      "Developed MATLANTIS, an enterprise-scale atomic-level simulation platform.",
      "Led multi-GPU, multi-cloud workloads on Kubernetes multi-cluster.",
      "Built infrastructure and tooling using Terraform, Kubernetes, and Bazel.",
      "Delivered backend systems and data pipelines supporting product and business use cases.",
    ],
  },
  {
    role: "Customer Engineer — Google Cloud",
    org: "Google Cloud Japan",
    orgUrl: "https://cloud.google.com/",
    period: "Jun 2021 — Mar 2023",
    location: "Tokyo",
    highlights: [
      "Advised enterprise customers on cloud architecture, migration, and modernization.",
      "Designed and prototyped solutions using GCP across application and ML domains.",
      "Resolved 200+ technical issues across customer engagements.",
      "Led technical strategy for customer transformation and platform adoption.",
    ],
  },
  {
    role: "Security / Software / Site Reliability Engineer",
    org: "Recruit",
    orgUrl: "https://www.recruit.co.jp/",
    period: "Oct 2017 — May 2021",
    location: "Tokyo",
    highlights: [
      "Built and operated backend systems for large-scale services using Spring Boot and cloud infrastructure.",
      "Led migration from private cloud (VMware) to AWS-based cloud-native architecture, improving scalability and operational efficiency.",
      "Improved system reliability through monitoring, performance tuning, and operational enhancements.",
      "Analyzed logs and developed detection systems for account takeover and fraudulent behavior using Splunk.",
      "Led cloud adoption strategy across AWS and GCP, focusing on security architecture and enterprise-scale rollout.",
    ],
  },
  {
    role: "Network & Security Research Engineer",
    org: "NTT Communications (NTT DOCOMO BUSINESS)",
    orgUrl: "https://www.ntt.com/en/index.html",
    period: "Apr 2013 — Sep 2017",
    location: "Tokyo",
    highlights: [
      "Contributed to network security and traffic-control platforms, including work reflected in public patents and publications.",
      "Designed and built two internal on-premises platforms from scratch: a VMware-based IaaS and a Kubernetes-based container platform — both adopted as long-running production infrastructure.",
      "Developed DDoS protection and traffic control systems.",
      "Researched network security technologies including BGP Flowspec.",
      "Built distributed systems for traffic analysis and monitoring.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Go", "Java", "TypeScript", "JavaScript", "SQL", "PHP"],
  },
  {
    title: "Cloud & Infra",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Terragrunt",
      "Packer",
      "CDK",
      "Ansible",
    ],
  },
  {
    title: "Platform",
    items: [
      "REST",
      "gRPC",
      "FastAPI",
      "Spring Boot",
      "NestJS",
      "Gin",
      "Flask",
      "Django",
    ],
  },
  {
    title: "Data",
    items: [
      "BigQuery",
      "Cloud Spanner",
      "PostgreSQL",
      "Aurora",
      "Redis",
      "Elasticsearch",
    ],
  },
  {
    title: "ML",
    items: [
      "Slurm",
      "SageMaker HyperPod",
      "Lustre",
      "Vertex AI",
      "Databricks",
      "TensorFlow",
      "Dataflow",
    ],
  },
  {
    title: "Networking",
    items: [
      "BGP",
      "BGP Flowspec",
      "OSPF",
      "IPv6",
      "IPSec",
      "NetFlow / sFlow",
    ],
  },
  {
    title: "Observability",
    items: [
      "Splunk",
      "Datadog",
      "New Relic",
      "Prometheus",
      "Grafana",
      "Loki",
      "Fluentd",
    ],
  },
  {
    title: "Practices",
    items: [
      "SRE",
      "DevOps",
      "Incident Response",
      "Agile",
      "Stakeholder Collaboration",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Technical Advisor — E-commerce Platform for trading card game",
    role: "Technical Advisor",
    period: "2023 — Present",
    description:
      "Advising startups on architecture and engineering strategy. Designed and built an e-commerce platform using NestJS, AWS, and PostgreSQL.",
    tags: ["NestJS", "AWS", "PostgreSQL", "Architecture"],
  },
  {
    name: "Backend Services — Real Estate Tech",
    role: "FullStack Engineer",
    period: "Aug 2020 — Oct 2021",
    description:
      "Built backend services for a new product at a real estate tech company. Go (Gin) and Python (FastAPI) on GCP — GKE, Cloud Run, Cloud SQL, Cloud Functions.",
    tags: [
      "Go",
      "Gin",
      "Python",
      "FastAPI",
      "GCP",
      "GKE",
      "Cloud Run",
      "Cloud SQL",
      "Cloud Functions",
    ],
  },
  {
    name: "Healthcare Prototype Platform",
    role: "FullStack Engineer",
    period: "2020",
    description:
      "Designed and built an early-stage prototype for a healthcare-related workflow, including mobile and backend components.",
    tags: [
      "React Native",
      "TypeScript",
      "GraphQL",
      "AWS",
      "Firebase",
      "Terraform",
    ],
  },
  {
    name: "Marketing Data Analysis",
    role: "ML Engineer / Data Analyst",
    period: "2019",
    description:
      "Performed exploratory data analysis for a life-science marketing use case.",
    tags: ["Python", "Jupyter", "Pandas", "Matplotlib", "scikit-learn"],
  },
];

export const education = {
  school: "Tokyo University of Science",
  schoolUrl: "https://www.tus.ac.jp/en/fac/riko/man.html",
  degree: "B.E. Information Technology",
  period: "Apr 2009 — Mar 2013",
  thesis: {
    title:
      "Researched method of Automatic Composition using Interactive Genetic Algorithm",
    note: "Bachelor's thesis — implemented the algorithm and the full system from scratch.",
  },
};

export const oss: OSSContribution[] = [
  {
    name: "cloudspannerecosystem/spanner-stress-test-demo",
    url: "https://github.com/cloudspannerecosystem/spanner-stress-test-demo",
    description: "Stress-testing demo for Cloud Spanner workloads.",
    tags: ["Go", "Cloud Spanner", "Load testing"],
  },
  {
    name: "googleforgames/space-agon",
    url: "https://github.com/googleforgames/space-agon",
    description:
      "Integration demo for Agones and Open Match — multiplayer game-server orchestration on Kubernetes.",
    tags: ["Go", "Kubernetes", "Agones", "Open Match"],
  },
];

export const writing: WritingItem[] = [
  {
    title:
      "3人で1000GPU超を統合運用する？マルチクラウド＆オンプレを跨ぐ、構築と運用のリアル！",
    url: "https://www.cnia.io/pek2026/sessions/b824c064-cd52-428d-a00d-cd62470e9093/",
    outlet: "Platform Engineering Kaigi 2026",
    date: "2026-09",
    kind: "Talk",
    lang: "ja",
  },
  {
    title:
      "今度はムンバイだ！Google Cloudだ！240 GPUのSlurmクラスタを2週間で立ち上げ、4ヶ月運用してみてわかった話",
    url: "https://zenn.dev/turing_motors/articles/fd34d82e0e56d7",
    outlet: "Zenn (Turing Tech Blog)",
    date: "2026-07",
    kind: "Article",
    lang: "ja",
  },
  {
    title:
      "Tokyo 30の舞台裏？AWSで作る！フルマネージドな大規模GPUクラスターの構築/運用のリアル",
    url: "https://zenn.dev/turing_motors/articles/588954c08dccc0",
    outlet: "Zenn (Turing Tech Blog)",
    date: "2026-02",
    kind: "Article",
    lang: "ja",
  },
  {
    title:
      "DMM.com：これからのビジネスを担う動画配信サービスの提供と、データ分析基盤のモダナイズを Google Cloud で実施",
    url: "https://cloud.google.com/blog/ja/topics/customers/dmmcom-modernising-the-data-analytics-infrastructure-with-google-cloud",
    outlet: "Google Cloud Blog — Customer Story",
    date: "2023-04",
    kind: "Article",
    lang: "ja",
  },
  {
    title: "Google Cloud で、決まった時刻にjobを実行する、2つの方法",
    url: "https://zenn.dev/google_cloud_jp/articles/e35fbe793efb5b",
    outlet: "Zenn (Google Cloud Japan)",
    date: "2022-12",
    kind: "Article",
    lang: "ja",
  },
  {
    title:
      "自分のこと、それなりのエンジニアだと思ってたけど、緑コーダーになるのに1年かかった話",
    url: "https://kazu0716.hatenablog.com/entry/2022/05/03/232335",
    outlet: "EAFP (personal blog)",
    date: "2022-05",
    kind: "Blog",
    lang: "ja",
  },
  {
    title: "serverless frameworkを使って、cloud functionを立ち上げてみた",
    url: "https://kazu0716.hatenablog.com/entry/2020/09/21/003222",
    outlet: "EAFP (personal blog)",
    date: "2020-09",
    kind: "Blog",
    lang: "ja",
  },
  {
    title: "FaaSのIaCに関して「Zappa」で立ち向かってみる",
    url: "https://kazu0716.hatenablog.com/entry/2019/12/19/145918",
    outlet: "EAFP (Recruit Engineers Advent Calendar 2019)",
    date: "2019-12",
    kind: "Blog",
    lang: "ja",
  },
  {
    title: "大量の画像の中から同一画像を探す方法",
    url: "https://kazu0716.hatenablog.com/entry/2018/12/02/212419",
    outlet: "EAFP (Recruit Engineers Advent Calendar 2018)",
    date: "2018-12",
    kind: "Blog",
    lang: "ja",
  },
  {
    title: "Black Hat USA 2018 / DEFCON 26 へ参加して来ました",
    url: "https://techblog.recruit.co.jp/article-148/",
    outlet: "Recruit Tech Blog",
    date: "2018",
    kind: "Article",
    lang: "ja",
  },
  {
    title:
      "Communication control method, communication control device, and computer program",
    url: "https://patents.google.com/patent/US20210306253A1/en",
    outlet: "US Patent Application — NTT Communications Corporation",
    date: "2017-09",
    kind: "Patent",
  },
  {
    title:
      "小特集 3-2 バックボーンネットワークにおけるセキュリティの現状と対策",
    url: "https://app.journal.ieice.org/trial/100_3/k100_3_180/index.html",
    outlet: "IEICE Communications Society Magazine",
    date: "2017",
    kind: "Paper",
    lang: "ja",
  },
  {
    title: "More posts on EAFP",
    url: "https://kazu0716.hatenablog.com/?page=1616949973",
    outlet: "EAFP (personal blog archive)",
    date: "—",
    kind: "Blog",
    lang: "ja",
  },
];

export const certifications: Certification[] = [
  { name: "TOEIC IP 865 / 990", note: "Issued Oct 2024" },
  { name: "Splunk Core Certified Consultant", note: "expires Feb 2028" },
  { name: "Splunk Enterprise Certified Architect", note: "expires Aug 2027" },
  { name: "Information Security Specialist (IPA Japan)", note: "Issued Oct 2014" },
  { name: "Google Cloud Certified Professional Cloud Developer", note: "expired Nov 2023" },
];
