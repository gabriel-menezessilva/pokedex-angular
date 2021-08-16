interface Types {
    slot: number;
    type: any;
}

export class Pokemon {
    name: string;
    types: Types[];
    abilities: Object[];
    sprite: string;
    url: string;
}