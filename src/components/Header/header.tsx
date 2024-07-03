import { useRef} from "preact/hooks";

interface HeaderProps {
  // Add your component props here
  parentNewBoard: () => void;

}

export default function Header(props: HeaderProps) {
  const fileRef = useRef<HTMLDetailsElement>(null);

  const closeDetails = () => {
    const detailElement = fileRef.current;
    if (detailElement) {
      // remove open attribute from detailElement
      detailElement.removeAttribute("open");
    }
  };
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">MyNotes</a>
          <ul class="menu z-10 menu-horizontal px-1">
            <li>
              <details ref={fileRef}>
                <summary>File</summary>
                <ul class="w-32">
                  <li><a onClick={(event) => {
                    event.preventDefault();
                    props.parentNewBoard()
                    closeDetails();
                    }} >New Board</a></li>
                  <li><a>Save Board</a></li>
                  <li><a>Export Board</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div class="flex-none">
        <input type="checkbox" value="dracula" class="toggle theme-controller"/>
        </div>
      </div>
    </>
  );
}
