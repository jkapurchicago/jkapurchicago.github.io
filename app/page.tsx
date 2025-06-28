'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import ReactMarkdown from 'react-markdown'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  project: {
    video: string
    image?: string
    youtubeId?: string
    name: string
    description: string
    summary: string
    id: string
    github?: string
    link?: string
  }
}

function ProjectVideo({ project }: ProjectVideoProps) {
  const { video, image, youtubeId, name, description, id, github } = project
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={name}
            className="aspect-video w-full cursor-zoom-in rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : image ? (
          <img
            src={image}
            alt={name}
            className="aspect-video w-full object-cover cursor-zoom-in rounded-xl"
          />
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        ) : (
          <div className="aspect-video w-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center rounded-xl text-zinc-400 text-sm">
            No media
          </div>
        )}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 flex flex-col items-center justify-center max-h-[70vh] overflow-y-auto">
          {id === 'drivesense' && (
            <motion.div
              initial={{ x: 0 }}
              animate={{
                x: [0, -8, 8, -4, 4, 0],
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                delay: 1.2,
                ease: 'easeInOut',
              }}
              className="w-full flex justify-between items-center mb-4 relative"
              style={{ minHeight: 60 }}
            >
              {/* Left car */}
              <motion.div
                initial={{ x: '-100vw', scaleX: 1 }}
                animate={{
                  x: [
                    '-100vw',
                    'calc(50vw - 80px)',
                    'calc(50vw - 80px)',
                    'calc(50vw - 90px)',
                    'calc(50vw - 75px)',
                    'calc(50vw - 80px)'
                  ],
                  scaleX: [1, 1, 0.5, 0.7, 0.9, 1],
                }}
                transition={{
                  duration: 1.7,
                  times: [0, 0.7, 0.8, 0.85, 0.92, 1],
                  ease: 'easeInOut',
                }}
                className="absolute left-0"
                style={{ zIndex: 2 }}
              >
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="20" width="60" height="15" rx="5" fill="#22223b" />
                  <rect x="20" y="15" width="30" height="10" rx="3" fill="#4a4e69" />
                  <circle cx="25" cy="37" r="5" fill="#9a8c98" />
                  <circle cx="55" cy="37" r="5" fill="#9a8c98" />
                  <rect x="60" y="25" width="15" height="7" rx="2" fill="#f2e9e4" />
                  <rect x="65" y="27" width="5" height="3" rx="1" fill="#c9ada7" />
                </svg>
              </motion.div>
              {/* Right car */}
              <motion.div
                initial={{ x: '100vw', scaleX: 1 }}
                animate={{
                  x: [
                    '100vw',
                    'calc(-50vw + 80px)',
                    'calc(-50vw + 80px)',
                    'calc(-50vw + 90px)',
                    'calc(-50vw + 75px)',
                    'calc(-50vw + 80px)'
                  ],
                  scaleX: [1, 1, 0.5, 0.7, 0.9, 1],
                }}
                transition={{
                  duration: 1.7,
                  times: [0, 0.7, 0.8, 0.85, 0.92, 1],
                  ease: 'easeInOut',
                }}
                className="absolute right-0"
                style={{ zIndex: 2 }}
              >
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="20" width="60" height="15" rx="5" fill="#9a8c98" />
                  <rect x="50" y="15" width="30" height="10" rx="3" fill="#c9ada7" />
                  <circle cx="35" cy="37" r="5" fill="#22223b" />
                  <circle cx="75" cy="37" r="5" fill="#22223b" />
                  <rect x="30" y="25" width="15" height="7" rx="2" fill="#f2e9e4" />
                  <rect x="35" y="27" width="5" height="3" rx="1" fill="#4a4e69" />
                </svg>
              </motion.div>
              {/* Burst effect at impact */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  scale: [0, 0, 1.2, 1, 0.8, 0],
                  opacity: [0, 0, 1, 0.7, 0],
                  rotate: [0, 0, 15, -15, 0],
                }}
                transition={{ duration: 1.7, times: [0, 0.7, 0.8, 0.85, 0.92, 1] }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ zIndex: 3 }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="10" fill="#f2e9e4" />
                  <g stroke="#c1121f" strokeWidth="3">
                    <line x1="30" y1="10" x2="30" y2="0" />
                    <line x1="30" y1="50" x2="30" y2="60" />
                    <line x1="10" y1="30" x2="0" y2="30" />
                    <line x1="50" y1="30" x2="60" y2="30" />
                    <line x1="15" y1="15" x2="5" y2="5" />
                    <line x1="45" y1="15" x2="55" y2="5" />
                    <line x1="15" y1="45" x2="5" y2="55" />
                    <line x1="45" y1="45" x2="55" y2="55" />
                  </g>
                </svg>
              </motion.div>
            </motion.div>
          )}
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={name}
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : image ? (
            <img
              src={image}
              alt={name}
              className="max-h-[40vh] w-auto max-w-full object-contain rounded-xl"
            />
          ) : video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          ) : (
            <div className="aspect-video h-[50vh] w-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center rounded-xl text-zinc-400 text-sm md:h-[70vh]">
              No media
            </div>
          )}
          {description && (
            <div className="prose prose-zinc dark:prose-invert text-lg mt-6 px-8 leading-relaxed w-full">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-white font-medium shadow transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </a>
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

function ProjectGrid() {
  return (
    <>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.slice(0, 6).map((project) => (
          <div key={project.id} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              {project.id === 'project3' && project.link ? (
                <Link href={project.link}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video w-full object-cover cursor-pointer rounded-xl"
                  />
                </Link>
              ) : (
                <ProjectVideo project={project} />
              )}
            </div>
            <div className="px-1">
              {project.id === 'project3' && project.link ? (
                <Link href={project.link} className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </Link>
              ) : (
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
              )}
              <p className="text-base text-zinc-600 dark:text-zinc-400 mt-2">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Tinkering with software engineering and blending machine learning, UI/UX, and visual design to build smart, user-first products. From data modeling to interface design, I focus on clean, human-centric experiences that elevate how people interact with technology.
          </p>
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <ProjectGrid />
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">{job.start} - {job.end}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
