import { useState } from "preact/hooks";

interface SideBarProps {
    parentAddNote: (noteNumber:number) => void;
    parentDelNote: (index:number) => void;
    notes:string[]
}
export default function SideBar(props: SideBarProps) {

    const [noteNumber, setNoteNumber] = useState<number>(0);

  return (
    <>
      <div className="menu w-32 min-h-full rounded-md border ml-2 " >
        <ul >
        <li>
            <a onClick={() => {
                setNoteNumber(noteNumber+1);
                props.parentAddNote(noteNumber);
            }} class="btn mb-2">+</a>
          </li>
        {props.notes.map((note, index) => (
            <li key={index} class="mb-2"><a onClick={() => {
                props.parentDelNote(index);
                setNoteNumber(noteNumber-1);
            }} class="btn">{note}</a></li>
        ))}
        </ul>
      </div>
    </>
  );
}
