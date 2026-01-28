/** Chunk was on 5606 **/
/** chunk id: 177653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
    [p, _] = (0, o.yK)([u.A], () => [u.A.get(i), null != a ? u.A.get(a.planId) : null]);
  if (null == p || m.Ay.getInterval(i).intervalType !== f.WT.MONTH) return null;
  let g = null != _ ? _.skuId : null,
    E = p.skuId === g,
    x = m.Ay.getDisplayName(i);
  if (null != a) {
    let e;
    e = new Date(a.status === b.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd), t = (0, m._e)(e, d)
  }
  return (0, r.jsxs)("div", {
    className: A.Bh,
    children: [(0, r.jsx)("div", {
      className: l()({
        [A.sr]: p.skuId === f.pe.TIER_0,
        [A.lP]: p.skuId === f.pe.TIER_1,
        [A.eb]: p.skuId === f.pe.TIER_2
      }),
      children: (0, r.jsx)(c.tvc, {
        size: "md",
        color: "currentColor",
        className: A.Kk
      })
    }), (0, r.jsxs)("div", {
      className: A.pt,
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        children: h.intl.format(h.t.LzobT9, {
          planName: x
        })
      }), n.hasFreePremium() || null != a && a.isPurchasedExternally ? null : (0, r.jsx)(c.Heading, {
        className: A.gj,
        variant: "heading-sm/semibold",
        color: "text-default",
        children: E && null != a ? h.intl.formatToPlainString(h.t["5CNRRA"], {
          date: null != t ? t : 0
        }) : h.intl.formatToPlainString(h.t.eNXZ5O, {
          planName: x
        })
      })]
    }), (0, r.jsx)(c.Text, {
      className: A.PJ,
      variant: "text-md/semibold",
      children: h.intl.format(h.t["ess/xl"], {
        count: s
      })
    })]
  })
}
let x = function(e) {
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
  }).groupBy(e => e.subscriptionPlanId).value(), s = (0, o.yK)([_.A], () => _.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([p.A], () => p.A.getPremiumSubscription()), m = (0, o.bG)([p.A], () => null == p.A.getPremiumTypeSubscription()), b = Object.keys(i).some(e => e === f.gD.PREMIUM_MONTH_TIER_1), x = (0, o.bG)([d.default], () => d.default.getCurrentUser());
  return null == x ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: l()(t, A.xF, A.J_),
      children: Object.keys(i).map(e => (0, r.jsx)(E, {
        planId: e,
        count: i[e].length,
        userPremiumSubscription: u,
        user: x,
        unconsumedFractionalPremiumUnits: s
      }, e))
    }), b && m && (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Text, {
        className: A.eT,
        variant: "text-md/normal",
        children: h.intl.string(h.t["VNr4+O"])
      }), (0, r.jsx)(g.i, {})]
    })]
  })
}