import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDeleteNote: (id: string) => void;
};

export function Note({ onDeleteNote }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          <Stack gap={1} direction="horizontal">
            {note.tags.length > 0 &&
              note.tags.map((tag) => (
                <Badge className="flex-wrap" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
          </Stack>
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={2} className="justify-content-end">
            <Link to={`/${note.id}/edit`}>
              <Button type="button" variant="primary">
                Edit
              </Button>
            </Link>

            <Button
              onClick={() => {
                onDeleteNote(note.id);
                navigate("/");
              }}
              type="button"
              variant="outline-danger"
            >
              Delete
            </Button>

            <Link to="..">
              <Button type="button" variant="outline-secondary">
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>

      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
