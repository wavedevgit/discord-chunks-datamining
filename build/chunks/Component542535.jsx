/** Chunk was on web.js **/
/** chunk id: 542535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk352423 = require("./352423.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk532794 = require("./532794.jsx"),
  Chunk22354 = require("./22354.js"),
  Chunk987237 = require("./987237.jsx"),
  Chunk508591 = require("./508591.jsx"),
  Chunk603538 = require("./603538.jsx"),
  Chunk30084 = require("./30084.jsx"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk976860 = require("./976860.js"),
  Chunk305003 = require("./305003.js"),
  Chunk588455 = require("./588455.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk439174 = require("./439174.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk262 = require("./262.js"),
  Chunk950191 = require("./950191.js"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk854232 = require("./854232.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk448263 = require("./448263.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === A.A.ORB_PROFILE_BADGE ? (0, r.jsx)(v.A, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== M.K ? (0, r.jsx)(g.A, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function Y(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: g,
    displayProfile: v,
    onClose: G,
    shouldOpenBadgeTooltip: F,
    shouldGlowTenureBadge: Y
  } = e, W = i.useRef(null), {
    analyticsLocations: K
  } = (0, d.Ay)(u.A.BADGE), {
    context: z,
    trackUserProfileAction: q
  } = (0, N.NJ)(), X = S.default.getCurrentUser(), Z = (0, T.CC)(null == X ? true : X.premiumType, j.PremiumTypes.TIER_2), Q = (0, P.AP)(null != (t = null == X ? true : X.id) ? t : null), $ = (0, w.A)(Q).some(e => e.id === A.A.ORB_PROFILE_BADGE), J = (0, h.C)(X, "UserProfileBadgeList"), ee = (0, _.X)("UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: s()(U.k, a),
    "aria-label": k.intl.string(k.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === A.A.ORB_PROFILE_BADGE,
        a = (0, C.e0)(e.id),
        d = null != a || e.id === M.K,
        _ = (null == v ? true : v.userId) === (null == X ? true : X.id),
        S = t => {
          if (q({
              action: "PRESS_BADGE"
            }), (0, R.R9)(V({
              badge: e.id,
              analyticsLocations: K
            }, z)), i) return void(0, f.Cz)({
            tab: L.G2.ORBS,
            analyticsLocations: K,
            analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (d) {
            if (t.preventDefault(), I.default.track(x.HAw.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: Z,
                viewed_user_id: null == v ? true : v.userId
              }), Z) {
              _ ? (0, O.pX)(x.BVt.NITRO_HOME) : (0, E.D)({
                analyticsLocations: K,
                displayProfile: v
              }), null == G || G();
              return
            }
            if (_) {
              let n = null != e.link ? (0, c.default)(e.link, {
                analyticsLocations: K
              }) : null;
              if (null == n) return;
              return null == G || G(), n(t)
            }
            return (0, E.D)({
              analyticsLocations: K,
              displayProfile: v
            }), void(null == G || G())
          }
          let n = null != e.link ? (0, c.default)(e.link, {
            analyticsLocations: K
          }) : null;
          if (null != n) return null == G || G(), n(t)
        },
        T = () => {
          e.id === w.h && I.default.track(x.HAw.QUEST_CONTENT_VIEWED, B(V({}, (0, b.fF)(y.uF.QUEST_BADGE)), {
            is_targeted: false
          })), q({
            action: "HOVER_BADGE"
          }), (0, R.sQ)(V({
            badge: e.id,
            analyticsLocations: K
          }, z))
        },
        N = true !== a && e.id !== M.K,
        P = _ && J && N,
        Q = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, D.L7)(e.icon),
          className: s()(U.q, g)
        }),
        et = {
          onClick: S,
          onMouseEnter: T,
          href: e.link,
          "aria-label": e.description,
          style: {
            filter: Y && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (P) {
        let n = (0, r.jsx)(l.MzZ, B(V({}, et), {
          ref: W,
          children: Q
        }));
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(h.A, {
            targetElementRef: W,
            mode: "tooltip",
            tooltipDelay: D.In,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      if (N) {
        let n = (0, r.jsx)(l.MzZ, B(V({}, et), {
            ref: W,
            children: Q
          })),
          i = () => {
            (0, p.A)({
              initialPlanId: null,
              subscriptionTier: j.pe.TIER_2,
              analyticsLocations: K
            })
          },
          a = ee && !Z,
          s = a ? [{
            text: k.intl.string(k.t.pj0XBN),
            variant: "expressive",
            icon: l.tvc,
            iconPosition: "start",
            onClick: i
          }] : true,
          o = a ? 262 : 220;
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(m.A, {
            badgeId: e.id,
            targetElementRef: W,
            mode: "tooltip",
            tooltipDelay: D.In,
            body: e.description,
            actions: s,
            onShow: () => {
              I.default.track(x.HAw.TOOLTIP_VIEWED, {
                type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other")
              })
            },
            estimatedTooltipHeight: o,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      let en = (0, r.jsx)(l.MzZ, B(V({}, et), {
          children: Q
        })),
        er = H({
          badge: e,
          tieredTenureBadge: d && e.id !== M.K ? a : true,
          currentUserOwnsOrbBadge: $
        });
      return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: er,
        forceOpen: null != F && F(e.id),
        delay: D.In,
        ariaHidden: true,
        children: en
      }, "".concat(e.id, "-").concat(t))
    })
  })
}