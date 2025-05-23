import type { PageLoad } from './$types';
import type { Bar } from '$lib/types';

export const load: PageLoad = () => {
	return {
		years: [2024, 2025],
		months: [
			'Janvier',
			'Février',
			'Mars',
			'Avril',
			'Mai',
			'Juin',
			'Juillet',
			'Août',
			'Septembre',
			'Octobre',
			'Novembre',
			'Décembre'
		],
		bars: [
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
		] as Bar[],
		min_year: 2024,
	};
};
