import { NoteData, Tag } from "../App";
import { NewForm } from "./NewForm";

type newNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function NewNote({ onSubmit, onAddTag, availableTags }: newNoteProps) {
  return (
    <>
      <h1 className="my-4">New note</h1>
      <NewForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
