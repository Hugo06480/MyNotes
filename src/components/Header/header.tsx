export default function Header() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">MyNotes</a>
          <ul class="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>File</summary>
                <ul class="w-32">
                  <li><a>New Board</a></li>
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
