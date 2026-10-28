
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

import { contact, gmailComposeUrl } from "@/data/contact";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const contactOptions = [
  {
    title: "Send me an Email",
    description: contact.email,
    href: gmailComposeUrl,
    icon: Mail,
    colors: "bg-rose-500/10 text-rose-400",
  },
  {
    title: "Chat on WhatsApp",
    description: contact.displayPhone,
    href: contact.whatsapp,
    icon: MessageCircle,
    colors: "bg-green-500/10 text-green-400",
  },
  {
    title: "Connect on LinkedIn",
    description: "For professional opportunities",
    href: contact.linkedin,
    icon: Linkedin,
    colors: "bg-blue-500/10 text-blue-400",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const desktopButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const getHref = (href: string) =>
    pathname === "/" ? href : `/${href}`;

  const openContact = (trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setMenuOpen(false);
    setContactOpen(true);
  };

  const closeContact = () => {
    setContactOpen(false);

    requestAnimationFrame(() => {
      const trigger = lastTriggerRef.current;

      if (
        trigger &&
        trigger.isConnected &&
        trigger.getClientRects().length > 0
      ) {
        trigger.focus();
      } else {
        desktopButtonRef.current?.focus();
      }
    });
  };

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setContactOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        )
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [contactOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090b10]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] w-full max-w-[1160px] items-center justify-between gap-6 px-5 sm:px-7">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0 text-xl font-black tracking-tight text-white"
          >
            DIPRO
            <span className="text-rose-500">.DEV_</span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={getHref(link.href)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-rose-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            ref={desktopButtonRef}
            type="button"
            onClick={(event) =>
              openContact(event.currentTarget)
            }
            className="hidden shrink-0 items-center gap-2 rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:border-rose-400 hover:bg-rose-500/20 md:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-white/10 bg-[#10141e] px-6 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-[1160px] flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={getHref(link.href)}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-rose-400"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={(event) =>
                  openContact(event.currentTarget)
                }
                className="mt-3 flex items-center justify-between rounded-lg bg-rose-600 px-4 py-3 text-sm font-semibold text-white"
              >
                Let&apos;s Talk
                <ArrowUpRight size={17} />
              </button>
            </div>
          </nav>
        )}
      </header>

      {contactOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeContact();
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            aria-describedby="contact-dialog-description"
            className="my-auto max-h-[calc(100dvh-32px)] w-full max-w-[510px] overflow-y-auto rounded-2xl border border-white/10 bg-[#111722] p-6 shadow-2xl shadow-black/70 sm:p-8"
          >
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-rose-400">
                  LET&apos;S CONNECT
                </span>

                <h2
                  id="contact-dialog-title"
                  className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-[28px]"
                >
                  Have something in mind?
                </h2>

                <p
                  id="contact-dialog-description"
                  className="mt-2 text-sm text-slate-400"
                >
                  Choose how you&apos;d like to reach me.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeContact}
                aria-label="Close contact dialog"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-rose-500/20 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {contactOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <a
                    key={option.title}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeContact}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#1a2230] p-4 transition hover:-translate-y-0.5 hover:border-rose-500/50 hover:bg-[#222b3a]"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${option.colors}`}
                    >
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <strong className="block text-sm font-bold text-white">
                        {option.title}
                      </strong>

                      <span className="mt-1 block break-words text-xs text-slate-400">
                        {option.description}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="shrink-0 text-rose-400"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-center text-xs text-slate-400">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" />
              Open to collaborations and opportunities
            </div>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-rose-400"
            >
              <Github size={16} />
              Explore my GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
