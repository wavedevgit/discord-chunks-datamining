/** Chunk was on 20447 **/
n.d(t, {
  Z: () => y,
  r: () => I
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(642128),
  a = n(399606),
  o = n(481060),
  l = n(607070),
  c = n(975298),
  d = n(280942),
  u = n(209747),
  m = n(430824),
  g = n(594174),
  p = n(267642),
  h = n(74538),
  f = n(709054),
  N = n(357956),
  b = n(275909),
  x = n(300037),
  _ = n(981631),
  E = n(474936),
  j = n(388032),
  O = n(37643);

function C(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    showAltText: a,
    isCanceled: l,
    premiumSubscription: c
  } = e, d = i.useMemo(() => {
    if (l) return j.NW.format(j.t.Z4ULRE, {
      date: c.currentPeriodEnd
    });
    let e = null != n.premiumGuildSubscription ? f.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
    return j.NW.formatToPlainString(j.t.lY2Bur, {
      date: new Date(e)
    })
  }, [n, l, c]), u = i.useMemo(() => (function(e) {
    if (null == e || e === _.Eu4.NONE) return "";
    let t = [j.NW.formatToPlainString(j.t.dLlKX1, {
      numEmojiSlots: E.HO[e].limits.emoji
    }), j.NW.formatToPlainString(j.t["+ANIfn"], {
      numStickerSlots: E.HO[e].limits.stickers
    }), j.NW.formatToPlainString(j.t["4gt60d"], {
      numSoundboardSlots: E.HO[e].limits.soundboardSounds
    }), j.NW.formatToPlainString(j.t.XahSjY, {
      resolution: E.HO[e].limits.screenShareQualityResolution,
      framerate: E.HO[e].limits.screenShareQualityFramerate
    }), j.NW.formatToPlainString(j.t.NbNs7e, {
      bitrate: E.HO[e].limits.bitrate / 1e3
    }), j.NW.formatToPlainString(j.t.VVKcpq, {
      filesize: E.HO[e].limits.fileSize / 1024 / 1024
    }), j.NW.formatToPlainString(j.t.TbpCvr, {
      numVideoStageSeats: E.HO[e].limits.stageVideoUsers
    }), j.NW.string(j.t.LDyX3t), j.NW.string(j.t.YtGlPT)];
    e >= _.Eu4.TIER_2 && (t.push(j.NW.string(j.t.SztbtL)), t.push(j.NW.string(j.t["3GK91t"]))), e >= _.Eu4.TIER_3 && t.push(j.NW.string(j.t.XUUJd3));
    let n = t[Math.floor(Math.random() * t.length)];
    return j.NW.format(j.t["/dOAmZ"], {
      perk: n
    })
  })(t), [t]), m = (0, o.Yzy)(a, {
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
  return l || t === _.Eu4.NONE ? (0, r.jsx)("div", {
    className: O.boostDescriptionInnerContainer,
    children: (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: d
    })
  }) : m((e, t) => (0, r.jsx)(s.animated.div, {
    style: e,
    className: O.boostDescriptionInnerContainer,
    children: (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: t ? u : d
    })
  }))
}

function S(e) {
  let {
    guildTier: t,
    guildBoostSlot: n,
    premiumSubscription: s,
    hasCancelableGuildBoostSlot: u,
    showAltText: m,
    isLastGuildBoostSlot: h
  } = e, f = (0, a.e7)([l.Z], () => l.Z.useReducedMotion), x = (0, a.e7)([g.default], () => g.default.getCurrentUser()), _ = i.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), E = i.useMemo(() => null != _ && _ > new Date, [_]), S = (0, p.tl)(n), {
    fractionalState: v
  } = (0, c.Z)();
  return (0, r.jsxs)("div", {
    className: O.boostContainer,
    children: [(0, r.jsxs)("div", {
      className: O.boostInnerContainer,
      children: [(0, r.jsx)(b.Z, {
        isCanceled: S,
        hasCooldown: E,
        useReducedMotion: f
      }), (0, r.jsx)("div", {
        className: O.boostDescriptionContainer,
        children: null != _ && E && !S ? (0, r.jsx)(N.Z, {
          className: O.boostDescriptionInnerContainer,
          cooldown: _.getTime()
        }) : (0, r.jsx)(C, {
          guildTier: t,
          guildBoostSlot: n,
          showAltText: m,
          isCanceled: S,
          premiumSubscription: s
        })
      }), (0, r.jsx)(o.yRy, {
        renderPopout: function(e) {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(d.Z, {
            onClose: t,
            guildBoostSlot: n,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: u,
            fractionalState: v,
            user: x
          })
        },
        position: "right",
        align: "center",
        children: e => {
          var t, n;
          return (0, r.jsx)(o.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            "aria-label": j.NW.string(j.t.PdRCRk),
            className: O.boostSlotMenuIcon,
            children: (0, r.jsx)(o.Huf, {
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
    }), !h && (0, r.jsx)("div", {
      className: O.boostContainerSeparator
    })]
  })
}

function v(e) {
  let {
    guildId: t,
    guildBoostSlotRecords: n,
    premiumSubscription: i,
    hasCancelableGuildBoostSlot: s,
    showAltText: o
  } = e, l = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]);
  return (0, r.jsxs)("div", {
    className: O.appliedBoostContainer,
    children: [(0, r.jsx)(x.Z, {
      guildId: t,
      boostingVariant: !1
    }), n.map((e, t) => (0, r.jsx)(S, {
      guildTier: null == l ? void 0 : l.premiumTier,
      guildBoostSlot: e,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: s,
      showAltText: o,
      isLastGuildBoostSlot: t === n.length - 1
    }, e.id))]
  })
}

function T(e) {
  let {
    guildId: t,
    appliedGuildBoosts: n,
    premiumSubscription: i
  } = e, s = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]), o = f.default.fromTimestamp(Date.now());
  if (n.forEach(e => {
      (null == o || 0 > f.default.compare(e.id, o)) && (o = e.id)
    }), null == o) return null;
  let l = u.Z.createFromServer({
    id: f.default.fromTimestamp(Date.now()),
    subscription_id: i.id,
    canceled: !1,
    premium_guild_subscription: {
      id: o,
      guild_id: t
    },
    cooldown_ends_at: null
  }, i);
  return (0, r.jsxs)("div", {
    className: O.appliedBoostContainer,
    children: [(0, r.jsx)(x.Z, {
      guildId: t,
      boostingVariant: !1
    }), n.map((e, t) => (0, r.jsx)(S, {
      guildTier: null == s ? void 0 : s.premiumTier,
      guildBoostSlot: l,
      premiumSubscription: i,
      hasCancelableGuildBoostSlot: !1,
      showAltText: !1,
      isLastGuildBoostSlot: t === n.length - 1
    }, t))]
  })
}

function I(e) {
  let {
    appliedGuildBoosts: t,
    premiumSubscription: n
  } = e, s = i.useMemo(() => {
    let e = {};
    return t.forEach(t => {
      let n = t.guildId;
      n in e || (e[n] = []), e[n].push(t)
    }), e
  }, [t]);
  return null == n || 0 === t.length ? null : (0, r.jsxs)("div", {
    className: O.wrapper,
    children: [(0, r.jsx)("div", {
      className: O.container,
      children: f.default.keys(s).map(e => (0, r.jsx)(T, {
        guildId: e,
        premiumSubscription: n,
        appliedGuildBoosts: s[e]
      }, e))
    }), (0, r.jsx)("div", {
      className: O.mainSeparator
    })]
  })
}

function y(e) {
  let {
    guildBoostSlots: t,
    premiumSubscription: n
  } = e, [s, a] = i.useState(!1);
  i.useEffect(() => {
    let e = -1;
    return null != n && (e = setInterval(() => {
      a(e => !e)
    }, 3e3)), () => {
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
      if (!(0, p.tl)(i) && e++, null != i.premiumGuildSubscription) {
        let e = i.premiumGuildSubscription.guildId;
        e in n || (n[e] = []), n[e].push(i)
      }
    }), {
      boostsByGuildId: n,
      numActiveGuildBoostSlots: e
    }
  }, [t]);
  if (null == n || 0 === Object.keys(o).length) return null;
  let c = l > h.ZP.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
  return (0, r.jsxs)("div", {
    className: O.wrapper,
    children: [(0, r.jsx)("div", {
      className: O.container,
      children: f.default.keys(o).map(e => (0, r.jsx)(v, {
        guildId: e,
        guildBoostSlotRecords: o[e],
        premiumSubscription: n,
        hasCancelableGuildBoostSlot: c,
        showAltText: s
      }, e))
    }), (0, r.jsx)("div", {
      className: O.mainSeparator
    })]
  })
}