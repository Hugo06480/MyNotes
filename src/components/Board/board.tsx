import DraggableTextarea from "../DragableTextarea/DragableTextarea";

interface BoardProps {
    notes:string[]
}

const Board = (props:BoardProps) => {
    // Add your component logic here

    return (
        <div class="ml-3 mr-2 grow rounded-md border ">
            {props.notes.map((note, index)=> {
                return <DraggableTextarea key={index}></DraggableTextarea>
            })}
        </div>
    );
};

export default Board;