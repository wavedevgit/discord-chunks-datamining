/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
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
  Chunk307225 = require("./307225.js"),
  Chunk494424 = require("./494424.jsx"),
  Chunk654939 = require("./654939.jsx"),
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
  Chunk311838 = require("./311838.js");

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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Z = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === y.l.ORB_PROFILE_BADGE ? (0, r.jsx)(O.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== x.a ? (0, r.jsx)(h.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function F(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: h,
    displayProfile: O,
    onClose: k,
    shouldOpenBadgeTooltip: G,
    shouldGlowTenureBadge: F
  } = e, V = i.useRef(null), {
    analyticsLocations: H
  } = (0, u.ZP)(c.Z.BADGE), {
    context: Y,
    trackUserProfileAction: W
  } = (0, A.KZ)(), K = v.default.getCurrentUser(), z = (0, T.yd)(null == K ? true : K.premiumType, L.PremiumTypes.TIER_2), q = (0, R.Of)(null != (t = null == K ? true : K.id) ? t : null), X = (0, N.Z)(q).some(e => e.id === y.l.ORB_PROFILE_BADGE), Q = (0, _.c)(K, "UserProfileBadgeList"), J = (0, f.B)("UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: o()(j.container, a),
    "aria-label": M.intl.string(M.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === y.l.ORB_PROFILE_BADGE,
        a = (0, S.fv)(e.id),
        u = null != a || e.id === x.a,
        f = (null == O ? true : O.userId) === (null == K ? true : K.id),
        v = t => {
          if (W({
              action: "PRESS_BADGE"
            }), (0, C.NE)(U({
              badge: e.id,
              analyticsLocations: H
            }, Y)), i) return void(0, d.mK)({
            tab: w.AW.ORBS,
            analyticsLocations: H,
            analyticsSource: c.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (u) {
            if (t.preventDefault(), I.default.track(D.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: z,
                viewed_user_id: null == O ? true : O.userId
              }), z) {
              f ? (0, b.uL)(D.Z5c.NITRO_HOME) : (0, m.k)({
                analyticsLocations: H,
                displayProfile: O
              }), null == k || k();
              return
            }
            if (f) {
              let n = null != e.link ? (0, l.default)(e.link, {
                analyticsLocations: H
              }) : null;
              if (null == n) return;
              return null == k || k(), n(t)
            }
            return (0, m.k)({
              analyticsLocations: H,
              displayProfile: O
            }), void(null == k || k())
          }
          let n = null != e.link ? (0, l.default)(e.link, {
            analyticsLocations: H
          }) : null;
          if (null != n) return null == k || k(), n(t)
        },
        T = () => {
          e.id === N.i && I.default.track(D.rMx.QUEST_CONTENT_VIEWED, B(U({}, (0, g.mH)(E.jn.QUEST_BADGE)), {
            is_targeted: false
          })), W({
            action: "HOVER_BADGE"
          }), (0, C.Qf)(U({
            badge: e.id,
            analyticsLocations: H
          }, Y))
        },
        A = true !== a && e.id !== x.a,
        R = A && J,
        L = f && Q && A,
        M = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, P.Ej)(e.icon),
          className: o()(j.badge, h)
        }),
        q = {
          onClick: v,
          onMouseEnter: T,
          href: e.link,
          style: {
            filter: F && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (R) {
        let n = (0, r.jsx)(s.Anchor, B(U({}, q), {
          ref: V,
          children: M
        }));
        return (0, r.jsx)(p.Z, {
          badgeId: e.id,
          targetElementRef: V,
          mode: "tooltip",
          tooltipDelay: P.vB,
          body: e.description,
          onShow: () => {
            I.default.track(D.rMx.TOOLTIP_VIEWED, {
              type: "tiered_tenure_badge_profile_" + (f ? "self" : "other")
            })
          },
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      if (L) {
        let n = (0, r.jsx)(s.Anchor, B(U({}, q), {
          ref: V,
          children: M
        }));
        return (0, r.jsx)(_.Z, {
          targetElementRef: V,
          mode: "tooltip",
          tooltipDelay: P.vB,
          children: n
        }, "".concat(e.id, "-").concat(t))
      }
      let $ = (0, r.jsx)(s.Anchor, B(U({}, q), {
          children: M
        })),
        ee = Z({
          badge: e,
          tieredTenureBadge: u && e.id !== x.a ? a : true,
          currentUserOwnsOrbBadge: X
        });
      return (0, r.jsx)(s.jSM, {
        text: ee,
        "aria-label": e.description,
        forceOpen: null != G && G(e.id),
        delay: P.vB,
        children: $
      }, "".concat(e.id, "-").concat(t))
    })
  })
}