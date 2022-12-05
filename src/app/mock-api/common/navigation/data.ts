/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'القائمة الرئيسية',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.project',
                title: 'تتبع القوافل',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/quafel'
            },
            {
                id   : 'dashboards.finance',
                title: 'المعلومات الشخصية',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/profile'
            },
            {
                id   : 'dashboards.crypto',
                title: 'معلومات عن الحملة',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/about-hamla'
            },

            {
                id   : 'dashboards.cryptoa',
                title: 'تواصل للطوائ',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/sos'
            }
        ]
    },
    {
        id      : 'apps',
        title   : 'معلومات اضافية',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'apps.academy',
                title: 'من نحن؟',
                type : 'basic',
                icon : 'heroicons_outline:academic-cap',
                link : '/about-us'
            },
            {
                id   : 'apps.chat',
                title: 'الشروط والأحكام',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : '/policy'
            },

        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;

export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;

export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;

