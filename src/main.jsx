import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
