import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        reverseOrder={true} // New toasts are added to the bottom of the existing toast list.
        toastOptions={{
          // Default toast style
          style: {
            border: "1px solid #e5e7eb",
            padding: "12px 16px",
            color: "#111827",
            fontSize: "14px",
            fontWeight: "500",
            borderRadius: "8px",
            background: "#ffffff",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          },
          // Success toast
          success: {
            style: {
              border: "1px solid #22c55e",
              color: "#166534",
              background: "#ecfdf5",
            },
          },
          // Error toast
          error: {
            style: {
              border: "1px solid #ef4444",
              color: "#7f1d1d",
              background: "#fef2f2",
            },
          },
        }}
      />
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
