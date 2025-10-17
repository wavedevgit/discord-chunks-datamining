/** Chunk was on web.js **/
/** chunk id: 937797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CD: () => o,
  DL: () => i,
  GE: () => c,
  m8: () => s,
  yE: () => l
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
    name: "2025-08-sponsored-quest",
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
  o = e => {
    let {
      enabled: t
    } = a.getConfig({
      location: e
    });
    return t
  },
  s = (0, Chunk427164.le)({
    name: "2025-08-quest-home-v2-entrypoint-relocation",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      1: {
        enabled: false
      },
      2: {
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
var l = function(e) {
  return e[e.DISCOVER = 0] = "DISCOVER", e[e.ACTION = 1] = "ACTION", e[e.REWARD = 2] = "REWARD", e[e.EARN = 3] = "EARN", e
}({});
let c = (0, Chunk427164.le)({
  name: "2025-10-quest-home-entrypoint-onboarding",
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
    },
    3: {
      enabled: true,
      variant: 2
    },
    4: {
      enabled: true,
      variant: 3
    }
  }
})