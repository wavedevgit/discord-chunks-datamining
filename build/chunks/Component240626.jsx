/** Chunk was on 60667 **/
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

function v(e) {
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

function N(e, t) {
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

function y(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: l,
    onUncancel: s,
    premiumSubscription: a,
    useReducedMotion: u,
    fractionalState: _
  } = e, p = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), m = (0, b.I5)(t), g = (null == a ? true : a.isPaused) === true && _ === I.xc.NONE, A = S.intl.string(S.t.mOWsF1);
  return (0, r.jsxs)("li", {
    className: j.Hp,
    children: [(0, r.jsxs)("div", {
      className: j.YL,
      children: [(0, r.jsx)(C.A, {
        className: j.W6,
        hasCooldown: t.isOnCooldown(),
        isCanceled: m,
        useReducedMotion: u
      }), m && null != a ? (0, r.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: S.intl.format(S.t.Z4ULRD, {
          date: a.currentPeriodEnd
        })
      }) : t.isOnCooldown() && null != p ? (0, r.jsx)(O.A, {
        cooldown: p.getTime()
      }) : (0, r.jsx)(d.Text, {
        className: j.__invalid_unappliedGuildBoostSlotDescription,
        color: "text-muted",
        variant: "text-sm/medium",
        children: S.intl.string(S.t["2mcafz"])
      })]
    }), (0, r.jsxs)("div", {
      className: j.E7,
      children: [n && !m && (0, r.jsx)(o.A, {
        shouldShow: g,
        text: A,
        "aria-label": A.toString(),
        children: e => (0, r.jsx)("div", {
          className: j.LB,
          children: (0, r.jsx)(c.QWc, N(v({}, e), {
            variant: "primary",
            text: S.intl.string(S.t.twFU3R),
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
          className: j.LB,
          children: (0, r.jsx)(c.QWc, N(v({}, e), {
            variant: "primary",
            text: S.intl.string(S.t["2glQNp"]),
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
  (0, d.mMO)(async () => t => (0, r.jsx)(m.default, N(v({}, t), {
    guildBoostSlot: e
  })))
}

function R(e) {
  (0, d.mMO)(async () => t => (0, r.jsx)(g.default, N(v({}, t), {
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
    } = (0, _.A)(),
    C = (0, a.bG)([u.A], () => u.A.useReducedMotion),
    D = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
    w = O === I.xc.FP_SUB_PAUSED,
    L = g && !w,
    {
      appliedGuildBoostSlots: M,
      unappliedGuildBoostSlots: U,
      numActiveGuildBoostSlots: G,
      hasCooldownBoosts: k,
      allGuildBoostsAreOnCooldown: V
    } = i.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        r = false,
        i = true;
      return c.forEach(l => {
        !(0, b.I5)(l) && n++, l.isOnCooldown() ? r = true : i = false, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: r,
        allGuildBoostsAreOnCooldown: i
      }
    }, [c]),
    H = null != m ? E.Ay.getNumIncludedPremiumGuildSubscriptionSlots(m.planId) : 0,
    B = Math.max(0, H - M.length),
    F = G > H,
    Y = H === c.length,
    W = Y ? B : 1,
    z = i.useMemo(() => {
      let e = [];
      for (let t = 0; t < W; t++) e.push((0, r.jsx)(x.A, {
        className: j.YA,
        useReducedMotion: C
      }, t));
      return e
    }, [W, C]),
    K = i.useMemo(() => U.find(e => e.isAvailable()), [U]);
  if (0 === U.length) return null;
  let Z = U.length;
  if (t = Y ? S.intl.formatToPlainString(V ? S.t["3DW6Dc"] : S.t["/u15Qc"], {
      numUnappliedGuildBoostSlots: Z
    }) : S.intl.formatToPlainString(V ? S.t["3DW6Dc"] : S.t.BPadnO, {
      numUnappliedGuildBoostSlots: Z
    }), E.Ay.isPremium(D)) {
    let e = (e, t) => (0, r.jsx)(d.DUT, {
      className: j.nw,
      tag: "span",
      onClick: () => {
        (0, A.Z)()
      },
      children: e
    }, t);
    n = V ? S.intl.format(S.t.omcpSE, {
      learnMoreHook: e
    }) : S.intl.format(S.t["5mAkVi"], {
      numUnappliedGuildBoostSlots: Z,
      learnMoreHook: e
    })
  } else n = V ? S.intl.string(S.t["8pcUZi"]) : S.intl.formatToPlainString(S.t.Kaw82o, {
    numUnappliedGuildBoostSlots: Z
  });
  return l = g && O === I.xc.NONE ? S.intl.string(S.t.mOWsF1) : S.intl.string(S.t.xr4m5B), (0, r.jsx)("div", {
    className: j.iE,
    children: (0, r.jsxs)("div", {
      className: s()(j.Qs, [j.Yq]),
      children: [(0, r.jsxs)("div", {
        className: j.wx,
        children: [(0, r.jsxs)("div", {
          className: j.RW,
          children: [(0, r.jsx)("div", {
            className: j.PS,
            children: z
          }), (0, r.jsxs)("div", {
            className: j.__invalid_headerCopy,
            children: [(0, r.jsx)(d.Heading, {
              className: j.gg,
              variant: "heading-lg/bold",
              children: t
            }), (0, r.jsx)(d.Text, {
              className: j.__invalid_headerSubheading,
              color: "text-strong",
              variant: "text-sm/normal",
              children: n
            })]
          })]
        }), (0, r.jsx)("div", {
          className: j.di,
          children: (0, r.jsx)(o.A, {
            shouldShow: null == K || L,
            text: l,
            "aria-label": l.toString(),
            children: e => (0, r.jsx)(d.Button, N(v({
              variant: "primary",
              text: S.intl.string(S.t.BMx1iy)
            }, e), {
              disabled: null == K || L,
              onClick: null != K ? () => {
                (0, d.mMO)(async () => e => (0, r.jsx)(p.default, N(v({}, e), {
                  guildBoostSlots: [K],
                  locationSection: T.JJy.SETTINGS_PREMIUM
                })))
              } : true
            }))
          })
        })]
      }), (!Y || k) && (0, r.jsx)("ul", {
        className: j.LU,
        children: U.map(e => (0, r.jsx)(y, {
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