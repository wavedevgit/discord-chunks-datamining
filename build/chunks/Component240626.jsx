/** Chunk was on 5606 **/
/** chunk id: 240626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk502572 = require("./502572.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531260 = require("./531260.js"),
  Chunk657516 = require("./657516.jsx"),
  Chunk983511 = require("./983511.jsx"),
  Chunk342744 = require("./342744.jsx"),
  Chunk87719 = require("./87719.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk432334 = require("./432334.jsx"),
  Chunk101135 = require("./101135.jsx"),
  Chunk708030 = require("./708030.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk652804 = require("./652804.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: l,
    onUncancel: s,
    premiumSubscription: a,
    useReducedMotion: u,
    fractionalState: p
  } = e, _ = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), m = (0, A.I5)(t), g = (null == a ? true : a.isPaused) === true && p === j.xc.NONE, f = T.intl.string(T.t.mOWsF1);
  return (0, r.jsxs)("li", {
    className: v.Hp,
    children: [(0, r.jsxs)("div", {
      className: v.YL,
      children: [(0, r.jsx)(C.A, {
        className: v.W6,
        hasCooldown: t.isOnCooldown(),
        isCanceled: m,
        useReducedMotion: u
      }), m && null != a ? (0, r.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: T.intl.format(T.t.Z4ULRD, {
          date: a.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != _ ? (0, r.jsx)(O.A, {
        cooldown: _.getTime()
      }) : (0, r.jsx)(d.Text, {
        className: v.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: T.intl.string(T.t["2mcafz"])
      })]
    }), (0, r.jsxs)("div", {
      className: v.E7,
      children: [n && !m && (0, r.jsx)(o.A, {
        shouldShow: g,
        text: f,
        "aria-label": f.toString(),
        children: e => (0, r.jsx)("div", {
          className: v.LB,
          children: (0, r.jsx)(c.QWc, I(S({}, e), {
            variant: "primary",
            text: T.intl.string(T.t.twFU3R),
            onClick: () => l(t),
            disabled: g,
            size: "sm"
          }))
        })
      }), m && (0, r.jsx)(o.A, {
        shouldShow: g,
        text: f,
        "aria-label": f.toString(),
        children: e => (0, r.jsx)("div", {
          className: v.LB,
          children: (0, r.jsx)(c.QWc, I(S({}, e), {
            variant: "primary",
            text: T.intl.string(T.t["2glQNp"]),
            onClick: () => s(t),
            disabled: g,
            size: "sm"
          }))
        })
      })]
    })]
  }, t.id)
}

function P(e) {
  (0, d.mMO)(async () => t => (0, r.jsx)(m.default, I(S({}, t), {
    guildBoostSlot: e
  })))
}

function R(e) {
  (0, d.mMO)(async () => t => (0, r.jsx)(g.default, I(S({}, t), {
    guildBoostSlotId: e.id
  })))
}
let D = function(e) {
  let t, n, l, {
      guildBoostSlots: c
    } = e,
    m = (0, a.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
    g = (null == m ? true : m.isPausedOrPausePending) === true,
    {
      fractionalState: O
    } = (0, p.A)(),
    C = (0, a.bG)([u.A], () => u.A.useReducedMotion),
    D = (0, a.bG)([b.default], () => b.default.getCurrentUser()),
    w = O === j.xc.FP_SUB_PAUSED,
    L = g && !w,
    {
      appliedGuildBoostSlots: M,
      unappliedGuildBoostSlots: G,
      numActiveGuildBoostSlots: U,
      hasCooldownBoosts: k,
      allGuildBoostsAreOnCooldown: H
    } = i.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        r = false,
        i = true;
      return c.forEach(l => {
        !(0, A.I5)(l) && n++, l.isOnCooldown() ? r = true : i = false, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: r,
        allGuildBoostsAreOnCooldown: i
      }
    }, [c]),
    B = null != m ? E.Ay.getNumIncludedPremiumGuildSubscriptionSlots(m.planId) : 0,
    V = Math.max(0, B - M.length),
    F = U > B,
    Y = B === c.length,
    W = Y ? V : 1,
    z = i.useMemo(() => {
      let e = [];
      for (let t = 0; t < W; t++) e.push((0, r.jsx)(x.A, {
        className: v.YA,
        useReducedMotion: C
      }, t));
      return e
    }, [W, C]),
    K = i.useMemo(() => G.find(e => e.isAvailable()), [G]);
  if (0 === G.length) return null;
  let Z = G.length;
  if (t = Y ? T.intl.formatToPlainString(H ? T.t["3DW6Dc"] : T.t["/u15Qc"], {
      numUnappliedGuildBoostSlots: Z
    }) : T.intl.formatToPlainString(H ? T.t["3DW6Dc"] : T.t.BPadnO, {
      numUnappliedGuildBoostSlots: Z
    }), E.Ay.isPremium(D)) {
    let e = (e, t) => (0, r.jsx)(d.DUT, {
      className: v.nw,
      tag: "span",
      onClick: () => {
        (0, f.Z)()
      },
      children: e
    }, t);
    n = H ? T.intl.format(T.t.omcpSE, {
      learnMoreHook: e
    }) : T.intl.format(T.t["5mAkVi"], {
      numUnappliedGuildBoostSlots: Z,
      learnMoreHook: e
    })
  } else n = H ? T.intl.string(T.t["8pcUZi"]) : T.intl.formatToPlainString(T.t.Kaw82o, {
    numUnappliedGuildBoostSlots: Z
  });
  return l = g && O === j.xc.NONE ? T.intl.string(T.t.mOWsF1) : T.intl.string(T.t.xr4m5B), (0, r.jsx)("div", {
    className: v.iE,
    children: (0, r.jsxs)("div", {
      className: s()(v.Qs, [v.Yq]),
      children: [(0, r.jsxs)("div", {
        className: v.wx,
        children: [(0, r.jsxs)("div", {
          className: v.RW,
          children: [(0, r.jsx)("div", {
            className: v.PS,
            children: z
          }), (0, r.jsxs)("div", {
            className: v.__invalid_headerCopy,
            children: [(0, r.jsx)(d.Heading, {
              className: v.gg,
              variant: "heading-lg/bold",
              children: t
            }), (0, r.jsx)(d.Text, {
              className: v.__invalid_headerSubheading,
              color: "text-strong",
              variant: "text-sm/normal",
              children: n
            })]
          })]
        }), (0, r.jsx)("div", {
          className: v.di,
          children: (0, r.jsx)(o.A, {
            shouldShow: null == K || L,
            text: l,
            "aria-label": l.toString(),
            children: e => (0, r.jsx)(d.Button, I(S({
              variant: "primary",
              text: T.intl.string(T.t.BMx1iy)
            }, e), {
              disabled: null == K || L,
              onClick: null != K ? () => {
                (0, d.mMO)(async () => e => (0, r.jsx)(_.default, I(S({}, e), {
                  guildBoostSlots: [K],
                  locationSection: y.JJy.SETTINGS_PREMIUM
                })))
              } : true
            }))
          })
        })]
      }), (!Y || k) && (0, r.jsx)("ul", {
        className: v.LU,
        children: G.map(e => (0, r.jsx)(N, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: P,
          onUncancel: R,
          premiumSubscription: m,
          useReducedMotion: C,
          fractionalState: O
        }, e.id))
      })]
    })
  })
}