import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        loginApp: "http://localhost:8081/remoteEntry.js",
        coursesApp: "http://localhost:8082/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 8080 },
});
