/** Chunk was on web.js **/
/** chunk id: 615603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function R(e) {
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

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: a,
    onUncancel: o,
    premiumSubscription: s,
    useReducedMotion: d,
    fractionalState: f
  } = e, _ = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), p = (0, b.tl)(t), h = (null == s ? true : s.isPaused) === true && f === S.a$.NONE, m = A.intl.string(A.t.mOWsF1);
  return (0, r.jsxs)("li", {
    className: C.unappliedGuildBoostSlot,
    children: [(0, r.jsxs)("div", {
      className: C.unappliedGuildBoostSlotContentPrimary,
      children: [(0, r.jsx)(I.Z, {
        className: C.unappliedGuildBoostSlotIcon,
        hasCooldown: t.isOnCooldown(),
        isCanceled: p,
        useReducedMotion: d
      }), p && null != s ? (0, r.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: A.intl.format(A.t.Z4ULRD, {
          date: s.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != _ ? (0, r.jsx)(v.Z, {
        cooldown: _.getTime()
      }) : (0, r.jsx)(u.Text, {
        className: C.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: A.intl.string(A.t["2mcafz"])
      })]
    }), (0, r.jsxs)("div", {
      className: C.unappliedGuildBoostSlotContentSecondary,
      children: [n && !p && (0, r.jsx)(l.Z, {
        shouldShow: h,
        text: m,
        "aria-label": m.toString(),
        children: e => (0, r.jsx)("div", {
          className: C.unappliedGuildBoostSlotCta,
          children: (0, r.jsx)(c.Avr, D(R({}, e), {
            variant: "primary",
            text: A.intl.string(A.t.twFU3R),
            onClick: () => a(t),
            disabled: h,
            size: "sm"
          }))
        })
      }), p && (0, r.jsx)(l.Z, {
        shouldShow: h,
        text: m,
        "aria-label": m.toString(),
        children: e => (0, r.jsx)("div", {
          className: C.unappliedGuildBoostSlotCta,
          children: (0, r.jsx)(c.Avr, D(R({}, e), {
            variant: "primary",
            text: A.intl.string(A.t["2glQNp"]),
            onClick: () => o(t),
            disabled: h,
            size: "sm"
          }))
        })
      })]
    })]
  }, t.id)
}

function L(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(_.default, D(R({}, t), {
    guildBoostSlots: [e],
    locationSection: T.jXE.SETTINGS_PREMIUM
  })))
}

function x(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(p.default, D(R({}, t), {
    guildBoostSlot: e
  })))
}

function M(e) {
  (0, u.ZDy)(async () => t => (0, r.jsx)(h.default, D(R({}, t), {
    guildBoostSlotId: e.id
  })))
}
let k = function(e) {
  let t, n, a, {
      guildBoostSlots: c
    } = e,
    _ = (0, s.e7)([E.Z], () => E.Z.getPremiumTypeSubscription()),
    p = (null == _ ? true : _.isPausedOrPausePending) === true,
    {
      fractionalState: h
    } = (0, f.Z)(),
    v = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
    I = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
    T = h === S.a$.FP_SUB_PAUSED,
    N = p && !T,
    {
      appliedGuildBoostSlots: P,
      unappliedGuildBoostSlots: k,
      numActiveGuildBoostSlots: j,
      hasCooldownBoosts: U,
      allGuildBoostsAreOnCooldown: G
    } = i.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        r = false,
        i = true;
      return c.forEach(a => {
        !(0, b.tl)(a) && n++, a.isOnCooldown() ? r = true : i = false, null != a.premiumGuildSubscription ? e.push(a) : t.push(a)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: r,
        allGuildBoostsAreOnCooldown: i
      }
    }, [c]),
    B = null != _ ? y.ZP.getNumIncludedPremiumGuildSubscriptionSlots(_.planId) : 0,
    Z = Math.max(0, B - P.length),
    F = j > B,
    V = B === c.length,
    H = V ? Z : 1,
    Y = i.useMemo(() => {
      let e = [];
      for (let t = 0; t < H; t++) e.push((0, r.jsx)(O.Z, {
        className: C.headerBoostGem,
        useReducedMotion: v
      }, t));
      return e
    }, [H, v]),
    W = i.useMemo(() => k.find(e => e.isAvailable()), [k]);
  if (0 === k.length) return null;
  let K = k.length;
  if (t = V ? A.intl.formatToPlainString(G ? A.t["3DW6Dc"] : A.t["/u15Qc"], {
      numUnappliedGuildBoostSlots: K
    }) : A.intl.formatToPlainString(G ? A.t["3DW6Dc"] : A.t.BPadnO, {
      numUnappliedGuildBoostSlots: K
    }), y.ZP.isPremium(I)) {
    let e = (e, t) => (0, r.jsx)(u.P3F, {
      className: C.headerLearnMoreLink,
      tag: "span",
      onClick: () => {
        (0, m.z)()
      },
      children: e
    }, t);
    n = G ? A.intl.format(A.t.omcpSE, {
      learnMoreHook: e
    }) : A.intl.format(A.t["5mAkVi"], {
      numUnappliedGuildBoostSlots: K,
      learnMoreHook: e
    })
  } else n = G ? A.intl.string(A.t["8pcUZi"]) : A.intl.formatToPlainString(A.t.Kaw82o, {
    numUnappliedGuildBoostSlots: K
  });
  return a = p && h === S.a$.NONE ? A.intl.string(A.t.mOWsF1) : A.intl.string(A.t.xr4m5B), (0, r.jsx)("div", {
    className: C.wrapper,
    children: (0, r.jsxs)("div", {
      className: o()(C.content, [C.headerWithoutSpecialHeader]),
      children: [(0, r.jsxs)("div", {
        className: C.header,
        children: [(0, r.jsxs)("div", {
          className: C.headerContentPrimary,
          children: [(0, r.jsx)("div", {
            className: C.headerBoostGems,
            children: Y
          }), (0, r.jsxs)("div", {
            className: C.__invalid_headerCopy,
            children: [(0, r.jsx)(u.Heading, {
              className: C.headerHeading,
              variant: "heading-lg/bold",
              children: t
            }), (0, r.jsx)(u.Text, {
              className: C.__invalid_headerSubheading,
              color: "text-primary",
              variant: "text-sm/normal",
              children: n
            })]
          })]
        }), (0, r.jsx)("div", {
          className: C.headerContentSecondary,
          children: (0, r.jsx)(l.Z, {
            shouldShow: null == W || N,
            text: a,
            "aria-label": a.toString(),
            children: e => (0, r.jsx)(u.Button, D(R({
              variant: "primary",
              text: A.intl.string(A.t.BMx1iy)
            }, e), {
              disabled: null == W || N,
              onClick: null != W ? () => L(W) : true
            }))
          })
        })]
      }), (!V || U) && (0, r.jsx)("ul", {
        className: C.unappliedBoostSlots,
        children: k.map(e => (0, r.jsx)(w, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: x,
          onUncancel: M,
          premiumSubscription: _,
          useReducedMotion: v,
          fractionalState: h
        }, e.id))
      })]
    })
  })
}