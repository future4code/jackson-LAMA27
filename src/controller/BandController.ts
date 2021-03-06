import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";



export class BandController {
    async signup(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                token: req.headers.authorization,
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }

            const bandBusiness = new BandBusiness()
            await bandBusiness.createBand(input)

            res.status(200).send({message: `Band inserted successfully`})
        } catch (error) {
            res.status(400).send({ error: error.message })
        }
    }

    async getBand(req: Request, res: Response) {
        try {
            const data = {id: req.body.id, name: req.body.name}
            
            const bandBusiness = new BandBusiness()
            const result = await bandBusiness.getBand(data)

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({error: error.message})
        }
    }
}
