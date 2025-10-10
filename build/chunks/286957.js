/** Chunk was on 36073 **/
/** chunk id: 286957, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  XV: () => l,
  aE: () => u,
  kd: () => s,
  zK: () => c
});
var n, Chunk379405 = require("./379405.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let l = {
    [Chunk379405._.BETTER_THAN_YOU]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.jbIRBA),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.CASUAL]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.xcFFv7),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.INTERMEDIATE]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t["A/mIs7"]),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.EXPERT]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.RIOFc3),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.LOVE_IT]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t["1rN7BA"]),
      icon: Chunk481060.lbB
    },
    [Chunk379405._.KIND_OF_LOVE_IT]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.bCBpVl),
      icon: Chunk481060.lbB
    },
    [Chunk379405._.KIND_OF_HATE_IT]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t["/WcmcH"]),
      icon: Chunk481060.kZ9
    },
    [Chunk379405._.RAGE_QUITTING]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t["NXZ/MT"]),
      icon: Chunk481060.kZ9
    },
    [Chunk379405._.OPEN_TO_PLAY]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.q30PoK),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.LOOKING_FOR_GROUP]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.DWWAAQ),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.LOOKING_FOR_TIPS]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t.KQDVvL),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.OPEN_TO_TEACH]: {
      getText: () => Chunk388032.intl.string(Chunk388032.t["5HhQo6"]),
      icon: Chunk481060.iFz
    }
  },
  c = e => {
    let t = l[e];
    return null != t ? t : null
  };
var s = ((n = {}).RADIO = "radio", n.CHECKBOX = "checkbox", n);
let u = {
  skill_level: {
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.MKqADA),
    type: "radio",
    tags: [Chunk379405._.CASUAL, Chunk379405._.INTERMEDIATE, Chunk379405._.EXPERT, Chunk379405._.BETTER_THAN_YOU]
  },
  rating: {
    getLabel: () => Chunk388032.intl.string(Chunk388032.t["7/umur"]),
    type: "checkbox",
    tags: [Chunk379405._.LOVE_IT, Chunk379405._.KIND_OF_LOVE_IT, Chunk379405._.KIND_OF_HATE_IT, Chunk379405._.RAGE_QUITTING]
  },
  looking_for: {
    getLabel: () => Chunk388032.intl.string(Chunk388032.t["5Dez19"]),
    type: "checkbox",
    tags: [Chunk379405._.LOOKING_FOR_GROUP, Chunk379405._.OPEN_TO_PLAY, Chunk379405._.LOOKING_FOR_TIPS, Chunk379405._.OPEN_TO_TEACH]
  }
}