/** Chunk was on 1272 **/
/** chunk id: 382834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk813820 = require("./813820.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk336197 = require("./336197.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk469165 = require("./469165.jsx"),
  Chunk675957 = require("./675957.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk836236 = require("./836236.js");
let b = e => {
  var t;
  let {
    targetElementRef: n
  } = e, b = (0, i.e7)([c.default], () => c.default.getCurrentUser()), _ = false === u.ZP.isPremiumExactly(b, f.PremiumTypes.TIER_2), E = (null == b || null == (t = b.premiumState) ? true : t.premiumSource) === l.d3.FRACTIONAL_NITRO && (null == b ? true : b.premiumState.premiumSubscriptionType) !== l.W$.TIER_2, O = true === (null == b || _ || E) ? h.intl.string(h.t.E1ONHQ) : h.intl.string(h.t.CMKNhr);
  return (0, r.jsx)(a.J2, {
    targetElementRef: n,
    title: h.intl.string(h.t["V8J+16"]),
    body: O,
    graphic: {
      type: "image",
      src: m.Z
    },
    badge: {
      type: "beta",
      variant: "expressive"
    },
    size: "md",
    alignmentStrategy: "edge",
    align: "top",
    position: "right",
    caretConfig: {
      align: "start"
    },
    actions: [{
      text: h.intl.string(h.t["CDdYB/"]),
      onClick: () => {
        (0, s.Z)(g.Z5c.NITRO_HOME), (0, d.wQ)({
          analyticsLocations: [o.Z.HOME_PAGE_PREMIUM_TAB]
        }), (0, p.ow)()
      }
    }],
    onRequestClose: p.ow
  })
}