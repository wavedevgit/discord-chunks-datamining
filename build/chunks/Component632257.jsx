/** Chunk was on web.js **/
/** chunk id: 632257, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk845761 = require("./845761.js");
let b = e => {
    let {
      isAuthenticated: t,
      user: n
    } = e, i = (0, _.I5)(n, m.PremiumTypes.TIER_2), o = (0, d.ZP)();
    return (0, r.jsx)(c.Z, {
      section: h.jXE.NAVIGATION,
      children: (0, r.jsx)(l.f6W, {
        theme: o,
        children: e => (0, r.jsxs)(f.Z, {
          isAuthenticated: t,
          className: a()(e, {
            [E.headerBarV2LightBackground]: !i && !(0, s.wj)(o),
            [E.headerBarV2DarkBackground]: !i && (0, s.wj)(o)
          }),
          role: "navigation",
          children: [(0, r.jsx)(f.Z.Icon, {
            icon: l.SrA,
            "aria-hidden": true,
            color: i ? true : l.TVs.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
          }), (0, r.jsx)(f.Z.Title, {
            children: g.intl.string(g.t.Ipxkog)
          })]
        })
      })
    })
  },
  y = Chunk442837.ZP.connectStores([Chunk594174.default], () => ({
    user: p.default.getCurrentUser()
  }))((0, Chunk666743.Z)(b))