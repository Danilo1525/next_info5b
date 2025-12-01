import { Container, Row } from "react-bootstrap";
import Cards from "../../components/cards";
export async function getServerSideProps(req) {
  // Fetch data from  API notícias
  const res = await fetch('https://noticiasapi-omega.vercel.app/noticias/tiponoticia/' + req.query.tiponoticia)
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { noticias: repo } }
}
export default function Page({ noticias }) {
  return <>
    <Container>
      <Row xs={1} md={3}>
        {Array.isArray(noticias) ?
          noticias.map(noticia => (
            <Cards idnoticia={noticia[0]._id}
              conteudonoticia={noticia[0].conteudonoticia}
              titulonoticia={noticia[0].titulonoticia}
              datahoracadastro={noticia[0].datahoracadastro}
              tiponoticia={noticia[0].tiponoticia} />
          ))
          : "não"}
      </Row>
    </Container>
  </>
}
