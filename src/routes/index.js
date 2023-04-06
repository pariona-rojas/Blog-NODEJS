import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index',{title:'Norma Tecnica  de Salud - OREI'}))

router.get('/especialidades', (req, res) => res.render('especialidades',{title:'NTS - Especialidades - OREI'}))

router.get('/administracion', (req, res) => res.render('administracion',{title:'NTS - Administracion - OREI'}))


export default router