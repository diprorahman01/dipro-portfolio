
import Image from "next/image";

import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* =====================================
          BACKGROUND GRID
      ===================================== */}
      <div className="grid-surface pointer-events-none absolute inset-0 -z-10" />

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -right-36 top-20 -z-10 h-[550px] w-[550px] rounded-full bg-rose-800/15 blur-[100px]" />

      {/* MAIN HERO CONTAINER */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">

        {/* =====================================
            LEFT SIDE: INTRODUCTION
        ===================================== */}
        <div className="motion-rise">

          {/* AVAILABILITY BADGE */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-500/25 bg-rose-500/10 px-4 py-2 text-xs font-bold tracking-wide text-rose-300">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            AVAILABLE TO CONNECT
          </div>

          {/* GREETING */}
          <p className="mb-3 font-mono text-sm tracking-[0.22em] text-rose-400">
            &lt; HELLO WORLD /&gt;
          </p>

          {/* MAIN HEADLINE */}
          <h1 className="max-w-2xl text-5xl leading-[1.08] font-black tracking-tight text-white sm:text-6xl xl:text-7xl">
            Crafting the web,
            <span className="block bg-linear-to-r from-rose-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              one idea at a time.
            </span>
          </h1>

          {/* NAME */}
          <h2 className="mt-7 text-2xl font-bold text-white">
            I&apos;m Dipro{" "}
            <span aria-hidden="true">👋</span>
          </h2>

          {/* DESIGNATION */}
          <p className="mt-1 text-xl font-medium text-slate-300">
            Full-Stack Web Developer
          </p>

          {/* PROFESSIONAL INTRODUCTION */}
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
            I&apos;m MD. Musfizur Rahman, a Computer Science
            and Engineering student at United International
            University. I build responsive, useful web
            experiences and enjoy solving problems through
            clean, thoughtful code.
          </p>

          {/* LOCATION */}
          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <MapPin
              size={16}
              className="text-rose-400"
            />

            Dhaka, Bangladesh
          </p>

          {/* =====================================
              HERO ACTION BUTTONS
          ===================================== */}
          <div className="mt-9 flex flex-wrap gap-3">

            {/* EXPLORE PROJECTS */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-500"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            {/* GET IN TOUCH */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Get in Touch
              <ArrowDownRight size={18} />
            </a>

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download="MD_Musfizur_Rahman_Resume.pdf"
              type="application/pdf"
              aria-label="Download MD Musfizur Rahman's resume as PDF"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-5 py-3 font-semibold text-rose-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-400 hover:bg-rose-500/20 hover:text-white"
            >
              Download Resume

              <Download
                size={18}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* =====================================
              SOCIAL MEDIA LINKS
          ===================================== */}
          <div className="mt-10 flex items-center gap-4">

            <span className="mr-2 text-xs tracking-widest text-slate-500 uppercase">
              Connect
            </span>

            {/* GITHUB */}
            <a
              href="https://github.com/diprorahman01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="text-slate-400 transition-colors hover:text-rose-400"
            >
              <Github size={20} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/diprorahman01/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              className="text-slate-400 transition-colors hover:text-rose-400"
            >
              <Linkedin size={20} />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/dipro.rahman.14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Facebook profile"
              className="text-slate-400 transition-colors hover:text-rose-400"
            >
              <Facebook size={20} />
            </a>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=diprorahman2003%40gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me an email using Gmail"
              className="text-slate-400 transition-colors hover:text-rose-400"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE: PROFESSIONAL PHOTO
        ===================================== */}
        <div className="motion-rise relative mx-auto w-full max-w-[480px]">

          {/* PHOTO GLOW */}
          <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-linear-to-br from-rose-500/20 to-transparent blur-3xl" />

          {/* PHOTO FRAME */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#171c28] shadow-2xl">

            <Image
              src="/images/dipro.png"
              alt="MD. Musfizur Rahman (Dipro), Full-Stack Web Developer"
              width={1088}
              height={1089}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* FLOATING CODE CARD */}
          <div className="absolute -bottom-5 -left-2 rounded-xl border border-white/15 bg-[#181d29] px-5 py-4 shadow-xl sm:-left-8">

            <p className="font-mono text-xs text-rose-400">
              const role =
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              &quot;Full-Stack Developer&quot;;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
