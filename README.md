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

## Gałęzie

| Gałąź                       | Rola                                                          |
| --------------------------- | ------------------------------------------------------------- |
| `prod`                      | wersja produkcyjna, wdrażana na monorise.studio               |
| `dev` (domyślna)            | wersja deweloperska; tu trafiają pull requesty zadań          |
| `flow/<typ>/<numer>-<opis>` | gałąź zadania, zakładana ze zgłoszenia; pull request do `dev` |

Wydanie to pull request z `dev` do `prod`, pilna poprawka to `flow/hotfix/<numer>-<opis>` od `prod`. Scalamy zwykłym scaleniem. Wersję, `CHANGELOG.md` i oznaczenie `vX.Y.Z` tworzy Release Please z commitów w formacie Conventional Commits. Szczegóły: [zasady współpracy](https://github.com/Monorise-Team/.github/blob/main/CONTRIBUTING.md).

## Licencja

Repozytorium jest publiczne, ale nie jest open source: wszelkie prawa zastrzeżone (zob. [LICENSE](LICENSE)).
