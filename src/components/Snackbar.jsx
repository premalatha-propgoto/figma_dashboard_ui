import { useEffect } from "react";
import "./Snackbar.css";

function Snackbar({ open, message, onClose, type = "success" }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  return <div className={`snackbar snackbar-${type}`}>{message}</div>;
}

export default Snackbar;
