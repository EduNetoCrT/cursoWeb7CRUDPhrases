import { Router, Request, Response} from "express";
import * as apiController from '../controllers/api.controller'

const router = Router();

router.post('/frases',apiController.createPhrase)

router.get('/frases',apiController.getAll)

router.get('/frases/:id',apiController.getOne);

router.put('/frases/:id',apiController.updatePhrase)

router.delete('/frases/:id',apiController.deletePhrase)



export default router;