/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk315263 = require("./315263.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk541337 = require("./541337.js"),
  Chunk494424 = require("./494424.jsx"),
  Chunk654939 = require("./654939.jsx"),
  Chunk927513 = require("./927513.jsx"),
  Chunk768865 = require("./768865.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk703656 = require("./703656.js"),
  Chunk317257 = require("./317257.js"),
  Chunk976015 = require("./976015.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk111361 = require("./111361.js"),
  Chunk291175 = require("./291175.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk485341 = require("./485341.js"),
  Chunk687158 = require("./687158.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk681642 = require("./681642.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517793 = require("./517793.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === O.l.ORB_PROFILE_BADGE ? (0, r.jsx)(v.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== j.a ? (0, r.jsx)(h.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function V(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: h,
    displayProfile: v,
    onClose: U,
    shouldOpenBadgeTooltip: Z,
    shouldGlowTenureBadge: V
  } = e, H = i.useRef(null), {
    analyticsLocations: Y
  } = (0, u.ZP)(c.Z.BADGE), {
    context: W,
    trackUserProfileAction: K
  } = (0, C.KZ)(), z = S.default.getCurrentUser(), q = (0, T.yd)(null == z ? true : z.premiumType, L.PremiumTypes.TIER_2), Q = (0, R.Of)(null != (t = null == z ? true : z.id) ? t : null), X = (0, P.Z)(Q).some(e => e.id === O.l.ORB_PROFILE_BADGE), J = (0, _.c)(z, "UserProfileBadgeList"), $ = (0, p.T)("UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: o()(k.container, a),
    "aria-label": M.intl.string(M.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === O.l.ORB_PROFILE_BADGE,
        a = (0, A.fv)(e.id),
        u = null != a || e.id === j.a,
        p = (null == v ? true : v.userId) === (null == z ? true : z.id),
        S = t => {
          if (K({
              action: "PRESS_BADGE"
            }), (0, N.NE)(G({
              badge: e.id,
              analyticsLocations: Y
            }, W)), i) return void(0, d.mK)({
            tab: x.AW.ORBS,
            analyticsLocations: Y,
            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (u) {
            if (t.preventDefault(), I.default.track(D.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: q,
                viewed_user_id: null == v ? true : v.userId
              }), q) {
              p ? (0, y.uL)(D.Z5c.NITRO_HOME) : (0, g.k)({
                analyticsLocations: Y,
                displayProfile: v
              }), null == U || U();
              return
            }
            if (p) {
              let n = null != e.link ? (0, l.default)(e.link, {
                analyticsLocations: Y
              }) : null;
              if (null == n) return;
              return null == U || U(), n(t)
            }
            return (0, g.k)({
              analyticsLocations: Y,
              displayProfile: v
            }), void(null == U || U())
          }
          let n = null != e.link ? (0, l.default)(e.link, {
            analyticsLocations: Y
          }) : null;
          if (null != n) return null == U || U(), n(t)
        },
        T = () => {
          e.id === P.i && I.default.track(D.rMx.QUEST_CONTENT_VIEWED, B(G({}, (0, E.mH)(b.jn.QUEST_BADGE)), {
            is_targeted: false
          })), K({
            action: "HOVER_BADGE"
          }), (0, N.Qf)(G({
            badge: e.id,
            analyticsLocations: Y
          }, W))
        },
        C = true !== a && e.id !== j.a,
        R = p && J && C,
        Q = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, w.Ej)(e.icon),
          className: o()(k.badge, h)
        }),
        ee = {
          onClick: S,
          onMouseEnter: T,
          href: e.link,
          style: {
            filter: V && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (R) {
        let n = (0, r.jsx)(s.Anchor, B(G({}, ee), {
          ref: H,
          children: Q
        }));
        return (0, r.jsx)(_.Z, {
          targetElementRef: H,
          mode: "tooltip",
          tooltipDelay: w.vB,
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      if (C) {
        let n = (0, r.jsx)(s.Anchor, B(G({}, ee), {
            ref: H,
            children: Q
          })),
          i = () => {
            (0, f.Z)({
              initialPlanId: null,
              subscriptionTier: L.Si.TIER_2,
              analyticsLocations: Y
            })
          },
          a = $ && !q,
          o = a ? [{
            text: M.intl.string(M.t.pj0XBN),
            variant: "expressive",
            icon: s.SrA,
            iconPosition: "start",
            onClick: i
          }] : true,
          l = a ? 262 : 220;
        return (0, r.jsx)(m.Z, {
          badgeId: e.id,
          targetElementRef: H,
          mode: "tooltip",
          tooltipDelay: w.vB,
          body: e.description,
          actions: o,
          onShow: () => {
            I.default.track(D.rMx.TOOLTIP_VIEWED, {
              type: "tiered_tenure_badge_profile_" + (p ? "self" : "other")
            })
          },
          estimatedTooltipHeight: l,
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      let et = (0, r.jsx)(s.Anchor, B(G({}, ee), {
          children: Q
        })),
        en = F({
          badge: e,
          tieredTenureBadge: u && e.id !== j.a ? a : true,
          currentUserOwnsOrbBadge: X
        });
      return (0, r.jsx)(s.jSM, {
        text: en,
        "aria-label": e.description,
        forceOpen: null != Z && Z(e.id),
        delay: w.vB,
        children: et
      }, "".concat(e.id, "-").concat(t))
    })
  })
}