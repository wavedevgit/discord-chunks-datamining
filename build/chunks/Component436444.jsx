/** Chunk was on web.js **/
/** chunk id: 436444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => T,
  Z: () => C
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk471885 = require("./471885.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk879892 = require("./879892.jsx"),
  Chunk198466 = require("./198466.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk556970 = require("./556970.js"),
  Chunk935947 = require("./935947.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  switch (e) {
    case h.Eu4.TIER_3:
      return h.AnalyticsObjectTypes.TIER_3;
    case h.Eu4.TIER_2:
      return h.AnalyticsObjectTypes.TIER_2;
    case h.Eu4.TIER_1:
      return h.AnalyticsObjectTypes.TIER_1;
    default:
      throw Error("Unsupported Boosting tier: ".concat(e))
  }
}
let T = {
    [Chunk981631.Eu4.NONE]: 0,
    [Chunk981631.Eu4.TIER_1]: 1 / 3,
    [Chunk981631.Eu4.TIER_2]: 2 / 3,
    [Chunk981631.Eu4.TIER_3]: 1
  },
  C = function(e) {
    let {
      children: t,
      confettiTriggerRef: n,
      guild: i,
      isProgressBarAnimationComplete: y,
      setConfettiCount: v,
      setShouldFireConfetti: C,
      tier: A,
      tierMarkerAnimationPosition: N,
      totalAvailableBoostsCount: P
    } = e, {
      analyticsLocations: w
    } = (0, c.ZP)(), R = (0, u.Z)(), D = h.oCV[A], x = D - P, L = A <= N || y, j = L && A <= i.premiumTier, M = L && A < i.premiumTier, k = L && A === i.premiumTier, U = i.premiumTier < A && P >= D, {
      scaleFactor: G
    } = (0, l.q_F)({
      from: {
        scaleFactor: 0
      },
      to: {
        scaleFactor: N >= A || y && N + 1 === A || y && false === N && A === h.Eu4.NONE ? 1 : 0
      },
      config: {
        tension: 360,
        friction: 12
      }
    }), Z = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.animated.div, {
        className: b.progressBarMarkerIndicator,
        style: {
          transform: G.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
        }
      }), A !== h.Eu4.NONE ? U ? (0, r.jsx)(l.zkc, {
        className: a()(b.boostedTierIcon, b.disabledIndicator),
        size: "xxs",
        color: "currentColor"
      }) : (0, r.jsx)(d.Z, {
        tier: A,
        color: "currentColor",
        className: b.boostedTierIcon
      }) : true]
    });

    function F() {
      L && (U || (0, p.u)({
        analyticsLocations: w,
        analyticsLocation: {
          page: h.ZY5.PREMIUM_GUILD_USER_MODAL,
          section: h.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: h.qAy.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: I(A)
        },
        numberOfBoostsToAdd: x,
        guild: i
      }))
    }
    let B = !j && R.fractionalState === m.a$.NONE,
      V = B ? l.P3F : "div",
      H = B ? {
        onClick: F
      } : {},
      Y = j ? g.intl.formatToPlainString(g.t["1o48ki"], {
        tierName: (0, f.nW)(A, {
          useLevels: false
        })
      }) : U ? g.intl.formatToPlainString(E.default["9CtPjt"], {
        perk: (0, f.nW)(A, {
          useLevels: false
        })
      }) : g.intl.formatToPlainString(g.t.r6NN6Q, {
        numBoostsRequired: x,
        tierName: (0, f.nW)(A, {
          useLevels: false
        })
      }),
      W = (0, r.jsxs)(V, S(O({
        className: a()(b.progressBarMarker, {
          [b.progressBarMarkerUnlocked]: j,
          [b.progressBarMarkerLocked]: B,
          [b.progressBarMarkerLower]: M,
          [b.progressBarMarkerCurrent]: k
        }),
        style: {
          left: "".concat(100 * T[A], "%")
        }
      }, H), {
        children: [!j && (0, r.jsx)("div", {
          className: b.boostedTierIconBackground
        }), j && A === h.Eu4.TIER_3 ? (0, r.jsx)(_.m, {
          confettiTriggerRef: n,
          setConfettiCount: v,
          setShouldFireConfetti: C,
          children: Z
        }) : Z, (0, r.jsxs)(l.Text, {
          className: b.progressBarMarkerLabel,
          variant: "text-md/normal",
          children: [j && A !== h.Eu4.NONE && (0, r.jsx)(l.dz2, {
            size: "md",
            color: "currentColor",
            className: b.progressBarMarkerUnlockedIcon
          }), t]
        })]
      }));
    return A !== h.Eu4.NONE ? (0, r.jsx)(s.u, {
      text: Y,
      children: W
    }) : W
  }