export type Lang = 'en' | 'es';

export const ui = {
	en: {
		nav: { about: 'About', projects: 'Projects', journal: 'Journal', archive: '2026' },
		languageLabel: 'Cambiar a español',
		footerLine: 'The connection between everything here is me.',
		footerNote: 'A living archive, made by hand in La Paz and elsewhere.',
		back: 'Back',
		read: 'Read trace',
		view: 'Open project',
	},
	es: {
		nav: { about: 'Sobre mí', projects: 'Proyectos', journal: 'Journal', archive: '2026' },
		languageLabel: 'Switch to English',
		footerLine: 'La conexión entre todo lo que hay aquí soy yo.',
		footerNote: 'Un archivo vivo, hecho a mano en La Paz y en otros lugares.',
		back: 'Volver',
		read: 'Leer rastro',
		view: 'Abrir proyecto',
	},
} as const;

export function prefixFor(lang: Lang) {
	return lang === 'es' ? '/es' : '';
}

export function formatDate(date: Date, lang: Lang) {
	return new Intl.DateTimeFormat(lang === 'es' ? 'es-BO' : 'en-US', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(date);
}

export const journalType = {
	en: {
		thought: 'thought', movie: 'movie', book: 'book', cooking: 'cooking', tech: 'tech', life: 'life',
	},
	es: {
		thought: 'idea', movie: 'película', book: 'libro', cooking: 'cocina', tech: 'tech', life: 'vida',
	},
} as const;
