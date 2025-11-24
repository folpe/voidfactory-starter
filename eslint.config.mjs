import { defineConfig } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import eslintConfigPrettier from "eslint-config-prettier"
import importPlugin from "eslint-plugin-import"
import fs from "node:fs"
import path from "node:path"

const eslintIgnore = [
  ".git/**",
  ".next/**",
  "node_modules/**",
  "dist/**",
  "build/**",
  "coverage/**",
  "*.min.js",
  "*.config.js",
  "*.d.ts",
]

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]

  return fs
    .readdirSync(process.cwd())
    .filter((file) => fs.statSync(path.join(process.cwd(), file)).isDirectory())
    .filter((dir) => !ignoredSortingDirectories.includes(dir))
}

export default defineConfig([
  {
    ignores: eslintIgnore,
  },
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl", "cn", "cva"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: true,
      },
    },
    rules: {
      // TS
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Imports
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        "warn",
        {
          groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
          pathGroups: [
            ...getDirectoriesToSort().map((singleDir) => ({
              pattern: `${singleDir}/**`,
              group: "internal",
            })),
            {
              pattern: "env",
              group: "internal",
            },
            {
              pattern: "theme",
              group: "internal",
            },
            {
              pattern: "public/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["internal"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "never",
        },
      ],
    },
  },

  // Ignorés officiels de eslint-config-next, via globalIgnores (doc Next)
  eslintConfigPrettier,
])
