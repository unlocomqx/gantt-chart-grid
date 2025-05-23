import type { Bar } from '$lib/types';

const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

function getDaysBetweenDates(date1: string, date2: string) {
	const startDate = new Date(date1);
	const endDate = new Date(date2);
	const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

export function getMonthSize(year: number, month: number, min_year: number) {
	return {
		start: getDaysBetweenDates(min_year + '-01-01', year + '-' + month + '-02'),
		span: daysInMonth(year, month)
	};
}

export function getQuarterSize(year: number, quarter: number, min_year: number) {
	return {
		start: getDaysBetweenDates(min_year + '-01-01', year + '-' + (((quarter - 1) * 3) + 1) + '-02'),
		span:
			daysInMonth(year, quarter * 3) +
			daysInMonth(year, (quarter - 1) * 3 + 1) +
			daysInMonth(year, quarter * 3 + 2)
	};
}

export function getBarSize(bar: Bar, min_year: number) {
	return {
		start: getDaysBetweenDates(min_year + '-01-01', bar.date_debut_validite),
		span: getDaysBetweenDates(bar.date_debut_validite, bar.date_fin_validite)
	};
}

export function getMinYear(bars: Bar[]){
	return Math.min(...bars.map(bar => new Date(bar.date_debut_validite).getFullYear()));
}

export function getMaxYear(bars: Bar[]){
	return Math.max(...bars.map(bar => new Date(bar.date_fin_validite).getFullYear()));
}
