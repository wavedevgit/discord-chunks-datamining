/** Chunk was on web.js **/
/** chunk id: 868031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WB: () => l
});
var Chunk945810 = require("./945810.js"),
  Chunk792620 = require("./792620.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx");
let s = (0, Chunk945810.mj)({
  name: "2026-01-video-quest-start-cta",
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
});

function l(e) {
  let t = s.getConfig({
    location: a.rE.QUEST_PRIMARY_CTA
  });
  if (t.enabled) {
    let n = (0, i.Yh)(e);
    return 1 === t.variant ? o.intl.formatToPlainString(o.t.GNsKiW, {
      remainTime: (0, i.xm)(n)
    }) : o.intl.string(o.t["6fpk4L"])
  }
  return o.intl.string(o.t.umdNin)
}