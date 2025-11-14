/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk315263 = require("./315263.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk494424 = require("./494424.jsx"),
  Chunk927513 = require("./927513.jsx"),
  Chunk768865 = require("./768865.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
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

function M(e, t, n) {
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
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === E.l.ORB_PROFILE_BADGE ? (0, r.jsx)(b.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== w.a ? (0, r.jsx)(_.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function B(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: _,
    displayProfile: b,
    onClose: M,
    shouldOpenBadgeTooltip: j,
    shouldGlowTenureBadge: B
  } = e, Z = i.useRef(null), {
    analyticsLocations: F
  } = (0, u.ZP)(c.Z.BADGE), {
    context: V,
    trackUserProfileAction: H
  } = (0, T.KZ)(), Y = y.default.getCurrentUser(), W = (0, v.yd)(null == Y ? true : Y.premiumType, D.PremiumTypes.TIER_2), K = (0, C.Of)(null != (t = null == Y ? true : Y.id) ? t : null), z = (0, A.Z)(K).some(e => e.id === E.l.ORB_PROFILE_BADGE), q = (0, f.c)(Y, "UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: o()(L.container, a),
    "aria-label": x.intl.string(x.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === E.l.ORB_PROFILE_BADGE,
        a = (0, I.fv)(e.id),
        u = null != a || e.id === w.a,
        y = t => {
          if (H({
              action: "PRESS_BADGE"
            }), (0, S.NE)(k({
              badge: e.id,
              analyticsLocations: F
            }, V)), i) return void(0, d.mK)({
            tab: P.AW.ORBS,
            analyticsLocations: F,
            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (u) {
            if (t.preventDefault(), O.default.track(R.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: W,
                viewed_user_id: null == b ? true : b.userId
              }), W) {
              (null == b ? true : b.userId) === (null == Y ? true : Y.id) ? (0, g.uL)(R.Z5c.NITRO_HOME) : (0, p.k)({
                analyticsLocations: F,
                displayProfile: b
              }), null == M || M();
              return
            }
            if ((null == b ? true : b.userId) === (null == Y ? true : Y.id)) {
              let n = null != e.link ? (0, l.default)(e.link, {
                analyticsLocations: F
              }) : null;
              if (null == n) return;
              return null == M || M(), n(t)
            }
            return (0, p.k)({
              analyticsLocations: F,
              displayProfile: b
            }), void(null == M || M())
          }
          let n = null != e.link ? (0, l.default)(e.link, {
            analyticsLocations: F
          }) : null;
          if (null != n) return null == M || M(), n(t)
        },
        v = () => {
          e.id === A.i && O.default.track(R.rMx.QUEST_CONTENT_VIEWED, U(k({}, (0, h.mH)(m.jn.QUEST_BADGE)), {
            is_targeted: false
          })), H({
            action: "HOVER_BADGE"
          }), (0, S.Qf)(k({
            badge: e.id,
            analyticsLocations: F
          }, V))
        },
        T = (null == b ? true : b.userId) === (null == Y ? true : Y.id) && q && true !== a && e.id !== w.a,
        C = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, N.Ej)(e.icon),
          className: o()(L.badge, _)
        }),
        D = {
          onClick: y,
          onMouseEnter: v,
          href: e.link,
          style: {
            filter: B && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (T) {
        let n = (0, r.jsx)(s.Anchor, U(k({}, D), {
          ref: Z,
          children: C
        }));
        return (0, r.jsx)(f.Z, {
          targetElementRef: Z,
          mode: "tooltip",
          tooltipDelay: N.vB,
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      let x = (0, r.jsx)(s.Anchor, U(k({}, D), {
          children: C
        })),
        K = G({
          badge: e,
          tieredTenureBadge: u && e.id !== w.a ? a : true,
          currentUserOwnsOrbBadge: z
        });
      return (0, r.jsx)(s.jSM, {
        text: K,
        "aria-label": e.description,
        forceOpen: null != j && j(e.id),
        delay: N.vB,
        children: x
      }, "".concat(e.id, "-").concat(t))
    })
  })
}