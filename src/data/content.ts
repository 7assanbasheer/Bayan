import { ServiceItem, FAQItem, ExperienceHighlight, MethodologyStep } from "@/types";

export const siteConfig = {
  name: {
    ar: "المحامية بيان الجعفر",
    en: "Attorney Bayan Aljafar",
  },
  title: {
    ar: "المحامية بيان الجعفر | الخدمات القانونية والعقود التجارية",
    en: "Attorney Bayan Aljafar | Legal Services & Commercial Contracts",
  },
  degree: {
    ar: "ماجستير في القانون (Master of Law)",
    en: "Master of Law (LL.M.)",
  },
  shortDegree: "Master of Law",
  experienceYears: "+5",
  contractsCount: "+50",
  location: {
    ar: "المنطقة الشرقية، المملكة العربية السعودية",
    en: "Eastern Province, Kingdom of Saudi Arabia",
  },
  phone: "056 625 9333",
  phoneFormatted: "+966566259333",
  email: "BAYAN@BAYAN.LAW.SA",
  whatsappUrl: "https://wa.me/966566259333?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%82%D9%88%D8%AF%20%D9%88%D8%A7%D9%84%D8%A7%D8%AA%D9%81%D8%A7%D9%82%D9%8A%D8%A7%D8%AA",
  tagline: {
    ar: "حلول قانونية وعقود تُبنى على الوضوح والثقة",
    en: "Legal Solutions & Contracts Built on Clarity and Trust",
  },
  heroBio: {
    ar: "المحامية بيان الجعفر، حاصلة على درجة الماجستير في القانون، بخبرة مهنية تتجاوز خمس سنوات وتجربة عملية في أكثر من 50 عقدًا، مع خبرات في القطاع المصرفي والعقود التجارية والشراكات والتعاون بين الشركات.",
    en: "Attorney Bayan Aljafar holds a Master of Law degree, with over five years of professional experience and practical involvement in more than 50 contracts, specializing in the banking sector, commercial contracts, and inter-company partnerships.",
  },
  aboutSnippet: {
    ar: "تجمع المحامية بيان الجعفر بين التأهيل الأكاديمي في القانون والخبرة العملية في مجال العقود والتعاملات التجارية، مع اهتمام بتطوير اتفاقيات واضحة ومنظمة تساعد الأطراف على فهم التزاماتهم وتحديد حقوقهم ومسؤولياتهم.",
    en: "Attorney Bayan Aljafar bridges academic excellence in law with practical depth in contracts and commercial dealings, focusing on crafting transparent, structured agreements that clarify obligations, safeguard rights, and foster sustainable business relationships.",
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: "contract-drafting",
    title: {
      ar: "إعداد وصياغة العقود",
      en: "Contract Drafting & Structuring",
    },
    shortDescription: {
      ar: "صياغة قانونية محكمة ومخصصة توازن بين حماية الحقوق وسلاسة إتمام الأعمال التجارية بدقة ووضوح.",
      en: "Precision drafting tailored to balance rights protection with seamless commercial execution, ensuring clarity and dispute prevention.",
    },
    fullDescription: {
      ar: "تتضمن هذه الخدمة بناء العقود من الصفر بصياغة لغوية وقانونية دقيقة، تُراعي أهداف الأطراف وتُحدّد الحقوق والالتزامات وجداول السداد والمسؤوليات وآليات فسخ العقد أو إنهائه، بما يتماشى مع الأنظمة واللوائح السارية بالمملكة.",
      en: "From the ground up, we formulate bespoke contracts reflecting both parties' strategic objectives, explicitly delineating deliverables, payment terms, warranties, breach clauses, and termination mechanisms compliant with Saudi regulations.",
    },
    suitableFor: {
      ar: [
        "الشركات الناشئة والمؤسسات عند إطلاق مشاريع أو منتجات جديدة",
        "الأطراف التي ترغب في توثيق اتفاقيات فريدة تتطلب شروطًا خاصة",
        "المنشآت الراغبة في حوكمة عملياتها التعاقدية بأعلى معايير الدقة",
      ],
      en: [
        "Startups and enterprises launching new ventures or business lines",
        "Parties needing tailored commercial terms not covered by standard templates",
        "Organizations seeking institutional-grade contract governance",
      ],
    },
    prerequisites: {
      ar: [
        "ملخص بأهداف الاتفاقية وهوية الأطراف المعنية",
        "الشروط التجارية الرئيسية المتفق عليها مبدئيًا (المقابل المالي، المدة، النطاق)",
        "أي اشتراطات خاصة أو متطلبات تشغيلية ذات أولوية",
      ],
      en: [
        "Summary of business objectives and involved entities",
        "Key commercial terms agreed in principle (value, timeline, scope)",
        "Specific operational requirements or special stipulations",
      ],
    },
    iconName: "FileSignature",
    badge: {
      ar: "خدمة أساسية",
      en: "Core Specialty",
    },
  },
  {
    id: "contract-review",
    title: {
      ar: "مراجعة العقود وتحليل البنود",
      en: "Contract Review & Clause Analysis",
    },
    shortDescription: {
      ar: "فحص شامل للمسودات التعاقدية للكشف عن الثغرات، وتحديد المخاطر المحتملة، وتقديم مقترحات تعديل متوازنة.",
      en: "Thorough review of drafts to uncover legal ambiguities, mitigate risk exposure, and provide balanced clause adjustments.",
    },
    fullDescription: {
      ar: "مراجعة تفصيلية لبنود العقود المقدمة من الأطراف الأخرى، وتحليل الآثار النظامية المترتبة على كل بند، بما في ذلك شروط التعويض، وتحديد المسؤولية، وشروط التحكيم والتقاضي، وتعديل الصياغة لحماية مصالح العميل المشروعة.",
      en: "Detailed examination of third-party contracts, evaluating the regulatory and commercial implications of indemnity clauses, liability caps, dispute resolution terms, and non-performance risks, with constructive markups.",
    },
    suitableFor: {
      ar: [
        "قبل التوقيع على أي مسودة عقد مقدمة من طرف خارجي أو عميل رئيسي",
        "مراجعة اتفاقيات الخدمات وتوريد السلع ذات المبالغ المؤثرة",
        "التأكد من خلو المسودات من البنود المجحفة أو الغامضة",
      ],
      en: [
        "Prior to signing contracts supplied by external counterparties or vendors",
        "High-value procurement, supply, or master service agreements",
        "Ensuring the absence of disproportionate liabilities or obscure clauses",
      ],
    },
    prerequisites: {
      ar: [
        "نسخة المسودة الحالية للعقد بصيغة قابلة للتحرير أو القراءة",
        "تحديد البنود التي يرى العميل أنها قد تثير قلقًا خاصًا",
        "بيان طبيعة العلاقة الفعلية بين الطرفين",
      ],
      en: [
        "Current contract draft in an editable or legible format",
        "Highlights of specific clauses of concern from the client's perspective",
        "Context on the actual working relationship and leverage of each party",
      ],
    },
    iconName: "SearchCheck",
    badge: {
      ar: "حماية المخاطر",
      en: "Risk Shield",
    },
  },
  {
    id: "partnership-agreements",
    title: {
      ar: "اتفاقيات الشراكة والتعاون بين الشركات",
      en: "Partnership & Joint Venture Agreements",
    },
    shortDescription: {
      ar: "هيكلة الاتفاقيات التعاونية والشراكات الاستراتيجية لضمان تقاسم الأدوار والأرباح والمخاطر بوضوح واستدامة.",
      en: "Structuring B2B strategic alliances and consortium agreements, clearly defining responsibilities, profit sharing, and contingency terms.",
    },
    fullDescription: {
      ar: "تطوير اتفاقيات التعاون التجاري، والتحالفات الاستراتيجية، ومذكرات التفاهم الملزمة وغير الملزمة، مع معالجة موضوعات مساهمة كل شريك، وحوكمة اتخاذ القرارات، والملكية الفكرية المشتركة، وآليات التخارج وفض الشراكة.",
      en: "Drafting strategic joint ventures, MOUs, and consortium frameworks covering contribution models, decision-making governance, IP ownership, confidentiality, non-compete clauses, and clear exit mechanisms.",
    },
    suitableFor: {
      ar: [
        "شركتان أو أكثر ترغبان في التقدم لمشروع مشترك أو مناقصة",
        "تأسيس علاقة تجارية تعتمد على تبادل الموارد أو التقنية",
        "تنظيم حقوق والتزامات الشركاء قبل الدخول في استثمارات رأسمالية",
      ],
      en: [
        "Enterprises collaborating on shared tenders, bids, or mega-projects",
        "Technology and resource exchange partnerships",
        "Founders structuring early-stage equity or revenue share frameworks",
      ],
    },
    prerequisites: {
      ar: [
        "ملامح هيكل الشراكة والمسؤوليات التوزيعية بين الأطراف",
        "تحديد الحصص ونسب العوائد والتكاليف المتوقعة",
        "التصور الأولي لإدارة المشروع المشترك وخطة التخارج",
      ],
      en: [
        "Outline of partnership structure and operational roles",
        "Expected allocation of capital, revenues, and liabilities",
        "Preliminary vision for shared management and exit scenarios",
      ],
    },
    iconName: "Handshake",
    badge: {
      ar: "علاقات استراتيجية",
      en: "Strategic B2B",
    },
  },
  {
    id: "commercial-contracts",
    title: {
      ar: "العقود التجارية واتفاقيات تقديم الخدمات",
      en: "Commercial & Master Service Agreements",
    },
    shortDescription: {
      ar: "تنظيم التعاملات التجارية اليومية، وعقود التوريد، ونماذج تقديم الخدمات الاحترافية، واتفاقيات مستوى الخدمة (SLA).",
      en: "Governing ongoing commercial operations, vendor contracts, professional service agreements, and SLAs with operational precision.",
    },
    fullDescription: {
      ar: "صياغة ومراجعة عقود تقديم الخدمات، وعقود التوزيع والوكالة التجارية، والاتفاقيات الإطارية (Master Service Agreements) وملاحق العمل (Statements of Work)، مع التركيز على مقاييس الأداء وحماية السرية التجارية.",
      en: "Formulating enterprise MSAs, Statements of Work (SOW), distribution accords, and consulting agreements, emphasizing measurable performance criteria, payment milestones, and trade secret protection.",
    },
    suitableFor: {
      ar: [
        "مزودو الخدمات والشركات التقنية والاستشارية",
        "الشركات التي تتعامل مع شبكة موردين أو مقاولين دوريين",
        "المنشآت التي تتطلب نماذج عقود موحدة لتوسيع مبيعاتها بثقة",
      ],
      en: [
        "Professional service providers, IT agencies, and consulting firms",
        "Enterprises managing recurring vendor and contractor relationships",
        "Businesses needing standardized client-facing contracts to scale",
      ],
    },
    prerequisites: {
      ar: [
        "وصف نطاق الخدمات ومخرجات العمل المرتقبة",
        "المعايير الزمنية ومؤشرات قياس مستوى الأداء المطلوب",
        "نموذج التسعير المعتمد (ثابت، بالساعة، أو على دفعات)",
      ],
      en: [
        "Detailed scope of services and tangible deliverables",
        "Timelines, milestones, and service level metrics (KPIs)",
        "Adopted billing model (fixed, hourly, or milestone-based)",
      ],
    },
    iconName: "Briefcase",
  },
  {
    id: "document-analysis",
    title: {
      ar: "تحليل المستندات والاتفاقيات القانونية",
      en: "Legal Document & Agreement Analysis",
    },
    shortDescription: {
      ar: "قراءة نقدية معمقة للمستندات التعاقدية المعقدة لبيان الوضع القانوني وتقييم الالتزامات والخيارات المتاحة.",
      en: "In-depth diagnostic review of complex contract documentation to assess standing, uncover latent exposures, and identify options.",
    },
    fullDescription: {
      ar: "تشخيص شامل للاتفاقيات القائمة والمراسلات المرتبطة بها لتقييم الالتزامات المستمرة، وتفسير البنود المثيرة للجدل، ومساعدة إدارة المنشأة على اتخاذ قرارات مدروسة في مواقف النزاع المحتمل أو إعادة الهيكلة التعاقدية.",
      en: "Comprehensive audit of active agreements and related correspondences to map ongoing obligations, interpret contested phrasing, and provide actionable insights for decision-makers facing renegotiation or contractual friction.",
    },
    suitableFor: {
      ar: [
        "الشركات التي ورثت عقودًا قديمة وترغب في إعادة تقييم مخاطرها",
        "حالات التنازع الودي على تفسير بند تعاقدي أو استحقاق مالي",
        "التحضير لعمليات الاستحواذ أو التدقيق التعاقدي الداخلي",
      ],
      en: [
        "Businesses inheriting legacy contracts seeking risk reappraisal",
        "Disputes over clause interpretation or financial entitlements",
        "Internal contractual health checks prior to major corporate shifts",
      ],
    },
    prerequisites: {
      ar: [
        "حزمة الوثائق والملاحق والمراسلات ذات الصلة",
        "ملخص موجز بالموضوع أو التساؤل المُراد إيضاحه",
      ],
      en: [
        "Complete documentation dossier including annexes and key emails",
        "Concise summary of the specific ambiguity or query under review",
      ],
    },
    iconName: "FileText",
  },
  {
    id: "negotiation-support",
    title: {
      ar: "دعم التفاوض على بنود العقود",
      en: "Contract Negotiation Support",
    },
    shortDescription: {
      ar: "إسناد صانع القرار بالصياغات البديلة والحلول القانونية المرنة خلال جولات النقاش مع الأطراف الأخرى.",
      en: "Equipping decision-makers with tactical clause alternatives and flexible contractual solutions during inter-party discussions.",
    },
    fullDescription: {
      ar: "تقديم الدعم القانوني خلف الكواليس أو ضمن جلسات العمل الفنية، لصياغة بدائل توفيقية للبنود الخلافية، ومساعدة الأطراف على التوصل إلى نقطة التقاء تعاقدية تحقق التوازن وتحفظ المصالح الحيوية (بحسب النطاق المعتمد نظامًا).",
      en: "Providing legal backing through strategic drafting alternatives, counter-proposals for disputed stipulations, and structuring compromised wording that safeguards core interests within authorized bounds.",
    },
    suitableFor: {
      ar: [
        "المفاوضات التعاقدية ذات الحساسية العالية أو المبالغ الكبرى",
        "تجاوز نقاط الجمود في مسودات العقود المشتركة",
        "الرغبة في صياغة مواقف تفاوضية واضحة ومستندة إلى منطق نظامي",
      ],
      en: [
        "High-stakes commercial deals and sensitive multi-party discussions",
        "Resolving contractual impasses without alienating counterparties",
        "Articulating principled legal stances grounded in market reality",
      ],
    },
    prerequisites: {
      ar: [
        "المسودة موضوع التفاوض وملاحظات الطرف المقابل",
        "قائمة بالنقاط غير القابلة للتنازل (Deal-breakers) والنقاط المرنة",
      ],
      en: [
        "Active draft along with the counterparty's markups and feedback",
        "Defined spectrum of non-negotiable terms versus acceptable trade-offs",
      ],
    },
    iconName: "ShieldCheck",
  },
];

