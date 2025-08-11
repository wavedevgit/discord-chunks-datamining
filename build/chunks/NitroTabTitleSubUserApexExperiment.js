/** Chunk was on 1272 **/
/** chunk id: 532245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CF: () => d,
  Rx: () => o,
  VL: () => c,
  p1: () => s,
  pd: () => u
});
var r, Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk987338 = require("./987338.js"),
  o = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.GET_NITRO = 1] = "GET_NITRO", r[r.JOIN_NITRO = 2] = "JOIN_NITRO", r[r.TRY_NITRO = 3] = "TRY_NITRO", r);
let s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_nitro_tab_title_non_sub",
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    label: "Nitro Tab Title (non-sub)",
    defaultConfig: {
      enabled: false,
      variant: 0
    },
    treatments: [{
      id: 1,
      label: "Get Nitro",
      config: {
        enabled: true,
        variant: 1
      }
    }, {
      id: 2,
      label: "Join Nitro",
      config: {
        enabled: true,
        variant: 2
      }
    }, {
      id: 3,
      label: "Try Nitro",
      config: {
        enabled: true,
        variant: 3
      }
    }]
  }),
  c = (0, Chunk427164.le)({
    name: "2025-07-nitro-tab-title-non-sub",
    kind: "user",
    defaultConfig: {
      enabled: false,
      variant: 0
    },
    variations: {
      1: {
        enabled: true,
        variant: 1
      },
      2: {
        enabled: true,
        variant: 2
      },
      3: {
        enabled: true,
        variant: 3
      }
    }
  }),
  u = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_nitro_tab_title_sub",
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    label: "Nitro Tab Title (sub)",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Nitro Home",
      config: {
        enabled: true
      }
    }]
  }),
  d = (0, Chunk427164.le)({
    name: "2025-07-nitro-tab-title-sub",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  })