import { CreditCard, LayoutDashboard } from "lucide-react";
import { ChartIcon, FileIcon, PanelIcon } from "./icons";

export const SIDEBAR_LIST = [
    {
        type: 'text',
        name: "Overview",
        key: "overview",
        path: "/overview",
        icon: (color: string) => <LayoutDashboard color={color || "#4A5565"} />,
    },
    {
        type: 'multi',
        name: "Seo Performance",
        key: "seo-performance",
        icon: (color: string) => <ChartIcon color={color || "#4A5565"}  />,
        items: [
            {
                name: "Overview",
                key: "overview",
                path: "/seo-performance/overview",
            },
            {
                name: "Meta Tags",
                key: "metatags",
                path: "/seo-performance/metatags",
            }
        ],
    },
    {
        type: 'multi',
        name: "Content",
        key: "content",
        icon: (color: string) => <FileIcon color={color || "#4A5565"}  />,
        items: [],
    },
    {
        type: 'multi',
        name: "Partner Services Setting",
        key: "partner-services-setting",
        items: [
            {
                name: "Hotel",
                key: "hotel",
                path: "/partner-services-setting/hotel",
            },
            {
                name: "Activity",
                key: "activity",
                path: "/partner-services-setting/activity",
            }
        ],
        icon: (color: string) => <CreditCard color={color || "#4A5565"}  />,
    },
    {
        type: 'multi',
        name: "Panel Data",
        key: "panel-data",
        icon: (color: string) => <PanelIcon color={color || "#4A5565"}  />,
        items: [],
    },
]

export const DATA_TABLE_MOCK = [
    { title: "Margin", area: "All", value: "15%" }, 
    { title: "Margin", area: "All", value: "15%" }, 
    { title: "Margin", area: "All", value: "15%" }, 
    { title: "Margin", area: "All", value: "15%" }, 
];
