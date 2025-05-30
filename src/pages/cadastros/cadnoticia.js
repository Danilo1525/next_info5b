import { Container, Card, Button, Form, Row, Col } from "react-bootstrap";

export default function Cadnoticia() {
  return (
    <Container>
      <Row >
        <Col md={{span: 8, offset: 2}}>
              <Form>
                <Form.Group className="mb-3" controlId="titulonoticia">
                  <Form.Label>Título Notícia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Informe o Título da Notícia"
                    maxLength={100}
                    style={{ backgroundColor: "#fff9c4" }} 
                  />
                  <Form.Text className="text-muted">
                    Aqui você deve informar o título de sua notícia.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="conteudonoticia">
                  <Form.Label>Conteúdo Notícia</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Digite o conteúdo da notícia..."
                    style={{ backgroundColor: "#fff9c4" }}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="tiponoticia">
                  <Form.Label>Tipo de Notícia</Form.Label>
                  <Form.Select
                    aria-label="Tipo de notícia"
                    style={{ backgroundColor: "#bbdefb" }}
                  >
                    <option value="">Selecione um tipo de Notícia</option>
                    <option value="1">Ciência</option>
                    <option value="2">Educação</option>
                    <option value="3">Pesquisa</option>
                    <option value="4">Esportes</option>
                    <option value="5">Cultura</option>
                    <option value="6">Entreterimento</option>
                  </Form.Select>
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Enviar Notícia
                  </Button>
                </div>
              </Form>
        </Col>
      </Row>
    </Container>
  );
}