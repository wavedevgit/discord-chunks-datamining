/** Chunk was on web.js **/
/** chunk id: 542535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk352423 = require("./352423.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk508591 = require("./508591.jsx"),
  Chunk603538 = require("./603538.jsx"),
  Chunk30084 = require("./30084.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk590202 = require("./590202.js"),
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

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === y.A.ORB_PROFILE_BADGE ? (0, r.jsx)(b.A, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== L.K ? (0, r.jsx)(_.A, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function V(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: _,
    displayProfile: b,
    onClose: j,
    shouldOpenBadgeTooltip: U,
    shouldGlowTenureBadge: V
  } = e, B = i.useRef(null), {
    analyticsLocations: H
  } = (0, d.Ay)(u.A.BADGE), {
    context: Y,
    trackUserProfileAction: W
  } = (0, S.NJ)(), K = O.default.getCurrentUser(), z = (0, A.CC)(null == K ? true : K.premiumType, D.PremiumTypes.TIER_2), q = (0, N.AP)(null != (t = null == K ? true : K.id) ? t : null), Z = (0, C.A)(q).some(e => e.id === y.A.ORB_PROFILE_BADGE);
  return (0, r.jsx)("div", {
    className: o()(M.k, a),
    "aria-label": x.intl.string(x.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === y.A.ORB_PROFILE_BADGE,
        a = (0, I.e0)(e.id),
        d = null != a || e.id === L.K,
        O = (null == b ? true : b.userId) === (null == K ? true : K.id),
        A = t => {
          if (W({
              action: "PRESS_BADGE"
            }), (0, T.R9)(k({
              badge: e.id,
              analyticsLocations: H
            }, Y)), i) return void(0, f.Cz)({
            tab: P.G2.ORBS,
            analyticsLocations: H,
            analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (d) {
            if (t.preventDefault(), v.default.track(R.HAw.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: z,
                viewed_user_id: null == b ? true : b.userId
              }), z) {
              O ? (0, E.pX)(R.BVt.NITRO_HOME) : (0, h.D)({
                analyticsLocations: H,
                displayProfile: b
              }), null == j || j();
              return
            }
            if (O) {
              let n = null != e.link ? (0, c.default)(e.link, {
                analyticsLocations: H
              }) : null;
              if (null == n) return;
              return null == j || j(), n(t)
            }
            return (0, h.D)({
              analyticsLocations: H,
              displayProfile: b
            }), void(null == j || j())
          }
          let n = null != e.link ? (0, c.default)(e.link, {
            analyticsLocations: H
          }) : null;
          if (null != n) return null == j || j(), n(t)
        },
        S = () => {
          e.id === C.h && v.default.track(R.HAw.QUEST_CONTENT_VIEWED, G(k({}, (0, g.fF)(m.uF.QUEST_BADGE)), {
            is_targeted: false
          })), W({
            action: "HOVER_BADGE"
          }), (0, T.sQ)(k({
            badge: e.id,
            analyticsLocations: H
          }, Y))
        },
        N = true !== a && e.id !== L.K,
        D = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, w.L7)(e.icon),
          className: o()(M.q, _)
        }),
        x = {
          onClick: A,
          onMouseEnter: S,
          href: e.link,
          "aria-label": e.description,
          style: {
            filter: V && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (N) {
        let n = (0, r.jsx)(l.MzZ, G(k({}, x), {
          ref: B,
          children: D
        }));
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(p.A, {
            badgeId: e.id,
            targetElementRef: B,
            mode: "tooltip",
            tooltipDelay: w.In,
            body: e.description,
            onShow: () => {
              v.default.track(R.HAw.TOOLTIP_VIEWED, {
                type: "tiered_tenure_badge_profile_" + (O ? "self" : "other")
              })
            },
            estimatedTooltipHeight: 220,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      let q = (0, r.jsx)(l.MzZ, G(k({}, x), {
          children: D
        })),
        Q = F({
          badge: e,
          tieredTenureBadge: d && e.id !== L.K ? a : true,
          currentUserOwnsOrbBadge: Z
        });
      return (0, r.jsx)(s.m, {
        __unsupportedReactNodeAsText: Q,
        forceOpen: null != U && U(e.id),
        delay: w.In,
        ariaHidden: true,
        children: q
      }, "".concat(e.id, "-").concat(t))
    })
  })
}