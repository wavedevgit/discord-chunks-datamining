/** Chunk was on 89839 **/
/** chunk id: 121436, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397206 = require("./397206.js");
let E = e => {
  var a, t;
  let {
    transitionState: d,
    onClose: E,
    displayProfile: T
  } = e, {
    analyticsLocations: S
  } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL), I = (0, u.Dt)(), L = Object.values(N.vK), R = (0, h.SI)(null == T ? true : T.userId), A = (0, h.Rw)(), D = g.default.getCurrentUser(), f = null != (t = (0, h.a1)(null != (a = null == T ? true : T.userId) ? a : null == D ? true : D.id)) ? t : new Date, k = (0, x.yd)(null == D ? true : D.premiumType, N.p9.TIER_2), C = L.map(e => {
    let {
      id: a,
      nameUnformatted: t,
      tenureReqNumMonths: d
    } = e, l = p.intl.string(t), r = (0, _.J)(a), c = (0, v.q)(a, d), o = null == T, u = o && (null == A ? true : A.id) === a, m = !o && (null == R ? true : R.id) === a, g = u && (null == A ? true : A.status) === h.Vq.EARNED, x = u && (null == A ? true : A.status) === h.Vq.UPCOMING, b = m || g;
    return (0, n.jsxs)("div", {
      className: i()(B.badge, {
        [B.earnedBadge]: b || x
      }),
      children: [(0, n.jsx)("img", {
        src: r,
        alt: l,
        className: B.badgeImage
      }), (0, n.jsxs)("div", {
        className: B.badgeText,
        children: [(0, n.jsx)(s.xv, {
          variant: "text-md/semibold",
          className: B.badgeName,
          children: l
        }), (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          children: c
        }), b && (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: B.earnedBadgeSubSince,
          children: p.intl.formatToPlainString(p.t.Hu4jfn, {
            date: f
          })
        }), x && (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: B.earnedBadgeSubSince,
          children: p.intl.formatToPlainString(p.t.PPL1Ii, {
            days: null == A ? true : A.daysLeft
          })
        })]
      })]
    }, a)
  }), M = () => {
    (0, m.uL)(j.Z5c.APPLICATION_STORE, {
      source: c.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: S
    }), null == E || E()
  };
  return (0, n.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: d,
    "aria-labelledby": I,
    className: i()(B.container, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, n.jsx)(r.olH, {
      "data-migration-pending": true,
      onClick: E,
      className: B.closeButton
    }), (0, n.jsx)(r.hzk, {
      "data-migration-pending": true,
      className: B.content,
      children: k ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.xv, {
          variant: "display-md",
          className: B.header,
          children: p.intl.string(p.t.Og62j4)
        }), (0, n.jsx)(s.xv, {
          variant: "text-md/medium",
          className: B.subHeader,
          children: p.intl.string(p.t["IdAP9/"])
        }), (0, n.jsx)("div", {
          className: B.badgeList,
          children: C
        }), null != T && T.userId !== (null == D ? true : D.id) && (0, n.jsx)(r.gtL, {
          "data-migration-pending": true,
          className: B.learnMoreButton,
          onClick: M,
          children: p.intl.string(p.t.hvVgAQ)
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.xv, {
          variant: "display-md",
          className: B.header,
          children: p.intl.string(p.t.RtGeFR)
        }), (0, n.jsx)(s.xv, {
          variant: "text-md/medium",
          className: B.subHeader,
          children: p.intl.format(p.t.ffatnZ, {
            onClick: M
          })
        }), (0, n.jsx)("div", {
          className: B.badgeList,
          children: C
        }), (0, n.jsx)(b.Z, {
          className: B.subscribeButton,
          premiumModalAnalyticsLocation: {
            page: j.ZY5.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: p.intl.string(p.t.JST6jo)
          },
          subscriptionTier: N.Si.TIER_2,
          showGradient: true,
          color: l.Tt.BRAND
        })]
      })
    })]
  })
}