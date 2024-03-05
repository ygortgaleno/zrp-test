import axios, { Axios } from "axios";
import { Pokemon } from "./pokemon-backend.entity";

export class ZrpBackendApi {
    private readonly axios: Axios
    
    constructor() {
        this.axios = axios.create({
            baseURL: 'http://zrp-pokemon-backend.localhost'
        })
    }
    
    findPokemon(name: string): Promise<{data: Pokemon}> {
        return this.axios.get(`/pokemon/${name}`);
    }
}

export const zrpBackendApi = new ZrpBackendApi();