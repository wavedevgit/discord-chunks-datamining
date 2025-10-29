/** Chunk was on web.js **/
/** chunk id: 594928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JH: () => s,
  cL: () => c,
  fN: () => o,
  wL: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
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
    }, {
      id: 3,
      label: "Same as T1, but these users will not have the setter XP enabled.",
      config: {
        enabled: true,
        includeNonProfile: true
      }
    }]
  }),
  s = (0, Chunk818083.B)({
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
  }),
  l = (0, Chunk427164.le)({
    name: "2025-09-display-name-styles-ga",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  });

function c(e) {
  let {
    location: t
  } = e, n = s.useExperiment({
    location: t
  }).enabled;
  return l.useConfig({
    location: t
  }).enabled && n
}(0, Chunk427164.le)({
  name: "2025-10-display-name-styles-mobile",
  kind: "user",
  defaultConfig: {
    enabled: false,
    dmEffects: false
  },
  variations: {
    1: {
      enabled: true,
      dmEffects: false
    },
    2: {
      enabled: true,
      dmEffects: true
    }
  }
})