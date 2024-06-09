import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

const site = process.env.DEPLOYMENT_SITE;
const base = process.env.DEPLOYMENT_BASE;

// https://astro.build/config
export default defineConfig({
  site: "https://labs.missionbeyond.co.uk",
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind(),
    icon(),
    sanity({
      projectId: "9co1et8a",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-03-01",
      studioBasePath: "/admin",
    }),
  ],
});
