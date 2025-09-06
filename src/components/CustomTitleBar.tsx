import { getCurrentWindow as currentWindow } from "@tauri-apps/api/window";
import { useEffect, useState } from "react";
import styles from "./CustomTitleBar.module.css";

export default function CustomTitleBar() {
  const [appWindow, setAppWindow] = useState<any>(null);

  useEffect(() => {
    // Verificamos si estamos en Tauri
    if ((window as any).__TAURI_INTERNALS__) {
      setAppWindow(currentWindow());
    }
  }, []);

  // Si no estamos en Tauri, mostramos la barra sin funcionalidad
  const isTauri = !!(window as any).__TAURI_INTERNALS__;

  return (
    <div data-tauri-drag-region className={styles.titleBar} style={{ WebkitAppRegion: "drag" } as React.CSSProperties}>
      <button
        className={`${styles.button} ${styles.minimize}`}
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        onClick={() => isTauri && appWindow?.minimize()}
        disabled={!isTauri}
      >
        ─
      </button>
      <button
        className={`${styles.button} ${styles.maximize}`}
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        onClick={() => isTauri && appWindow?.toggleMaximize()}
        disabled={!isTauri}
      >
        ◻
      </button>
      <button
        className={`${styles.button} ${styles.close}`}
        style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        onClick={() => isTauri && appWindow?.close()}
        disabled={!isTauri}
      >
        ✕
      </button>
    </div>
  );
}


// hay que activar permisos de tauri para que funcione en el archivo default.json en capabilities
//  "core:default",
//"opener:default",
//"core:window:default",
//"core:window:allow-minimize",
//"core:window:allow-toggle-maximize",
//"core:window:allow-close",
//"core:window:allow-start-dragging"