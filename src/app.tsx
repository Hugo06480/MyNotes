import { useEffect, useState } from "preact/hooks";
import "./app.css";
import Board from "./components/Board/board";
// import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/sidebar";
export default function App() {

  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    
  }, []);

  const addNote = (noteNumber:number) => {
    setNotes([...notes, "Note " +noteNumber]);
    console.log(notes);
  }

  const delNote = (index:number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes); 
  }
  return (
    <div class="flex flex-col min-h-screen">
      <Header></Header>
      <div class="flex items-stretch grow pb-4">
        <div class="">
          <SideBar parentDelNote = {delNote} parentAddNote = {addNote} notes={notes}></SideBar>
        </div>
        <Board notes={notes}/>
      </div>
      
    </div>
  );
}
