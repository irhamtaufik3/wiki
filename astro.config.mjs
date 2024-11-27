import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Maouam Node Lab',
			social: {
				github: 'https://blog.irhamnet.my.id',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Read Me', slug: 'guides/example' },
					],
				},
				{
					label: 'Pipe Network',
					autogenerate: { directory: 'pipe-network' },
				},
				{
					label: 'Glacier Node',
					autogenerate: { directory: 'glacier' },
				},
				{
					label: 'Multiple Network',
					autogenerate: { directory: 'multiple-network' },
				},
				
			],
		}),
	],
});
