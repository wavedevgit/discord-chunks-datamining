/** Chunk was on web.js **/
/** chunk id: 184325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk112287 = require("./112287.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
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
let V = e => {
  let {
    badge: t,
    tieredTenureBadge: n,
    currentUserOwnsOrbBadge: i
  } = e;
  return t.id === v.l.ORB_PROFILE_BADGE ? (0, r.jsx)(S.Z, {
    showSubtext: !i && !t.isPreviewMode
  }) : true !== n && t.id !== M.a ? (0, r.jsx)(g.Z, {
    profileBadge: t,
    tenureBadge: n
  }) : t.description
};

function H(e) {
  var t;
  let {
    badges: n,
    className: a,
    badgeClassName: g,
    displayProfile: S,
    onClose: G,
    shouldOpenBadgeTooltip: F,
    shouldGlowTenureBadge: H
  } = e, Y = i.useRef(null), {
    analyticsLocations: W
  } = (0, d.ZP)(u.Z.BADGE), {
    context: K,
    trackUserProfileAction: z
  } = (0, N.KZ)(), q = I.default.getCurrentUser(), Q = (0, C.yd)(null == q ? true : q.premiumType, j.PremiumTypes.TIER_2), X = (0, R.Of)(null != (t = null == q ? true : q.id) ? t : null), J = (0, w.Z)(X).some(e => e.id === v.l.ORB_PROFILE_BADGE), $ = (0, h.c)(q, "UserProfileBadgeList"), ee = (0, _.T)("UserProfileBadgeList");
  return (0, r.jsx)("div", {
    className: o()(U.container, a),
    "aria-label": k.intl.string(k.t.VWV0y5),
    role: "group",
    children: n.map((e, t) => {
      var n;
      let i = e.id === v.l.ORB_PROFILE_BADGE,
        a = (0, A.fv)(e.id),
        d = null != a || e.id === M.a,
        _ = (null == S ? true : S.userId) === (null == q ? true : q.id),
        I = t => {
          if (z({
              action: "PRESS_BADGE"
            }), (0, P.NE)(Z({
              badge: e.id,
              analyticsLocations: W
            }, K)), i) return void(0, f.mK)({
            tab: L.AW.ORBS,
            analyticsLocations: W,
            analyticsSource: u.Z.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
          });
          if (d) {
            if (t.preventDefault(), T.default.track(x.rMx.TIERED_TENURE_BADGE_CLICKED, {
                badge: e.id,
                premium_type: Q,
                viewed_user_id: null == S ? true : S.userId
              }), Q) {
              _ ? (0, O.uL)(x.Z5c.NITRO_HOME) : (0, E.k)({
                analyticsLocations: W,
                displayProfile: S
              }), null == G || G();
              return
            }
            if (_) {
              let n = null != e.link ? (0, c.default)(e.link, {
                analyticsLocations: W
              }) : null;
              if (null == n) return;
              return null == G || G(), n(t)
            }
            return (0, E.k)({
              analyticsLocations: W,
              displayProfile: S
            }), void(null == G || G())
          }
          let n = null != e.link ? (0, c.default)(e.link, {
            analyticsLocations: W
          }) : null;
          if (null != n) return null == G || G(), n(t)
        },
        C = () => {
          e.id === w.i && T.default.track(x.rMx.QUEST_CONTENT_VIEWED, B(Z({}, (0, b.mH)(y.jn.QUEST_BADGE)), {
            is_targeted: false
          })), z({
            action: "HOVER_BADGE"
          }), (0, P.Qf)(Z({
            badge: e.id,
            analyticsLocations: W
          }, K))
        },
        N = true !== a && e.id !== M.a,
        R = _ && $ && N,
        X = (0, r.jsx)("img", {
          alt: " ",
          "aria-hidden": true,
          src: null != (n = e.iconSrc) ? n : (0, D.Ej)(e.icon),
          className: o()(U.badge, g)
        }),
        et = {
          onClick: I,
          onMouseEnter: C,
          href: e.link,
          "aria-label": e.description,
          style: {
            filter: H && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : true
          }
        };
      if (R) {
        let n = (0, r.jsx)(l.eee, B(Z({}, et), {
          ref: Y,
          children: X
        }));
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(h.Z, {
            targetElementRef: Y,
            mode: "tooltip",
            tooltipDelay: D.vB,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      if (N) {
        let n = (0, r.jsx)(l.eee, B(Z({}, et), {
            ref: Y,
            children: X
          })),
          i = () => {
            (0, p.Z)({
              initialPlanId: null,
              subscriptionTier: j.Si.TIER_2,
              analyticsLocations: W
            })
          },
          a = ee && !Q,
          o = a ? [{
            text: k.intl.string(k.t.pj0XBN),
            variant: "expressive",
            icon: l.SrA,
            iconPosition: "start",
            onClick: i
          }] : true,
          s = a ? 262 : 220;
        return (0, r.jsx)("div", {
          children: (0, r.jsx)(m.Z, {
            badgeId: e.id,
            targetElementRef: Y,
            mode: "tooltip",
            tooltipDelay: D.vB,
            body: e.description,
            actions: o,
            onShow: () => {
              T.default.track(x.rMx.TOOLTIP_VIEWED, {
                type: "tiered_tenure_badge_profile_" + (_ ? "self" : "other")
              })
            },
            estimatedTooltipHeight: s,
            children: n
          })
        }, "".concat(e.id, "-").concat(t))
      }
      let en = (0, r.jsx)(l.eee, B(Z({}, et), {
          children: X
        })),
        er = V({
          badge: e,
          tieredTenureBadge: d && e.id !== M.a ? a : true,
          currentUserOwnsOrbBadge: J
        });
      return (0, r.jsx)(s.u, {
        __unsupportedReactNodeAsText: er,
        forceOpen: null != F && F(e.id),
        delay: D.vB,
        ariaHidden: true,
        children: en
      }, "".concat(e.id, "-").concat(t))
    })
  })
}