# aspace-openbot-adapter

Adapter A'Space pour `Amdkn/openbot` — gel `2b5b14f` (`2b5b14fc163fd12734ca871dddc68d8ffa31a1b7`),
version amont 0.3.3, statut amont sans badge, 3376 fichiers au gel.

- Bind Cordis Fiber : `fea23711f94f4224770338ebd3f0164b8d7d5a02` (blob `087bd7f`), re-appliqué
  verbatim sur `main` (§D8) ; l'adapter est le commit qui suit le bind.
- Skin : **OpenBot** (platform) — plateforme : accueille n'importe quel agent AG-UI comme coworker avec son ordinateur.
- Triage : 7 portés / 5 surfaces / 22 abandonnés
  (total 34), vérifié mécaniquement par la suite.
- Gateway modèle : `http://127.0.0.1:31415/v1/chat/completions` seul, chaîne modelPool, retest 15 min.
- Computer-service : `:4100`, en-tête `x-openbot-bot-id` verbatim.
- Télémétrie : 0 émetteur ; les 5 déclencheurs §D4 sont tranchés dans
  `src/telemetry.ts`.
- Dépendance pas 6 NOMMÉE (§D9) : `/refine` conditionnel au merge de `9050a1f`.

Suite : `bun test` / `node --test` selon le `package.json` (stdlib seule).
