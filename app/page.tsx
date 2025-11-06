"use client";

import { useEffect, useMemo, useState } from "react";
import { SparklesIcon } from "../components/icons";
import { FeatureCard } from "../components/FeatureCard";
import { Conversation } from "../components/Conversation";

const seedMessages = [
  "Welcome to Agentic Hello!",
  "This playful landing page was generated entirely by an autonomous AI agent.",
  "Explore the sections below to see what's included."
];

export default function Home() {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % seedMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = useMemo(
    () => [
      {
        title: "Autonomous Creation",
        description:
          "Codex was instructed to make every decision independently and deliver a ready-to-deploy site."
      },
      {
        title: "Modern Stack",
        description:
          "Built with Next.js 14, TypeScript, and Vercel-friendly conventions for rapid deployment."
      },
      {
        title: "Friendly UX",
        description:
          "Small interactions and subtle motion keep the page lively even when the content is simple."
      }
    ],
    []
  );

  return (
    <div className="page">
      <section className="hero" id="about">
        <div className="hero__badge">
          <SparklesIcon />
          <span>Agentic Showcase</span>
        </div>
        <h1>
          Hello there<span>.</span>
        </h1>
        <p className="hero__lead">{seedMessages[activeMessageIndex]}</p>
        <div className="hero__cta">
          <a className="button primary" href="#features">
            Discover Features
          </a>
          <a className="button ghost" href="#cta">
            Start a Conversation
          </a>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Highlights</h2>
        <p className="section-lead">
          A lightweight, joyful template highlighting how an agent can respond with working software from
          nothing but a greeting.
        </p>
        <div className="features__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      <section className="conversation" id="cta">
        <h2>Say Hello Back</h2>
        <p className="section-lead">
          Tap into the dynamic conversation simulator to craft your own greeting and watch it respond with
          thoughtful messages.
        </p>
        <Conversation />
      </section>
    </div>
  );
}
