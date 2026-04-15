import { scopedProjectKey, scopeProjectRef } from "@t3tools/client-runtime";
import type { ScopedProjectRef } from "@t3tools/contracts";
import type { Project } from "./types";

export function deriveLogicalProjectKey(
  project: Pick<Project, "environmentId" | "id" | "repositoryIdentity">,
): string {
  return scopedProjectKey(scopeProjectRef(project.environmentId, project.id));
}

export function deriveLogicalProjectKeyFromRef(
  projectRef: ScopedProjectRef,
  _project: Pick<Project, "repositoryIdentity"> | null | undefined,
): string {
  return scopedProjectKey(projectRef);
}
