/** Chunk was on 75708 **/
/** chunk id: 736519, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => g,
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk638068 = require("./638068.js");
let g = e => e === u.Si.TIER_0 ? m.intl.string(m.t.rk4Uu7) : m.intl.string(m.t.Ve9Ge3),
  h = e => {
    let {
      className: t,
      textOptions: n,
      color: r,
      look: u,
      hideIcon: m,
      subscriptionTier: h,
      premiumModalAnalyticsLocation: f,
      giftMessage: b,
      onClick: x
    } = e, _ = (0, c.ZP)(), j = g(h);
    return (0, i.jsx)(d.Z, {
      isGift: true,
      subscriptionTier: h,
      premiumModalAnalyticsLocation: f,
      giftMessage: b,
      onClick: x,
      children: e => {
        var c;
        let {
          onClick: d
        } = e;
        return (0, i.jsxs)(l.zx, {
          innerClassName: p.innerGiftButton,
          color: null != r ? r : (0, a.wj)(_) ? l.Tt.WHITE : l.Tt.BRAND,
          look: null != u ? u : l.iL.OUTLINED,
          className: s()(t, p.giftButton),
          onClick: d,
          children: [!m && (0, i.jsx)(o.OgN, {
            size: "md",
            color: "currentColor",
            className: p.giftIcon
          }), (0, i.jsx)("span", {
            className: s()(p.buttonText, null == n ? true : n.textClassName),
            children: null != (c = null == n ? true : n.textOverride) ? c : j
          })]
        })
      }
    })
  }