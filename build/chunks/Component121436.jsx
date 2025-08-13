/** Chunk was on 89839 **/
/** chunk id: 121436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk772649 = require("./772649.js");
let O = e => {
  var t, n;
  let {
    transitionState: l,
    onClose: O,
    displayProfile: j
  } = e, {
    analyticsLocations: h
  } = (0, c.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL), S = (0, o.Dt)(), M = Object.values(E.vK), P = (0, v.SI)(null == j ? true : j.userId), U = (0, v.Rw)(), R = g.default.getCurrentUser(), y = null != (n = (0, v.a1)(null != (t = null == j ? true : j.userId) ? t : null == R ? true : R.id)) ? n : new Date, I = (0, b.yd)(null == R ? true : R.premiumType, E.p9.TIER_2), B = M.map(e => {
    let {
      id: t,
      nameUnformatted: n,
      tenureReqNumMonths: l
    } = e, u = x.intl.string(n), d = (0, _.J)(t), s = (0, p.q)(t, l), c = null == j, o = c && (null == U ? true : U.id) === t, m = !c && (null == P ? true : P.id) === t, g = o && (null == U ? true : U.status) === v.Vq.EARNED, b = o && (null == U ? true : U.status) === v.Vq.UPCOMING, f = m || g;
    return (0, r.jsxs)("div", {
      className: a()(T.badge, {
        [T.earnedBadge]: f || b
      }),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: u,
        className: T.badgeImage
      }), (0, r.jsxs)("div", {
        className: T.badgeText,
        children: [(0, r.jsx)(i.xv, {
          variant: "text-md/semibold",
          className: T.badgeName,
          children: u
        }), (0, r.jsx)(i.xv, {
          variant: "text-xs/normal",
          children: s
        }), f && (0, r.jsx)(i.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: T.earnedBadgeSubSince,
          children: x.intl.formatToPlainString(x.t.Hu4jfn, {
            date: y
          })
        }), b && (0, r.jsx)(i.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: T.earnedBadgeSubSince,
          children: x.intl.formatToPlainString(x.t.PPL1Ii, {
            days: null == U ? true : U.daysLeft
          })
        })]
      })]
    }, t)
  }), D = () => {
    (0, m.uL)(N.Z5c.APPLICATION_STORE, {
      source: s.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: h
    }), null == O || O()
  };
  return (0, r.jsxs)(d.Y0X, {
    "data-migration-pending": true,
    transitionState: l,
    "aria-labelledby": S,
    className: a()(T.container, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, r.jsx)(d.olH, {
      "data-migration-pending": true,
      onClick: O,
      className: T.closeButton
    }), (0, r.jsx)(d.hzk, {
      "data-migration-pending": true,
      className: T.content,
      children: I ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.xv, {
          variant: "display-md",
          className: T.header,
          children: x.intl.string(x.t.Og62j4)
        }), (0, r.jsx)(i.xv, {
          variant: "text-md/medium",
          className: T.subHeader,
          children: x.intl.string(x.t["IdAP9/"])
        }), (0, r.jsx)("div", {
          className: T.badgeList,
          children: B
        }), null != j && j.userId !== (null == R ? true : R.id) && (0, r.jsx)(d.gtL, {
          "data-migration-pending": true,
          className: T.learnMoreButton,
          onClick: D,
          children: x.intl.string(x.t.hvVgAQ)
        })]
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.xv, {
          variant: "display-md",
          className: T.header,
          children: x.intl.string(x.t.RtGeFR)
        }), (0, r.jsx)(i.xv, {
          variant: "text-md/medium",
          className: T.subHeader,
          children: x.intl.format(x.t.ffatnZ, {
            onClick: D
          })
        }), (0, r.jsx)("div", {
          className: T.badgeList,
          children: B
        }), (0, r.jsx)(f.Z, {
          className: T.subscribeButton,
          premiumModalAnalyticsLocation: {
            page: N.ZY5.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: x.intl.string(x.t.JST6jo)
          },
          subscriptionTier: E.Si.TIER_2,
          showGradient: true,
          color: u.Tt.BRAND
        })]
      })
    })]
  })
}