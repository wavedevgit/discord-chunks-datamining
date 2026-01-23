/** Chunk was on web.js **/
/** chunk id: 542535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
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

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === b.A.ORB_PROFILE_BADGE ? (0, r.jsx)(O.A, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== L.K ? (0, r.jsx)(h.A, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function B(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: h,
    displayProfile: O,
    onClose: k,
    shouldOpenBadgeTooltip: G,
    shouldGlowTenureBadge: B
  } = e, H = i.useRef(null), {
    analyticsLocations: Y
  } = (0, d.Ay)(u.A.BADGE), {
    context: W,
    trackUserProfileAction: K
  } = (0, T.NJ)(), z = v.default.getCurrentUser(), q = (0, I.CC)(null == z ? true : z.premiumType, x.PremiumTypes.TIER_2), Z = (0, w.AP)(null != (t = null == z ? true : z.id) ? t : null), X = (0, N.A)(Z).some(e => e.id === b.A.ORB_PROFILE_BADGE), Q = (0, p.C)(z, "UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: s()(M.k, a),
    "aria-label": j.intl.string(j.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === b.A.ORB_PROFILE_BADGE,
        a = (0, S.e0)(e.id),
        d = null != a || e.id === L.K,
        v = (null == O ? true : O.userId) === (null == z ? true : z.id),
        I = t => {
          if (K({
              action: "PRESS_BADGE"
            }), (0, C.R9)(U({
              badge: e.id,
              analyticsLocations: Y
            }, W)), i) return void(0, f.Cz)({
            tab: D.G2.ORBS,
            analyticsLocations: Y,
            analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (d) {
            if (t.preventDefault(), A.default.track(P.HAw.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: q,
                viewed_user_id: null == O ? true : O.userId
              }), q) {
              v ? (0, y.pX)(P.BVt.NITRO_HOME) : (0, m.D)({
                analyticsLocations: Y,
                displayProfile: O
              }), null == k || k();
              return
            }
            if (v) {
              let n = null != e.link ? (0, c.default)(e.link, {
                analyticsLocations: Y
              }) : null;
              if (null == n) return;
              return null == k || k(), n(t)
            }
            return (0, m.D)({
              analyticsLocations: Y,
              displayProfile: O
            }), void(null == k || k())
          }
          let n = null != e.link ? (0, c.default)(e.link, {
            analyticsLocations: Y
          }) : null;
          if (null != n) return null == k || k(), n(t)
        },
        T = () => {
          e.id === N.h && A.default.track(P.HAw.QUEST_CONTENT_VIEWED, V(U({}, (0, g.fF)(E.uF.QUEST_BADGE)), {
            is_targeted: false
          })), K({
            action: "HOVER_BADGE"
          }), (0, C.sQ)(U({
            badge: e.id,
            analyticsLocations: Y
          }, W))
        },
        w = true !== a && e.id !== L.K,
        x = v && Q && w,
        j = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, R.L7)(e.icon),
          className: s()(M.q, h)
        }),
        Z = {
          onClick: I,
          onMouseEnter: T,
          href: e.link,
          "aria-label": e.description,
          style: {
            filter: B && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (x) {
        let n = (0, r.jsx)(l.MzZ, V(U({}, Z), {
          ref: H,
          children: j
        }));
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(p.A, {
            targetElementRef: H,
            mode: "tooltip",
            tooltipDelay: R.In,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      if (w) {
        let n = (0, r.jsx)(l.MzZ, V(U({}, Z), {
          ref: H,
          children: j
        }));
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(_.A, {
            badgeId: e.id,
            targetElementRef: H,
            mode: "tooltip",
            tooltipDelay: R.In,
            body: e.description,
            onShow: () => {
              A.default.track(P.HAw.TOOLTIP_VIEWED, {
                type: "tiered_tenure_badge_profile_" + (v ? "self" : "other")
              })
            },
            estimatedTooltipHeight: 220,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      let J = (0, r.jsx)(l.MzZ, V(U({}, Z), {
          children: j
        })),
        $ = F({
          badge: e,
          tieredTenureBadge: d && e.id !== L.K ? a : true,
          currentUserOwnsOrbBadge: X
        });
      return (0, r.jsx)(o.m, {
        __unsupportedReactNodeAsText: $,
        forceOpen: null != G && G(e.id),
        delay: R.In,
        ariaHidden: true,
        children: J
      }, "".concat(e.id, "-").concat(t))
    })
  })
}