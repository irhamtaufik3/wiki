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
					label: 'Cess',
					autogenerate: { directory: 'cess' },
				},
				{
					label: 'Union',
					autogenerate: { directory: 'union' },
				},
				{
					label: 'Kiichain',
					autogenerate: { directory: 'kiichain' },
				},
				{
					label: 'Privasea',
					autogenerate: { directory: 'privasea' },
				},
				{
					label: 'Open Ledger',
					autogenerate: { directory: 'open-ledger' },
				},
				{
					label: 'Dria',
					autogenerate: { directory: 'dria' },
				},
				{
					label: 'Cyberfly',
					autogenerate: { directory: 'cyberfly' },
				},
				{
					label: 'Nexus',
					autogenerate: { directory: 'nexus' },
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
				{
					label: 'Cysic',
					autogenerate: { directory: 'cysic' },
				},
				{
					label: 'T3RN',
					autogenerate: { directory: 't3rn' },
				},
				{
					label: 'hemi',
					autogenerate: { directory: 'hemi' },
				},
				
			],
		}),
	],
});
