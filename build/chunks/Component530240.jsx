/** Chunk was on 9207 **/
/** chunk id: 530240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  N: () => N
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk92674 = require("./92674.js"),
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

function C(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    showAltText: s,
    isCanceled: o,
    premiumSubscription: c,
    fractionalPremiumInfo: d
  } = e, u = i.useMemo(() => {
    if (o) {
      let e = c.currentPeriodEnd;
      return c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), O.intl.format(O.t.Z4ULRD, {
        date: e
      })
    }
    let e = null != n.premiumGuildSubscription ? g.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
    return O.intl.formatToPlainString(O.t.lY2Bur, {
      date: new Date(e)
    })
  }, [n, o, c, d]), _ = i.useMemo(() => (function(e) {
    if (null == e || e === h.TVA.NONE) return "";
    let t = [O.intl.formatToPlainString(O.t["dLlKX/"], {
      numEmojiSlots: E.TG[e].limits.emoji
    }), O.intl.formatToPlainString(O.t["+ANIfv"], {
      numStickerSlots: E.TG[e].limits.stickers
    }), O.intl.formatToPlainString(O.t["4gt60b"], {
      numSoundboardSlots: E.TG[e].limits.soundboardSounds
    }), O.intl.formatToPlainString(O.t.XahSjZ, {
      resolution: E.TG[e].limits.screenShareQualityResolution,
      framerate: E.TG[e].limits.screenShareQualityFramerate
    }), O.intl.formatToPlainString(O.t.NbNs7S, {
      bitrate: E.TG[e].limits.bitrate / 1e3
    }), O.intl.formatToPlainString(O.t.VVKcpn, {
      filesize: E.TG[e].limits.fileSize / 1024 / 1024
    }), O.intl.formatToPlainString(O.t.TbpCvv, {
      numVideoStageSeats: E.TG[e].limits.stageVideoUsers
    }), O.intl.string(O.t.LDyX3i), O.intl.string(O.t.YtGlPW)];
    e >= h.TVA.TIER_2 && (t.push(O.intl.string(O.t.SztbtN)), t.push(O.intl.string(O.t["3GK91n"]))), e >= h.TVA.TIER_3 && t.push(O.intl.string(O.t["XUUJd+"]));
    let n = t[Math.floor(Math.random() * t.length)];
    return O.intl.format(O.t["/dOAmQ"], {
      perk: n
    })
  })(t), [t]), p = (0, a.pnh)(s, {
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
  return o || t === h.TVA.NONE ? (0, r.jsx)("div", {
    className: x.xm,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : p((e, t) => (0, r.jsx)(l.animated.div, {
    style: e,
    className: x.xm,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? _ : u
    })
  }))
}

function S(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: l,
    hasCancelableGuildBoostSlot: u,
    showAltText: _,
    isLastGuildBoostSlot: m
  } = e, g = (0, s.bG)([o.A], () => o.A.useReducedMotion), b = i.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), h = i.useMemo(() => null != b && b > new Date, [b]), E = (0, p.I5)(n), S = (0, c.A)(), T = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: x.PW,
    children: [(0, r.jsxs)("div", {
      className: x.$U,
      children: [(0, r.jsx)(f.A, {
        isCanceled: E,
        hasCooldown: h,
        useReducedMotion: g
      }), (0, r.jsx)("div", {
        className: x.vh,
        children: null != b && h && !E ? (0, r.jsx)(A.A, {
          className: x.xm,
          cooldown: b.getTime()
        }) : (0, r.jsx)(C, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: _,
          isCanceled: E,
          premiumSubscription: l,
          fractionalPremiumInfo: S
        })
      }), (0, r.jsx)(a.YNO, {
        targetElementRef: T,
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(d.A, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: u,
            fractionalState: S.fractionalState
          })
        },
        position: "right",
        align: "center",
        children: e => {
          var t, n;
          return (0, r.jsx)(a.DUT, (t = function(e) {
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
          }({}, e), n = n = {
            innerRef: T,
            "aria-label": O.intl.string(O.t.PdRCRg),
            className: x.oU,
            children: (0, r.jsx)(a.FHP, {
              size: "md",
              color: "currentColor"
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    }), !m && (0, r.jsx)("div", {
      className: x.eX
    })]
  })
}

function T(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: l,
    showAltText: a
  } = e, o = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]);
  return (0, r.jsxs)("div", {
    className: x.ag,
    children: [(0, r.jsx)(b.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(S, {
      guildTier: null == o ? true : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: l,
      showAltText: a,
      isLastGuildBoostSlot: t === n.length - 1
    }, e.id))]
  })
}

function I(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: i
  } = e, l = (0, s.bG)([_.A], () => _.A.getGuild(t), [t]), a = g.default.fromTimestamp(Date.now());
  if (n.forEach(e => {
      (null == a || 0 > g.default.compare(e.id, a)) && (a = e.id)
    }), null == a) return null;
  let o = u.A.createFromServer({
    id: g.default.fromTimestamp(Date.now()),
    subscription_id: i.id,
    canceled: false,
    premium_guild_subscription: {
      id: a,
      guild_id: t
    },
    cooldown_ends_at: null
  }, i);
  return (0, r.jsxs)("div", {
    className: x.ag,
    children: [(0, r.jsx)(b.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(S, {
      guildTier: null == l ? true : l.premiumTier,
      guildBoostSlot: o,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: false,
      showAltText: false,
      isLastGuildBoostSlot: t === n.length - 1
    }, t))]
  })
}

function N(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: n
  } = e, l = i.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let n = t.guildId;
      n in e || (e[n] = []), e[n].push(t)
    }), e
  }, [t]);
  return null == n || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: x.iE,
    children: [(0, r.jsx)("div", {
      className: x.kL,
      children: g.default.keys(l).map(e => (0, r.jsx)(I, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: l[e]
      }, e))
    }), (0, r.jsx)("div", {
      className: x.vK
    })]
  })
}

function y(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: n
  } = e, [l, s] = i.useState(false);
  i.useEffect(() => {
    let e = false;
    return null != n && (e = setInterval(() => {
      s(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [n]);
  let {
    boostsByGuildId: a,
    numActiveGuildBoostSlots: o
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
  if (null == n || 0 === Object.keys(a).length) return null;
  let c = o > m.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
  return (0, r.jsxs)("div", {
    className: x.iE,
    children: [(0, r.jsx)("div", {
      className: x.kL,
      children: g.default.keys(a).map(e => (0, r.jsx)(T, {
        guildId: e,
        guildBoostSlotRecords: a[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: l
      }, e))
    }), (0, r.jsx)("div", {
      className: x.vK
    })]
  })
}