import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id:1, content: "przejsc na react", done: false },
  {id:2, content: "zkesc obiad", done: true },
  {id:3, content: "obrac cartofle", done: true },
  {id:4, content: "pozmywać naczynia", done: false },
];

const hideDones = false;

function App() {
  return (
    <Container>
        <Header 
          title="Lista zadań"
        />

        <Section 
          title="Dodaj nowe zadanie" 
          body={<Form />} 
        />

        <Section 
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDones={hideDones} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDones={hideDones} />}
        />

    </Container>
  );
}

export default App;
