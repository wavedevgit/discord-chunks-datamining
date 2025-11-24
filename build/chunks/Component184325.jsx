/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
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
let B = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === b.l.ORB_PROFILE_BADGE ? (0, r.jsx)(y.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== L.a ? (0, r.jsx)(p.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function Z(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: p,
    displayProfile: y,
    onClose: j,
    shouldOpenBadgeTooltip: U,
    shouldGlowTenureBadge: Z
  } = e, F = i.useRef(null), {
    analyticsLocations: V
  } = (0, u.ZP)(c.Z.BADGE), {
    context: H,
    trackUserProfileAction: Y
  } = (0, S.KZ)(), W = O.default.getCurrentUser(), K = (0, I.yd)(null == W ? true : W.premiumType, w.PremiumTypes.TIER_2), z = (0, N.Of)(null != (t = null == W ? true : W.id) ? t : null), q = (0, C.Z)(z).some(e => e.id === b.l.ORB_PROFILE_BADGE), X = (0, f.c)(W, "UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: o()(M.container, a),
    "aria-label": x.intl.string(x.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === b.l.ORB_PROFILE_BADGE,
        a = (0, T.fv)(e.id),
        u = null != a || e.id === L.a,
        O = (null == y ? true : y.userId) === (null == W ? true : W.id),
        I = t => {
          if (Y({
              action: "PRESS_BADGE"
            }), (0, A.NE)(k({
              badge: e.id,
              analyticsLocations: V
            }, H)), i) return void(0, d.mK)({
            tab: D.AW.ORBS,
            analyticsLocations: V,
            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (u) {
            if (t.preventDefault(), v.default.track(P.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: K,
                viewed_user_id: null == y ? true : y.userId
              }), K) {
              O ? (0, E.uL)(P.Z5c.NITRO_HOME) : (0, h.k)({
                analyticsLocations: V,
                displayProfile: y
              }), null == j || j();
              return
            }
            if (O) {
              let n = null != e.link ? (0, l.default)(e.link, {
                analyticsLocations: V
              }) : null;
              if (null == n) return;
              return null == j || j(), n(t)
            }
            return (0, h.k)({
              analyticsLocations: V,
              displayProfile: y
            }), void(null == j || j())
          }
          let n = null != e.link ? (0, l.default)(e.link, {
            analyticsLocations: V
          }) : null;
          if (null != n) return null == j || j(), n(t)
        },
        S = () => {
          e.id === C.i && v.default.track(P.rMx.QUEST_CONTENT_VIEWED, G(k({}, (0, m.mH)(g.jn.QUEST_BADGE)), {
            is_targeted: false
          })), Y({
            action: "HOVER_BADGE"
          }), (0, A.Qf)(k({
            badge: e.id,
            analyticsLocations: V
          }, H))
        },
        N = true !== a && e.id !== L.a,
        w = O && X && N,
        x = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, R.Ej)(e.icon),
          className: o()(M.badge, p)
        }),
        z = {
          onClick: I,
          onMouseEnter: S,
          href: e.link,
          style: {
            filter: Z && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (w) {
        let n = (0, r.jsx)(s.Anchor, G(k({}, z), {
          ref: F,
          children: x
        }));
        return (0, r.jsx)(f.Z, {
          targetElementRef: F,
          mode: "tooltip",
          tooltipDelay: R.vB,
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      if (N) {
        let n = (0, r.jsx)(s.Anchor, G(k({}, z), {
          ref: F,
          children: x
        }));
        return (0, r.jsx)(_.Z, {
          badgeId: e.id,
          targetElementRef: F,
          mode: "tooltip",
          tooltipDelay: R.vB,
          body: e.description,
          onShow: () => {
            v.default.track(P.rMx.TOOLTIP_VIEWED, {
              type: "tiered_tenure_badge_profile_" + (O ? "self" : "other")
            })
          },
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      let Q = (0, r.jsx)(s.Anchor, G(k({}, z), {
          children: x
        })),
        J = B({
          badge: e,
          tieredTenureBadge: u && e.id !== L.a ? a : true,
          currentUserOwnsOrbBadge: q
        });
      return (0, r.jsx)(s.jSM, {
        text: J,
        "aria-label": e.description,
        forceOpen: null != U && U(e.id),
        delay: R.vB,
        children: Q
      }, "".concat(e.id, "-").concat(t))
    })
  })
}