export const experienceSectors: ExperienceHighlight[] = [
  {
    id: "banking",
    title: {
      ar: "القطاع المصرفي والمالي",
      en: "Banking & Financial Ecosystem",
    },
    subtitle: {
      ar: "معايير دقيقة وبيئات عمل مشددة تنظيميًا",
      en: "High-compliance governance & institutional rigour",
    },
    description: {
      ar: "تجربة مكثفة بالتعامل مع متطلبات المؤسسات المالية، وفهم دقيق لآليات الالتزام، وإدارة مخاطر العقود البنكية والاتفاقيات الائتمانية والتمويلية التي لا تحتمل الهوامش أو الغموض.",
      en: "Extensive exposure to financial institution standards, regulatory compliance nuances, and mitigating risks within banking transactions and credit frameworks where precision is paramount.",
    },
    points: {
      ar: [
        "فهم عميق للاشتراطات الرقابية ومتطلبات الحوكمة المؤسسية",
        "تحليل بنود الضمانات والتعويضات والالتزامات المالية المعقدة",
        "خبرة في التوافق التعاقدي بين متطلبات البنوك واحتياجات العملاء",
      ],
      en: [
        "Deep familiarity with regulatory compliance and institutional governance",
        "Analysis of guarantees, indemnities, and sophisticated credit terms",
        "Aligning contractual requirements between lenders and commercial borrowers",
      ],
    },
    iconName: "Landmark",
  },
  {
    id: "corporate-partnerships",
    title: {
      ar: "اتفاقيات الشراكة والتعاون بين الشركات",
      en: "Inter-Company Partnerships & Joint Ventures",
    },
    subtitle: {
      ar: "هيكلة العلاقات الاستراتيجية والتحالفات التجارية",
      en: "Structuring strategic alliances & consortiums",
    },
    description: {
      ar: "صياغة ومراجعة أطر التعاون المؤسسي والاتفاقيات بين الكيانات الكبرى والشركات التقنية، مع الاستفادة من الخبرات العملية المرتبطة ببيئات رائدة مثل شركة علم (Elm) وتمارا (Tamara) والعديد من المنشآت الأخرى.",
      en: "Drafting and reviewing institutional collaboration frameworks and agreements between major corporations and technology-driven players, informed by practical exposure involving progressive environments such as Elm, Tamara, and prominent enterprises.",
    },
    points: {
      ar: [
        "تنظيم حقوق الملكية الفكرية وسرية البيانات المشتركة",
        "تحديد آليات اتخاذ القرار وحل النزاعات الودية والتخارج",
        "بناء أطر تعاون مرنة ومستدامة تدعم نمو الأعمال",
      ],
      en: [
        "Safeguarding intellectual property and mutual data confidentiality",
        "Establishing structured governance, dispute resolution, and exit terms",
        "Designing resilient collaboration models fostering mutual growth",
      ],
    },
    iconName: "Building2",
  },
  {
    id: "commercial-contracts",
    title: {
      ar: "العقود التجارية وقطاع الأعمال",
      en: "Commercial B2B Contracts & Enterprise Deals",
    },
    subtitle: {
      ar: "خبرة في أكثر من 50 عقدًا بمختلف المجالات",
      en: "Practical track record spanning +50 commercial contracts",
    },
    description: {
      ar: "ممارسة عملية ثرية تتجاوز 5 سنوات في صياغة وفحص العقود التجارية، وعقود التوريد والخدمات، واتفاقيات المنصات الرقمية، بما يضمن الشفافية ويحمي المصالح التجارية للأطراف في المنطقة الشرقية وأنحاء المملكة.",
      en: "Over five years of concentrated practice drafting and reviewing commercial sales, supply, procurement, and digital platform contracts, ensuring transparency and safeguarding corporate interests across the Eastern Province and the Kingdom.",
    },
    points: {
      ar: [
        "خبرة تتجاوز 50 عقدًا في مجالات تجارية وتقنية ومصرفية متنوعة",
        "صياغة متوازنة تمنع النزاعات قبل حدوثها وتيسر تنفيذ الالتزامات",
        "مواءمة العقود مع أحدث التحديثات النظامية في المملكة العربية السعودية",
      ],
      en: [
        "Proven handling of 50+ contracts across commercial, tech, and banking sectors",
        "Balanced formulation designed to prevent disputes and facilitate execution",
        "Harmonization of contracts with modern Saudi statutory frameworks",
      ],
    },
    iconName: "FileCheck",
  },
];

