/** Chunk was on web.js **/
/** chunk id: 594928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => a,
  f: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
    id: "2025-07_display_name_styles_viewer",
    kind: "user",
    label: "Display Name Styles Viewer",
    defaultConfig: {
      enabled: false,
      includeNonProfile: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables viewing display name styles on all surfaces.",
      config: {
        enabled: true,
        includeNonProfile: true
      }
    }, {
      id: 2,
      label: "Enables viewing display name styles on profile surfaces only.",
      config: {
        enabled: true,
        includeNonProfile: false
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    id: "2025-07_display_name_styles_setter",
    kind: "user",
    label: "Display Name Styles Setter",
    defaultConfig: {
      enabled: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enables the UI for setting display name styles.",
      config: {
        enabled: true
      }
    }]
  })