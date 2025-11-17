/** Chunk was on web.js **/
/** chunk id: 296533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L,
  r: () => x
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk636606 = require("./636606.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk975298 = require("./975298.js"),
  Chunk280942 = require("./280942.jsx"),
  Chunk209747 = require("./209747.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk709054 = require("./709054.js"),
  Chunk357956 = require("./357956.jsx"),
  Chunk275909 = require("./275909.jsx"),
  Chunk300037 = require("./300037.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk183547 = require("./183547.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 3e3;

function N(e) {
  if (null == e || e === b.Eu4.NONE) return "";
  let t = [O.intl.formatToPlainString(O.t["dLlKX/"], {
    numEmojiSlots: y.HO[e].limits.emoji
  }), O.intl.formatToPlainString(O.t["+ANIfv"], {
    numStickerSlots: y.HO[e].limits.stickers
  }), O.intl.formatToPlainString(O.t["4gt60b"], {
    numSoundboardSlots: y.HO[e].limits.soundboardSounds
  }), O.intl.formatToPlainString(O.t.XahSjZ, {
    resolution: y.HO[e].limits.screenShareQualityResolution,
    framerate: y.HO[e].limits.screenShareQualityFramerate
  }), O.intl.formatToPlainString(O.t.NbNs7S, {
    bitrate: y.HO[e].limits.bitrate / 1e3
  }), O.intl.formatToPlainString(O.t.VVKcpn, {
    filesize: y.HO[e].limits.fileSize / 1024 / 1024
  }), O.intl.formatToPlainString(O.t.TbpCvv, {
    numVideoStageSeats: y.HO[e].limits.stageVideoUsers
  }), O.intl.string(O.t.LDyX3i), O.intl.string(O.t.YtGlPW)];
  e >= b.Eu4.TIER_2 && (t.push(O.intl.string(O.t.SztbtN)), t.push(O.intl.string(O.t["3GK91n"]))), e >= b.Eu4.TIER_3 && t.push(O.intl.string(O.t["XUUJd+"]));
  let n = t[Math.floor(Math.random() * t.length)];
  return O.intl.format(O.t["/dOAmQ"], {
    perk: n
  })
}

function R(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    showAltText: o,
    isCanceled: l,
    premiumSubscription: c,
    fractionalPremiumInfo: u
  } = e, d = i.useMemo(() => {
    if (l) {
      let e = c.currentPeriodEnd;
      return c.isPausedForFractionalPremium && (e = u.endsAt.toDate()), O.intl.format(O.t.Z4ULRD, {
        date: e
      })
    }
    let e = null != n.premiumGuildSubscription ? h.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
    return O.intl.formatToPlainString(O.t.lY2Bur, {
      date: new Date(e)
    })
  }, [n, l, c, u]), f = i.useMemo(() => N(t), [t]), _ = (0, s.Yzy)(o, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  }, "animate-always");
  return l || t === b.Eu4.NONE ? (0, r.jsx)("div", {
    className: v.boostDescriptionInnerContainer,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: d
    })
  }) : _((e, t) => (0, r.jsx)(a.animated.div, {
    style: e,
    className: v.boostDescriptionInnerContainer,
    children: (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? f : d
    })
  }))
}

function P(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: a,
    hasCancelableGuildBoostSlot: d,
    showAltText: f,
    isLastGuildBoostSlot: p
  } = e, h = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), E = i.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), b = i.useMemo(() => null != E && E > new Date, [E]), y = (0, _.tl)(n), I = (0, c.Z)(), S = i.useRef(null);

  function C(e) {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(u.Z, {
      onClose: t,
      guildBoostSlot: n,
      premiumSubscription: a,
      hasCancelableGuildBoostSlot: d,
      fractionalState: I.fractionalState
    })
  }
  return (0, r.jsxs)("div", {
    className: v.boostContainer,
    children: [(0, r.jsxs)("div", {
      className: v.boostInnerContainer,
      children: [(0, r.jsx)(g.Z, {
        isCanceled: y,
        hasCooldown: b,
        useReducedMotion: h
      }), (0, r.jsx)("div", {
        className: v.boostDescriptionContainer,
        children: null != E && b && !y ? (0, r.jsx)(m.Z, {
          className: v.boostDescriptionInnerContainer,
          cooldown: E.getTime()
        }) : (0, r.jsx)(R, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: f,
          isCanceled: y,
          premiumSubscription: a,
          fractionalPremiumInfo: I
        })
      }), (0, r.jsx)(s.yRy, {
        targetElementRef: S,
        renderPopout: C,
        position: "right",
        align: "center",
        children: e => (0, r.jsx)(s.P3F, A(T({}, e), {
          innerRef: S,
          "aria-label": O.intl.string(O.t.PdRCRg),
          className: v.boostSlotMenuIcon,
          children: (0, r.jsx)(s.Huf, {
            size: "md",
            color: "currentColor"
          })
        }))
      })]
    }), !p && (0, r.jsx)("div", {
      className: v.boostContainerSeparator
    })]
  })
}

function D(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: a,
    showAltText: s
  } = e, l = (0, o.e7)([f.Z], () => f.Z.getGuild(t), [t]);
  return (0, r.jsxs)("div", {
    className: v.appliedBoostContainer,
    children: [(0, r.jsx)(E.Z, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(P, {
      guildTier: null == l ? true : l.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: a,
      showAltText: s,
      isLastGuildBoostSlot: t === n.length - 1
    }, e.id))]
  })
}

function w(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: i
  } = e, a = (0, o.e7)([f.Z], () => f.Z.getGuild(t), [t]), s = h.default.fromTimestamp(Date.now());
  if (n.forEach(e => {
      (null == s || 0 > h.default.compare(e.id, s)) && (s = e.id)
    }), null == s) return null;
  let l = d.Z.createFromServer({
    id: h.default.fromTimestamp(Date.now()),
    subscription_id: i.id,
    canceled: false,
    premium_guild_subscription: {
      id: s,
      guild_id: t
    },
    cooldown_ends_at: null
  }, i);
  return (0, r.jsxs)("div", {
    className: v.appliedBoostContainer,
    children: [(0, r.jsx)(E.Z, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(P, {
      guildTier: null == a ? true : a.premiumTier,
      guildBoostSlot: l,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: false,
      showAltText: false,
      isLastGuildBoostSlot: t === n.length - 1
    }, t))]
  })
}

function x(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: n
  } = e, a = i.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let n = t.guildId;
      n in e || (e[n] = []), e[n].push(t)
    }), e
  }, [t]);
  return null == n || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: v.wrapper,
    children: [(0, r.jsx)("div", {
      className: v.container,
      children: h.default.keys(a).map(e => (0, r.jsx)(w, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: a[e]
      }, e))
    }), (0, r.jsx)("div", {
      className: v.mainSeparator
    })]
  })
}

function L(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: n
  } = e, [a, o] = i.useState(false);
  i.useEffect(() => {
    let e = false;
    return null != n && (e = setInterval(() => {
      o(e => !e)
    }, C)), () => {
      clearInterval(e)
    }
  }, [n]);
  let {
    boostsByGuildId: s,
    numActiveGuildBoostSlots: l
  } = i.useMemo(() => {
    let e = 0,
      n = {};
    return Object.keys(t).forEach(r => {
      let i = t[r];
      if (!(0, _.tl)(i) && e++, null != i.premiumGuildSubscription) {
        let e = i.premiumGuildSubscription.guildId;
        e in n || (n[e] = []), n[e].push(i)
      }
    }), {
      boostsByGuildId: n,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == n || 0 === Object.keys(s).length) return null;
  let c = l > p.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
  return (0, r.jsxs)("div", {
    className: v.wrapper,
    children: [(0, r.jsx)("div", {
      className: v.container,
      children: h.default.keys(s).map(e => (0, r.jsx)(D, {
        guildId: e,
        guildBoostSlotRecords: s[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: a
      }, e))
    }), (0, r.jsx)("div", {
      className: v.mainSeparator
    })]
  })
}