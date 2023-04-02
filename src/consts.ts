export const SITE = {
	title: 'Dramx',
	description: 'Docx of Dramx Kit Endpoint',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'korean drama' +
			'anime',
	},
	twitter: 'gneiru',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	Filipino: 'fil'
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/gneiru/docs-dramx/tree/master`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Introduction', link: 'en/introduction' },
		],
		'Anime': [
			{ text: 'Search Series', link: 'en/anime/search' },
			{ text: 'Top Airing', link: 'en/anime/top-airing' },
			{ text: 'Series Info', link: 'en/anime/info' },
			{ text: 'Recent Release', link: 'en/anime/recent' },
			{ text: 'Episode Sources', link: 'en/anime/episode' },
		],
	},
	fil: {
		'Getting Started': [
			{ text: 'Introduction', link: '/fil/introduction' },
		],
		'Anime': [
			{ text: 'Search  Series', link: 'fil/anime/search' },
			{ text: 'Top Airing', link: 'fil/anime/top-airing' },
			{ text: 'Series Info', link: 'fil/anime/info' },
			{ text: 'Recent Release', link: 'fil/anime/recent' },
			{ text: 'Episode Sources', link: 'fil/anime/episode' },
		],
	},
};
