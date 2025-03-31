/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => A
}), n(47120), n(773603), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(831209),
  a = n(793030),
  s = n(442837),
  l = n(481060),
  c = n(749210),
  u = n(231053),
  d = n(183023),
  f = n(524444),
  _ = n(208049),
  p = n(697426),
  h = n(294206),
  m = n(430824),
  g = n(197115),
  E = n(125900),
  b = n(767434),
  v = n(474936),
  y = n(981631),
  O = n(710111),
  I = n(388032),
  S = n(968590);

function T(e) {
  let {
    discoverableGuildId: t,
    closePopout: n,
    buttonType: o
  } = e, a = i.useCallback(async () => {
    if (n(), null != t) try {
      await c.Z.joinGuild(t), c.Z.transitionToGuildSync(t)
    } catch (e) {}
  }, [n, t]);
  return o === b.y.GET_NITRO ? (0, r.jsx)(g.Z, {
    fullWidth: !0,
    showGradient: !0,
    premiumModalAnalyticsLocation: {
      section: y.jXE.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
    },
    subscriptionTier: v.Si.TIER_2,
    size: l.zxk.Sizes.SMALL,
    color: l.zxk.Colors.CUSTOM,
    onClick: n,
    buttonText: I.NW.string(I.t.pj0XBA)
  }) : o === b.y.JOIN_GUILD ? (0, r.jsx)(l.zxk, {
    size: l.zxk.Sizes.SMALL,
    fullWidth: !0,
    onClick: a,
    children: I.NW.string(I.t.riu2R0)
  }) : null
}

function A(e) {
  let {
    sound: t,
    channel: n,
    closePopout: c,
    refreshPosition: g
  } = e, v = t.guildId === O.X8, y = (0, s.e7)([m.Z], () => m.Z.getGuild(t.guildId)), A = !v && null != y, [N, C] = i.useState(), R = (0, E.V2)({
    location: "SoundmojiGuildInfo"
  }), P = v || A || null != N || !R, [w, D] = i.useState(!P);
  i.useEffect(() => {
    !P && (D(!0), (0, _.xU)(t.soundId, t.guildId).then(e => {
      C(e)
    }).finally(() => {
      D(!1), g()
    }))
  }, [g, P, t.guildId, t.soundId]);
  let {
    buttonType: L,
    description: x
  } = (0, b.Z)(t, n, A, N), M = L === b.y.JOIN_GUILD, k = !v && w, j = i.useMemo(() => A ? u.JO.createFromGuildRecord(y) : null != N ? u.JO.createFromDiscoverableGuild(N) : void 0, [y, A, N]);
  return k ? (0, r.jsx)(f.SE, {}) : (0, r.jsxs)("div", {
    className: S.infoContainer,
    children: [(0, r.jsxs)(f.W_, {
      children: [(0, r.jsxs)("div", {
        className: S.infoExpandedSoundContainer,
        children: [(0, r.jsx)(h.ZP, {
          refreshEnabled: !0,
          buttonOverlay: p.Pb.NONE,
          sound: t,
          channel: void 0,
          isSoundmoji: !0,
          onSelectItem: () => {}
        }), (0, r.jsx)(a.xv, {
          variant: "text-sm/normal",
          children: x
        })]
      }), null != j && (0, r.jsxs)("div", {
        className: S.infoExpandedGuildContainer,
        children: [(0, r.jsx)(a.xv, {
          variant: "eyebrow",
          color: "header-muted",
          className: S.infoExpandedGuildTitle,
          children: A ? I.NW.string(I.t.tGDabm) : I.NW.string(I.t.rnOmOT)
        }), (0, r.jsx)("div", {
          className: S.infoExpandedGuildInfo,
          children: (0, r.jsx)(d.Oe, {
            expressionSourceGuild: j,
            hasJoinedExpressionSourceGuild: A,
            isDisplayingJoinGuildButtonInPopout: M
          })
        }), (0, r.jsx)(T, {
          buttonType: L,
          discoverableGuildId: null == N ? void 0 : N.id,
          closePopout: c
        })]
      })]
    }), (0, r.jsx)(l.IGR, {
      text: "BETA",
      color: o.Z.BG_BRAND,
      className: S.betaBadge
    })]
  })
}