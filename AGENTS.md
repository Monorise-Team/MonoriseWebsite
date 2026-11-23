# AGENTS.md

Zasady dla agentów AI i osób pracujących w tym repozytorium.

## Czym jest to repozytorium

Strona wizytówka [monorise.studio](https://monorise.studio): po polsku pod `/`, po angielsku pod `/en`. Next.js (App Router) z eksportem statycznym (`output: "export"`), React, TypeScript i Tailwind CSS v4. Hosting: Vercel (plan Hobby), a w razie potrzeby GitHub Pages. Decyzja i ryzyka: ADR-0085 w repozytorium MonoriseDocumentation.

## Polecenia

| Polecenie      | Co robi                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| `pnpm install` | instaluje zależności (nowe wersje paczek dopiero 3 dni po publikacji: `minimumReleaseAge`) |
| `pnpm dev`     | serwer deweloperski na http://localhost:3000                                               |
| `pnpm check`   | formatowanie, lint, typy i build; musi przejść przed każdym pull requestem                 |
| `pnpm format`  | formatuje pliki Prettierem                                                                 |

`pnpm install` instaluje też hooki Gita (husky): przed commitem lint, formatowanie i typy, przy commicie sprawdzenie wiadomości.

## Gdzie co jest

- `src/app/(pl)` i `src/app/(en)`: dwa układy główne, każdy z własnym `<html lang>`.
- `src/app/global-not-found.tsx`: wspólna strona 404.
- `src/app/og/pl.png` i `src/app/og/en.png`: obrazy do udostępniania linku, generowane przy buildzie.
- `src/content/pl.ts` i `src/content/en.ts`: wszystkie teksty strony; ich kształt opisuje typ `Dictionary` w `src/content/types.ts`.
- `src/components`: sekcje strony. Wszystkie są komponentami serwerowymi poza `reveal-observer.tsx`.
- `src/lib`: adres strony i dane kontaktowe (`site.ts`), metadane, wspólne klasy przycisków i nagłówków.
- `src/app/globals.css`: kolory, czcionki i animacje (`@theme`).

## Zasady

1. Strona zostaje statyczna. Bez API, middleware, ISR, ciasteczek, optymalizacji `next/image` i innych funkcji wymagających serwera.
2. Bez analityki, ciasteczek, zewnętrznych czcionek i skryptów z innych domen. Stopka obiecuje to odwiedzającym.
3. Każdy tekst istnieje w obu językach. Nowe pole dodaj najpierw do `Dictionary`, potem do `pl.ts` i `en.ts`.
4. W tekstach strony nie używamy pauz ani półpauz. Zamiast nich przecinek, dwukropek albo nowe zdanie.
5. Nie przedstawiaj jako gotowych produktów ani funkcji, których jeszcze nie ma. Produkty mają etykietę „W przygotowaniu”.
6. Dostępność: semantyczny HTML, widoczny fokus, obsługa `prefers-reduced-motion`, kontrast co najmniej WCAG AA.
7. Ikony tylko z `@phosphor-icons/react`, importowane z `@phosphor-icons/react/dist/ssr`.
8. Kolory, czcionki i promienie zaokrągleń bierz z `globals.css`. Na stronie jest jeden kolor akcentu (fiolet `accent`).

## Gałęzie i wydania

Proces jak w całej organizacji (ADR-0086 w MonoriseDocumentation, skrót w [zasadach współpracy](https://github.com/Monorise-Team/.github/blob/main/CONTRIBUTING.md)):

- Każde zadanie zaczyna się od zgłoszenia z formularza. Gałąź zakładasz ze zgłoszenia: `gh issue develop <numer> --name "flow/<typ>/<numer>-<opis>" --base dev`, np. `flow/feature/004-pricing-section`.
- Pull request do `dev` (domyślna gałąź) z szablonu: `Closes #<numer>` i sekcja „Dla użytkowników”. Scalamy zwykłym scaleniem (merge commit), nigdy przez squash.
- Commity: [Conventional Commits](https://www.conventionalcommits.org/) po angielsku (`feat`, `fix`, `chore`, `docs`…), nagłówek do 72 znaków, linie opisu do 100. Hook `commit-msg` sprawdza to commitlintem (`commitlint.config.mjs`), a `pre-commit` uruchamia ESLint i Prettier na zmienionych plikach i sprawdza typy.
- Wydanie: pull request z `dev` do `prod` („🚀 Release: dev → prod”). Po scaleniu Release Please liczy wersję z commitów, dopisuje `CHANGELOG.md` i oznacza wydanie `vX.Y.Z`; wersji nie zmieniamy ręcznie. Vercel wdraża `prod` na monorise.studio, a automat scala `prod` z powrotem do `dev`.
- Pilna poprawka: `flow/hotfix/<numer>-<opis>` od `prod`, pull request do `prod`.
- Automat pull requestów odrzuca gałęzie spoza konwencji, a do `prod` wpuszcza tylko `dev` i `flow/hotfix/…`. Przed scaleniem sprawdź, że „Lint, types and build” jest zielone.
- Bez force push, `git reset --hard` i usuwania gałęzi `prod` i `dev`.
