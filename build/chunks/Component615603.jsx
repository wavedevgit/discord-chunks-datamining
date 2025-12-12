/** Chunk was on web.js **/
/** chunk id: 615603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk589358 = require("./589358.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk975298 = require("./975298.js"),
  Chunk760558 = require("./760558.jsx"),
  Chunk401786 = require("./401786.jsx"),
  Chunk450468 = require("./450468.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk283029 = require("./283029.jsx"),
  Chunk357956 = require("./357956.jsx"),
  Chunk275909 = require("./275909.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk387473 = require("./387473.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: o,
    onUncancel: a,
    premiumSubscription: s,
    useReducedMotion: d,
    fractionalState: f
  } = e, p = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), _ = (0, b.tl)(t), m = (null == s ? true : s.isPaused) === true && f === T.a$.NONE, h = C.intl.string(C.t.mOWsF1);
  return (0, r.jsxs)("li", {
    className: A.unappliedGuildBoostSlot,
    children: [(0, r.jsxs)("div", {
      className: A.unappliedGuildBoostSlotContentPrimary,
      children: [(0, r.jsx)(S.Z, {
        className: A.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: _,
        useReducedMotion: d
      }), _ && null != s ? (0, r.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.intl.format(C.t.Z4ULRD, {
          date: s.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != p ? (0, r.jsx)(v.Z, {
        cooldown: p.getTime()
      }) : (0, r.jsx)(u.Text, {
        className: A.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: C.intl.string(C.t["2mcafz"])
      })]
    }), (0, r.jsxs)("div", {
      className: A.unappliedGuildBoostSlotContentSecondary,
      children: [n && !_ && (0, r.jsx)(l.Z, {
        shouldShow: m,
        text: h,
        "aria-label": h.toString(),
        children: e => (0, r.jsx)("div", {
          className: A.unappliedGuildBoostSlotCta,
          children: (0, r.jsx)(c.Avr, w(P({}, e), {
            variant: "primary",
            text: C.intl.string(C.t.twFU3R),
            onClick: () => o(t),
            disabled: m,
            size: "sm"
          }))
        })
      }), _ && (0, r.jsx)(l.Z, {
        shouldShow: m,
        text: h,
        "aria-label": h.toString(),
        children: e => (0, r.jsx)("div", {
          className: A.unappliedGuildBoostSlotCta,
          children: (0, r.jsx)(c.Avr, w(P({}, e), {
            variant: "primary",
            text: C.intl.string(C.t["2glQNp"]),
            onClick: () => a(t),
            disabled: m,
            size: "sm"
          }))
        })
      })]
    })]
  }, t.id)
}

function x(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(p.default, w(P({}, t), {
    guildBoostSlots: [e],
    locationSection: I.jXE.SETTINGS_PREMIUM
  })))
}

function L(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(_.default, w(P({}, t), {
    guildBoostSlot: e
  })))
}

function j(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(m.default, w(P({}, t), {
    guildBoostSlotId: e.id
  })))
}
let M = function(e) {
  let t, n, o, {
      guildBoostSlots: c
    } = e,
    p = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
    _ = (null == p ? true : p.isPausedOrPausePending) === true,
    {
      fractionalState: m
    } = (0, f.Z)(),
    v = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
    S = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
    I = m === T.a$.FP_SUB_PAUSED,
    N = _ && !I,
    {
      appliedGuildBoostSlots: R,
      unappliedGuildBoostSlots: M,
      numActiveGuildBoostSlots: k,
      hasCooldownBoosts: U,
      allGuildBoostsAreOnCooldown: G
    } = i.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        r = false,
        i = true;
      return c.forEach(o => {
        !(0, b.tl)(o) && n++, o.isOnCooldown() ? r = true : i = false, null != o.premiumGuildSubscription ? e.push(o) : t.push(o)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: r,
        allGuildBoostsAreOnCooldown: i
      }
    }, [c]),
    Z = null != p ? y.ZP.getNumIncludedPremiumGuildSubscriptionSlots(p.planId) : 0,
    F = Math.max(0, Z - R.length),
    B = k > Z,
    V = Z === c.length,
    H = V ? F : 1,
    Y = i.useMemo(() => {
      let e = [];
      for (let t = 0; t < H; t++) e.push((0, r.jsx)(O.Z, {
        className: A.headerBoostGem,
        useReducedMotion: v
      }, t));
      return e
    }, [H, v]),
    W = i.useMemo(() => M.find(e => e.isAvailable()), [M]);
  if (0 === M.length) return null;
  let K = M.length;
  if (t = V ? C.intl.formatToPlainString(G ? C.t["3DW6Dc"] : C.t["/u15Qc"], {
      numUnappliedGuildBoostSlots: K
    }) : C.intl.formatToPlainString(G ? C.t["3DW6Dc"] : C.t.BPadnO, {
      numUnappliedGuildBoostSlots: K
    }), y.ZP.isPremium(S)) {
    let e = (e, t) => (0, r.jsx)(u.P3F, {
      className: A.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, h.z)()
      },
      children: e
    }, t);
    n = G ? C.intl.format(C.t.omcpSE, {
      learnMoreHook: e
    }) : C.intl.format(C.t["5mAkVi"], {
      numUnappliedGuildBoostSlots: K,
      learnMoreHook: e
    })
  } else n = G ? C.intl.string(C.t["8pcUZi"]) : C.intl.formatToPlainString(C.t.Kaw82o, {
    numUnappliedGuildBoostSlots: K
  });
  return o = _ && m === T.a$.NONE ? C.intl.string(C.t.mOWsF1) : C.intl.string(C.t.xr4m5B), (0, r.jsx)("div", {
    className: A.wrapper,
    children: (0, r.jsxs)("div", {
      className: a()(A.content, [A.headerWithoutSpecialHeader]),
      children: [(0, r.jsxs)("div", {
        className: A.header,
        children: [(0, r.jsxs)("div", {
          className: A.headerContentPrimary,
          children: [(0, r.jsx)("div", {
            className: A.headerBoostGems,
            children: Y
          }), (0, r.jsxs)("div", {
            className: A.__invalid_headerCopy,
            children: [(0, r.jsx)(u.Heading, {
              className: A.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, r.jsx)(u.Text, {
              className: A.__invalid_headerSubheading,
              color: "text-strong",
              variant: "text-sm/normal",
              children: n
            })]
          })]
        }), (0, r.jsx)("div", {
          className: A.headerContentSecondary,
          children: (0, r.jsx)(l.Z, {
            shouldShow: null == W || N,
            text: o,
            "aria-label": o.toString(),
            children: e => (0, r.jsx)(u.Button, w(P({
              variant: "primary",
              text: C.intl.string(C.t.BMx1iy)
            }, e), {
              disabled: null == W || N,
              onClick: null != W ? () => x(W) : true
            }))
          })
        })]
      }), (!V || U) && (0, r.jsx)("ul", {
        className: A.unappliedBoostSlots,
        children: M.map(e => (0, r.jsx)(D, {
          guildBoostSlot: e,
          isCancellable: B,
          onCancel: L,
          onUncancel: j,
          premiumSubscription: p,
          useReducedMotion: v,
          fractionalState: m
        }, e.id))
      })]
    })
  })
}