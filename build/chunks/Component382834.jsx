/** Chunk was on 1272 **/
/** chunk id: 382834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk469165 = require("./469165.jsx"),
  Chunk675957 = require("./675957.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398300 = require("./398300.js");
let m = e => {
  let {
    targetElementRef: t
  } = e, n = true === (0, i.e7)([s.default], () => o.ZP.isPremiumExactly(s.default.getCurrentUser(), d.PremiumTypes.TIER_2)) ? p.intl.string(p.t.CMKNhr) : p.intl.string(p.t.E1ONHQ);
  return (0, r.jsx)(l.J2, {
    targetElementRef: t,
    title: p.intl.string(p.t["V8J+16"]),
    body: n,
    graphic: {
      type: "image",
      src: f.Z
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
      text: p.intl.string(p.t["CDdYB/"]),
      onClick: () => {
        (0, c.wQ)({
          analyticsLocations: [a.Z.HOME_PAGE_PREMIUM_TAB]
        }), (0, u.ow)()
      }
    }],
    onRequestClose: u.ow
  })
}