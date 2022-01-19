export interface Movies {
    total: number;
    entries: Entry[];
}

export interface PosterArt {
    url: string;
    width: number;
    height: number;
}

export interface Images {
     posterArt : PosterArt;
}

export interface Entry {
    title: string;
    description: string;
    programType: string;
    images: Images;
    releaseYear: number;
}


