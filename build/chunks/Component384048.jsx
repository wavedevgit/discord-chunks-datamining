/** Chunk was on 77641 **/
/** chunk id: 384048, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
let O = e => {
  var t, n;
  let {
    transitionState: a,
    onClose: O,
    displayProfile: f
  } = e, {
    analyticsLocations: h
  } = (0, d.Ay)(c.A.TIERED_TENURE_BADGES_MODAL), y = (0, u.GV)(), A = Object.values(g.VD), R = (0, N.p3)(null == f ? true : f.userId), M = (0, N.$F)(), I = _.default.getCurrentUser(), P = null != (t = (0, N.rG)(null != (n = null == f ? true : f.userId) ? n : null == I ? true : I.id)) ? t : new Date, S = (0, E.CC)(null == I ? true : I.premiumType, g.PremiumTypes.TIER_2), U = A.map(e => {
    let {
      id: t,
      nameUnformatted: n,
      tenureReqNumMonths: a
    } = e, s = v.intl.string(n), o = (0, T.I)(t), c = (0, x.T)(t, a), d = null == f, u = d && (null == M ? true : M.id) === t, m = !d && (null == R ? true : R.id) === t, _ = u && (null == M ? true : M.status) === N.Wo.EARNED, E = u && (null == M ? true : M.status) === N.Wo.UPCOMING, p = m || _;
    return (0, r.jsxs)("div", {
      className: i()(j.qS, {
        [j.Ny]: p || E
      }),
      children: [(0, r.jsx)("img", {
        src: o,
        alt: s,
        className: j.pq
      }), (0, r.jsxs)("div", {
        className: j.Vv,
        children: [(0, r.jsx)(l.EYj, {
          variant: "text-md/semibold",
          className: j.Vd,
          children: s
        }), (0, r.jsx)(l.EYj, {
          variant: "text-xs/normal",
          children: c
        }), p && (0, r.jsx)(l.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: j.h8,
          children: v.intl.formatToPlainString(v.t.Hu4jfi, {
            date: P
          })
        }), E && (0, r.jsx)(l.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: j.h8,
          children: v.intl.formatToPlainString(v.t.PPL1Il, {
            days: null == M ? true : M.daysLeft
          })
        })]
      })]
    }, t)
  }), w = () => {
    (0, m.pX)(b.BVt.APPLICATION_STORE, {
      source: c.A.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: h
    }), null == O || O()
  };
  return (0, r.jsxs)(o.EOs, {
    "data-migration-pending": true,
    transitionState: a,
    "aria-labelledby": y,
    className: i()(j.kL, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, r.jsx)(o.s_y, {
      "data-migration-pending": true,
      onClick: O,
      className: j.b
    }), (0, r.jsx)(o.$mQ, {
      "data-migration-pending": true,
      className: j.Qs,
      children: S ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.EYj, {
          variant: "display-md",
          className: j.wx,
          children: v.intl.string(v.t.Og62j7)
        }), (0, r.jsx)(l.EYj, {
          variant: "text-md/medium",
          className: j.uI,
          children: v.intl.string(v.t.IdAP91)
        }), (0, r.jsx)("div", {
          className: j.C_,
          children: U
        }), null != f && f.userId !== (null == I ? true : I.id) && (0, r.jsx)(o.wLn, {
          "data-migration-pending": true,
          className: j.AJ,
          onClick: w,
          children: v.intl.string(v.t.hvVgAZ)
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.EYj, {
          variant: "display-md",
          className: j.wx,
          children: v.intl.string(v.t.RtGeFS)
        }), (0, r.jsx)(l.EYj, {
          variant: "text-md/medium",
          className: j.uI,
          children: v.intl.format(v.t.ffatnT, {
            onClick: w
          })
        }), (0, r.jsx)("div", {
          className: j.C_,
          children: U
        }), (0, r.jsx)(p.A, {
          className: j.xF,
          premiumModalAnalyticsLocation: {
            page: b.liQ.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: v.intl.string(v.t.JST6jl)
          },
          subscriptionTier: g.pe.TIER_2,
          showGradient: true,
          color: s.XD.BRAND
        })]
      })
    })]
  })
}