import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co/",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      config: {
        inlineFragmentTypes: "combine",
        onlyOperationTypes: true,
        useTypeImports: true,
      },
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
  },
};
export default config;
