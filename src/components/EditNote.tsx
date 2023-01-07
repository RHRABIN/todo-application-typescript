import { NoteData, Tag } from "../App";
import { NewForm } from "./NewForm";
import { useNote } from "./NoteLayout";

type editNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditNote({ onSubmit, onAddTag, availableTags }: editNoteProps) {
  const note = useNote();
  return (
    <>
      <h1 className="my-4">Edit note</h1>
      <NewForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
