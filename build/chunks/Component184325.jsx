/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk315263 = require("./315263.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === m.l.ORB_PROFILE_BADGE ? (0, r.jsx)(g.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== P.a ? (0, r.jsx)(d.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function U(e) {
  var t;
  let {
    badges: n,
    className: i,
    badgeClassName: d,
    displayProfile: g,
    onClose: x,
    shouldOpenBadgeTooltip: M,
    shouldGlowTenureBadge: U
  } = e, {
    analyticsLocations: G
  } = (0, c.ZP)(l.Z.BADGE), {
    context: B,
    trackUserProfileAction: Z
  } = (0, v.KZ)(), F = E.default.getCurrentUser(), V = (0, y.yd)(null == F ? true : F.premiumType, R.PremiumTypes.TIER_2), H = (0, T.Of)(null != (t = null == F ? true : F.id) ? t : null), Y = (0, S.Z)(H).some(e => e.id === m.l.ORB_PROFILE_BADGE);
  return (0, r.jsx)("div", {
    className: a()(D.container, i),
    "aria-label": w.intl.string(w.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === m.l.ORB_PROFILE_BADGE,
        c = (0, O.fv)(e.id),
        E = null != c || e.id === P.a,
        y = t => {
          if (Z({
              action: "PRESS_BADGE"
            }), (0, I.NE)(L({
              badge: e.id,
              analyticsLocations: G
            }, B)), i) return void(0, u.mK)({
            tab: N.AW.ORBS,
            analyticsLocations: G,
            analyticsSource: l.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (E) {
            if (t.preventDefault(), b.default.track(C.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: V,
                viewed_user_id: null == g ? true : g.userId
              }), V) {
              (null == g ? true : g.userId) === (null == F ? true : F.id) ? (0, h.uL)(C.Z5c.NITRO_HOME) : (0, f.k)({
                analyticsLocations: G,
                displayProfile: g
              }), null == x || x();
              return
            }
            if ((null == g ? true : g.userId) === (null == F ? true : F.id)) {
              let n = null != e.link ? (0, s.default)(e.link, {
                analyticsLocations: G
              }) : null;
              if (null == n) return;
              return null == x || x(), n(t)
            }
            return (0, f.k)({
              analyticsLocations: G,
              displayProfile: g
            }), void(null == x || x())
          }
          let n = null != e.link ? (0, s.default)(e.link, {
            analyticsLocations: G
          }) : null;
          if (null != n) return null == x || x(), n(t)
        },
        v = () => {
          e.id === S.i && b.default.track(C.rMx.QUEST_CONTENT_VIEWED, j(L({}, (0, _.mH)(p.jn.QUEST_BADGE)), {
            is_targeted: false
          })), Z({
            action: "HOVER_BADGE"
          }), (0, I.Qf)(L({
            badge: e.id,
            analyticsLocations: G
          }, B))
        },
        T = k({
          badge: e,
          tieredTenureBadge: E && e.id !== P.a ? c : true,
          currentUserOwnsOrbBadge: Y
        });
      return (0, r.jsx)(o.jSM, {
        text: T,
        "aria-label": e.description,
        forceOpen: null != M && M(e.id),
        delay: A.vB,
        children: (0, r.jsx)(o.Anchor, {
          onClick: y,
          onMouseEnter: v,
          href: e.link,
          style: {
            filter: U && null != c ? "drop-shadow(0 0 5px ".concat(c.glowColor, ")") : true
          },
          children: (0, r.jsx)("img", {
            alt: " ",
            "aria-hidden": true,
            src: null != (n = e.iconSrc) ? n : (0, A.Ej)(e.icon),
            className: a()(D.badge, d)
          })
        })
      }, "".concat(e.id, "-").concat(t))
    })
  })
}