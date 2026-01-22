/** Chunk was on 77641 **/
/** chunk id: 384048, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk976860 = require("./976860.js"),
  Chunk287809 = require("./287809.js"),
  Chunk474090 = require("./474090.js"),
  Chunk396375 = require("./396375.jsx"),
  Chunk764231 = require("./764231.js"),
  Chunk112848 = require("./112848.js"),
  Chunk149757 = require("./149757.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk830786 = require("./830786.js");
let b = a => {
  var e, t;
  let {
    transitionState: s,
    onClose: b,
    displayProfile: T
  } = a, {
    analyticsLocations: A
  } = (0, m.Ay)(c.A.TIERED_TENURE_BADGES_MODAL), I = (0, o.GV)(), C = Object.values(_.VD), D = (0, p.p3)(null == T ? true : T.userId), y = (0, p.$F)(), R = x.default.getCurrentUser(), S = null != (e = (0, p.rG)(null != (t = null == T ? true : T.userId) ? t : null == R ? true : R.id)) ? e : new Date, k = (0, j.CC)(null == R ? true : R.premiumType, _.PremiumTypes.TIER_2), L = C.map(a => {
    let {
      id: e,
      nameUnformatted: t,
      tenureReqNumMonths: s
    } = a, d = f.intl.string(t), r = (0, h.I)(e), c = (0, E.T)(e, s), m = null == T, o = m && (null == y ? true : y.id) === e, u = !m && (null == D ? true : D.id) === e, x = o && (null == y ? true : y.status) === p.Wo.EARNED, j = o && (null == y ? true : y.status) === p.Wo.UPCOMING, v = u || x;
    return (0, i.jsxs)("div", {
      className: l()(g.qS, {
        [g.Ny]: v || j
      }),
      children: [(0, i.jsx)("img", {
        src: r,
        alt: d,
        className: g.pq
      }), (0, i.jsxs)("div", {
        className: g.Vv,
        children: [(0, i.jsx)(n.EYj, {
          variant: "text-md/semibold",
          className: g.Vd,
          children: d
        }), (0, i.jsx)(n.EYj, {
          variant: "text-xs/normal",
          children: c
        }), v && (0, i.jsx)(n.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: g.h8,
          children: f.intl.formatToPlainString(f.t.Hu4jfi, {
            date: S
          })
        }), j && (0, i.jsx)(n.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: g.h8,
          children: f.intl.formatToPlainString(f.t.PPL1Il, {
            days: null == y ? true : y.daysLeft
          })
        })]
      })]
    }, e)
  }), O = () => {
    (0, u.pX)(N.BVt.APPLICATION_STORE, {
      source: c.A.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: A
    }), null == b || b()
  };
  return (0, i.jsxs)(r.EOs, {
    "data-migration-pending": true,
    transitionState: s,
    "aria-labelledby": I,
    className: l()(g.kL, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, i.jsx)(r.s_y, {
      "data-migration-pending": true,
      onClick: b,
      className: g.b
    }), (0, i.jsx)(r.$mQ, {
      "data-migration-pending": true,
      className: g.Qs,
      children: k ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n.EYj, {
          variant: "display-md",
          className: g.wx,
          children: f.intl.string(f.t.Og62j7)
        }), (0, i.jsx)(n.EYj, {
          variant: "text-md/medium",
          className: g.uI,
          children: f.intl.string(f.t.IdAP91)
        }), (0, i.jsx)("div", {
          className: g.C_,
          children: L
        }), null != T && T.userId !== (null == R ? true : R.id) && (0, i.jsx)(r.wLn, {
          "data-migration-pending": true,
          className: g.AJ,
          onClick: O,
          children: f.intl.string(f.t.hvVgAZ)
        })]
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(n.EYj, {
          variant: "display-md",
          className: g.wx,
          children: f.intl.string(f.t.RtGeFS)
        }), (0, i.jsx)(n.EYj, {
          variant: "text-md/medium",
          className: g.uI,
          children: f.intl.format(f.t.ffatnT, {
            onClick: O
          })
        }), (0, i.jsx)("div", {
          className: g.C_,
          children: L
        }), (0, i.jsx)(v.A, {
          className: g.xF,
          premiumModalAnalyticsLocation: {
            page: N.liQ.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: f.intl.string(f.t.JST6jl)
          },
          subscriptionTier: _.pe.TIER_2,
          showGradient: true,
          color: d.XD.BRAND
        })]
      })
    })]
  })
}