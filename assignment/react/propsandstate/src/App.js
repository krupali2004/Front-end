import Usercards from "./Props/Usercards";
import Counter from "./State/Counter";


function App() {
  return (
    <div>
        <Usercards name="Krupali yadav" age="22" location="ahemdabad"/>
        <Usercards name="Rashmika yadav" age="28" location="ahemdabad"/>

        <hr></hr>

        <Counter />
    </div>
  );
}

export default App;
