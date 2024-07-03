interface SideBarProps {
  parentAddNote: () => void;
  parentDelNote: (index: number) => void;
  notes: string[];
}
export default function SideBar(props: SideBarProps) {
  return (
    <>
      <div className="menu w-32 min-h-full rounded-md border ml-2 ">
        <ul>
          <li>
            <a
              onClick={() => {
                props.parentAddNote();
              }}
              class="btn mb-2"
            >
              +
            </a>
          </li>
          {props.notes.map((note, index) => (
            <li key={index} class="mb-2">
              <a
                onClick={() => {
                  props.parentDelNote(index);
                }}
                class="btn"
              >
                {note}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
