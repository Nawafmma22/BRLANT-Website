"use client";

import { FormEvent } from "react";
import Container from "@/components/ui/Container";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contact" className={styles.section}>
      <Container>
        <div className={styles.topLine} data-reveal="soft">
          <span>START A PROJECT</span>
          <span>09</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.intro} data-reveal>
            <p className={styles.eyebrow}>TELL US WHAT YOU&apos;RE BUILDING</p>

            <h2 className={styles.title}>
              LET&apos;S MAKE
              <span>IT HAPPEN.</span>
            </h2>

            <p className={styles.description}>
              Share the essentials and our team will get back to you to
              understand the project, scope and next steps.
            </p>

            <div className={styles.contactDetails}>
              <div>
                <span>BASED IN</span>
                <p>Riyadh, Saudi Arabia</p>
              </div>

              <div>
                <span>PROJECT TYPES</span>
                <p>Events · Exhibitions · Conferences · Experiences</p>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-reveal="soft"
            data-reveal-delay="1"
          >
            <div className={styles.row}>
              <label className={styles.field}>
                <span>YOUR NAME *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>COMPANY</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  autoComplete="organization"
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>EMAIL *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>PHONE *</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+966"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>PROJECT TYPE *</span>

                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="event-management">Event Management</option>
                  <option value="exhibitions-conferences">
                    Exhibitions & Conferences
                  </option>
                  <option value="creative-production">
                    Creative & Production
                  </option>
                  <option value="operations-logistics">
                    Operations & Logistics
                  </option>
                  <option value="staffing">Staffing & Crowd Management</option>
                  <option value="vip-guest">
                    VIP & Guest Experience
                  </option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className={styles.field}>
                <span>EVENT DATE</span>
                <input type="date" name="eventDate" />
              </label>
            </div>

            <label className={styles.field}>
              <span>PROJECT DETAILS *</span>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about the event, location, expected audience, scope and anything else we should know."
                required
              />
            </label>

            <div className={styles.formBottom}>
              <p>
                By submitting, you&apos;re sharing your project details with
                BRLANT for the purpose of discussing your enquiry.
              </p>

              <button type="submit" className={styles.submit}>
                SEND PROJECT BRIEF
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}