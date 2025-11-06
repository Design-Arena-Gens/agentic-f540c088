import type { FC } from "react";

export type Feature = {
  title: string;
  description: string;
};

export const FeatureCard: FC<{ feature: Feature }> = ({ feature }) => (
  <article className="feature-card">
    <h3>{feature.title}</h3>
    <p>{feature.description}</p>
  </article>
);