export const methodologySteps: MethodologyStep[] = [
  {
    step: "01",
    title: {
      ar: "التواصل الأولي",
      en: "Initial Contact",
    },
    description: {
      ar: "يرسل العميل استفساره العام عبر النموذج أو الواتساب أو البريد الإلكتروني، موضحًا ملخص الطلب والهدف منه دون إرسال مستندات سرية أو أرقام هوية في هذه المرحلة.",
      en: "The client reaches out via the website form, WhatsApp, or email, outlining the high-level inquiry and objective without transmitting confidential files or sensitive identity data at this stage.",
    },
  },
  {
    step: "02",
    title: {
      ar: "فهم الاحتياج",
      en: "Needs Assessment",
    },
    description: {
      ar: "مراجعة طبيعة الطلب بدقة، وتقييم نوع العقد أو الاتفاقية المطلوبة، والتأكد من مطابقتها لنطاق التخصص والصلاحيات المهنية المعتمدة.",
      en: "Careful examination of the inquiry's substance, evaluating the contract type, and ensuring perfect alignment with professional scope and competencies.",
    },
  },
  {
    step: "03",
    title: {
      ar: "تحديد نطاق الخدمة",
      en: "Scope & Terms Definition",
    },
    description: {
      ar: "إيضاح المتطلبات، والجدول الزمني المقترح لإنجاز العمل، وتحديد الأتعاب المهنية عند الاقتضاء، وتوقيع اتفاقية سرية المعلومات (NDA) في حال لزم الأمر.",
      en: "Clarifying deliverables, expected turnaround time, professional fee framework, and executing a Non-Disclosure Agreement (NDA) when confidential materials are shared.",
    },
  },
  {
    step: "04",
    title: {
      ar: "تنفيذ العمل",
      en: "Execution & Delivery",
    },
    description: {
      ar: "بدء صياغة العقد أو مراجعته بأعلى درجات الدقة والتحليل، ومناقشة المخرجات مع العميل لاستيعاب أي ملاحظات ختامية قبل الاعتماد النهائي.",
      en: "Initiating rigorous drafting or analytical review, followed by interactive discussion with the client to integrate feedback prior to final delivery.",
    },
  },
];

