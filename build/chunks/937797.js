/** Chunk was on web.js **/
/** chunk id: 937797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DL: () => i,
  VG: () => u,
  b2: () => l,
  eC: () => o,
  n0: () => s,
  nj: () => c
});
var Chunk427164 = require("./427164.js");
let i = (0, Chunk427164.le)({
    name: "2025-08-quest-ad-fetch-active-check",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    }
  }),
  a = (0, Chunk427164.le)({
    name: "2025-11-quest-home-suggested-sort-rotation",
    kind: "user",
    defaultConfig: {
      enabled: false,
      variant: null
    },
    variations: {
      0: {
        enabled: false,
        variant: null
      },
      1: {
        enabled: true,
        variant: 0
      },
      2: {
        enabled: true,
        variant: 1
      }
    }
  }),
  o = e => {
    let {
      enabled: t,
      variant: n
    } = a.getConfig({
      location: e
    });
    return 0 === n ? {
      enabled: t,
      minutes: 20
    } : 1 === n ? {
      enabled: t,
      minutes: 75
    } : {
      enabled: t,
      minutes: 0
    }
  },
  s = (0, Chunk427164.le)({
    name: "2025-11-quest-home-takeover-client-rollout",
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
var l = function(e) {
  return e[e.LISTEN_FOR_ERROR_ONLY = 0] = "LISTEN_FOR_ERROR_ONLY", e[e.LISTEN_AND_RETRY_LOADING = 1] = "LISTEN_AND_RETRY_LOADING", e
}({});
let c = (0, Chunk427164.le)({
    name: "2025-11-quest-bar-listen-for-source-error",
    kind: "user",
    defaultConfig: {
      enabled: false,
      variant: null
    },
    variations: {
      0: {
        enabled: false,
        variant: null
      },
      1: {
        enabled: true,
        variant: 0
      },
      2: {
        enabled: true,
        variant: 1
      }
    }
  }),
  u = (0, Chunk427164.le)({
    name: "2025-11-video-end-card-v2",
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