/** Chunk was on 94682 **/
/** chunk id: 394245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PT: () => o,
  Pb: () => u,
  W3: () => s,
  me: () => c
});
var r, Chunk761915 = require("./761915.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");
let o = {
    [Chunk761915.X.BETTER_THAN_YOU]: {
      getText: () => a.intl.string(a.t.jbIRBE),
      icon: Chunk397927.qsD
    },
    [Chunk761915.X.CASUAL]: {
      getText: () => a.intl.string(a.t.xcFFv6),
      icon: Chunk397927.qsD
    },
    [Chunk761915.X.INTERMEDIATE]: {
      getText: () => a.intl.string(a.t["A/mIs/"]),
      icon: Chunk397927.qsD
    },
    [Chunk761915.X.EXPERT]: {
      getText: () => a.intl.string(a.t.RIOFc2),
      icon: Chunk397927.qsD
    },
    [Chunk761915.X.OBSESSED]: {
      getText: () => a.intl.string(a.t.isPJDu),
      icon: Chunk397927.Gek
    },
    [Chunk761915.X.LOVE_IT]: {
      getText: () => a.intl.string(a.t["1rN7BF"]),
      icon: Chunk397927.Gek
    },
    [Chunk761915.X.KIND_OF_LOVE_IT]: {
      getText: () => a.intl.string(a.t.bCBpVg),
      icon: Chunk397927.Gek
    },
    [Chunk761915.X.KIND_OF_HATE_IT]: {
      getText: () => a.intl.string(a.t["/WcmcP"]),
      icon: Chunk397927.d2e
    },
    [Chunk761915.X.RAGE_QUITTING]: {
      getText: () => a.intl.string(a.t["NXZ/MZ"]),
      icon: Chunk397927.d2e
    },
    [Chunk761915.X.OPEN_TO_PLAY]: {
      getText: () => a.intl.string(a.t.q30PoH),
      icon: Chunk397927.$yI
    },
    [Chunk761915.X.LOOKING_FOR_GROUP]: {
      getText: () => a.intl.string(a.t.DWWAAQ),
      icon: Chunk397927.$yI
    },
    [Chunk761915.X.LOOKING_FOR_TIPS]: {
      getText: () => a.intl.string(a.t.KQDVvH),
      icon: Chunk397927.$yI
    },
    [Chunk761915.X.OPEN_TO_TEACH]: {
      getText: () => a.intl.string(a.t["5HhQo+"]),
      icon: Chunk397927.$yI
    },
    [Chunk761915.X.LOOKING_TO_DISCUSS]: {
      getText: () => a.intl.string(a.t.GipOCq),
      icon: Chunk397927.$yI
    }
  },
  s = e => {
    let t = o[e];
    return null != t ? t : null
  };
var c = ((r = {}).RADIO = "radio", r.CHECKBOX = "checkbox", r);
let u = {
  skill_level: {
    getLabel: () => a.intl.string(a.t.MKqADM),
    type: "radio",
    tags: [Chunk761915.X.CASUAL, Chunk761915.X.INTERMEDIATE, Chunk761915.X.EXPERT, Chunk761915.X.BETTER_THAN_YOU]
  },
  rating: {
    getLabel: () => a.intl.string(a.t["7/umul"]),
    type: "checkbox",
    tags: [Chunk761915.X.OBSESSED, Chunk761915.X.LOVE_IT, Chunk761915.X.KIND_OF_LOVE_IT, Chunk761915.X.KIND_OF_HATE_IT, Chunk761915.X.RAGE_QUITTING]
  },
  looking_for: {
    getLabel: () => a.intl.string(a.t["5Dez17"]),
    type: "checkbox",
    tags: [Chunk761915.X.LOOKING_FOR_GROUP, Chunk761915.X.OPEN_TO_PLAY, Chunk761915.X.LOOKING_FOR_TIPS, Chunk761915.X.OPEN_TO_TEACH, Chunk761915.X.LOOKING_TO_DISCUSS]
  }
}