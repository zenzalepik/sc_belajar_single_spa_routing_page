import { registerApplication, start, unregisterApplication } from "single-spa";
import { constructApplications, constructRoutes, constructLayoutEngine } from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html"; // Mengimpor file layout

// Mengonfigurasi rute berdasarkan layout
const routes = constructRoutes(microfrontendLayout); // Menyusun rute berdasarkan layout yang sudah didefinisikan
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name); // Memuat aplikasi berdasarkan nama
  },
});

// Menyiapkan engine untuk layout
const layoutEngine = constructLayoutEngine({ routes, applications });

// Daftarkan aplikasi untuk setiap aplikasi di routes
applications.forEach(registerApplication);
layoutEngine.activate(); // Aktifkan layout
start(); // Mulai aplikasi Single-SPA
