import { Card, Col, Container, Row } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
import {styles} from '../../styles/'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}
export default function Gsspcard({ repo }) {
    return (<>
        <Container className="text-center">
            <h1>getServerSideProps-2 Example</h1>
            <p>{repo.stargazers_count}</p>
            <p>{repo.name}</p>
            <p>{repo.owner.login}</p>
            <p>{repo.topics[1]}</p>
        </Container>
        <Container>
            <Row xs={1} md={3}>
                {Array.isArray(noticias) ?
                    noticias.map(noticia => (
                        <Col key={noticia.idnoticia}>
                            <Card>
                                <Card.Header className="text-center fw-bold"> {noticia.titulonoticia}</Card.Header>
                                <Card.Body>
                                    <Card.Title className="text-capitalize">{noticia.tiponoticia}</Card.Title>
                                    <Card.Text className={`${styles.textCenter}`}>{noticia.conteudonoticia}</Card.Text>
                                </Card.Body>
                                <Card.Footer>{noticia.datahoracadastro}</Card.Footer>
                            </Card>
                        </Col>
                    ))
                    : "não"}
            </Row>
        </Container>
    </>
    )
}