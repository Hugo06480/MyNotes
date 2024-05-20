import { useState, useRef } from "react";

function DraggableTextarea() {
  const [dragging, setDragging] = useState(false);
  const [focusing, setFocusing] = useState(false);
  const [{ dx, dy }, setPosition] = useState({ dx: 0, dy: 0 });
  const eleRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    const startPos = {
      x: e.clientX - dx,
      y: e.clientY - dy,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const ele = eleRef.current;
      if (!ele) {
        return;
      }

      // Calculate the new position of the element
      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;

      // Get the parent dimensions
      const parent = ele.parentElement;
      const parentWidth = parent ? parent.offsetWidth : 0;
      const parentHeight = parent ? parent.offsetHeight : 0;

      // Restrict the movement within the parent's dimensions
      const restrictedX = Math.max(0, Math.min(newX, parentWidth - ele.offsetWidth));
      const restrictedY = Math.max(0, Math.min(newY, parentHeight - ele.offsetHeight));

      // Set the position of the element
      setPosition({ dx: restrictedX, dy: restrictedY });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleResize = () => {
    console.log("resizing");
    // const target = e.target as HTMLElement;
    // target.classList.add // Prevent event bubbling to the parent textarea
  };

  //   const handleInput = () => {
  //     if (textareaRef.current) {
  //       textareaRef.current.rows = textareaRef.current.value.split("\n").length;
  //     }
  //   };

  return (
    <div
      className="indicator"
      style={{ top: dy, left: dx }}
      ref={eleRef}
      onFocus={() => setFocusing(true)}
      onBlur={() => setFocusing(false)}
    >
      <span
        className={"indicator-item badge badge-primary cursor-move"}
        onMouseDown={handleMouseDown}
      ></span>
      <textarea
        className={"textarea textarea-bordered resize absolute"}
        onResize={handleResize}
      />
    </div>
  );
}

export default DraggableTextarea;
