import { Coordinates } from './coordinates';


export class Observation {

    specificWeight?: number;
    email: string;
    phone: string;
    variety: string;
    yield: number;
    humidity: number;
    yieldNotation: number;
    nitrogenQuantityUsed: number;
    nitrogenProductUsed: string;
    comment: string;
    cultivationMethod: string;
    targetPrice: string;
    place: string;
    coordinates: Coordinates;
    id: string;
    createdAt: string;

}
