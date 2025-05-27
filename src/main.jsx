import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
