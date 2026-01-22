/** Chunk was on web.js **/
/** chunk id: 711624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T,
  p: () => I
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk313375 = require("./313375.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk987144 = require("./987144.jsx"),
  Chunk963894 = require("./963894.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk195450 = require("./195450.js");

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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  switch (e) {
    case h.TVA.TIER_3:
      return h.AnalyticsObjectTypes.TIER_3;
    case h.TVA.TIER_2:
      return h.AnalyticsObjectTypes.TIER_2;
    case h.TVA.TIER_1:
      return h.AnalyticsObjectTypes.TIER_1;
    default:
      throw Error("Unsupported Boosting tier: ".concat(e))
  }
}
let I = {
    [Chunk652215.TVA.NONE]: 0,
    [Chunk652215.TVA.TIER_1]: 1 / 3,
    [Chunk652215.TVA.TIER_2]: 2 / 3,
    [Chunk652215.TVA.TIER_3]: 1
  },
  T = function(e) {
    let {
      children: t,
      confettiTriggerRef: n,
      guild: i,
      isProgressBarAnimationComplete: y,
      setConfettiCount: A,
      setShouldFireConfetti: T,
      tier: C,
      tierMarkerAnimationPosition: N,
      totalAvailableBoostsCount: R
    } = e, {
      analyticsLocations: w
    } = (0, c.Ay)(), P = (0, u.A)(), D = h.M2T[C], x = D - R, L = C <= N || y, j = L && C <= i.premiumTier, M = L && C < i.premiumTier, k = L && C === i.premiumTier, U = i.premiumTier < C && R >= D, {
      scaleFactor: G
    } = (0, l.zhh)({
      from: {
        scaleFactor: 0
      },
      to: {
        scaleFactor: N >= C || y && N + 1 === C || y && false === N && C === h.TVA.NONE ? 1 : 0
      },
      config: {
        tension: 360,
        friction: 12
      }
    }), V = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.animated.div, {
        className: b.sO,
        style: {
          transform: G.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
        }
      }), C !== h.TVA.NONE ? U ? (0, r.jsx)(l.x8N, {
        className: a()(b.Wo, b.GV),
        size: "xxs",
        color: "currentColor"
      }) : (0, r.jsx)(d.A, {
        tier: C,
        color: "currentColor",
        className: b.Wo
      }) : true]
    });

    function F() {
      !L || U || (0, p.g)({
        analyticsLocations: w,
        analyticsLocation: {
          page: h.liQ.PREMIUM_GUILD_USER_MODAL,
          section: h.JJy.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: h.ZSU.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: S(C)
        },
        numberOfBoostsToAdd: x,
        guild: i
      })
    }
    let B = !j && P.fractionalState === m.xc.NONE,
      H = B ? l.DUT : "div",
      Y = B ? {
        onClick: F
      } : {},
      W = j ? g.intl.formatToPlainString(g.t["1o48ki"], {
        tierName: (0, f.gb)(C, {
          useLevels: false
        })
      }) : U ? g.intl.formatToPlainString(E.default["9CtPjt"], {
        perk: (0, f.gb)(C, {
          useLevels: false
        })
      }) : g.intl.formatToPlainString(g.t.r6NN6Q, {
        numBoostsRequired: x,
        tierName: (0, f.gb)(C, {
          useLevels: false
        })
      }),
      K = (0, r.jsxs)(H, v(O({
        className: a()(b.Ll, {
          [b.kZ]: j,
          [b.ng]: B,
          [b.uZ]: M,
          [b.Ue]: k
        }),
        style: {
          left: "".concat(100 * I[C], "%")
        }
      }, Y), {
        children: [!j && (0, r.jsx)("div", {
          className: b.cj
        }), j && C === h.TVA.TIER_3 ? (0, r.jsx)(_.H, {
          confettiTriggerRef: n,
          setConfettiCount: A,
          setShouldFireConfetti: T,
          children: V
        }) : V, (0, r.jsxs)(l.Text, {
          className: b.Td,
          variant: "text-md/normal",
          children: [j && C !== h.TVA.NONE && (0, r.jsx)(l.A9s, {
            size: "md",
            color: "currentColor",
            className: b.ZI
          }), t]
        })]
      }));
    return C !== h.TVA.NONE ? (0, r.jsx)(o.m_, {
      text: W,
      children: K
    }) : K
  }