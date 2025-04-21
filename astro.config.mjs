// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://lxqueen.github.io/defiance/",
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Exo",
				cssVariable: "--font-exo",
			},
			{
				provider: fontProviders.google(),
				name: "Montserrat",
				cssVariable: "--font-montserrat",
			},
		],
	},
});
