/** Chunk was on 9207 **/
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

function j(e) {
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

function y(e, t) {
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

function v(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: l,
    onUncancel: s,
    premiumSubscription: a,
    useReducedMotion: u,
    fractionalState: _
  } = e, p = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), m = (0, h.I5)(t), g = (null == a ? true : a.isPaused) === true && _ === T.xc.NONE, A = I.intl.string(I.t.mOWsF1);
  return (0, r.jsxs)("li", {
    className: N.Hp,
    children: [(0, r.jsxs)("div", {
      className: N.YL,
      children: [(0, r.jsx)(C.A, {
        className: N.W6,
        hasCooldown: t.isOnCooldown(),
        isCanceled: m,
        useReducedMotion: u
      }), m && null != a ? (0, r.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: I.intl.format(I.t.Z4ULRD, {
          date: a.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != p ? (0, r.jsx)(x.A, {
        cooldown: p.getTime()
      }) : (0, r.jsx)(d.Text, {
        className: N.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: I.intl.string(I.t["2mcafz"])
      })]
    }), (0, r.jsxs)("div", {
      className: N.E7,
      children: [n && !m && (0, r.jsx)(o.A, {
        shouldShow: g,
        text: A,
        "aria-label": A.toString(),
        children: e => (0, r.jsx)("div", {
          className: N.LB,
          children: (0, r.jsx)(c.QWc, y(j({}, e), {
            variant: "primary",
            text: I.intl.string(I.t.twFU3R),
            onClick: () => l(t),
            disabled: g,
            size: "sm"
          }))
        })
      }), m && (0, r.jsx)(o.A, {
        shouldShow: g,
        text: A,
        "aria-label": A.toString(),
        children: e => (0, r.jsx)("div", {
          className: N.LB,
          children: (0, r.jsx)(c.QWc, y(j({}, e), {
            variant: "primary",
            text: I.intl.string(I.t["2glQNp"]),
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
  (0, d.mMO)(async () => t => (0, r.jsx)(m.default, y(j({}, t), {
    guildBoostSlot: e
  })))
}

function R(e) {
  (0, d.mMO)(async () => t => (0, r.jsx)(g.default, y(j({}, t), {
    guildBoostSlotId: e.id
  })))
}
let D = function(e) {
  let t, n, l, {
      guildBoostSlots: c
    } = e,
    m = (0, a.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
    g = (null == m ? true : m.isPausedOrPausePending) === true,
    {
      fractionalState: x
    } = (0, _.A)(),
    C = (0, a.bG)([u.A], () => u.A.useReducedMotion),
    D = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
    L = x === T.xc.FP_SUB_PAUSED,
    w = g && !L,
    {
      appliedGuildBoostSlots: M,
      unappliedGuildBoostSlots: G,
      numActiveGuildBoostSlots: U,
      hasCooldownBoosts: k,
      allGuildBoostsAreOnCooldown: B
    } = i.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        r = false,
        i = true;
      return c.forEach(l => {
        !(0, h.I5)(l) && n++, l.isOnCooldown() ? r = true : i = false, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: r,
        allGuildBoostsAreOnCooldown: i
      }
    }, [c]),
    H = null != m ? E.Ay.getNumIncludedPremiumGuildSubscriptionSlots(m.planId) : 0,
    V = Math.max(0, H - M.length),
    F = U > H,
    Y = H === c.length,
    W = Y ? V : 1,
    K = i.useMemo(() => {
      let e = [];
      for (let t = 0; t < W; t++) e.push((0, r.jsx)(O.A, {
        className: N.YA,
        useReducedMotion: C
      }, t));
      return e
    }, [W, C]),
    z = i.useMemo(() => G.find(e => e.isAvailable()), [G]);
  if (0 === G.length) return null;
  let Z = G.length;
  if (t = Y ? I.intl.formatToPlainString(B ? I.t["3DW6Dc"] : I.t["/u15Qc"], {
      numUnappliedGuildBoostSlots: Z
    }) : I.intl.formatToPlainString(B ? I.t["3DW6Dc"] : I.t.BPadnO, {
      numUnappliedGuildBoostSlots: Z
    }), E.Ay.isPremium(D)) {
    let e = (e, t) => (0, r.jsx)(d.DUT, {
      className: N.nw,
      tag: "span",
      onClick: () => {
        (0, A.e)()
      },
      children: e
    }, t);
    n = B ? I.intl.format(I.t.omcpSE, {
      learnMoreHook: e
    }) : I.intl.format(I.t["5mAkVi"], {
      numUnappliedGuildBoostSlots: Z,
      learnMoreHook: e
    })
  } else n = B ? I.intl.string(I.t["8pcUZi"]) : I.intl.formatToPlainString(I.t.Kaw82o, {
    numUnappliedGuildBoostSlots: Z
  });
  return l = g && x === T.xc.NONE ? I.intl.string(I.t.mOWsF1) : I.intl.string(I.t.xr4m5B), (0, r.jsx)("div", {
    className: N.iE,
    children: (0, r.jsxs)("div", {
      className: s()(N.Qs, [N.Yq]),
      children: [(0, r.jsxs)("div", {
        className: N.wx,
        children: [(0, r.jsxs)("div", {
          className: N.RW,
          children: [(0, r.jsx)("div", {
            className: N.PS,
            children: K
          }), (0, r.jsxs)("div", {
            className: N.__invalid_headerCopy,
            children: [(0, r.jsx)(d.Heading, {
              className: N.gg,
              variant: "heading-lg/bold",
              children: t
            }), (0, r.jsx)(d.Text, {
              className: N.__invalid_headerSubheading,
              color: "text-strong",
              variant: "text-sm/normal",
              children: n
            })]
          })]
        }), (0, r.jsx)("div", {
          className: N.di,
          children: (0, r.jsx)(o.A, {
            shouldShow: null == z || w,
            text: l,
            "aria-label": l.toString(),
            children: e => (0, r.jsx)(d.Button, y(j({
              variant: "primary",
              text: I.intl.string(I.t.BMx1iy)
            }, e), {
              disabled: null == z || w,
              onClick: null != z ? () => {
                (0, d.mMO)(async () => e => (0, r.jsx)(p.default, y(j({}, e), {
                  guildBoostSlots: [z],
                  locationSection: S.JJy.SETTINGS_PREMIUM
                })))
              } : true
            }))
          })
        })]
      }), (!Y || k) && (0, r.jsx)("ul", {
        className: N.LU,
        children: G.map(e => (0, r.jsx)(v, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: P,
          onUncancel: R,
          premiumSubscription: m,
          useReducedMotion: C,
          fractionalState: x
        }, e.id))
      })]
    })
  })
}