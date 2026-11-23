/**
 * Commity w formacie Conventional Commits (ADR-0086): z nich Release Please liczy wersję i pisze historię zmian.
 * Te same zasady co w `@monorise-team/config/commitlint` (MonoriseShared). Strona nie korzysta z prywatnych paczek
 * `@monorise-team/*`, bo Vercel instaluje zależności bez tokenu GitHub Packages, więc zasady są tu powtórzone.
 * Przy zmianie zasad popraw oba miejsca.
 */
export const TYPES = [
  "feat",
  "fix",
  "refactor",
  "perf",
  "chore",
  "docs",
  "test",
  "security",
  "spike",
  "ci",
  "build",
  "i18n",
  "revert",
];

const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", TYPES],
    "subject-case": [2, "never", ["upper-case", "pascal-case", "start-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 100],
  },
};

export default config;
