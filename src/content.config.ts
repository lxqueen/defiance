import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import type { ItemTier } from "./consts";

// Game data
const gameWeaponTypes = defineCollection({
	loader: file("src/content/game/weapon-types.json"),
	schema: z.object({
		name: z.string(),
		shortname: z.string(),
	}),
});

const gameWeaponSupertypes = defineCollection({
	loader: file("src/content/game/weapon-supertypes.json"),
	schema: z.object({
		name: z.string(),
		shortname: z.string(),
	}),
});

const gameModTypes = defineCollection({
	loader: file("src/content/game/mod-types.json"),
	schema: z.object({
		name: z.string(),
	}),
});

const gameSynergies = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/game/synergies",
		generateId: ({ entry }) => entry,
	}),
	schema: z.object({
		name: z.string(),
	}),
});

const gameMods = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/game/mods",
		generateId: ({ entry }) => entry,
	}),
	schema: z.object({
		name: z.string(),
		type: reference("gameModTypes"),
		weaponSupertype: reference("gameWeaponSupertypes"),
	}),
});

const gameWeapons = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/game/weapons",
		generateId: ({ entry }) => entry,
	}),
	schema: z.object({
		name: z.string(),
		type: reference("gameWeaponTypes"),
	}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
	gameMods,
	gameModTypes,
	gameSynergies,
	gameWeapons,
	gameWeaponSupertypes,
	gameWeaponTypes,
};
