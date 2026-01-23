/** Chunk was on 22477 **/
/** chunk id: 323970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk439174 = require("./439174.js"),
  Chunk881141 = require("./881141.js"),
  Chunk788868 = require("./788868.js"),
  Chunk164741 = require("./164741.js"),
  Chunk118713 = require("./118713.js"),
  Chunk115245 = require("./115245.js"),
  Chunk915880 = require("./915880.js"),
  Chunk203683 = require("./203683.js"),
  Chunk187446 = require("./187446.js"),
  Chunk935495 = require("./935495.js"),
  Chunk651714 = require("./651714.js"),
  Chunk416307 = require("./416307.js"),
  Chunk497783 = require("./497783.js"),
  Chunk39579 = require("./39579.js"),
  Chunk673554 = require("./673554.js"),
  Chunk719401 = require("./719401.js"),
  Chunk128640 = require("./128640.js"),
  Chunk146925 = require("./146925.js"),
  Chunk789996 = require("./789996.js");
let C = {
    [Chunk788868.Ac.PREMIUM_TENURE_1_MONTH]: {
      dark: " #D76C1F, #F79C53",
      light: " #8E2A0B, #D4681C"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_3_MONTH]: {
      dark: " #8F9E9E, #C0CBD1",
      light: " #53555F, #697979"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_6_MONTH]: {
      dark: " #ED8200, #FFCE46",
      light: " #744400, #CC7000"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_12_MONTH]: {
      dark: " #36AAFF, #7BE7CB",
      light: " #006394, #0089EB"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_24_MONTH]: {
      dark: " #8670FF, #C2BDFF",
      light: " #5423CC, #8670FF"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_36_MONTH]: {
      dark: " #009423, #67FF33",
      light: " #005C15, #009E25"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_60_MONTH]: {
      dark: " #E83068, #FF8F70",
      light: " #881141, #DD1852"
    },
    [Chunk788868.Ac.PREMIUM_TENURE_72_MONTH]: {
      dark: " #829AE8, #DDB4FF, #A2D6FF",
      light: " #6881D4, #956CB8, #5491A0"
    }
  },
  S = {
    [Chunk788868.Ac.PREMIUM_TENURE_1_MONTH]: {
      dark: Chunk164741.A,
      light: Chunk416307.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_3_MONTH]: {
      dark: Chunk118713.A,
      light: Chunk497783.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_6_MONTH]: {
      dark: Chunk115245.A,
      light: Chunk39579.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_12_MONTH]: {
      dark: Chunk915880.A,
      light: Chunk673554.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_24_MONTH]: {
      dark: Chunk203683.A,
      light: Chunk719401.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_36_MONTH]: {
      dark: Chunk187446.A,
      light: Chunk128640.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_60_MONTH]: {
      dark: Chunk935495.A,
      light: Chunk146925.A
    },
    [Chunk788868.Ac.PREMIUM_TENURE_72_MONTH]: {
      dark: Chunk651714.A,
      light: Chunk789996.A
    }
  };

function O() {
  let e = (0, i.A)(),
    t = (0, a.Mw)((0, l.Ay)());
  if (!e) return null;
  let n = C[e],
    o = S[e],
    c = {
      currentBadge: (0, r.e0)(e),
      currentBadgeTextGradient: t ? null == n ? true : n.dark : null == n ? true : n.light,
      levelUpVideoSrc: t ? null == o ? true : o.dark : null == o ? true : o.light
    },
    d = s.sp.indexOf(e);
  if (d > 0) {
    let e = s.sp[d - 1],
      n = C[e];
    c.prevBadge = (0, r.e0)(e), c.prevBadgeTextGradient = t ? null == n ? true : n.dark : null == n ? true : n.light
  }
  return c
}