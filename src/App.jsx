import Students from "./Student";

function App() {
  
  return (
    <>
    <Students name = "John Mwangi"Age ={25} isStudent = {false}/>
    <Students name ="James Ngure" Age = {21} isStudent= {true} />
    <Students name = "Martin Njoroge" Age = {16} isStudent ={true} />
    <Students name = "Joseph Kamau" Age = {38} isStudent = {false} />
    </>
  );
}

export default App