export const faqsData: FAQItem[] = [
  {
    id: "contract-types",
    category: "contracts",
    question: {
      ar: "ما أنواع العقود والاتفاقيات التي يمكن الاستفسار عنها؟",
      en: "What types of contracts and agreements can I inquire about?",
    },
    answer: {
      ar: "يمكن الاستفسار عن عقود الشركات التجارية، واتفاقيات الشراكة والتعاون بين المنشآت، وعقود تقديم الخدمات والاتفاقيات الإطارية (SLA)، وعقود التوريد، ومذكرات التفاهم (MOU)، ومراجعة العقود المرتبطة بالقطاع المصرفي وعقود الأعمال التقنية.",
      en: "You can inquire about commercial contracts, B2B partnership and joint venture agreements, master service agreements (MSAs), supply and distribution contracts, MOUs, banking-related contractual frameworks, and tech business agreements.",
    },
  },
  {
    id: "how-to-start",
    category: "process",
    question: {
      ar: "كيف تبدأ عملية طلب الخدمة؟",
      en: "How does the engagement process begin?",
    },
    answer: {
      ar: "تبدأ العملية بالتواصل عبر نموذج الموقع أو الواتساب أو البريد الإلكتروني مع تقديم فكرة عامة عن احتياجك. يتم بعد ذلك مراجعة الطلب والتواصل معك لتوضيح الخطوات التالية والجدول الزمني.",
      en: "It begins by submitting an inquiry via our contact form, WhatsApp, or email with a high-level summary of your requirements. We then assess the scope and reach out to outline next steps and timeline.",
    },
  },
  {
    id: "initial-information",
    category: "process",
    question: {
      ar: "ما المعلومات الأولية اللازمة لفهم الطلب؟",
      en: "What preliminary information is needed to evaluate my request?",
    },
    answer: {
      ar: "يكفي ذكر نوع العقد المطلوب (صياغة جديدة أم مراجعة مسودة قائمة)، والقطاع التجاري المعني، والمدة الزمنية المرجوة لإتمام العمل. يُرجى عدم إرسال أي مستندات سرية أو بيانات بنكية في التواصل الأولي.",
      en: "Providing the contract category (new drafting vs. review of an existing draft), the relevant industry sector, and your preferred turnaround timeframe is sufficient. Please refrain from sharing confidential documents during initial outreach.",
    },
  },
  {
    id: "scope-and-fees",
    category: "general",
    question: {
      ar: "كيف يتم تحديد نطاق الخدمة والأتعاب المهنية؟",
      en: "How are the scope of work and professional fees determined?",
    },
    answer: {
      ar: "يتم تحديد الأتعاب والجدول الزمني بناءً على درجة تعقيد العقد، وعدد بنوده، ونطاق المراجعة أو الصياغة المطلوبة، وحجم المخاطر المرتبطة به، وذلك بشفافية تامة قبل بدء أي أعمال فعلية.",
      en: "Fees and delivery schedules are established transparently based on contract complexity, clause volume, analytical depth required, and associated commercial stakes—clearly communicated prior to commencement.",
    },
  },
  {
    id: "remote-communication",
    category: "general",
    question: {
      ar: "هل يمكن تقديم الخدمات والتواصل عن بُعد للعملاء؟",
      en: "Can services be rendered remotely for clients across regions?",
    },
    answer: {
      ar: "نعم، يتم تقديم الخدمات بكفاءة عالية عن بُعد للعملاء والشركات في المنطقة الشرقية وكافة مناطق المملكة العربية السعودية وخارجها عبر قنوات التواصل الرقمية والاجتماعات الافتراضية.",
      en: "Yes, engagements are delivered remotely with utmost efficiency for companies across the Eastern Province, all regions of Saudi Arabia, and internationally via secure digital channels and virtual meetings.",
    },
  },
  {
    id: "confidentiality",
    category: "privacy",
    question: {
      ar: "كيف تتم المحافظة على سرية المعلومات والمستندات؟",
      en: "How is the strict confidentiality of information and documents maintained?",
    },
    answer: {
      ar: "نلتزم بأعلى معايير السرية المهنية وأخلاقيات العمل القانوني. لا يتم مشاركة أي معلومات أو مسودات مع أي طرف ثالث على الإطلاق، وتُعامل جميع التفاصيل التجارية والتعاقدية بسرية تامة ومطلقة.",
      en: "We adhere to the highest standards of professional confidentiality and legal ethics. No client information, drafts, or commercial data are ever disclosed to third parties, handled under strict confidentiality protocols.",
    },
  },
];

export const navigationLinks = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/about", label: { ar: "نبذة عن المحامية بيان", en: "About" } },
  { href: "/services", label: { ar: "الخدمات", en: "Services" } },
  { href: "/experience", label: { ar: "الخبرات المهنية", en: "Experience" } },
  { href: "/faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" } },
  { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];
