/** Chunk was on 77641 **/
/** chunk id: 384048, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  default: () => b
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
let b = a => {
  var e, t;
  let {
    transitionState: s,
    onClose: b,
    displayProfile: A
  } = a, {
    analyticsLocations: I
  } = (0, o.Ay)(c.A.TIERED_TENURE_BADGES_MODAL), C = (0, m.GV)(), D = Object.values(h.VD), S = (0, v.p3)(null == A ? true : A.userId), y = (0, v.$F)(), L = x.default.getCurrentUser(), R = null != (e = (0, v.rG)(null != (t = null == A ? true : A.userId) ? t : null == L ? true : L.id)) ? e : new Date, k = (0, g.CC)(null == L ? true : L.premiumType, h.PremiumTypes.TIER_2), B = D.map(a => {
    let {
      id: e,
      nameUnformatted: t,
      tenureReqNumMonths: s
    } = a, d = N.intl.string(t), r = (0, E.I)(e), c = (0, _.T)(e, s), o = null == A, m = o && (null == y ? true : y.id) === e, u = !o && (null == S ? true : S.id) === e, x = m && (null == y ? true : y.status) === v.Wo.EARNED, g = m && (null == y ? true : y.status) === v.Wo.UPCOMING, j = u || x;
    return (0, n.jsxs)("div", {
      className: i()(T.qS, {
        [T.Ny]: j || g
      }),
      children: [(0, n.jsx)("img", {
        src: r,
        alt: d,
        className: T.pq
      }), (0, n.jsxs)("div", {
        className: T.Vv,
        children: [(0, n.jsx)(l.EYj, {
          variant: "text-md/semibold",
          className: T.Vd,
          children: d
        }), (0, n.jsx)(l.EYj, {
          variant: "text-xs/normal",
          children: c
        }), j && (0, n.jsx)(l.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: T.h8,
          children: N.intl.formatToPlainString(N.t.Hu4jfi, {
            date: R
          })
        }), g && (0, n.jsx)(l.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: T.h8,
          children: N.intl.formatToPlainString(N.t.PPL1Il, {
            days: null == y ? true : y.daysLeft
          })
        })]
      })]
    }, e)
  }), O = () => {
    (0, u.pX)(p.BVt.APPLICATION_STORE, {
      source: c.A.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: I
    }), null == b || b()
  };
  return (0, n.jsxs)(r.EOs, {
    "data-migration-pending": true,
    transitionState: s,
    "aria-labelledby": C,
    className: i()(T.kL, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, n.jsx)(r.s_y, {
      "data-migration-pending": true,
      onClick: b,
      className: T.b
    }), (0, n.jsx)(r.$mQ, {
      "data-migration-pending": true,
      className: T.Qs,
      children: k ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.EYj, {
          variant: "display-md",
          className: T.wx,
          children: N.intl.string(N.t.Og62j7)
        }), (0, n.jsx)(l.EYj, {
          variant: "text-md/medium",
          className: T.uI,
          children: N.intl.string(N.t.IdAP91)
        }), (0, n.jsx)("div", {
          className: T.C_,
          children: B
        }), null != A && A.userId !== (null == L ? true : L.id) && (0, n.jsx)(r.wLn, {
          "data-migration-pending": true,
          className: T.AJ,
          onClick: O,
          children: N.intl.string(N.t.hvVgAZ)
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.EYj, {
          variant: "display-md",
          className: T.wx,
          children: N.intl.string(N.t.RtGeFS)
        }), (0, n.jsx)(l.EYj, {
          variant: "text-md/medium",
          className: T.uI,
          children: N.intl.format(N.t.ffatnT, {
            onClick: O
          })
        }), (0, n.jsx)("div", {
          className: T.C_,
          children: B
        }), (0, n.jsx)(j.A, {
          className: T.xF,
          premiumModalAnalyticsLocation: {
            page: p.liQ.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: N.intl.string(N.t.JST6jl)
          },
          subscriptionTier: h.pe.TIER_2,
          showGradient: true,
          color: d.XD.BRAND
        })]
      })
    })]
  })
}