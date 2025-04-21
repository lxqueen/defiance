// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://lxqueen.github.io/defiance/",
	experimental: {
		fonts: [
			{
				provider: "local",
				name: "Castithan",
				cssVariable: "--font-castithan",
				variants: [
					{
						weight: "normal",
						style: "normal",
						src: ["./src/assets/fonts/Castithan.woff2"],
					},
				],
			},
			{
				provider: fontProviders.google(),
				name: "Exo",
				cssVariable: "--font-exo",
			},
			{
				provider: "local",
				name: "Irathient",
				cssVariable: "--font-irathient",
				variants: [
					{
						weight: "normal",
						style: "normal",
						src: ["./src/assets/fonts/Irathient.woff2"],
					},
				],
			},
			{
				provider: fontProviders.google(),
				name: "Montserrat",
				cssVariable: "--font-montserrat",
			},
		],
	},
});
