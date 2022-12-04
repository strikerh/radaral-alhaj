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
                title: 'تتبع القافلة',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/dashboards/project'
            },
            {
                id   : 'dashboards.analytics',
                title: 'تفاصيل الحملة',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics'
            },
            {
                id   : 'dashboards.finance',
                title: 'المعلومات الشخصية',
                type : 'basic',
                icon : 'heroicons_outline:cash',
                link : '/dashboards/finance'
            },
            {
                id   : 'dashboards.crypto',
                title: 'معلومات عن الحملة',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboards/crypto'
            },

            {
                id   : 'dashboards.cryptoa',
                title: 'للطوائ',
                type : 'basic',
                icon : 'heroicons_outline:currency-dollar',
                link : '/dashboards/crypto'
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
                link : '/apps/academy'
            },
            {
                id   : 'apps.chat',
                title: 'الشروط والأحكام',
                type : 'basic',
                icon : 'heroicons_outline:chat-alt',
                link : '/apps/chat'
            },

        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = defaultNavigation;

export const futuristicNavigation: FuseNavigationItem[] = defaultNavigation;

export const horizontalNavigation: FuseNavigationItem[] = defaultNavigation;

