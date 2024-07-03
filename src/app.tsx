import { useEffect, useState } from "preact/hooks";
import "./app.css";
import Board from "./components/Board/board";
// import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/sidebar";
import {PrimeReactProvider} from 'primereact/api';
export default function App() {

  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    
  }, []);

  const addNote = () => {
    setNotes([...notes, "Note " +notes.length]);
    console.log(notes);
  }

  const delNote = (index:number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes); 
  }

  const newBoard= () => {
    setNotes([]);
  }
  return (
  <PrimeReactProvider>
      <div class="flex flex-col min-h-screen">
        <Header parentNewBoard = {newBoard} ></Header>
        <div class="flex items-stretch grow pb-4">
          <div class="">
            <SideBar parentDelNote = {delNote} parentAddNote = {addNote} notes={notes}></SideBar>
          </div>
          <Board notes={notes}/>
        </div>
        
      </div>
    </PrimeReactProvider>
  );
}
