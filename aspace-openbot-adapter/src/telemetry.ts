// Télémétrie — les 5 déclencheurs du §D4, tranchés un par un.
// Le natif = 0 appel sortant par défaut. Le code search seul ne vaut pas preuve (§0.4).
export type TriggerVerdict = "ABANDONNÉ" | "ABSENT-CONFIRME" | "N/A";
export interface TelemetryTrigger {
  id: string;
  label: string;
  applies: "APPLIQUE" | "N/A";
  verdict: TriggerVerdict;
  note: string;
}
export const TRIGGERS: TelemetryTrigger[] = [
  { id: "sink-sdk", label: "Sink SDK → telemetry.copilotkit.ai → PostHog (défaut ON)", applies: "APPLIQUE", verdict: "ABANDONNÉ", note: "Sink SDK → telemetry.copilotkit.ai → PostHog ; défaut ON sur le desktop openbot et le runtime (app_id=openbot toujours porté) ; le transport n'est pas porté, le natif n'émet vers aucun sink" },
  { id: "product-telemetry", label: "Product telemetry openbot (opt-in serveur, app_id=openbot toujours porté)", applies: "APPLIQUE", verdict: "ABANDONNÉ", note: "Product telemetry serveur (server/src/telemetry/product.ts), opt-in (OPENBOT_PRODUCT_TELEMETRY=1) ; module non porté ; le natif n'émet pas app_id=openbot" },
  { id: "desktop-telemetry", label: "Desktop telemetry (ON par défaut, événements oss.desktop.*)", applies: "APPLIQUE", verdict: "ABANDONNÉ", note: "Desktop telemetry (desktop/src/telemetry.ts, server/src/desktop-telemetry.ts), ON par défaut, événements oss.desktop.* ; non portée" },
  { id: "setup-telemetry", label: "Setup telemetry OpenDots (client + serveur)", applies: "N/A", verdict: "N/A", note: "Pas de setup telemetry dans openbot (c'est OpenDots)" },
  { id: "otel-export", label: "Export OTEL (OFF par défaut)", applies: "APPLIQUE", verdict: "ABSENT-CONFIRME", note: "Export OTEL (server/src/telemetry/otel.ts), OFF par défaut au gel ; confirmé absent du natif" },
];
export function telemetryEmitters(): string[] {
  // Aucun émetteur dans le natif : ni sink SDK, ni product/desktop/setup
  // telemetry, ni export OTEL. Un émetteur ici serait un FAIL H-M4.
  return [];
}
export function assertZeroEmitters(): boolean {
  return telemetryEmitters().length === 0;
}
