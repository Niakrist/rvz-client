import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
