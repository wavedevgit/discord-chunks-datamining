/** Chunk was on web.js **/
/** chunk id: 632257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk674746 = require("./674746.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk666743 = require("./666743.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk125321 = require("./125321.js");
let y = e => {
    let {
      isAuthenticated: t,
      user: n
    } = e, i = (0, h.I5)(n, g.PremiumTypes.TIER_2), s = (0, f.ZP)();
    return (0, r.jsx)(u.Z, {
      section: m.jXE.NAVIGATION,
      children: (0, r.jsx)(c.f6W, {
        theme: s,
        children: e => (0, r.jsxs)(_.Z, {
          isAuthenticated: t,
          className: a()(e, {
            [b.headerBarV2LightBackground]: !i && !(0, l.wj)(s),
            [b.headerBarV2DarkBackground]: !i && (0, l.wj)(s)
          }),
          role: "navigation",
          children: [(0, r.jsx)(_.Z.Icon, {
            icon: c.SrA,
            "aria-hidden": true,
            color: i ? true : o.Z.PREMIUM_TIER_2_PINK
          }), (0, r.jsx)(_.Z.Title, {
            children: E.intl.string(E.t.Ipxkog)
          })]
        })
      })
    })
  },
  O = Chunk442837.ZP.connectStores([Chunk594174.default], () => ({
    user: Chunk594174.default.getCurrentUser()
  }))((0, Chunk666743.Z)(y))