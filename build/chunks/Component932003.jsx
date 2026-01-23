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
  Chunk743108 = require("./743108.js"),
  Chunk298305 = require("./298305.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk708611 = require("./708611.js");

function h() {
  let e = (0, a.bG)([o.A], () => o.A.useReducedMotion),
    {
      claimableRewards: t
    } = (0, l.Pv)(),
    n = (0, a.bG)([u.A], () => {
      let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
      return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftPlanSelectionCardBanner
    }),
    h = (0, c.T)(null == n ? true : n.bannerAsset),
    m = (0, c.T)(null == n ? true : n.avatarAsset),
    g = (0, d.F)(null == n ? true : n.gradient);
  return null == n || null == t || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: _.kL,
    style: g,
    children: [null != h && (0, r.jsx)("div", {
      className: _._e,
      style: {
        backgroundImage: "url(".concat(h, ")")
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
          availableCount: t.length
        })
      })]
    }), (0, r.jsx)("div", {
      className: _.my,
      children: null != m ? (0, r.jsx)(f.A, {
        maxRewardImageSrc: m,
        claimableRewards: t,
        size: s._3J.SIZE_48,
        imageScaling: e ? 1.9 : 2.4
      }) : null
    })]
  })
}