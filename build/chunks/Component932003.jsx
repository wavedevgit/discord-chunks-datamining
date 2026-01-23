/** Chunk was on web.js **/
/** chunk id: 932003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk807098 = require("./807098.js"),
  Chunk412260 = require("./412260.js"),
  Chunk810498 = require("./810498.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk708611 = require("./708611.js");

function h() {
  var e;
  let t = (0, a.bG)([o.A], () => o.A.useReducedMotion),
    {
      claimableRewards: n
    } = (0, l.Pv)(),
    h = (0, a.bG)([u.A], () => {
      let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
      return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftPlanSelectionCardBanner
    }),
    m = (0, c.T)(null == h ? true : h.bannerAsset),
    g = (0, c.T)(null == h ? true : h.avatarAsset),
    E = null == h ? true : h.gradient,
    y = null != E && null != E.colors && E.colors.length >= 2 ? (0, d.K5)({
      gradient: E.colors,
      angle: null != (e = E.angle) ? e : true
    }) : true;
  return null == h || null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
    className: _.kL,
    style: y,
    children: [null != m && (0, r.jsx)("div", {
      className: _._e,
      style: {
        backgroundImage: "url(".concat(m, ")")
      }
    }), (0, r.jsxs)("div", {
      className: _.V_,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/bold",
        color: "always-white",
        children: p.intl.string(p.t.OEtqpm)
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: p.intl.formatToPlainString(p.t["2h5M+X"], {
          availableCount: n.length
        })
      })]
    }), (0, r.jsx)("div", {
      className: _.my,
      children: null != g ? (0, r.jsx)(f.A, {
        maxRewardImageSrc: g,
        claimableRewards: n,
        size: s._3J.SIZE_48,
        imageScaling: t ? 1.9 : 2.4
      }) : null
    })]
  })
}