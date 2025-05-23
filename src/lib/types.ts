export type Acte = {
	id: string;
	statut: string;
};

export type Bar = {
	id_sep: string;
	zone_sep: string;
	espace_sep: string;
	periode_sep: string;
	statut_sep: string;
	date_debut_validite: string;
	date_fin_validite: string;
	nbr_ouvrages: number;
	actes: Acte[];
};
