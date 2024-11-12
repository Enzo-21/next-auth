import { LuBook } from "react-icons/lu"

export type NavigationSubItem = {
    title: string;
    href: string;
    description: string;
    icon?: React.ReactNode;
    subtitle?: string;
}

export type NavigationItem = {
    name: string;
    href: string;
    description?: string;
    featured?: boolean;
    items?: NavigationSubItem[];
}

export const navigationItems: NavigationItem[] = [
    { 
        name: 'Home', 
        href: '/', 
        featured: true 
    },
    {
        name: 'Rendering',
        href: '#',
        description: 'You can get the user either in the client or server side.',
        items: [
            {
                title: 'Client',
                href: '/client',
                description: 'Authenticate the user in the client side.'
            },
            {
                title: 'Server',
                href: '/server',
                description: 'Authenticate the user in the server side.'
            }
        ]
    },
    {
        name: 'Settings',
        href: '/settings',
    },
    {
        name: 'Docs',
        href: '/docs',
    }
];