import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import type { ItemTier } from "./consts";

// Consts
const tier = z
	.number()
	.min(1)
	.max(6)
	.default(1)
	.transform((num) => num as ItemTier);

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
		stats: z.record(z.string(), z.record(z.string(), z.string())).optional(),
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
		stats: z.record(z.string(), z.record(z.string(), z.string())).optional(),
	}),
});

// Our inventory
const items = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/items" }),
	schema: z.object({
		name: z.string().optional(),
		type: z.enum(["mod", "weapon"]).transform((name) => {
			switch (name) {
				case "mod":
					return "gameMods";
				case "weapon":
					return "gameWeapons";
			}
		}),
		parent: z.union([reference("gameMods"), reference("gameWeapons")]),
		synergy: reference("gameSynergies").optional(),
		tier,
		price: z.number().optional(),
		salePrice: z.number().optional(),
		date: z.coerce.date(),
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
	items,
};
