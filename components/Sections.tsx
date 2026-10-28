
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  GraduationCap,
  Heart,
  MapPin,
  Server,
  Terminal,
} from "lucide-react";

import { projects } from "@/data/projects";
import ContactSection from "@/components/ContactSection";

// ==========================================
// SHARED SECTION HEADING
// ==========================================

function SectionHead({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-11">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.22em] text-rose-400">
        {"// "} {kicker}
      </p>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

// ==========================================
// SKILLS DATA
// ==========================================

const skills = [
  {
    name: "Frontend development",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend development",
    icon: Server,
    items: [
      "Node.js",
      "REST APIs",
      "Next.js App Router",
      "Server-side logic",
      "Authentication",
      "OAuth",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    items: [
      "SQL",
      "NoSQL",
      "MongoDB Atlas",
    ],
  },
  {
    name: "Tools & workflow",
    icon: Terminal,
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "VS Code",
    ],
  },
];

// ==========================================
// ABOUT SECTION
// ==========================================

export function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-[#0e111a] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="ABOUT ME"
          title="Curiosity drives my code."
        />

        <div className="grid gap-9 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              I&apos;m{" "}
              <strong className="text-white">
                MD. Musfizur Rahman (Dipro)
              </strong>
              , a Computer Science and Engineering student
              at United International University in Dhaka.
              I&apos;m passionate about turning ideas into
              practical web applications.
            </p>

            <p>
              My learning journey has taken me from HTML,
              CSS and JavaScript to React, TypeScript,
              Next.js, Node.js, databases and
              authentication. I enjoy working across the
              stack, from clean interfaces to the logic
              and APIs that power them.
            </p>

            <p>
              For me, coding is also a logic puzzle.
              Outside my web projects, I like competitive
              programming, optimizing mathematical
              algorithms and solving challenges such as
              Advent of Code. Those interests keep me
              curious and improve the way I approach
              problems.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <BookOpen
                className="mb-4 text-rose-400"
                size={27}
              />

              <h3 className="font-bold text-white">
                Always learning
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Exploring new tools, strengthening
                fundamentals and building real projects.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <Heart
                className="mb-4 text-rose-400"
                size={27}
              />

              <h3 className="font-bold text-white">
                Problem-solving mindset
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Competitive programming, algorithms,
                and thoughtful engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SKILLS SECTION
// ==========================================

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="SKILLS & TECHNOLOGIES"
          title="My development toolbox."
          description="The technologies and tools I'm learning and using to build modern web experiences."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.name}
                className="rounded-2xl border border-white/10 bg-[#121620] p-7 transition hover:border-rose-500/25"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-rose-500/10 p-3 text-rose-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// EDUCATION SECTION
// ==========================================

export function Education() {
  return (
    <section
      id="education"
      className="border-y border-white/5 bg-[#0e111a] py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="EDUCATION"
          title="Learning & growing."
        />

        <div className="relative max-w-3xl rounded-2xl border border-white/10 bg-[#151925] p-7 sm:p-9">
          <div className="absolute top-8 left-0 h-20 w-1 rounded-r bg-rose-500" />

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-300">
            <GraduationCap size={15} />
            Currently pursuing
          </div>

          <h3 className="text-2xl font-bold text-white">
            B.Sc. in Computer Science and Engineering
          </h3>

          <p className="mt-3 text-lg text-slate-300">
            United International University (UIU)
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={15} />
            Dhaka, Bangladesh
          </p>

          <p className="mt-5 leading-7 text-slate-400">
            Building a foundation in computer science
            while developing hands-on skills in software
            engineering, web technologies and algorithms.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PROJECTS SECTION
// ==========================================

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          kicker="SELECTED WORK"
          title="Things I've built."
          description="Three projects that reflect my work with full-stack development, API integration and interactive frontend experiences."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121620] transition duration-300 hover:-translate-y-1 hover:border-rose-500/35"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-400">
                  {project.eyebrow}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center justify-between rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-rose-400 hover:bg-rose-500/10"
                >
                  View details

                  <ArrowUpRight
                    size={18}
                    className="text-rose-400"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// CONTACT SECTION
// ==========================================

// Reuse the single ContactSection implementation.
// This preserves the existing <Contact /> export.

export function Contact() {
  return <ContactSection />;
}

// ==========================================
// FOOTER
// ==========================================

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} MD. Musfizur
          Rahman (Dipro). Built with Next.js.
        </p>

        <Link
          href="/#home"
          className="font-semibold text-slate-300 transition hover:text-rose-400"
        >
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
