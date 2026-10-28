
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { contact, gmailComposeUrl } from "@/data/contact";

const contactMethods = [
  {
    label: "EMAIL",
    title: contact.email,
    description: "Send me an email",
    href: gmailComposeUrl,
    icon: Mail,
    external: true,
  },
  {
    label: "PHONE",
    title: contact.displayPhone,
    description: "Call me directly",
    href: `tel:${contact.phone}`,
    icon: Phone,
    external: false,
  },
  {
    label: "WHATSAPP",
    title: contact.displayPhone,
    description: "Chat with me on WhatsApp",
    href: contact.whatsapp,
    icon: MessageCircle,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-[#0e111a] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-xs font-bold tracking-[0.25em] text-rose-400">
            {"// CONTACT"}
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Have a project idea, opportunity, or question?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-[#151925] p-7 sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
              <Mail size={26} />
            </div>

            <h3 className="text-2xl font-bold text-white">
              Start a conversation
            </h3>

            <p className="mt-4 max-w-md leading-8 text-slate-400">
              Want to discuss a project, collaboration,
              or opportunity? Feel free to reach out.
              You can email, call, or message me
              directly through WhatsApp.
            </p>

            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-rose-600 px-6 py-3.5 font-semibold text-white transition hover:bg-rose-500"
            >
              <Mail size={19} />
              Send me an Email
              <ArrowUpRight size={18} />
            </a>

            <p className="mt-5 text-sm text-slate-400">
              Gmail will open with{" "}
              <span className="font-medium text-white">
                {contact.email}
              </span>{" "}
              as the recipient.
            </p>
          </div>

          <div className="grid gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={
                    method.external ? "_blank" : undefined
                  }
                  rel={
                    method.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-[#151925] p-5 transition hover:border-rose-500/40 hover:bg-[#1c2230]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold tracking-widest text-slate-500">
                      {method.label}
                    </p>

                    <p className="mt-1 break-words text-sm font-semibold text-white sm:text-base">
                      {method.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {method.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-slate-500 transition group-hover:text-rose-400"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          Open to collaborations and opportunities.
        </p>
      </div>
    </section>
  );
}
