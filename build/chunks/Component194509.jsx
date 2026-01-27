/** Chunk was on web.js **/
/** chunk id: 194509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h,
  U: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk783420 = require("./783420.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk194597 = require("./194597.js");
let _ = e => e === d.pe.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6),
  h = e => {
    let {
      className: t,
      textOptions: n,
      color: i,
      look: d,
      hideIcon: f,
      subscriptionTier: h,
      premiumModalAnalyticsLocation: m,
      giftMessage: g,
      onClick: E
    } = e, y = (0, c.Ay)(), b = _(h);
    return (0, r.jsx)(u.A, {
      isGift: true,
      subscriptionTier: h,
      premiumModalAnalyticsLocation: m,
      giftMessage: g,
      onClick: E,
      children: e => {
        var c;
        let {
          onClick: u
        } = e;
        return (0, r.jsxs)(s.$n, {
          "data-migration-pending": true,
          innerClassName: p.Nq,
          color: null != i ? i : (0, o.Mw)(y) ? s.XD.WHITE : s.XD.BRAND,
          look: null != d ? d : s.pR.OUTLINED,
          className: a()(t, p.xP),
          onClick: u,
          children: [!f && (0, r.jsx)(l.okO, {
            size: "md",
            color: "currentColor",
            className: p.ez
          }), (0, r.jsx)("span", {
            className: a()(p._d, null == n ? true : n.textClassName),
            children: null != (c = null == n ? true : n.textOverride) ? c : b
          })]
        })
      }
    })
  }