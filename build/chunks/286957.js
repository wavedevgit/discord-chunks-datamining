/** Chunk was on 60646 **/
/** chunk id: 286957, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  XV: () => o,
  aE: () => u,
  kd: () => s,
  zK: () => c
});
var r, Chunk379405 = require("./379405.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let o = {
    [Chunk379405._.BETTER_THAN_YOU]: {
      getText: () => l.intl.string(l.t.jbIRBE),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.CASUAL]: {
      getText: () => l.intl.string(l.t.xcFFv6),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.INTERMEDIATE]: {
      getText: () => l.intl.string(l.t["A/mIs/"]),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.EXPERT]: {
      getText: () => l.intl.string(l.t.RIOFc2),
      icon: Chunk481060.jrt
    },
    [Chunk379405._.OBSESSED]: {
      getText: () => l.intl.string(l.t.isPJDu),
      icon: Chunk481060.lbB
    },
    [Chunk379405._.LOVE_IT]: {
      getText: () => l.intl.string(l.t["1rN7BF"]),
      icon: Chunk481060.lbB
    },
    [Chunk379405._.KIND_OF_LOVE_IT]: {
      getText: () => l.intl.string(l.t.bCBpVg),
      icon: Chunk481060.lbB
    },
    [Chunk379405._.KIND_OF_HATE_IT]: {
      getText: () => l.intl.string(l.t["/WcmcP"]),
      icon: Chunk481060.kZ9
    },
    [Chunk379405._.RAGE_QUITTING]: {
      getText: () => l.intl.string(l.t["NXZ/MZ"]),
      icon: Chunk481060.kZ9
    },
    [Chunk379405._.OPEN_TO_PLAY]: {
      getText: () => l.intl.string(l.t.q30PoH),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.LOOKING_FOR_GROUP]: {
      getText: () => l.intl.string(l.t.DWWAAQ),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.LOOKING_FOR_TIPS]: {
      getText: () => l.intl.string(l.t.KQDVvH),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.OPEN_TO_TEACH]: {
      getText: () => l.intl.string(l.t["5HhQo+"]),
      icon: Chunk481060.iFz
    },
    [Chunk379405._.LOOKING_TO_DISCUSS]: {
      getText: () => l.intl.string(l.t.GipOCq),
      icon: Chunk481060.iFz
    }
  },
  c = e => {
    let t = o[e];
    return null != t ? t : null
  };
var s = ((r = {}).RADIO = "radio", r.CHECKBOX = "checkbox", r);
let u = {
  skill_level: {
    getLabel: () => l.intl.string(l.t.MKqADM),
    type: "radio",
    tags: [Chunk379405._.CASUAL, Chunk379405._.INTERMEDIATE, Chunk379405._.EXPERT, Chunk379405._.BETTER_THAN_YOU]
  },
  rating: {
    getLabel: () => l.intl.string(l.t["7/umul"]),
    type: "checkbox",
    tags: [Chunk379405._.OBSESSED, Chunk379405._.LOVE_IT, Chunk379405._.KIND_OF_LOVE_IT, Chunk379405._.KIND_OF_HATE_IT, Chunk379405._.RAGE_QUITTING]
  },
  looking_for: {
    getLabel: () => l.intl.string(l.t["5Dez17"]),
    type: "checkbox",
    tags: [Chunk379405._.LOOKING_FOR_GROUP, Chunk379405._.OPEN_TO_PLAY, Chunk379405._.LOOKING_FOR_TIPS, Chunk379405._.OPEN_TO_TEACH, Chunk379405._.LOOKING_TO_DISCUSS]
  }
}