import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart.html"),
        checkout: resolve(__dirname, "src/checkout.html"),
        product: resolve(__dirname, "src/product_pages/product-details.html"),
      },
    },
  },
});