/** Chunk was on web.js **/
/** chunk id: 404097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => r,
  e: () => i
}), require("./388685.js");
var r = function(e) {
  return e.CANARY_RELEASE = "canaryRelease", e.BETA_RELEASE = "betaRelease", e.GOOGLE_RELEASE = "googleRelease", e.CANARY = "canary", e.PTB = "ptb", e.STABLE = "stable", e.ADHOC = "adhoc", e.STAGING = "staging", e.DEVELOPMENT = "development", e.N_A = "N/A", e
}({});
let i = {
  WEB_AND_IOS: new Set(["canary", "ptb", "stable"]),
  ANDROID: new Set(["betaRelease", "canaryRelease", "googleRelease"]),
  OTHER: new Set(["N/A", "adhoc", "development", "staging"]),
  ALL: new Set(["N/A", "adhoc", "betaRelease", "canary", "canaryRelease", "development", "googleRelease", "ptb", "stable", "staging"])
}