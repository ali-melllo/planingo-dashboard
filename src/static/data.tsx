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
        type: 'text',
        name: "Margin Management",
        key: "margin-management",
        path: "/margin-management",
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
    { link: "/home", title: "Top 2025 Hotels", metaDescription: "Best hotels for 2025.", h1: "Luxury Hotels for Your Next Trip" },
    { link: "/destinations/paris", title: "Visit Paris", metaDescription: "Explore top places in Paris.", h1: "Unveiling Paris: The Ultimate Guide" },
    { link: "/travel-tips", title: "Essential Travel Tips", metaDescription: "Smart tips for travelers.", h1: "Your Guide to Smart Traveling" },
    { link: "/flights/cheap-deals", title: "Cheap Flight Deals", metaDescription: "Find the best flight discounts.", h1: "How to Score Cheap Flights" },
    { link: "/adventure-travel", title: "Top Adventure Spots", metaDescription: "Best places for adventure.", h1: "Where to Go for Your Next Adventure" },
    { link: "/beach-destinations", title: "Best Beaches 2025", metaDescription: "Relax at the top beaches.", h1: "Dream Beach Destinations" },
    { link: "/city-guides/tokyo", title: "Tokyo Travel Guide", metaDescription: "Must-visit places in Tokyo.", h1: "Exploring Tokyo in 2025" },
    { link: "/food/best-restaurants", title: "Best Restaurants", metaDescription: "Top places to eat.", h1: "Must-Try Restaurants" },
    { link: "/road-trips", title: "Epic Road Trips", metaDescription: "Best road trips for 2025.", h1: "Unforgettable Road Trips" },
    { link: "/budget-travel", title: "Travel on a Budget", metaDescription: "Save money while traveling.", h1: "How to Travel for Less" },
    { link: "/luxury-travel", title: "Luxury Travel", metaDescription: "Top luxury destinations.", h1: "Exclusive Luxury Getaways" },
    { link: "/historical-sites", title: "Famous Historical Sites", metaDescription: "Explore iconic places.", h1: "Top Historical Sites" },
    { link: "/nature-travel", title: "Best Nature Destinations", metaDescription: "Nature lovers' paradise.", h1: "Explore the Wild" },
    { link: "/family-vacations", title: "Top Family Vacations", metaDescription: "Best places for families.", h1: "Family-Friendly Destinations" },
    { link: "/solo-travel", title: "Solo Travel Guide", metaDescription: "Best places for solo trips.", h1: "Traveling Alone with Confidence" },
    { link: "/winter-travel", title: "Winter Getaways", metaDescription: "Top destinations for winter.", h1: "Magical Winter Escapes" },
    { link: "/cultural-travel", title: "Cultural Experiences", metaDescription: "Discover unique cultures.", h1: "Immersive Cultural Journeys" },
    { link: "/island-travel", title: "Best Islands to Visit", metaDescription: "Tropical paradise spots.", h1: "Top Island Getaways" },
    { link: "/wildlife-safaris", title: "Wildlife Safaris", metaDescription: "Experience nature up close.", h1: "Best Safari Destinations" },
    { link: "/romantic-getaways", title: "Romantic Escapes", metaDescription: "Perfect trips for couples.", h1: "Most Romantic Destinations" },
];
