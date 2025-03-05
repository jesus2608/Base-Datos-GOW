export interface Personajes {
    status: string;
    data:   Datum[];
}

export interface Datum {
    id:         string;
    img:        string;
    character:  string;
    voiceActor: string;
    appearsIn:  string;
    "Alias/es": string;
    species?:   string;
    gender:     Gender;
    about:      string;
    quote:      string;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}
