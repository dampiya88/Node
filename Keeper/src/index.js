import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// Get the root element from the DOM
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root using ReactDOM.createRoot
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component within the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found!');
}

