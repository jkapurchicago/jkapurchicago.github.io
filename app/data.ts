type Project = {
  name: string
  summary: string
  description: string
  link: string
  video: string
  image?: string
  youtubeId?: string
  id: string
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'DriveSense',
    summary: 'Intent classification engine for driver support—cuts costs, boosts satisfaction, and works on edge devices.',
    description: `DriveSense is an intent classification engine built to streamline driver support at scale. Whether a user needs a tow, directions, or insurance help, DriveSense interprets natural language requests and routes them instantly—reducing live agent load, accelerating response time, and opening new upsell opportunities. It helped cut support costs by 25%, raised customer satisfaction scores by 18 points, and unlocked new revenue from context-aware offers. Lightweight enough to run on edge devices, it's ready for direct-to-driver apps, auto OEM partnerships, or insurance white-label integrations.\n\nFirst-Person Project Description\nI wrote DriveSense to translate messy, real-world driver voice commands into seven clean action labels—things like roadside help or traffic update. The first prototype hovered at 76% accuracy, so I rebuilt the pipeline from scratch:\n\nData Expansion – I scripted a synthetic utterance generator that mirrors accents, abbreviations, and route numbers. That boosted the training set 5× without a manual labeling binge.\n\nTargeted Fine-Tuning – Using QLoRA on a 1-billion-parameter LLaMA checkpoint, I froze the backbone and trained a slim classifier head. Gradient accumulation let me fit batches on a single RTX 3060.\n\nHard-Negative Mining – After each epoch I ran inference on a validation dump, pulled the highest-confidence mistakes, and folded them back into the next round.\n\nThose tweaks lifted validation accuracy to 88% and pushed F1 to 0.89. Latency stayed under 350 ms on a Raspberry Pi 5 thanks to int8 quantization (GPTQ). All training scripts, notebooks, and a Dockerfile live in the repo so anyone can reproduce or swap in new intents. On the road, that means a query like "Can someone tow me off I-90?" reliably maps to roadside-assist instead of general-info—and the right API fires on the first try, no cloud round-trip required.`,
    link: '',
    video: '',
    image: '/images/drive_sense_image.png',
    youtubeId: '',
    id: 'drivesense',
  },
  {
    name: 'OWNABLE',
    summary: 'A platform aligning incentives for tenants, investors, and communities.',
    description: `**OWNABLE**\n\nA platform aligning incentives for tenants, investors, and communities:\n\n- **For Tenants:**\n  - Savings match ($5,000–$10,000)\n  - Build financial stability (coaching, credit, savings)\n  - Try before you buy & move-in flexibility\n  - Access to market upside and generational wealth\n\n- **For Investors:**\n  - Asset-backed returns\n  - Social good alignment\n  - City-backed affordable housing\n  - Hybrid operating/property company upside\n\n- **For Owners/Operators:**\n  - Premium rent, lower vacancy\n  - Streamlined exit with tenant buyer pool\n  - Government support & grant opportunities\n\n**Roadmap:**\n- Marketplace platform (lower fees, vetted buyers)\n- Tech-enabled management (rental/listing portals, lender/insurance partners)\n- Government partnerships (increase housing stock, accessibility)\n- Mortgage safety (forbearance options)\n\n**Business Model:**\n- Rent, mortgage origination, property sales, insurance/contractor commissions\n- Example: $5M fund → 16 properties → $905K profit (est.)\n`,
    link: '',
    video: '',
    image: '/images/ownable.png',
    youtubeId: '',
    github: 'https://github.com/jkapurchicago/R20',
    id: 'project2',
  },
  {
    name: 'Project #3',
    summary: 'A creative campaign for a global brand.',
    description: 'Project #3 description',
    link: '/projects/project3',
    video: '',
    image: '/images/notice.png',
    youtubeId: '',
    github: '',
    id: 'project3',
  },
  {
    name: 'Project #4',
    summary: 'Project #4 one-liner summary.',
    description: 'Project #4 description',
    link: '',
    video: '',
    image: '',
    youtubeId: '',
    id: 'project4',
  },
  {
    name: 'Project #5',
    summary: 'Project #5 one-liner summary.',
    description: 'Project #5 description',
    link: '',
    video: '',
    image: '',
    youtubeId: '',
    id: 'project5',
  },
  {
    name: 'Project #6',
    summary: 'Project #6 one-liner summary.',
    description: 'Project #6 description',
    link: '',
    video: '',
    image: '',
    youtubeId: '',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/jkapurchicago',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jatin-kapur-349246127/k',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/ibelick',
  // },
]

export const EMAIL = 'jkapur.work@gmail.com'
