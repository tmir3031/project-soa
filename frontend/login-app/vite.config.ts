import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "loginApp",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginPage": "./src/LoginPage",
        "./AuthContext": "./src/AuthContext",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 8081 },
});
