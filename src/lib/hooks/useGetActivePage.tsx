import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

type NaveItem = {
	name: string;
	key: string;
};

export type NaveItemsType = readonly NaveItem[];

export function useGetActivePage(navItems: NaveItemsType, pathRange: number) {
	const pathname = usePathname();
	const activePage = useMemo(() => pathname.split('/')[pathRange], [pathRange, pathname]);

	const pageDetail = useMemo(() => {
		const page = navItems.find(item => item.key === activePage)!;
		return page;
	}, [activePage, navItems]);

	return {
		activePage,
		pageDetail,
	};
}
