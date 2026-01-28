/** Chunk was on 5606 **/
/** chunk id: 530240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S,
  N: () => v
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
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
      return c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), x.intl.format(x.t.Z4ULRD, {
        date: e
      })
    }
    let e = null != n.premiumGuildSubscription ? g.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
    return x.intl.formatToPlainString(x.t.lY2Bur, {
      date: new Date(e)
    })
  }, [n, o, c, d]), p = i.useMemo(() => (function(e) {
    if (null == e || e === A.TVA.NONE) return "";
    let t = [x.intl.formatToPlainString(x.t["dLlKX/"], {
      numEmojiSlots: E.TG[e].limits.emoji
    }), x.intl.formatToPlainString(x.t["+ANIfv"], {
      numStickerSlots: E.TG[e].limits.stickers
    }), x.intl.formatToPlainString(x.t["4gt60b"], {
      numSoundboardSlots: E.TG[e].limits.soundboardSounds
    }), x.intl.formatToPlainString(x.t.XahSjZ, {
      resolution: E.TG[e].limits.screenShareQualityResolution,
      framerate: E.TG[e].limits.screenShareQualityFramerate
    }), x.intl.formatToPlainString(x.t.NbNs7S, {
      bitrate: E.TG[e].limits.bitrate / 1e3
    }), x.intl.formatToPlainString(x.t.VVKcpn, {
      filesize: E.TG[e].limits.fileSize / 1024 / 1024
    }), x.intl.formatToPlainString(x.t.TbpCvv, {
      numVideoStageSeats: E.TG[e].limits.stageVideoUsers
    }), x.intl.string(x.t.LDyX3i), x.intl.string(x.t.YtGlPW)];
    e >= A.TVA.TIER_2 && (t.push(x.intl.string(x.t.SztbtN)), t.push(x.intl.string(x.t["3GK91n"]))), e >= A.TVA.TIER_3 && t.push(x.intl.string(x.t["XUUJd+"]));
    let n = t[Math.floor(Math.random() * t.length)];
    return x.intl.format(x.t["/dOAmQ"], {
      perk: n
    })
  })(t), [t]), _ = (0, a.pnh)(s, {
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
  return o || t === A.TVA.NONE ? (0, r.jsx)("div", {
    className: O.xm,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: u
    })
  }) : _((e, t) => (0, r.jsx)(l.animated.div, {
    style: e,
    className: O.xm,
    children: (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? p : u
    })
  }))
}

function y(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: l,
    hasCancelableGuildBoostSlot: u,
    showAltText: p,
    isLastGuildBoostSlot: m
  } = e, g = (0, s.bG)([o.A], () => o.A.useReducedMotion), h = i.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), A = i.useMemo(() => null != h && h > new Date, [h]), E = (0, _.I5)(n), y = (0, c.A)(), j = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: O.PW,
    children: [(0, r.jsxs)("div", {
      className: O.$U,
      children: [(0, r.jsx)(b.A, {
        isCanceled: E,
        hasCooldown: A,
        useReducedMotion: g
      }), (0, r.jsx)("div", {
        className: O.vh,
        children: null != h && A && !E ? (0, r.jsx)(f.A, {
          className: O.xm,
          cooldown: h.getTime()
        }) : (0, r.jsx)(C, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: p,
          isCanceled: E,
          premiumSubscription: l,
          fractionalPremiumInfo: y
        })
      }), (0, r.jsx)(a.YNO, {
        targetElementRef: j,
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(d.A, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: l,
            hasCancelableGuildBoostSlot: u,
            fractionalState: y.fractionalState
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
            innerRef: j,
            "aria-label": x.intl.string(x.t.PdRCRg),
            className: O.oU,
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
      className: O.eX
    })]
  })
}

function j(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: l,
    showAltText: a
  } = e, o = (0, s.bG)([p.A], () => p.A.getGuild(t), [t]);
  return (0, r.jsxs)("div", {
    className: O.ag,
    children: [(0, r.jsx)(h.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(y, {
      guildTier: null == o ? true : o.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: l,
      showAltText: a,
      isLastGuildBoostSlot: t === n.length - 1
    }, e.id))]
  })
}

function T(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: i
  } = e, l = (0, s.bG)([p.A], () => p.A.getGuild(t), [t]), a = g.default.fromTimestamp(Date.now());
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
    className: O.ag,
    children: [(0, r.jsx)(h.A, {
      guildId: t,
      boostingVariant: false
    }), n.map((e, t) => (0, r.jsx)(y, {
      guildTier: null == l ? true : l.premiumTier,
      guildBoostSlot: o,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: false,
      showAltText: false,
      isLastGuildBoostSlot: t === n.length - 1
    }, t))]
  })
}

function v(e) {
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
    className: O.iE,
    children: [(0, r.jsx)("div", {
      className: O.kL,
      children: g.default.keys(l).map(e => (0, r.jsx)(T, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: l[e]
      }, e))
    }), (0, r.jsx)("div", {
      className: O.vK
    })]
  })
}

function S(e) {
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
      if (!(0, _.I5)(i) && e++, null != i.premiumGuildSubscription) {
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
    className: O.iE,
    children: [(0, r.jsx)("div", {
      className: O.kL,
      children: g.default.keys(a).map(e => (0, r.jsx)(j, {
        guildId: e,
        guildBoostSlotRecords: a[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: l
      }, e))
    }), (0, r.jsx)("div", {
      className: O.vK
    })]
  })
}