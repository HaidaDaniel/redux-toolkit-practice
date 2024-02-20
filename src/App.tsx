import "./App.css"
import {RouterProvider} from "react-router-dom"
import {router} from "./router/Router"

function App() {
	return (
		<div className="App">
			<RouterProvider
				router={router}
				fallbackElement={<p>Loading...</p>}
			/>
		</div>
	)
}

export default App
