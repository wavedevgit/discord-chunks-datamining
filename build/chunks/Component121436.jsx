/** Chunk was on 89839 **/
/** chunk id: 121436, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => B
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
  Chunk667059 = require("./667059.js");
let B = e => {
  var a, t;
  let {
    transitionState: d,
    onClose: B,
    displayProfile: E
  } = e, {
    analyticsLocations: S
  } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL), I = (0, u.Dt)(), L = Object.values(_.vK), A = (0, T.SI)(null == E ? true : E.userId), D = (0, T.Rw)(), R = g.default.getCurrentUser(), f = null != (t = (0, T.a1)(null != (a = null == E ? true : E.userId) ? a : null == R ? true : R.id)) ? t : new Date, k = (0, x.yd)(null == R ? true : R.premiumType, _.PremiumTypes.TIER_2), P = L.map(e => {
    let {
      id: a,
      nameUnformatted: t,
      tenureReqNumMonths: d
    } = e, l = j.intl.string(t), r = (0, h.J)(a), c = (0, v.q)(a, d), o = null == E, u = o && (null == D ? true : D.id) === a, m = !o && (null == A ? true : A.id) === a, g = u && (null == D ? true : D.status) === T.Vq.EARNED, x = u && (null == D ? true : D.status) === T.Vq.UPCOMING, b = m || g;
    return (0, n.jsxs)("div", {
      className: i()(p.badge, {
        [p.earnedBadge]: b || x
      }),
      children: [(0, n.jsx)("img", {
        src: r,
        alt: l,
        className: p.badgeImage
      }), (0, n.jsxs)("div", {
        className: p.badgeText,
        children: [(0, n.jsx)(s.xvT, {
          variant: "text-md/semibold",
          className: p.badgeName,
          children: l
        }), (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          children: c
        }), b && (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: p.earnedBadgeSubSince,
          children: j.intl.formatToPlainString(j.t.Hu4jfi, {
            date: f
          })
        }), x && (0, n.jsx)(s.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: p.earnedBadgeSubSince,
          children: j.intl.formatToPlainString(j.t.PPL1Il, {
            days: null == D ? true : D.daysLeft
          })
        })]
      })]
    }, a)
  }), y = () => {
    (0, m.uL)(N.Z5c.APPLICATION_STORE, {
      source: c.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: S
    }), null == B || B()
  };
  return (0, n.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: d,
    "aria-labelledby": I,
    className: i()(p.container, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, n.jsx)(r.olH, {
      "data-migration-pending": true,
      onClick: B,
      className: p.closeButton
    }), (0, n.jsx)(r.hzk, {
      "data-migration-pending": true,
      className: p.content,
      children: k ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.xvT, {
          variant: "display-md",
          className: p.header,
          children: j.intl.string(j.t.Og62j7)
        }), (0, n.jsx)(s.xvT, {
          variant: "text-md/medium",
          className: p.subHeader,
          children: j.intl.string(j.t.IdAP91)
        }), (0, n.jsx)("div", {
          className: p.badgeList,
          children: P
        }), null != E && E.userId !== (null == R ? true : R.id) && (0, n.jsx)(r.gtL, {
          "data-migration-pending": true,
          className: p.learnMoreButton,
          onClick: y,
          children: j.intl.string(j.t.hvVgAZ)
        })]
      }) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.xvT, {
          variant: "display-md",
          className: p.header,
          children: j.intl.string(j.t.RtGeFS)
        }), (0, n.jsx)(s.xvT, {
          variant: "text-md/medium",
          className: p.subHeader,
          children: j.intl.format(j.t.ffatnT, {
            onClick: y
          })
        }), (0, n.jsx)("div", {
          className: p.badgeList,
          children: P
        }), (0, n.jsx)(b.Z, {
          className: p.subscribeButton,
          premiumModalAnalyticsLocation: {
            page: N.ZY5.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: j.intl.string(j.t.JST6jl)
          },
          subscriptionTier: _.Si.TIER_2,
          showGradient: true,
          color: l.Tt.BRAND
        })]
      })
    })]
  })
}