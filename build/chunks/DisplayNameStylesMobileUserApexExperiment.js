/** Chunk was on web.js **/
/** chunk id: 594928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JH: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
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
});
(0, Chunk427164.le)({
  name: "2025-10-display-name-styles-mobile",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true,
      surfaces: 2
    },
    2: {
      enabled: true,
      surfaces: 1
    }
  }
})