/** Chunk was on web.js **/
/** chunk id: 937797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CD: () => o,
  DL: () => i
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
  };
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
})