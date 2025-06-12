import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Maouam Nodelab',
        social: {
            github: 'https://github.com/irhamtaufik3',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Read Me', slug: 'guides/docs' },
                ],
            },
            {
                label: 'Datagram',
                autogenerate: { directory: 'datagram' },
            },
            {
                label: 'Blockcast',
                autogenerate: { directory: 'blockcast' },
            },
            {
                label: 'Aztec',
                autogenerate: { directory: 'aztec' },
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
                label: 'Hemi',
                autogenerate: { directory: 'hemi' },
            },
            
        ],
		}), tailwind()],
});