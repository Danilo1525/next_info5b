import {noticias} from "./noticias"
export default function handler(req, res) {

    const encontrado = noticias.find(noticia => noticia.idnoticia.toString() === req.query.id)
  res.status(200).json(encontrado)
}