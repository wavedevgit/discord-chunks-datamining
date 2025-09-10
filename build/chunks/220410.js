/** Chunk was on web.js **/
/** chunk id: 220410, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P6: () => i,
  Tf: () => r
});
let r = (0, require("./427164.js").le)({
    name: "2025-08-game-detection-v2",
    kind: "user",
    defaultConfig: {
      useDetectionV2: false,
      hasIssueReporting: false
    },
    variations: {
      0: {
        useDetectionV2: false,
        hasIssueReporting: false
      },
      1: {
        useDetectionV2: false,
        hasIssueReporting: true
      },
      2: {
        useDetectionV2: true,
        hasIssueReporting: true
      }
    }
  }),
  i = e => r.useConfig({
    location: e
  }).hasIssueReporting