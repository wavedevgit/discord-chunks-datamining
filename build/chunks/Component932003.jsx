/** Chunk was on 2292 **/
/** chunk id: 932003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => x
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

function x() {
  var e;
  let t = (0, l.bG)([s.A], () => s.A.useReducedMotion),
    {
      claimableRewards: r
    } = (0, o.Pv)(),
    x = (0, l.bG)([u.A], () => {
      let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
      return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftPlanSelectionCardBanner
    }),
    C = (0, c.T)(null == x ? true : x.bannerAsset),
    f = (0, c.T)(null == x ? true : x.avatarAsset),
    T = null == x ? true : x.gradient,
    h = null != T && null != T.colors && T.colors.length >= 2 ? (0, d.K5)({
      gradient: T.colors,
      angle: null != (e = T.angle) ? e : true
    }) : true;
  return null == x || null == r || 0 === r.length ? null : (0, n.jsxs)("div", {
    className: g.kL,
    style: h,
    children: [null != C && (0, n.jsx)("div", {
      className: g._e,
      style: {
        backgroundImage: "url(".concat(C, ")")
      }
    }), (0, n.jsxs)("div", {
      className: g.V_,
      children: [(0, n.jsx)(a.Text, {
        variant: "text-md/bold",
        color: "always-white",
        children: p.intl.string(p.t.OEtqpm)
      }), (0, n.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "always-white",
        children: p.intl.formatToPlainString(p.t["2h5M+X"], {
          availableCount: r.length
        })
      })]
    }), (0, n.jsx)("div", {
      className: g.my,
      children: null != f ? (0, n.jsx)(m.A, {
        maxRewardImageSrc: f,
        claimableRewards: r,
        size: a._3J.SIZE_48,
        imageScaling: t ? 1.9 : 2.4
      }) : null
    })]
  })
}