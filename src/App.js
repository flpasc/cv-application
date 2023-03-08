import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<Header />
			<Info />
			<Skills />
			<Projects />
			<Education />
		</>
	);
}

export default App;
