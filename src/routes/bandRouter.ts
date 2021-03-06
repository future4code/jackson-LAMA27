import express from 'express'
import { BandController } from '../controller/BandController'


export const bandRouter = express.Router()

const bandController = new BandController()
bandRouter.post(`/signup`, bandController.signup)
bandRouter.get(`/search`, bandController.getBand)
