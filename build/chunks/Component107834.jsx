/** Chunk was on 2827 **/
/** chunk id: 107834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk490415 = require("./490415.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk187585 = require("./187585.js");
let h = Chunk311907.Ay.connectStores([Chunk287809.default], () => ({
  user: p.default.getCurrentUser()
}))((0, Chunk490415.A)(e => {
  let {
    isAuthenticated: t,
    user: n
  } = e, i = (0, m.TW)(n, A.PremiumTypes.TIER_2), s = (0, u.Ay)();
  return (0, r.jsx)(c.A, {
    section: g.JJy.NAVIGATION,
    children: (0, r.jsx)(o.NPJ, {
      theme: s,
      children: e => (0, r.jsxs)(_.A, {
        isAuthenticated: t,
        className: l()(e, {
          [b.xD]: !i && !(0, a.Mw)(s),
          [b.lO]: !i && (0, a.Mw)(s)
        }),
        role: "navigation",
        children: [(0, r.jsx)(_.A.Icon, {
          icon: o.tvc,
          "aria-hidden": true,
          color: i ? true : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
        }), (0, r.jsx)(_.A.Title, {
          children: f.intl.string(f.t.Ipxkog)
        })]
      })
    })
  })
}))