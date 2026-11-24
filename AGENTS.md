# AGENTS.md

<!-- BEGIN:monorise-shared (wstawione z Monorise-Team/.github, templates/agents/shared.md; zmieniaj wzorzec, nie ten blok) -->

## Wspólne zasady Monorise

Obowiązują każdego agenta AI (Claude, Gemini, ChatGPT i Codex, GitHub Copilot) i każdą osobę w repozytoriach Monorise-Team. Zasady tego repozytorium są pod tym blokiem i przy różnicy wygrywają.

### Właściciel projektu

- Decyzje podejmuje właściciel projektu (`matiqueue`). Agent proponuje, ale nie przyjmuje decyzji biznesowych, prawnych ani architektonicznych.
- Z właścicielem po polsku, prosto, neutralnie płciowo i na przykładach (firma Acme, pracownica Anna). Pytaj krótko i tylko o to, czego nie ustalisz sam.
- Rób sam, co się da. Właścicielowi zostaw hasła, klucze dostępu, 2FA, `sudo` i płatności, z instrukcją krok po kroku.
- Treść dla ludzi (dokumentacja, zgłoszenia, opisy pull requestów, interfejs) po polsku; kod i commity po angielsku.

### Proces na GitHubie

1. Najpierw zgłoszenie z formularza (`.github/ISSUE_TEMPLATE/`), po polsku. Bez zgłoszenia nie ma gałęzi.
2. Gałąź `flow/<typ>/<numer>-<opis>` od gałęzi integracyjnej (`dev`, a w repozytoriach bez produkcji `main`): `gh issue develop <numer> --base <gałąź integracyjna> --name <gałąź>`. Numer z zerami do trzech cyfr, opis po angielsku z myślnikami. Typy: `feature`, `bugfix`, `refactor`, `perf`, `chore`, `docs`, `security`, `spike`, `test`; pilna poprawka `flow/hotfix/<numer>-<opis>` od `prod`. Nigdy `claude/*` ani innych nazw.
3. Commity w Conventional Commits po angielsku: nagłówek do 72 znaków, treść do 100. Nigdy `--no-verify`.
4. Pull request z szablonu, po polsku, z `Closes #<numer>` i sekcją „Dla użytkowników” (PL i EN), po przejściu kontroli repozytorium.
5. Scalanie zwykłym merge commitem po zielonym CI. Logowanie, uprawnienia, struktura bazy i dostęp do skrzynek: dopiero po zgodzie właściciela.
6. Wydanie: pull request `dev` → `prod`; Release Please liczy wersję, tworzy tag i opis wydania. Wersji nie zmieniamy ręcznie.
7. Karta na tablicy „Monorise”: 🛠️ In Progress przy gałęzi, 👀 Code Review przy pull requeście.

