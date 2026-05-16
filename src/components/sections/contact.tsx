"use client";

import { motion, useInView } from "framer-motion";
import { Link2, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import { siteConfig } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding pb-24">
      <motion.div
        ref={ref}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to full-time opportunities, freelance projects, and collaborations."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-5"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-6 space-y-4">
              <motion.li
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-muted"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Link2 className="h-4 w-4" />
                </span>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all hover:text-accent transition-colors"
                >
                  linkedin.com/in/sumit-beniwal-7b25462b0
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-muted"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                {siteConfig.location}
              </motion.li>
            </ul>

            <div className="mt-8 rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4">
              <p className="text-sm font-medium text-accent">
                {siteConfig.availability}
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 lg:col-span-3"
          >
            <motion.div
              className="grid gap-5 sm:grid-cols-2"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
              ].map((field) => (
                <motion.div key={field.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project or role..."
                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-shadow hover:shadow-accent/40 sm:w-auto"
            >
              {sent ? "Message sent!" : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
