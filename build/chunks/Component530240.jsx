/** Chunk was on web.js **/
/** chunk id: 530240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L,
  N: () => x
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531260 = require("./531260.js"),
  Chunk39672 = require("./39672.jsx"),
  Chunk545934 = require("./545934.js"),
  Chunk71393 = require("./71393.js"),
  Chunk473145 = require("./473145.js"),
  Chunk927578 = require("./927578.js"),
  Chunk661191 = require("./661191.js"),
  Chunk101135 = require("./101135.jsx"),
  Chunk708030 = require("./708030.jsx"),
  Chunk358172 = require("./358172.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk325234 = require("./325234.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
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

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 3e3;

function N(e) {
  if (null == e || e === y.TVA.NONE) return "";
  let t = [O.intl.formatToPlainString(O.t["dLlKX/"], {
    numEmojiSlots: b.TG[e].limits.emoji
  }), O.intl.formatToPlainString(O.t["+ANIfv"], {
    numStickerSlots: b.TG[e].limits.stickers
  }), O.intl.formatToPlainString(O.t["4gt60b"], {
    numSoundboardSlots: b.TG[e].limits.soundboardSounds
  }), O.intl.formatToPlainString(O.t.XahSjZ, {
    resolution: b.TG[e].limits.screenShareQualityResolution,
    framerate: b.TG[e].limits.screenShareQualityFramerate
  }), O.intl.formatToPlainString(O.t.NbNs7S, {
    bitrate: b.TG[e].limits.bitrate / 1e3
  }), O.intl.formatToPlainString(O.t.VVKcpn, {
    filesize: b.TG[e].limits.fileSize / 1024 / 1024
  }), O.intl.formatToPlainString(O.t.TbpCvv, {
    numVideoStageSeats: b.TG[e].limits.stageVideoUsers
  }), O.intl.string(O.t.LDyX3i), O.intl.string(O.t.YtGlPW)];
  e >= y.TVA.TIER_2 && (t.push(O.intl.string(O.t.SztbtN)), t.push(O.intl.string(O.t["3GK91n"]))), e >= y.TVA.TIER_3 && t.push(O.intl.string(O.t["XUUJd+"]));
  let n = t[Math.floor(Math.random() * t.length)];
  return O.intl.format(O.t["/dOAmQ"], {
    perk: n
  })
}

function R(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    showAltText: s,
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
  }, [n, l, c, u]), f = i.useMemo(() => N(t), [t]), p = (0, o.pnh)(s, {
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
  return l || t === y.TVA.NONE ? (0, r.jsx)("div", {
    className: v.xm,
    children: (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: d
    })
  }) : p((e, t) => (0, r.jsx)(a.animated.div, {
    style: e,
    className: v.xm,
    children: (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? f : d
    })
  }))
}

function w(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: a,
    hasCancelableGuildBoostSlot: d,
    showAltText: f,
    isLastGuildBoostSlot: _
  } = e, h = (0, s.bG)([l.A], () => l.A.useReducedMotion), E = i.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), y = i.useMemo(() => null != E && E > new Date, [E]), b = (0, p.I5)(n), A = (0, c.A)(), S = i.useRef(null);

  function C(e) {
    let {
      closePopout: t
    } = e;
    return (0, r.jsx)(u.A, {
      onClose: t,
      guildBoostSlot: n,
      premiumSubscription: a,
      hasCancelableGuildBoostSlot: d,
      fractionalState: A.fractionalState
    })
  }
  return (0, r.jsxs)("div", {
    className: v.PW,
    children: [(0, r.jsxs)("div", {
      className: v.$U,
      children: [(0, r.jsx)(g.A, {
        isCanceled: b,
        hasCooldown: y,
        useReducedMotion: h
      }), (0, r.jsx)("div", {
        className: v.vh,
        children: null != E && y && !b ? (0, r.jsx)(m.A, {
          className: v.xm,
          cooldown: E.getTime()
        }) : (0, r.jsx)(R, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: f,
          isCanceled: b,
          premiumSubscription: a,
          fractionalPremiumInfo: A
        })
      }), (0, r.jsx)(o.YNO, {
        targetElementRef: S,
        renderPopout: C,
        position: "right",
        align: "center",
        children: e => (0, r.jsx)(o.DUT, T(I({}, e), {
          innerRef: S,
          "aria-label": O.intl.string(O.t.PdRCRg),
          className: v.oU,
          children: (0, r.jsx)(o.FHP, {
            size: "md",
            color: "currentColor"
          })
        }))
      })]
    }), !_ && (0, r.jsx)("div", {
      className: v.eX
    })]
  })
}

function P(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: a,
    showAltText: o
  } = e, l = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]);
  return (0, r.jsxs)("div", {
    className: v.ag,
    children: [(0, r.jsx)(E.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(w, {
      guildTier: null == l ? true : l.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: a,
      showAltText: o,
      isLastGuildBoostSlot: t === n.length - 1
    }, e.id))]
  })
}

function D(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: i
  } = e, a = (0, s.bG)([f.A], () => f.A.getGuild(t), [t]), o = h.default.fromTimestamp(Date.now());
  if (n.forEach(e => {
      (null == o || 0 > h.default.compare(e.id, o)) && (o = e.id)
    }), null == o) return null;
  let l = d.A.createFromServer({
    id: h.default.fromTimestamp(Date.now()),
    subscription_id: i.id,
    canceled: false,
    premium_guild_subscription: {
      id: o,
      guild_id: t
    },
    cooldown_ends_at: null
  }, i);
  return (0, r.jsxs)("div", {
    className: v.ag,
    children: [(0, r.jsx)(E.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(w, {
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
    className: v.iE,
    children: [(0, r.jsx)("div", {
      className: v.kL,
      children: h.default.keys(a).map(e => (0, r.jsx)(D, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: a[e]
      }, e))
    }), (0, r.jsx)("div", {
      className: v.vK
    })]
  })
}

function L(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: n
  } = e, [a, s] = i.useState(false);
  i.useEffect(() => {
    let e = false;
    return null != n && (e = setInterval(() => {
      s(e => !e)
    }, C)), () => {
      clearInterval(e)
    }
  }, [n]);
  let {
    boostsByGuildId: o,
    numActiveGuildBoostSlots: l
  } = i.useMemo(() => {
    let e = 0,
      n = {};
    return Object.keys(t).forEach(r => {
      let i = t[r];
      if (!(0, p.I5)(i) && e++, null != i.premiumGuildSubscription) {
        let e = i.premiumGuildSubscription.guildId;
        e in n || (n[e] = []), n[e].push(i)
      }
    }), {
      boostsByGuildId: n,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == n || 0 === Object.keys(o).length) return null;
  let c = l > _.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
  return (0, r.jsxs)("div", {
    className: v.iE,
    children: [(0, r.jsx)("div", {
      className: v.kL,
      children: h.default.keys(o).map(e => (0, r.jsx)(P, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: a
      }, e))
    }), (0, r.jsx)("div", {
      className: v.vK
    })]
  })
}