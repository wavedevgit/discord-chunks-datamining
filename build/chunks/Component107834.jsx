/** Chunk was on web.js **/
/** chunk id: 107834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let y = e => {
    let {
      isAuthenticated: t,
      user: n
    } = e, i = (0, _.TW)(n, m.PremiumTypes.TIER_2), s = (0, d.Ay)();
    return (0, r.jsx)(c.A, {
      section: h.JJy.NAVIGATION,
      children: (0, r.jsx)(l.NPJ, {
        theme: s,
        children: e => (0, r.jsxs)(f.A, {
          isAuthenticated: t,
          className: a()(e, {
            [E.xD]: !i && !(0, o.Mw)(s),
            [E.lO]: !i && (0, o.Mw)(s)
          }),
          role: "navigation",
          children: [(0, r.jsx)(f.A.Icon, {
            icon: l.tvc,
            "aria-hidden": true,
            color: i ? true : l.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
          }), (0, r.jsx)(f.A.Title, {
            children: g.intl.string(g.t.Ipxkog)
          })]
        })
      })
    })
  },
  b = Chunk311907.Ay.connectStores([Chunk287809.default], () => ({
    user: p.default.getCurrentUser()
  }))((0, Chunk490415.A)(y))