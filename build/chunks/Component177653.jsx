/** Chunk was on web.js **/
/** chunk id: 177653, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk469778 = require("./469778.js"),
  Chunk927578 = require("./927578.js"),
  Chunk538511 = require("./538511.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk802937 = require("./802937.js");

function y(e) {
  let t, {
      user: n,
      planId: i,
      count: s,
      userPremiumSubscription: o,
      unconsumedFractionalPremiumUnits: u = []
    } = e,
    [f, p] = (0, l.yK)([d.A], () => [d.A.get(i), null != o ? d.A.get(o.planId) : null]);
  if (null == f || _.Ay.getInterval(i).intervalType !== m.WT.MONTH) return null;
  let h = null != p ? p.skuId : null,
    y = f.skuId === h,
    O = _.Ay.getDisplayName(i);
  if (null != o) {
    let e;
    e = new Date(o.status === g.Dmq.PAUSED && null != o.pauseEndsAt ? o.pauseEndsAt : o.currentPeriodEnd), t = (0, _._e)(e, u)
  }
  return (0, r.jsxs)("div", {
    className: b.Bh,
    children: [(0, r.jsx)("div", {
      className: a()({
        [b.sr]: f.skuId === m.pe.TIER_0,
        [b.lP]: f.skuId === m.pe.TIER_1,
        [b.eb]: f.skuId === m.pe.TIER_2
      }),
      children: (0, r.jsx)(c.tvc, {
        size: "md",
        color: "currentColor",
        className: b.Kk
      })
    }), (0, r.jsxs)("div", {
      className: b.pt,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        children: E.intl.format(E.t.LzobT9, {
          planName: O
        })
      }), n.hasFreePremium() || null != o && o.isPurchasedExternally ? null : (0, r.jsx)(c.Heading, {
        className: b.gj,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: y && null != o ? E.intl.formatToPlainString(E.t["5CNRRA"], {
          date: null != t ? t : 0
        }) : E.intl.formatToPlainString(E.t.eNXZ5O, {
          planName: O
        })
      })]
    }), (0, r.jsx)(c.Text, {
      className: b.PJ,
      variant: "text-md/semibold",
      children: E.intl.format(E.t["ess/xl"], {
        count: s
      })
    })]
  })
}
let O = function(e) {
  let {
    className: t,
    entitlements: n
  } = e, i = o()(Array.from(n)).filter(e => {
    let {
      subscriptionPlanId: t,
      parentId: n,
      consumed: r
    } = e;
    return null != t && null != n && !r
  }).groupBy(e => e.subscriptionPlanId).value(), s = (0, l.yK)([p.A], () => p.A.getUnactivatedFractionalPremiumUnits()), d = (0, l.bG)([f.A], () => f.A.getPremiumSubscription()), _ = (0, l.bG)([f.A], () => null == f.A.getPremiumTypeSubscription()), g = Object.keys(i).some(e => e === m.gD.PREMIUM_MONTH_TIER_1) && _, O = (0, l.bG)([u.default], () => u.default.getCurrentUser());
  return null == O ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: a()(t, b.xF, b.J_),
      children: Object.keys(i).map(e => (0, r.jsx)(y, {
        planId: e,
        count: i[e].length,
        userPremiumSubscription: d,
        user: O,
        unconsumedFractionalPremiumUnits: s
      }, e))
    }), g && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        className: b.eT,
        variant: "text-md/normal",
        children: E.intl.string(E.t["VNr4+O"])
      }), (0, r.jsx)(h.i, {})]
    })]
  })
}