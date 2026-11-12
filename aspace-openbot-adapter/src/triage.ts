// Triage openbot — porté / surface / abandonné (§D14, §D2).
// Vérifié mécaniquement par la suite (comptes = table, écart 0).
export type TriageVerdict = "ported" | "surface" | "abandoned";
export interface TriageItem { id: string; item: string; verdict: TriageVerdict }
export const TRIAGE: TriageItem[] = [
  { id: "ag-ui-acceptance", item: "Acceptation AG-UI : n'importe quel agent AG-UI arrive comme coworker avec son canal (16 adaptateurs au gel — la plateforme accueille, elle ne choisit pas le harness)", verdict: "ported" },
  { id: "computer-service", item: "Computer-service unique : agent-computer :4100, en-tête x-openbot-bot-id verbatim, session navigateur reprise en main (take over / hand back)", verdict: "ported" },
  { id: "routines-job-loop", item: "Routines openbot (server/src/routines/, crons 5 champs, min 15 min) : survivent comme entrées du job loop du daemon unique, preuve par reçu ; cron-parser abandonné", verdict: "ported" },
  { id: "responsibilities-event-jobs", item: "Responsibilities (goals) : jobs déclenchés par événement, pas des crons", verdict: "ported" },
  { id: "supervisor-function", item: "Supervisor (@openbot/supervisor) : porté comme fonction du daemon (supervision des processus ordinateurs), pas comme processus séparé", verdict: "ported" },
  { id: "approval-audit", item: "Frontière d'approbation + piste d'audit : portées dans la plateforme native", verdict: "ported" },
  { id: "browser-takeover", item: "Reprise navigateur : la même session, reprise par l'humain puis rendue au Bot", verdict: "ported" },
  { id: "app-web-3010", item: "App web :3010 — surface, re-pointée sur le daemon unique", verdict: "surface" },
  { id: "desktop-tauri", item: "Desktop Tauri — surface, re-pointée, pas un module", verdict: "surface" },
  { id: "mobile", item: "Mobile — surface, re-pointée, pas un module", verdict: "surface" },
  { id: "extension-navigateur", item: "Extension navigateur — surface, re-pointée ; son module télémétrie n'est pas porté (§D4)", verdict: "surface" },
  { id: "charts-helm", item: "Chart Helm — surface de déploiement, pas un daemon", verdict: "surface" },
  { id: "shim-agent-adk", item: "Shim agent-adk : colle spécifique au harness adk, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-ag2", item: "Shim agent-ag2 : colle spécifique au harness ag2, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-agno", item: "Shim agent-agno : colle spécifique au harness agno, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-antigravity", item: "Shim agent-antigravity : colle spécifique au harness antigravity, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-bot", item: "Shim agent-bot : colle spécifique au harness bot, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-claude-sdk", item: "Shim agent-claude-sdk : colle spécifique au harness claude-sdk, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-computer", item: "Shim agent-computer : colle spécifique au harness computer, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-crewai", item: "Shim agent-crewai : colle spécifique au harness crewai, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-langgraph", item: "Shim agent-langgraph : colle spécifique au harness langgraph, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-langgraph-agui", item: "Shim agent-langgraph-agui : colle spécifique au harness langgraph-agui, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-langroid", item: "Shim agent-langroid : colle spécifique au harness langroid, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-llamaindex", item: "Shim agent-llamaindex : colle spécifique au harness llamaindex, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-mastra", item: "Shim agent-mastra : colle spécifique au harness mastra, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-microsoft", item: "Shim agent-microsoft : colle spécifique au harness microsoft, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-pydantic-ai", item: "Shim agent-pydantic-ai : colle spécifique au harness pydantic-ai, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "shim-agent-strands", item: "Shim agent-strands : colle spécifique au harness strands, pas fonction de plateforme ; le harness parle AG-UI, aucun shim n'est nécessaire", verdict: "abandoned" },
  { id: "spire-spiffe", item: "Spire / SPIFFE (spire-server, spire-agent, spire-init) : infrastructure d'identité multi-services ; le daemon unique est un seul processus, son identité est celle du natif", verdict: "abandoned" },
  { id: "postgres", item: "Postgres + Drizzle (DATABASE_URL) : la persistance native est SQLite (openrig_state.rs, memory.rs) ; l'audit PostgreSQL est remplacé par le ledger natif SQLite WAL", verdict: "abandoned" },
  { id: "product-telemetry", item: "Product telemetry (server/src/telemetry/product.ts, app_id=openbot) : module non porté ; le natif n'émet pas app_id=openbot", verdict: "abandoned" },
  { id: "desktop-telemetry", item: "Desktop telemetry (ON par défaut, événements oss.desktop.*) : événements de setup non portés", verdict: "abandoned" },
  { id: "otel-export", item: "Export OTEL (otel.ts) : OFF par défaut au gel — confirmé absent du natif, pas porté", verdict: "abandoned" },
  { id: "cron-parser", item: "Dépendance cron-parser (server/src/routines/schedule.ts) : abandonnée ; le minimum 15 min devient une politique du job loop", verdict: "abandoned" }
];
export function triageCounts(): { ported: number; surfaces: number; abandoned: number; total: number } {
  const ported = TRIAGE.filter((t) => t.verdict === "ported").length;
  const surfaces = TRIAGE.filter((t) => t.verdict === "surface").length;
  const abandoned = TRIAGE.filter((t) => t.verdict === "abandoned").length;
  return { ported, surfaces, abandoned, total: TRIAGE.length };
}
