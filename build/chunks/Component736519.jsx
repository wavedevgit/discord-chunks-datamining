/** Chunk was on web.js **/
/** chunk id: 736519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => p,
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk146116 = require("./146116.js");
let p = e => e === d.Si.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6),
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
    } = e, b = (0, c.ZP)(), y = p(h);
    return (0, r.jsx)(u.Z, {
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
        return (0, r.jsxs)(s.zx, {
          "data-migration-pending": true,
          innerClassName: _.innerGiftButton,
          color: null != i ? i : (0, o.wj)(b) ? s.Tt.WHITE : s.Tt.BRAND,
          look: null != d ? d : s.iL.OUTLINED,
          className: a()(t, _.giftButton),
          onClick: u,
          children: [!f && (0, r.jsx)(l.OgN, {
            size: "md",
            color: "currentColor",
            className: _.giftIcon
          }), (0, r.jsx)("span", {
            className: a()(_.buttonText, null == n ? true : n.textClassName),
            children: null != (c = null == n ? true : n.textOverride) ? c : y
          })]
        })
      }
    })
  }