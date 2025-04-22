export const SITE_NAME = "Lexi's Mods & Miscellany";

interface SocialLink {
	/** Make sure the name value has a matching icon definition in _SocialIcon.astro. */
	name: string;
	value: string;
	url?: string;
}

export const SOCIALS: SocialLink[] = [
	{
		name: "Discord",
		value: "lxqueen",
		url: "https://discordapp.com/channels/@me/188748561343578112/",
	},
	{
		name: "Bluesky",
		value: "lxqueen.bsky.social",
		url: "https://bsky.app/profile/lxqueen.bsky.social",
	},
	{
		name: "Defiance",
		value: "lxqueen",
	},
];

export const FAWKES_DISCORD = "https://discord.gg/fawkes";
export const ARK_ANGELS_DISCORD = "https://discord.gg/dwTwtYH6Hu";

export type ItemTier = 1 | 2 | 3 | 4 | 5 | 6;

export const ItemTierNames: { [K in ItemTier]: string } = {
	1: "Common",
	2: "Uncommon",
	3: "Rare",
	4: "Epic",
	5: "Legendary",
	6: "Supreme",
};
