/** Chunk was on 9207 **/
/** chunk id: 177653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
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

function E(e) {
  let t, {
      user: n,
      planId: i,
      count: s,
      userPremiumSubscription: a,
      unconsumedFractionalPremiumUnits: d = []
    } = e,
    [_, p] = (0, o.yK)([u.A], () => [u.A.get(i), null != a ? u.A.get(a.planId) : null]);
  if (null == _ || m.Ay.getInterval(i).intervalType !== A.WT.MONTH) return null;
  let g = null != p ? p.skuId : null,
    E = _.skuId === g,
    O = m.Ay.getDisplayName(i);
  if (null != a) {
    let e;
    e = new Date(a.status === f.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd), t = (0, m._e)(e, d)
  }
  return (0, r.jsxs)("div", {
    className: h.Bh,
    children: [(0, r.jsx)("div", {
      className: l()({
        [h.sr]: _.skuId === A.pe.TIER_0,
        [h.lP]: _.skuId === A.pe.TIER_1,
        [h.eb]: _.skuId === A.pe.TIER_2
      }),
      children: (0, r.jsx)(c.tvc, {
        size: "md",
        color: "currentColor",
        className: h.Kk
      })
    }), (0, r.jsxs)("div", {
      className: h.pt,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        children: b.intl.format(b.t.LzobT9, {
          planName: O
        })
      }), n.hasFreePremium() || null != a && a.isPurchasedExternally ? null : (0, r.jsx)(c.Heading, {
        className: h.gj,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: E && null != a ? b.intl.formatToPlainString(b.t["5CNRRA"], {
          date: null != t ? t : 0
        }) : b.intl.formatToPlainString(b.t.eNXZ5O, {
          planName: O
        })
      })]
    }), (0, r.jsx)(c.Text, {
      className: h.PJ,
      variant: "text-md/semibold",
      children: b.intl.format(b.t["ess/xl"], {
        count: s
      })
    })]
  })
}
let O = function(e) {
  let {
    className: t,
    entitlements: n
  } = e, i = a()(Array.from(n)).filter(e => {
    let {
      subscriptionPlanId: t,
      parentId: n,
      consumed: r
    } = e;
    return null != t && null != n && !r
  }).groupBy(e => e.subscriptionPlanId).value(), s = (0, o.yK)([p.A], () => p.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()), m = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()), f = Object.keys(i).some(e => e === A.gD.PREMIUM_MONTH_TIER_1), O = (0, o.bG)([d.default], () => d.default.getCurrentUser());
  return null == O ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: l()(t, h.xF, h.J_),
      children: Object.keys(i).map(e => (0, r.jsx)(E, {
        planId: e,
        count: i[e].length,
        userPremiumSubscription: u,
        user: O,
        unconsumedFractionalPremiumUnits: s
      }, e))
    }), f && m && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        className: h.eT,
        variant: "text-md/normal",
        children: b.intl.string(b.t["VNr4+O"])
      }), (0, r.jsx)(g.i, {})]
    })]
  })
}