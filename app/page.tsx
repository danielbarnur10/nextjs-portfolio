// app/page.tsx (או הקובץ שנתת)
"use client";

import Link from "next/link";
import Nav from "@/app/components/Nav";
import ProjectCard from "@/app/components/ProjectCard";
import ContactForm from "@/app/components/ContactForm";
import { projects } from "@/app/lib/projects";
import { motion, MotionConfig } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true, margin: "-80px" }, // נחשף טיפה לפני שנכנס
};

export default function Home() {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="scroll-smooth"> {/* גלילה חלקה לעוגנים */}
        <Nav />

        {/* Intro */}
        <motion.section
          id="intro"
          className="mx-auto max-w-6xl px-4 py-20"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-blue-600"
          >
            Daniel Bar-Nur
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold mt-2"
          >
            Welcome to My Landing Page
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 flex gap-3">
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/Daniel-Bar-Nur-CV.pdf"
                className="rounded-md bg-blue-600 text-white px-5 py-2.5 hover:bg-blue-700 inline-block"
              >
                Here&apos;s my CV
              </Link>
            </motion.span>

            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <a
                href="#my-work"
                className="rounded-md border px-5 py-2.5 hover:bg-neutral-50 inline-block"
              >
                More
              </a>
            </motion.span>
          </motion.div>
        </motion.section>

        {/* What I Do */}
        <motion.section
          id="what-i-do"
          className="mx-auto max-w-6xl px-4 py-16 border-t"
          {...sectionReveal}
        >
          <h2 className="text-2xl font-bold">What I Do</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            I’m a FS web developer focusing on the back end.
            BSc in Computer Science. Passionate about what I do.
            Always exploring new tech and growth.
          </p>
          <div className="mt-4">
            <a href="#who-i-am" className="text-blue-600 hover:underline">
              Next →
            </a>
          </div>
        </motion.section>

        {/* Who I Am */}
        <motion.section
          id="who-i-am"
          className="mx-auto max-w-6xl px-4 py-16 border-t"
          {...sectionReveal}
        >
          <h2 className="text-2xl font-bold">Who I Am</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            I bring passion and dedication to everything I do —
            from meaningful social interactions to producing high-quality results.
          </p>
          <div className="mt-4">
            <a href="#my-work" className="text-blue-600 hover:underline">
              Next →
            </a>
          </div>
        </motion.section>

        {/* My Work */}
        <motion.section
          id="my-work"
          className="mx-auto max-w-6xl px-4 py-16 border-t"
          {...sectionReveal}
        >
          <h2 className="text-2xl font-bold">My Work</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            The best way to show my worth is through projects I built during studies and free time.
          </p>

          {/* Stagger על גריד הכרטיסים */}
          <motion.div
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="mx-auto max-w-6xl px-4 py-16 border-t"
          {...sectionReveal}
        >
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {[
              "CSS","HTML5","JavaScript","NodeJS","React","Python","Jenkins",
              "Linux","Docker","Git","AWS","TypeScript","C#",".NET",
            ].map((s) => (
              <motion.li
                key={s}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border px-3 py-1"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-16 border-t"
          {...sectionReveal}
        >
          <h2 className="text-2xl font-bold">Say Hello.</h2>
          <p className="mt-2 text-neutral-700">
            If you&apos;d like to get in touch, send me a message:
          </p>

          <div className="mt-6 grid md:grid-cols-1 gap-8">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <ContactForm />
            </motion.div>

            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="space-y-3">
                <a href="https://www.linkedin.com" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">LinkedIn</a><br/>
                <a href="https://github.com/danielbarnur10" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">GitHub</a>
                <p className="text-sm text-neutral-500 mt-4">
                  You can also email me directly via the form (danielbarnur10@gmail.com).
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} Daniel Bar-Nur
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}