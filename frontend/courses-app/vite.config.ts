import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "coursesApp",
      filename: "remoteEntry.js",
      exposes: {
        "./CoursesList": "./src/CoursesList",
        "./CourseDetailsPage": "./src/CourseDetailsPage",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 8082 },
});
