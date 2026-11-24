# MonoriseWebsite

Strona wizytówka [monorise.studio](https://monorise.studio): software house Monorise i ekosystem produktów, po polsku i po angielsku.

## Technologia

- Next.js (App Router) jako strona statyczna, React, TypeScript, Tailwind CSS.
- Bez ciasteczek, analityki i zewnętrznych czcionek.

## Hosting

Vercel (plan Hobby), wdrożenie produkcyjne z gałęzi `prod`. Strona jest w pełni statyczna (`pnpm build` tworzy katalog `out/`), więc w razie potrzeby można ją bez zmian w kodzie przenieść na GitHub Pages. Decyzja i ryzyka: ADR-0085 w repozytorium MonoriseDocumentation.

## Uruchomienie lokalne

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm check      # formatowanie, lint, typy, build
```

## Wdrożenia

Wdrożenia działają na Vercel według zasad z ADR-0097:

- **Produkcja**: wdraża się tylko z `prod` na [monorise.studio](https://monorise.studio) po scaleniu pull requestu wydania `dev` → `prod`.
- **Podgląd**: wdraża się tylko z gałęzi-wskaźnika `preview`, którą przesuwa wyłącznie automat (`deploy-preview.yml`):
  - automatycznie przy otwarciu lub aktualizacji pull requestu wydania `dev` → `prod`,
  - na żądanie z zakładki Actions albo poleceniem `gh workflow run deploy-preview.yml -R Monorise-Team/MonoriseWebsite` (opcjonalnie z `-f ref=<commit>`),
  - po wypchnięciu oznaczenia `preview-<opis>` na commicie z `dev`.
- Gałęzie `dev` i `flow/*` nie dostają wdrożeń online. Zmiany sprawdzamy lokalnie (`pnpm dev`) i w CI.
- W repozytorium widoczne są środowiska GitHub „Production” i „Preview” z adresami wdrożeń.

## Gałęzie

| Gałąź                       | Rola                                                          |
| --------------------------- | ------------------------------------------------------------- |
| `prod`                      | wersja produkcyjna, wdrażana na monorise.studio               |
| `preview`                   | wskaźnik podglądu, przesuwany wyłącznie przez automat z `dev` |
| `dev` (domyślna)            | wersja deweloperska; tu trafiają pull requesty zadań          |
| `flow/<typ>/<numer>-<opis>` | gałąź zadania, zakładana ze zgłoszenia; pull request do `dev` |

Wydanie to pull request z `dev` do `prod`, pilna poprawka to `flow/hotfix/<numer>-<opis>` od `prod`. Scalamy zwykłym scaleniem. Wersję, `CHANGELOG.md` i oznaczenie `vX.Y.Z` tworzy Release Please z commitów w formacie Conventional Commits. Szczegóły: [zasady współpracy](https://github.com/Monorise-Team/.github/blob/main/CONTRIBUTING.md).

## Licencja

Repozytorium jest publiczne, ale nie jest open source: wszelkie prawa zastrzeżone (zob. [LICENSE](LICENSE)).
