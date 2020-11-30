import { BandInputDTO } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";




export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_BANDAS"

    public async createBand (
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ) {
        try {
            await this.getConnection()
                .insert({
                    id, name, music_genre, responsible
                })
                .into(BandDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }



}


