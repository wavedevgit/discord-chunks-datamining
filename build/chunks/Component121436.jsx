/** Chunk was on 89839 **/
/** chunk id: 121436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk176237 = require("./176237.js"),
  Chunk553896 = require("./553896.js"),
  Chunk848572 = require("./848572.js"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk840052 = require("./840052.js");
let O = e => {
  var t, n;
  let {
    transitionState: a,
    onClose: O,
    displayProfile: h
  } = e, {
    analyticsLocations: S
  } = (0, c.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL), M = (0, o.Dt)(), P = Object.values(x.vK), R = (0, p.SI)(null == h ? true : h.userId), U = (0, p.Rw)(), y = g.default.getCurrentUser(), I = null != (n = (0, p.a1)(null != (t = null == h ? true : h.userId) ? t : null == y ? true : y.id)) ? n : new Date, B = (0, b.yd)(null == y ? true : y.premiumType, x.p9.TIER_2), D = P.map(e => {
    let {
      id: t,
      nameUnformatted: n,
      tenureReqNumMonths: a
    } = e, u = T.intl.string(n), d = (0, E.J)(t), s = (0, _.q)(t, a), c = null == h, o = c && (null == U ? true : U.id) === t, m = !c && (null == R ? true : R.id) === t, g = o && (null == U ? true : U.status) === p.Vq.EARNED, b = o && (null == U ? true : U.status) === p.Vq.UPCOMING, v = m || g;
    return (0, l.jsxs)("div", {
      className: r()(j.badge, {
        [j.earnedBadge]: v || b
      }),
      children: [(0, l.jsx)("img", {
        src: d,
        alt: u,
        className: j.badgeImage
      }), (0, l.jsxs)("div", {
        className: j.badgeText,
        children: [(0, l.jsx)(i.xv, {
          variant: "text-md/semibold",
          className: j.badgeName,
          children: u
        }), (0, l.jsx)(i.xv, {
          variant: "text-xs/normal",
          children: s
        }), v && (0, l.jsx)(i.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: j.earnedBadgeSubSince,
          children: T.intl.formatToPlainString(T.t.Hu4jfn, {
            date: I
          })
        }), b && (0, l.jsx)(i.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: j.earnedBadgeSubSince,
          children: T.intl.formatToPlainString(T.t.PPL1Ii, {
            days: null == U ? true : U.daysLeft
          })
        })]
      })]
    }, t)
  }), w = () => {
    (0, m.uL)(N.Z5c.APPLICATION_STORE, {
      source: s.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: S
    }), null == O || O()
  }, {
    enabled: C
  } = f.$.useExperiment({
    location: "evolving_tenure_badge_modal_web"
  }, {
    autoTrackExposure: false
  });
  return (0, l.jsxs)(d.Y0X, {
    "data-migration-pending": true,
    transitionState: a,
    "aria-labelledby": M,
    className: r()(j.container, "theme-dark"),
    parentComponent: "EvolvingTenureBadgeModal",
    children: [(0, l.jsx)(d.olH, {
      "data-migration-pending": true,
      onClick: O,
      className: j.closeButton
    }), (0, l.jsxs)(d.hzk, {
      "data-migration-pending": true,
      className: j.content,
      children: [B ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.xv, {
          variant: "display-md",
          className: j.header,
          children: T.intl.string(T.t.Og62j4)
        }), (0, l.jsx)(i.xv, {
          variant: "text-md/medium",
          className: j.subHeader,
          children: T.intl.string(T.t["IdAP9/"])
        }), (0, l.jsx)("div", {
          className: j.badgeList,
          children: D
        }), null != h && h.userId !== (null == y ? true : y.id) && (0, l.jsx)(d.gtL, {
          className: j.learnMoreButton,
          onClick: w,
          children: T.intl.string(T.t.hvVgAQ)
        })]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.xv, {
          variant: "display-md",
          className: j.header,
          children: T.intl.string(T.t.RtGeFR)
        }), (0, l.jsx)(i.xv, {
          variant: "text-md/medium",
          className: j.subHeader,
          children: T.intl.format(T.t.ffatnZ, {
            onClick: w
          })
        }), (0, l.jsx)("div", {
          className: j.badgeList,
          children: D
        }), (0, l.jsx)(v.Z, {
          className: j.subscribeButton,
          premiumModalAnalyticsLocation: {
            page: N.ZY5.TIERED_TENURE_BADGES_MODAL
          },
          textOptions: {
            subscribeText: T.intl.string(T.t.JST6jo)
          },
          subscriptionTier: x.Si.TIER_2,
          showGradient: true,
          color: u.Tt.BRAND
        })]
      }), C && (0, l.jsx)(() => (f.D.useConfig({
        location: "evolving_tenure_badge_modal_web"
      }), (0, l.jsx)(l.Fragment, {})), {})]
    })]
  })
}