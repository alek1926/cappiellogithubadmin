export type TypeClass = {
    codice: string;
    titoloCorso: string;
}

export type TypeStudente = {
    name: string;
    surname: string;
    login: string;
    classe: string;
    repos?: string[];

}
