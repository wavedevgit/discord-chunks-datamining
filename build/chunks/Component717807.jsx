/** Chunk was on 21738 **/
/** chunk id: 717807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk988506 = require("./988506.js"),
  Chunk342494 = require("./342494.js"),
  Chunk793574 = require("./793574.js"),
  Chunk22007 = require("./22007.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk161319 = require("./161319.jsx"),
  Chunk385327 = require("./385327.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk174872 = require("./174872.js");
let A = e => {
  var t;
  let {
    targetElementRef: n
  } = e, A = (0, i.bG)([c.default], () => c.default.getCurrentUser()), _ = false === u.Ay.isPremiumExactly(A, h.PremiumTypes.TIER_2), b = (null == A || null == (t = A.premiumState) ? true : t.premiumSource) === l.fE.FRACTIONAL_NITRO && (null == A ? true : A.premiumState.premiumSubscriptionType) !== l.jK.TIER_2, E = true === (null == A || _ || b) ? g.intl.string(g.t.E1ONHQ) : g.intl.string(g.t.CMKNhr);
  return (0, r.jsx)(a.AM, {
    targetElementRef: n,
    title: g.intl.string(g.t["V8J+16"]),
    body: E,
    graphic: {
      type: "image",
      src: m.A
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
      text: g.intl.string(g.t["CDdYB/"]),
      onClick: () => {
        (0, o.A)(f.BVt.NITRO_HOME), (0, d.uE)({
          analyticsLocations: [s.A.HOME_PAGE_PREMIUM_TAB]
        }), (0, p.Es)()
      }
    }],
    onRequestClose: p.Es
  })
}