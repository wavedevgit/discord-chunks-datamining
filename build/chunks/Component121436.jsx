/** Chunk was on 89839 **/
/** chunk id: 121436, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk802557 = require("./802557.js");
let E = a => {
  var e, t;
  let {
    transitionState: d,
    onClose: E,
    displayProfile: S
  } = a, {
    analyticsLocations: I
  } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL), L = (0, u.Dt)(), _ = Object.values(N.vK), A = (0, T.SI)(null == S ? true : S.userId), D = (0, T.Rw)(), R = b.default.getCurrentUser(), f = null != (t = (0, T.a1)(null != (e = null == S ? true : S.userId) ? e : null == R ? true : R.id)) ? t : new Date, k = (0, g.yd)(null == R ? true : R.premiumType, N.PremiumTypes.TIER_2), P = _.map(a => {
    let {
      id: e,
      nameUnformatted: t,
      tenureReqNumMonths: d
    } = a, l = p.intl.string(t), r = (0, h.J)(e), c = (0, v.q)(e, d), o = null == S, u = o && (null == D ? true : D.id) === e, m = !o && (null == A ? true : A.id) === e, b = u && (null == D ? true : D.status) === T.Vq.EARNED, g = u && (null == D ? true : D.status) === T.Vq.UPCOMING, x = m || b;
    return (0, n.jsxs)("div", {
      className: i()(B.badge, {
        [B.earnedBadge]: x || g
      }),
      children: [(0, n.jsx)("img", {
        src: r,
        alt: l,
        className: B.badgeImage
      }), (0, n.jsxs)("div", {
        className: B.badgeText,
        children: [(0, n.jsx)(s.xvT, {
          variant: "text-md/semibold",
          className: B.badgeName,
          children: l
        }), (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          children: c
        }), x && (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: B.earnedBadgeSubSince,
          children: p.intl.formatToPlainString(p.t.Hu4jfi, {
            date: f
          })
        }), g && (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: B.earnedBadgeSubSince,
          children: p.intl.formatToPlainString(p.t.PPL1Il, {
            days: null == D ? true : D.daysLeft
          })
        })]
      })]
    }, e)
  }), y = () => {
    (0, m.uL)(j.Z5c.APPLICATION_STORE, {
      source: c.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: I
    }), null == E || E()
  };
  return (0, n.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: d,
    "aria-labelledby": L,
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
        children: [(0, n.jsx)(s.xvT, {
          variant: "display-md",
          className: B.header,
          children: p.intl.string(p.t.Og62j7)
        }), (0, n.jsx)(s.xvT, {
          variant: "text-md/medium",
          className: B.subHeader,
          children: p.intl.string(p.t.IdAP91)
        }), (0, n.jsx)("div", {
          className: B.badgeList,
          children: P
        }), null != S && S.userId !== (null == R ? true : R.id) && (0, n.jsx)(r.gtL, {
          "data-migration-pending": true,
          className: B.learnMoreButton,
          onClick: y,
          children: p.intl.string(p.t.hvVgAZ)
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.xvT, {
          variant: "display-md",
          className: B.header,
          children: p.intl.string(p.t.RtGeFS)
        }), (0, n.jsx)(s.xvT, {
          variant: "text-md/medium",
          className: B.subHeader,
          children: p.intl.format(p.t.ffatnT, {
            onClick: y
          })
        }), (0, n.jsx)("div", {
          className: B.badgeList,
          children: P
        }), (0, n.jsx)(x.Z, {
          className: B.subscribeButton,
          premiumModalAnalyticsLocation: {
            page: j.ZY5.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: p.intl.string(p.t.JST6jl)
          },
          subscriptionTier: N.Si.TIER_2,
          showGradient: true,
          color: l.Tt.BRAND
        })]
      })
    })]
  })
}