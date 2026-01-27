/** Chunk was on web.js **/
/** chunk id: 245853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L5: () => a,
  LO: () => s,
  RJ: () => d,
  XM: () => o,
  qd: () => l,
  t$: () => u,
  uK: () => c
});
var Chunk945810 = require("./945810.js");
let i = (0, Chunk945810.mj)({
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
  a = e => {
    let {
      enabled: t,
      variant: n
    } = i.getConfig({
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
  o = (0, Chunk945810.mj)({
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
var s = function(e) {
  return e[e.LISTEN_FOR_ERROR_ONLY = 0] = "LISTEN_FOR_ERROR_ONLY", e[e.LISTEN_AND_RETRY_LOADING = 1] = "LISTEN_AND_RETRY_LOADING", e
}({});
let l = (0, Chunk945810.mj)({
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
  c = (0, Chunk945810.mj)({
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
  }),
  u = (0, Chunk945810.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: true
      }
    }
  }),
  d = (0, Chunk945810.mj)({
    name: "2026-01-business-profile-linking",
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
  })