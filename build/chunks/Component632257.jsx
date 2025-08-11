/** Chunk was on 75708 **/
/** chunk id: 632257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk881207 = require("./881207.js");
let j = Chunk442837.ZP.connectStores([Chunk594174.default], () => ({
  user: Chunk594174.default.getCurrentUser()
}))((0, Chunk666743.Z)(e => {
  let {
    isAuthenticated: t,
    user: n
  } = e, r = (0, h.I5)(n, b.p9.TIER_2), l = (0, m.ZP)();
  return (0, i.jsx)(d.Z, {
    section: f.jXE.NAVIGATION,
    children: (0, i.jsx)(c.f6W, {
      theme: l,
      children: e => (0, i.jsxs)(p.Z, {
        isAuthenticated: t,
        className: s()(_.headerBar, e, {
          [_.headerBarV2LightBackground]: !r && !(0, o.wj)(l),
          [_.headerBarV2DarkBackground]: !r && (0, o.wj)(l)
        }),
        role: "navigation",
        children: [(0, i.jsx)(p.Z.Icon, {
          icon: c.SrA,
          "aria-hidden": true,
          color: r ? true : a.Z.PREMIUM_TIER_2_PINK
        }), (0, i.jsx)(p.Z.Title, {
          children: x.intl.string(x.t.Ipxkoq)
        })]
      })
    })
  })
}))