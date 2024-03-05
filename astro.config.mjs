import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://labs.missionbeyond.co.uk",
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind(),
    icon(),
  ],
});
