import type { PageLoad } from './$types';
import type { Bar } from '$lib/types';
import { getMaxYear, getMinYear } from '$lib/utils';

export const load: PageLoad = () => {
	const bars : Bar[] = [
		{
			id_sep: 'SEP-001',
			zone_sep: 'pantin',
			espace_sep: 'ile-de-france',
			periode_sep: 'printemps',
			statut_sep: 'programmé',
			date_debut_validite: '2025-03-20',
			date_fin_validite: '2025-06-20',
			nbr_ouvrages: 5,
			actes: [
				{
					id: 'ACT-101',
					statut: 'planifié'
				},
				{
					id: 'ACT-102',
					statut: 'réalisé'
				}
			]
		},
		{
			id_sep: 'SEP-002',
			zone_sep: 'seine-et-marne',
			espace_sep: 'ile-de-france',
			periode_sep: 'noel',
			statut_sep: 'planifié',
			date_debut_validite: '2025-06-21',
			date_fin_validite: '2025-09-22',
			nbr_ouvrages: 3,
			actes: [
				{
					id: 'ACT-201',
					statut: 'programmé'
				},
				{
					id: 'ACT-202',
					statut: 'planifié'
				},
				{
					id: 'ACT-203',
					statut: 'réalisé'
				}
			]
		},
		{
			id_sep: 'SEP-003',
			zone_sep: 'yvelines',
			espace_sep: 'ile-de-france',
			periode_sep: 'automne',
			statut_sep: 'en_exploitation',
			date_debut_validite: '2024-09-23',
			date_fin_validite: '2024-12-21',
			nbr_ouvrages: 7,
			actes: [
				{
					id: 'ACT-301',
					statut: 'programmé'
				},
				{
					id: 'ACT-302',
					statut: 'réalisé'
				}
			]
		},
		{
			id_sep: 'SEP-004',
			zone_sep: 'val-de-marne',
			espace_sep: 'ile-de-france',
			periode_sep: 'decembre',
			statut_sep: 'cloturé',
			date_debut_validite: '2024-12-22',
			date_fin_validite: '2025-03-19',
			nbr_ouvrages: 4,
			actes: [
				{
					id: 'ACT-401',
					statut: 'planifié'
				},
				{
					id: 'ACT-402',
					statut: 'réalisé'
				}
			]
		}
	];

	return {
		months: [
			'Jan',
			'Fév',
			'Mar',
			'Avr',
			'Mai',
			'Juin',
			'Juil',
			'Août',
			'Sep',
			'Oct',
			'Nov',
			'Déc'
		],
		quarters: ['T1', 'T2', 'T3', 'T4'],
		bars,
		min_year: getMinYear(bars),
		max_year: getMaxYear(bars)
	};
};
