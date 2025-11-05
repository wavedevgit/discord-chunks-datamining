/** Chunk was on 1272 **/
/** chunk id: 382834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk398300 = require("./398300.js");
let m = e => {
  let {
    targetElementRef: t
  } = e, n = true === (0, i.e7)([o.default], () => c.ZP.isPremiumExactly(o.default.getCurrentUser(), p.PremiumTypes.TIER_2)) ? h.intl.string(h.t.CMKNhr) : h.intl.string(h.t.E1ONHQ);
  return (0, r.jsx)(l.J2, {
    targetElementRef: t,
    title: h.intl.string(h.t["V8J+16"]),
    body: n,
    graphic: {
      type: "image",
      src: g.Z
    },
    badge: {
      type: "beta",
      variant: "expressive"
    },
    size: "md",
    align: "top",
    position: "right",
    caretConfig: {
      align: "start"
    },
    actions: [{
      text: h.intl.string(h.t["CDdYB/"]),
      onClick: () => {
        (0, s.Z)(f.Z5c.NITRO_HOME), (0, u.wQ)({
          analyticsLocations: [a.Z.HOME_PAGE_PREMIUM_TAB]
        }), (0, d.ow)()
      }
    }],
    onRequestClose: d.ow
  })
}