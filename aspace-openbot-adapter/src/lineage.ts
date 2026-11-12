// Lignée du gel — H-M1 / H-M2 (F8 pas 7, openbot).
export const PINNED_GEL = "2b5b14f";
export const PINNED_GEL_FULL = "2b5b14fc163fd12734ca871dddc68d8ffa31a1b7";
export const PINNED_BIND = "fea23711f94f4224770338ebd3f0164b8d7d5a02";
export const PINNED_BIND_FULL = "fea23711f94f4224770338ebd3f0164b8d7d5a02";
export const PINNED_BIND_BLOB = "087bd7f270579142a84956546d00335db91aa439";
export const FORK = "Amdkn/openbot";
export const UPSTREAM = "CopilotKit/OpenBot";
export const SKIN_ID = "openbot";

export function isGelCommit(sha: string): boolean {
  return sha === PINNED_GEL || sha === PINNED_GEL_FULL;
}

export function verifyGelLineage(head: string): { head: string; gel: string; headIsGel: boolean } {
  return { head, gel: PINNED_GEL_FULL, headIsGel: isGelCommit(head) };
}
