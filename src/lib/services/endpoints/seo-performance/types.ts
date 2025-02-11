export interface SeoPageRequestParamTypes {
    type: string;
    page: string;
    limit: string;
    searchText: string;
}

export interface SeoPageResponseParamTypes {
    data: {
        metaTitle: string;
        metaDescription: string;
        h1: string;
        openGraph: {
            title: string;
            description: string;
            images: {
                url: string;
                alt: string;
                width: number;
                height: number;
            };
        };
        contactPoint?: {
            telephone: string;
            email: string;
            contactType: string;
            areaServed?: string;
            availableLanguage?: string[];
        } | null;
        structuredData?: Record<string, unknown> | null;
        hotelSchema?: unknown | null;
        breadcrumbs?: {
            position: number;
            name: string;
            item: string;
        }
    }[] | null;
    pagination: {
        totalCount: number;
        totalPages: number;
        currentPage: number;
        limit: number;
    }
}

