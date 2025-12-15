/** Chunk was on web.js **/
/** chunk id: 937797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DL: () => i,
  EO: () => o,
  eC: () => l,
  m_: () => a,
  n0: () => c,
  nj: () => u
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
});
(0, Chunk427164.le)({
  name: "2025-10-mobile-quest-home-v2-entrypoint-relocation",
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
var a = function(e) {
  return e[e.DISPLAY_ADVERTISER_CTA_ALWAYS = 0] = "DISPLAY_ADVERTISER_CTA_ALWAYS", e[e.OVERLAY_SHARE_ON_VIDEO = 1] = "OVERLAY_SHARE_ON_VIDEO", e
}({});
let o = (0, Chunk427164.le)({
    name: "2025-10-desktop-video-quest-cta-relocation",
    kind: "user",
    defaultConfig: {
      enabled: false,
      variant: null
    },
    variations: {
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
  s = (0, Chunk427164.le)({
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
  l = e => {
    let {
      enabled: t,
      variant: n
    } = s.getConfig({
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
  c = (0, Chunk427164.le)({
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
  }),
  u = (0, Chunk427164.le)({
    name: "2025-11-quest-bar-listen-for-source-error",
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