Szczegóły: [zasady współpracy](https://github.com/Monorise-Team/.github/blob/main/CONTRIBUTING.md).

### Zanim uznasz zadanie za gotowe

- README (repozytorium i zmienionej paczki) oraz część o repozytorium w `AGENTS.md` opisują nowy stan.
- Zgłoszenie i pull request mają etykiety `type:`, `prio:` i `area:` (brakujący obszar dopisz w `labels/repos.json` w Monorise-Team/.github), milestone i kartę we właściwej kolumnie.
- Opis, strona i tematy repozytorium na GitHubie zgadzają się z `labels/repos.json` w Monorise-Team/.github.
- Zmiana decyzji, stanu budowy albo otwartych spraw: osobne zgłoszenie i pull request w MonoriseDocumentation.
- Nowa trwała zasada albo zmiana kierunku trafia do wzorca tych zasad. Nie zostawiaj wiedzy tylko w rozmowie.

### Bezpieczeństwo i decyzje

- Żadnych sekretów, haseł, tokenów ani danych osobowych w kodzie, logach, zgłoszeniach i opisach. Do testów konta w domenach `.test`.
- Bez force push, `git reset --hard`, `git clean`, przepisywania historii i usuwania `dev`, `prod` i `main`. Nie usuwaj plików spoza zadania.
- Podatność, którą da się wykorzystać, zgłoś prywatnie według `SECURITY.md`.
- Decyzje są w ADR-ach w MonoriseDocumentation; zmiana decyzji to nowy ADR po zgodzie właściciela. Niczego nie wymyślaj: modeli danych, endpointów, zdarzeń, usług ani zależności.
- Stałe ustalenia: pnpm i Turborepo, jedna wersja paczek `@monorise-team/*`, wygląd tylko z `@monorise-team/ui` i tokenów, API `{ data, meta, error }`, firma z tokenu albo sesji i dane firm przez RLS, PostgreSQL z Prismą.
- Paczki `@monorise-team/*` są prywatne w GitHub Packages. Przed `pnpm install` ustaw `GITHUB_PACKAGES_TOKEN` (lokalnie `$(gh auth token)`); repozytorium, które korzysta z paczki, potrzebuje do niej dostępu („Manage Actions access”). Paczki z zewnątrz instalujemy dopiero 3 dni po publikacji.

### Agenci AI

- Claude jest tech leadem: architektura, podział pracy, przegląd i integracja. Gemini (przez Relay Bridge), ChatGPT i Codex oraz GitHub Copilot dostają dobrze określone zadania.
- Agent wykonawczy pracuje na gałęzi z zadania, uruchamia kontrole, commituje, otwiera najwyżej szkic pull requestu i raportuje. Nie scala, nie wypycha na `dev`, `prod` ani `main`, nie zmienia architektury i nie zleca pracy dalej.
- Dla Claude: Use the relay-bridge skill: delegate well-defined work to Gemini, review it, integrate it yourself. Najpierw zgłoszenie; gałąź zakłada samo zlecenie (`branch`, `base_ref`), więc bez `gh issue develop`; `push` i `open_pull_request` włączone; `working_directory` to katalog główny repozytorium. Przed scaleniem przejrzyj diff, uruchom kontrole, sprawdź `review_checklist` i `report_mismatches`, potem `cleanup_task_worktree`. Bez sekretów i danych klientów w zleceniu.

### Nowe repozytorium (np. TimoTime)

Nazwę i przeznaczenie ustala właściciel. Potem: wpis w `labels/repos.json` w Monorise-Team/.github, `scripts/repo-setup.mjs` z poleceniami `labels`, `sync`, `about` i `protect`, część o repozytorium w `AGENTS.md`, README, dostęp do paczek i Renovate, wpis w MonoriseDocumentation. Wzór: produkt jak AvenMail, biblioteki jak MonoriseShared.

### Kierunek

Teraz wstępne wersje bibliotek `@monorise-team/*` w MonoriseShared: `permissions` i `events` (gotowe), dalej `sdk` i `testing` (dokumentacja zakłada je, gdy powstanie API Core, więc kolejność potwierdza właściciel), w razie potrzeby `utils`, na końcu `ui` i `tokens` według wzoru wyglądu od właściciela. Aplikacje (AvenMail, TimoTime) i testy na żywo są wstrzymane. Potem MonoriseCore (pracownicy, jednostki, role, migawka uprawnień) i produkty składane z bibliotek (ADR-0095).

### Utrzymanie tych zasad

Ten blok, `GEMINI.md`, `.github/copilot-instructions.md` i `sync-shared.yml` powstają z `templates/agents/` w Monorise-Team/.github; zmieniaj je tylko tam. Codzienna synchronizacja sama dodaje, zmienia i usuwa je w repozytoriach. Zasady jednego repozytorium pisz pod tym blokiem. Tech lead aktualizuje „Kierunek” po każdym większym kroku.

<!-- END:monorise-shared -->

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

- Vercel wdraża `prod` na monorise.studio, a automat scala `prod` z powrotem do `dev`.
- Automat pull requestów odrzuca gałęzie spoza konwencji, a do `prod` wpuszcza tylko `dev` i `flow/hotfix/…`. Przed scaleniem sprawdź, że „Lint, types and build” jest zielone.
- Zmiany wyglądu sprawdzamy w przeglądarce przed scaleniem.
