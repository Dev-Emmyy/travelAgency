import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Convert ES module paths to CommonJS-like paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with older configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export ESLint configuration
export default [
  ...compat.extends("next/core-web-vitals"), 
{
    rules: {
      "no-unused-vars": "warn", 
      "react-hooks/rules-of-hooks": "error",
    },
  },
];