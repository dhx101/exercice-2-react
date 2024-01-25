import "./App.css";
import Review from "./Componentes/Review/Review";
import { data } from "./bd/bd";

function App() {
	return <Review data={data.reviews}></Review>;
}

export default App;
