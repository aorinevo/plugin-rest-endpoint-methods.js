import { Octokit } from "@octokit/core";
import { Deprecation } from "deprecation";

import ENDPOINTS from "./generated/endpoints";
import { VERSION } from "./version";
import { Api } from "./types";
import { endpointsToMethods } from "./endpoints-to-methods";

/**
 * This plugin is a 1:1 copy of internal @octokit/rest plugins. The primary
 * goal is to rebuild @octokit/rest on top of @octokit/core. Once that is
 * done, we will remove the registerEndpoints methods and return the methods
 * directly as with the other plugins. At that point we will also remove the
 * legacy workarounds and deprecations.
 *
 * See the plan at
 * https://github.com/octokit/plugin-rest-endpoint-methods.js/pull/1
 */
export function restEndpointMethods(octokit: Octokit): Api {
  return endpointsToMethods(octokit, ENDPOINTS);
}
restEndpointMethods.VERSION = VERSION;
