/** Chunk was on 45476 **/
/** chunk id: 817466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk291175 = require("./291175.js"),
  Chunk804413 = require("./804413.js"),
  Chunk474936 = require("./474936.js"),
  Chunk538092 = require("./538092.js"),
  Chunk533577 = require("./533577.js"),
  Chunk799974 = require("./799974.js"),
  Chunk264511 = require("./264511.js"),
  Chunk345614 = require("./345614.js"),
  Chunk925773 = require("./925773.js"),
  Chunk298342 = require("./298342.js"),
  Chunk761822 = require("./761822.js"),
  Chunk131664 = require("./131664.js"),
  Chunk389457 = require("./389457.js"),
  Chunk673252 = require("./673252.js"),
  Chunk869708 = require("./869708.js"),
  Chunk288829 = require("./288829.js"),
  Chunk943323 = require("./943323.js"),
  Chunk958657 = require("./958657.js"),
  Chunk605493 = require("./605493.js");
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
      dark: Chunk538092.Z,
      light: Chunk131664.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      dark: Chunk533577.Z,
      light: Chunk389457.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      dark: Chunk799974.Z,
      light: Chunk673252.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      dark: Chunk264511.Z,
      light: Chunk869708.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      dark: Chunk345614.Z,
      light: Chunk288829.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      dark: Chunk925773.Z,
      light: Chunk943323.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      dark: Chunk298342.Z,
      light: Chunk958657.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      dark: Chunk761822.Z,
      light: Chunk605493.Z
    }
  };

function N() {
  let e = (0, Chunk804413.Z)(),
    t = (0, Chunk780384.wj)((0, Chunk410030.ZP)());
  if (!module) return null;
  let n = S[module],
    o = E[module],
    c = {
      currentBadge: (0, Chunk291175.fv)(module),
      currentBadgeTextGradient: exports ? null == require ? true : require.dark : null == require ? true : require.light,
      levelUpVideoSrc: exports ? null == Chunk538092 ? true : Chunk538092.dark : null == Chunk538092 ? true : Chunk538092.light
    },
    d = Chunk474936.Qh.indexOf(module);
  if (Chunk799974 > 0) {
    let e = Chunk474936.Qh[Chunk799974 - 1],
      n = S[module];
    Chunk533577.prevBadge = (0, Chunk291175.fv)(module), Chunk533577.prevBadgeTextGradient = exports ? null == require ? true : require.dark : null == require ? true : require.light
  }
  return Chunk533577
}