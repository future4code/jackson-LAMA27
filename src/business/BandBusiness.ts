import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";



export class BandBusiness {
    async createBand(band: BandInputDTO) {
        try {
            const {token, name, music_genre, responsible} = band
            if (!token) {throw new Error(`Authorization token is required`)}
            const authenticator = new Authenticator()
            const tokenData = authenticator.getData(token)

            if (tokenData.role !== "ADMIN") {throw new Error(`Only administrators can add a band`)}

            if (!name) {throw new Error(`Band name is required`)}
            if (!music_genre) {throw new Error(`Band music genre is required`)}
            if (!responsible) {throw new Error(`Band responsible is required`)}

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const bandDatabase = new BandDatabase()
            await bandDatabase.createBand(id, name, music_genre, responsible)
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

