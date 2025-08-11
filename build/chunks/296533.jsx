/** Chunk was on 75708 **/
/** chunk id: 296533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N,
  r: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
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
  Chunk357956 = require("./357956.js"),
  Chunk275909 = require("./275909.jsx"),
  Chunk300037 = require("./300037.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk238045 = require("./238045.js");

function O(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    showAltText: a,
    isCanceled: o,
    premiumSubscription: c,
    fractionalPremiumInfo: d
  } = e, u = r.useMemo(() => {
    if (o) {
      let e = c.currentPeriodEnd;
      return c.isPausedForFractionalPremium && (e = d.endsAt.toDate()), E.intl.format(E.t.Z4ULRE, {
        date: e
      })
    }
    let e = null != n.premiumGuildSubscription ? h.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
    return E.intl.formatToPlainString(E.t.lY2Bur, {
      date: new Date(e)
    })
  }, [n, o, c, d]), m = r.useMemo(() => (function(e) {
    if (null == e || e === _.Eu4.NONE) return "";
    let t = [E.intl.formatToPlainString(E.t.dLlKX1, {
      numEmojiSlots: j.HO[e].limits.emoji
    }), E.intl.formatToPlainString(E.t["+ANIfn"], {
      numStickerSlots: j.HO[e].limits.stickers
    }), E.intl.formatToPlainString(E.t["4gt60d"], {
      numSoundboardSlots: j.HO[e].limits.soundboardSounds
    }), E.intl.formatToPlainString(E.t.XahSjY, {
      resolution: j.HO[e].limits.screenShareQualityResolution,
      framerate: j.HO[e].limits.screenShareQualityFramerate
    }), E.intl.formatToPlainString(E.t.NbNs7e, {
      bitrate: j.HO[e].limits.bitrate / 1e3
    }), E.intl.formatToPlainString(E.t.VVKcpq, {
      filesize: j.HO[e].limits.fileSize / 1024 / 1024
    }), E.intl.formatToPlainString(E.t.TbpCvr, {
      numVideoStageSeats: j.HO[e].limits.stageVideoUsers
    }), E.intl.string(E.t.LDyX3t), E.intl.string(E.t.YtGlPT)];
    e >= _.Eu4.TIER_2 && (t.push(E.intl.string(E.t.SztbtL)), t.push(E.intl.string(E.t["3GK91t"]))), e >= _.Eu4.TIER_3 && t.push(E.intl.string(E.t.XUUJd3));
    let n = t[Math.floor(Math.random() * t.length)];
    return E.intl.format(E.t["/dOAmZ"], {
      perk: n
    })
  })(t), [t]), p = (0, l.Yzy)(a, {
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
  return o || t === _.Eu4.NONE ? <div className={C.boostDescriptionInnerContainer}><l.Text variant={"text-sm/medium"} color={"text-muted"}>{u}</l.Text></div> : p((e, t) => <s.animated.div style={e} className={C.boostDescriptionInnerContainer}><l.Text variant={"text-sm/medium"} color={"text-muted"}>{t ? m : u}</l.Text></s.animated.div>)
}

function v(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: s,
    hasCancelableGuildBoostSlot: u,
    showAltText: m,
    isLastGuildBoostSlot: g
  } = e, h = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), x = r.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), _ = r.useMemo(() => null != x && x > new Date, [x]), j = (0, p.tl)(n), v = (0, c.Z)(), S = r.useRef(null);
  return <div className={C.boostContainer}>{<div className={C.boostInnerContainer}>{<b.Z isCanceled={j} hasCooldown={_} useReducedMotion={h} />}{<div className={C.boostDescriptionContainer}>{null != x && _ && !j ? (0, i.jsx)(f.Z, {
          className: C.boostDescriptionInnerContainer,
          cooldown: x.getTime()
        }) : (0, i.jsx)(O, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: m,
          isCanceled: j,
          premiumSubscription: s,
          fractionalPremiumInfo: v
        })}</div>}{<l.yRy targetElementRef={S} renderPopout={function(e) {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(d.Z, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: u,
            fractionalState: v.fractionalState
          })
        }} position={"right"} align={"center"}>{e => {
          var t, n;
          return (0, i.jsx)(l.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, e), n = n = {
            innerRef: S,
            "aria-label": E.intl.string(E.t.PdRCRk),
            className: C.boostSlotMenuIcon,
            children: (0, i.jsx)(l.Huf, {
              size: "md",
              color: "currentColor"
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }}</l.yRy>}</div>}{!g && <div className={C.boostContainerSeparator} />}</div>
}

function S(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: r,
    hasCancelableGuildBoostSlot: s,
    showAltText: l
  } = e, o = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]);
  return <div className={C.appliedBoostContainer}>{<x.Z guildId={t} boostingVariant={false} />}{n.map((e, t) => <v guildTier={null == o ? true : o.premiumTier} guildBoostSlot={e} premiumSubscription={r} hasCancelableGuildBoostSlot={s} showAltText={l} isLastGuildBoostSlot={t === n.length - 1} />)}</div>
}

function T(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: r
  } = e, s = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]), l = h.default.fromTimestamp(Date.now());
  if (n.forEach(e => {
      (null == l || 0 > h.default.compare(e.id, l)) && (l = e.id)
    }), null == l) return null;
  let o = u.Z.createFromServer({
    id: h.default.fromTimestamp(Date.now()),
    subscription_id: r.id,
    canceled: false,
    premium_guild_subscription: {
      id: l,
      guild_id: t
    },
    cooldown_ends_at: null
  }, r);
  return <div className={C.appliedBoostContainer}>{<x.Z guildId={t} boostingVariant={false} />}{n.map((e, t) => <v guildTier={null == s ? true : s.premiumTier} guildBoostSlot={o} premiumSubscription={r} hasCancelableGuildBoostSlot={false} showAltText={false} isLastGuildBoostSlot={t === n.length - 1} />)}</div>
}

function I(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: n
  } = e, s = r.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let n = t.guildId;
      n in e || (e[n] = []), e[n].push(t)
    }), e
  }, [t]);
  return null == n || 0 === t.length ? null : <div className={C.wrapper}>{<div className={C.container}>{h.default.keys(s).map(e => (0, i.jsx)(T, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: s[e]
      }, e))}</div>}{<div className={C.mainSeparator} />}</div>
}

function N(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: n
  } = e, [s, a] = r.useState(false);
  r.useEffect(() => {
    let e = false;
    return null != n && (e = setInterval(() => {
      a(e => !e)
    }, 3e3)), () => {
      clearInterval(e)
    }
  }, [n]);
  let {
    boostsByGuildId: l,
    numActiveGuildBoostSlots: o
  } = r.useMemo(() => {
    let e = 0,
      n = {};
    return Object.keys(t).forEach(i => {
      let r = t[i];
      if (!(0, p.tl)(r) && e++, null != r.premiumGuildSubscription) {
        let e = r.premiumGuildSubscription.guildId;
        e in n || (n[e] = []), n[e].push(r)
      }
    }), {
      boostsByGuildId: n,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == n || 0 === Object.keys(l).length) return null;
  let c = o > g.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
  return <div className={C.wrapper}>{<div className={C.container}>{h.default.keys(l).map(e => (0, i.jsx)(S, {
        guildId: e,
        guildBoostSlotRecords: l[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: s
      }, e))}</div>}{<div className={C.mainSeparator} />}</div>
}