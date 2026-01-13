/** Chunk was on 22979 **/
/** chunk id: 817466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk291175 = require("./291175.js"),
  Chunk804413 = require("./804413.js"),
  Chunk474936 = require("./474936.js"),
  Chunk337968 = require("./337968.js"),
  Chunk511581 = require("./511581.js"),
  Chunk980775 = require("./980775.js"),
  Chunk151741 = require("./151741.js"),
  Chunk541078 = require("./541078.js"),
  Chunk615975 = require("./615975.js"),
  Chunk299283 = require("./299283.js"),
  Chunk110314 = require("./110314.js"),
  Chunk52704 = require("./52704.js"),
  Chunk239783 = require("./239783.js"),
  Chunk154637 = require("./154637.js"),
  Chunk717480 = require("./717480.js"),
  Chunk113609 = require("./113609.js"),
  Chunk459448 = require("./459448.js"),
  Chunk988866 = require("./988866.js"),
  Chunk353234 = require("./353234.js");
let S = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: {
      dark: " #D76C1F, #F79C53",
      light: " #8E2A0B, #D4681C"
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      dark: " #8F9E9E, #C0CBD1",
      light: " #53555F, #697979"
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      dark: " #ED8200, #FFCE46",
      light: " #744400, #CC7000"
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      dark: " #36AAFF, #7BE7CB",
      light: " #006394, #0089EB"
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      dark: " #8670FF, #C2BDFF",
      light: " #5423CC, #8670FF"
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      dark: " #009423, #67FF33",
      light: " #005C15, #009E25"
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      dark: " #E83068, #FF8F70",
      light: " #881141, #DD1852"
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      dark: " #829AE8, #DDB4FF, #A2D6FF",
      light: " #6881D4, #956CB8, #5491A0"
    }
  },
  E = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: {
      dark: Chunk337968.Z,
      light: Chunk52704.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      dark: Chunk511581.Z,
      light: Chunk239783.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      dark: Chunk980775.Z,
      light: Chunk154637.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      dark: Chunk151741.Z,
      light: Chunk717480.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      dark: Chunk541078.Z,
      light: Chunk113609.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      dark: Chunk615975.Z,
      light: Chunk459448.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      dark: Chunk299283.Z,
      light: Chunk988866.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      dark: Chunk110314.Z,
      light: Chunk353234.Z
    }
  };

function T() {
  let e = (0, l.Z)(),
    t = (0, a.wj)((0, r.ZP)());
  if (!e) return null;
  let n = S[e],
    o = E[e],
    c = {
      currentBadge: (0, i.fv)(e),
      currentBadgeTextGradient: t ? null == n ? true : n.dark : null == n ? true : n.light,
      levelUpVideoSrc: t ? null == o ? true : o.dark : null == o ? true : o.light
    },
    d = s.Qh.indexOf(e);
  if (d > 0) {
    let e = s.Qh[d - 1],
      n = S[e];
    c.prevBadge = (0, i.fv)(e), c.prevBadgeTextGradient = t ? null == n ? true : n.dark : null == n ? true : n.light
  }
  return c
}