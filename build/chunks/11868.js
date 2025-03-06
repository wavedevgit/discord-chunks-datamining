/** Chunk was on 76282 **/
n.d(t, {
  Qt: () => D,
  ZP: () => Z
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(442837),
  s = n(481060),
  c = n(447543),
  u = n(287734),
  d = n(372769),
  _ = n(955415),
  p = n(922482),
  E = n(601964),
  f = n(592125),
  m = n(430824),
  h = n(15274),
  g = n(924301),
  b = n(725436),
  O = n(978227),
  N = n(236373),
  I = n(854698),
  C = n(405613),
  T = n(95291),
  S = n(742593),
  y = n(217804),
  v = n(139712),
  P = n(765305),
  R = n(388032),
  A = n(506361);
let x = (e, t) => n => {
    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n)
  },
  j = (e, t) => n => {
    let r = f.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, p.Cq)(r), null == t || t(n))
  },
  D = (e, t) => {
    switch (null == e ? void 0 : e.entity_type) {
      case P.WX.STAGE_INSTANCE:
        return j(e, t);
      case P.WX.VOICE:
        return x(e, t)
    }
    return () => {}
  },
  L = (e, t) => t && [P.WX.STAGE_INSTANCE, P.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  k = i.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: o,
      channel: l,
      isMember: u
    } = e, p = (0, a.e7)([m.Z], () => {
      var e;
      return null == n ? null : null !== (e = m.Z.getGuild(n.id)) && void 0 !== e ? e : new E.ZP(n)
    }, [n]), f = (0, y.u)(o, l), h = i.useCallback(e => {
      u && null != o && (e.stopPropagation(), (0, c.Bk)(o))
    }, [u, o]), g = i.useCallback(e => {
      D(o)(e)
    }, [o]);
    if (null == p) return null;
    let O = null == f ? void 0 : f.IconComponent,
      N = (0, r.jsxs)(r.Fragment, {
        children: [null != O && (0, r.jsx)(O, {
          size: "xs",
          color: "currentColor",
          className: A.channelIcon
        }), (0, r.jsx)(s.Text, {
          className: A.channelDescription,
          variant: "text-xs/normal",
          children: (0, b.m)(null !== (t = null == f ? void 0 : f.locationName) && void 0 !== t ? t : "", !0)
        })]
      });
    return (0, r.jsxs)("div", {
      className: A.inviteDetailsContainer,
      children: [(0, r.jsx)(_.Z.Icon, {
        guild: p,
        onClick: h
      }), (0, r.jsxs)("div", {
        className: A.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: A.guildChannelInfoContainer,
          children: [(0, r.jsx)(d.Z, {
            guild: p,
            tooltipPosition: "top",
            tooltipColor: s.ua7.Colors.PRIMARY,
            size: 16,
            className: A.guildBadge
          }), (0, r.jsx)(s.P3F, {
            className: A.guildNameClickable,
            onClick: h,
            children: (0, r.jsx)(s.X6q, {
              className: u ? A.guildNameLinkable : A.guildName,
              variant: "text-sm/medium",
              children: p.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: A.channelInfoContainer,
          children: L(o, u) ? (0, r.jsx)(s.P3F, {
            className: A.channelLocationLink,
            onClick: g,
            children: N
          }) : N
        })]
      })]
    })
  }),
  M = i.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: i,
      isActive: o,
      isEnded: l,
      isMember: c,
      isExternal: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: _
    } = e, p = (0, a.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(n, i), [n, i]), E = e => {
      e.stopPropagation(), c ? o && _() : d()
    };
    return c ? o ? (0, r.jsx)(s.zxk, {
      className: A.button,
      size: s.zxk.Sizes.SMALL,
      onClick: e => {
        u || E(e)
      },
      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
      children: u ? R.NW.string(R.t.GoCQxc) : R.NW.string(R.t.XpeFYm)
    }) : l ? (0, r.jsx)(s.zxk, {
      className: A.button,
      size: s.zxk.Sizes.SMALL,
      disabled: !0,
      color: s.zxk.Colors.PRIMARY,
      look: s.zxk.Looks.OUTLINED,
      children: R.NW.string(R.t.Pj7Xrq)
    }) : (0, r.jsxs)(s.zxk, {
      className: A.button,
      innerClassName: A.innerButton,
      size: s.zxk.Sizes.SMALL,
      color: s.zxk.Colors.PRIMARY,
      look: p ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, v.Z)(n, i, t)
      },
      children: [p ? (0, r.jsx)(s.dz2, {
        size: "xs",
        color: "currentColor",
        className: A.buttonIcon
      }) : (0, r.jsx)(s.Dkj, {
        size: "xs",
        color: "currentColor",
        className: A.buttonIcon
      }), R.NW.string(R.t.DlcqlZ)]
    }) : (0, r.jsx)(s.zxk, {
      className: A.button,
      size: s.zxk.Sizes.SMALL,
      onClick: E,
      color: s.zxk.Colors.GREEN,
      children: R.NW.string(R.t.XpeFYm)
    })
  }),
  Z = i.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: o,
      channel: a,
      isMember: c,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: p
    } = e, E = null != u ? u : null != n ? (0, I.DK)(n) : null, f = (null == n ? void 0 : n.recurrence_rule) == null || null == E || (0, I.Rp)((0, N.KV)(null == n ? void 0 : n.recurrence_rule), E), m = (0, O.Z)(n), b = i.useCallback(() => {
      c && null != n && (0, h.bO)({
        eventId: n.id,
        recurrenceId: E
      })
    }, [c, n, E]);
    if (null == n || !f) return null;
    let y = (0, g.xt)(n),
      v = (0, g.Z2)(n),
      R = n.entity_type === P.WX.EXTERNAL;
    return (0, r.jsx)(_.Z, {
      className: l()({
        [A.clickable]: c
      }),
      children: (0, r.jsxs)(s.P3F, {
        onClick: b,
        children: [null != n.image && (0, r.jsx)(T.Z, {
          source: (0, C.Z)(n),
          className: A.banner
        }), (0, r.jsx)(S.ZP, {
          name: n.name,
          description: null !== (t = n.description) && void 0 !== t ? t : void 0,
          descriptionClassName: A.eventDescription,
          guildId: n.guild_id,
          creator: m,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: E
        }), (0, r.jsxs)("div", {
          className: A.footerContainer,
          children: [(0, r.jsx)(k, {
            guild: o,
            channel: a,
            guildScheduledEvent: n,
            isMember: c
          }), (0, r.jsx)(M, {
            isActive: y,
            isEnded: v,
            isMember: c,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: E,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: p,
            isExternal: R
          })]
        })]
      })
    })
  })