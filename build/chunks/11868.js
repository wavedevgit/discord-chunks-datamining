/** Chunk was on 70657 **/
t.d(n, {
  Qt: () => G,
  ZP: () => R
}), t(953529);
var i = t(255367),
  l = t(73800),
  r = t(120356),
  a = t.n(r),
  d = t(442837),
  o = t(755721),
  s = t(481060),
  c = t(447543),
  u = t(287734),
  _ = t(372769),
  g = t(955415),
  p = t(922482),
  m = t(601964),
  f = t(592125),
  I = t(430824),
  v = t(15274),
  h = t(924301),
  C = t(725436),
  E = t(978227),
  b = t(236373),
  x = t(854698),
  T = t(405613),
  y = t(95291),
  L = t(742593),
  j = t(217804),
  N = t(139712),
  S = t(765305),
  D = t(388032),
  O = t(690606);
let U = (e, n) => t => {
    t.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t)
  },
  Z = (e, n) => t => {
    let i = f.Z.getChannel(e.channel_id);
    null != i && (t.stopPropagation(), (0, p.Cq)(i), null == n || n(t))
  },
  G = (e, n) => {
    switch (null == e ? void 0 : e.entity_type) {
      case S.WX.STAGE_INSTANCE:
        return Z(e, n);
      case S.WX.VOICE:
        return U(e, n)
    }
    return () => {}
  },
  P = (e, n) => n && [S.WX.STAGE_INSTANCE, S.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  z = l.memo(function(e) {
    var n;
    let {
      guild: t,
      guildScheduledEvent: r,
      channel: a,
      isMember: o
    } = e, u = (0, d.e7)([I.Z], () => {
      var e;
      return null == t ? null : null != (e = I.Z.getGuild(t.id)) ? e : new m.ZP(t)
    }, [t]), p = (0, j.u)(r, a), f = l.useCallback(e => {
      o && null != r && (e.stopPropagation(), (0, c.Bk)(r))
    }, [o, r]), v = l.useCallback(e => {
      G(r)(e)
    }, [r]);
    if (null == u) return null;
    let h = null == p ? void 0 : p.IconComponent,
      E = (0, i.jsxs)(i.Fragment, {
        children: [null != h && (0, i.jsx)(h, {
          size: "xs",
          color: "currentColor",
          className: O.channelIcon
        }), (0, i.jsx)(s.Text, {
          className: O.channelDescription,
          variant: "text-xs/normal",
          children: (0, C.m)(null != (n = null == p ? void 0 : p.locationName) ? n : "", !0)
        })]
      });
    return (0, i.jsxs)("div", {
      className: O.inviteDetailsContainer,
      children: [(0, i.jsx)(g.Z.Icon, {
        guild: u,
        onClick: f
      }), (0, i.jsxs)("div", {
        className: O.verticalContainer,
        children: [(0, i.jsxs)("div", {
          className: O.guildChannelInfoContainer,
          children: [(0, i.jsx)(_.Z, {
            guild: u,
            tooltipPosition: "top",
            tooltipColor: s.ua7.Colors.PRIMARY,
            size: 16,
            className: O.guildBadge
          }), (0, i.jsx)(s.P3F, {
            className: O.guildNameClickable,
            onClick: f,
            children: (0, i.jsx)(s.X6q, {
              className: o ? O.guildNameLinkable : O.guildName,
              variant: "text-sm/medium",
              children: u.name
            })
          })]
        }), (0, i.jsx)("div", {
          className: O.channelInfoContainer,
          children: P(r, o) ? (0, i.jsx)(s.P3F, {
            className: O.channelLocationLink,
            onClick: v,
            children: E
          }) : E
        })]
      })]
    })
  }),
  A = l.memo(function(e) {
    let {
      guildId: n,
      guildScheduledEventId: t,
      recurrenceId: l,
      isActive: r,
      isEnded: a,
      isMember: c,
      isExternal: u,
      onAcceptInstantInvite: _,
      onTransitionToInviteChannel: g
    } = e, p = (0, d.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(t, l), [t, l]), m = e => {
      e.stopPropagation(), c ? r && g() : _()
    };
    return c ? r ? (0, i.jsx)(o.zx, {
      className: O.button,
      size: o.zx.Sizes.SMALL,
      onClick: e => {
        u || m(e)
      },
      color: u ? o.zx.Colors.TRANSPARENT : o.zx.Colors.GREEN,
      children: u ? D.intl.string(D.t.GoCQxc) : D.intl.string(D.t.XpeFYm)
    }) : a ? (0, i.jsx)(o.zx, {
      className: O.button,
      size: o.zx.Sizes.SMALL,
      disabled: !0,
      color: o.zx.Colors.PRIMARY,
      look: o.zx.Looks.OUTLINED,
      children: D.intl.string(D.t.Pj7Xrq)
    }) : (0, i.jsxs)(o.zx, {
      className: O.button,
      innerClassName: O.innerButton,
      size: o.zx.Sizes.SMALL,
      color: o.zx.Colors.PRIMARY,
      look: p ? o.zx.Looks.OUTLINED : o.zx.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, N.Z)(t, l, n)
      },
      children: [p ? (0, i.jsx)(s.dz2, {
        size: "xs",
        color: "currentColor",
        className: O.buttonIcon
      }) : (0, i.jsx)(s.Dkj, {
        size: "xs",
        color: "currentColor",
        className: O.buttonIcon
      }), D.intl.string(D.t.DlcqlZ)]
    }) : (0, i.jsx)(o.zx, {
      className: O.button,
      size: o.zx.Sizes.SMALL,
      onClick: m,
      color: o.zx.Colors.GREEN,
      children: D.intl.string(D.t.XpeFYm)
    })
  }),
  R = l.memo(function(e) {
    var n;
    let {
      guildScheduledEvent: t,
      guild: r,
      channel: d,
      isMember: o,
      recurrenceId: c,
      onAcceptInstantInvite: u,
      onTransitionToInviteChannel: _
    } = e, p = null != c ? c : null != t ? (0, x.DK)(t) : null, m = (null == t ? void 0 : t.recurrence_rule) == null || null == p || (0, x.Rp)((0, b.KV)(null == t ? void 0 : t.recurrence_rule), p), f = (0, E.Z)(t), I = l.useCallback(() => {
      o && null != t && (0, v.bO)({
        eventId: t.id,
        recurrenceId: p
      })
    }, [o, t, p]);
    if (null == t || !m) return null;
    let C = (0, h.xt)(t),
      j = (0, h.Z2)(t),
      N = t.entity_type === S.WX.EXTERNAL;
    return (0, i.jsx)(g.Z, {
      className: a()({
        [O.clickable]: o
      }),
      children: (0, i.jsxs)(s.P3F, {
        onClick: I,
        children: [null != t.image && (0, i.jsx)(y.Z, {
          source: (0, T.Z)(t),
          className: O.banner
        }), (0, i.jsx)(L.ZP, {
          name: t.name,
          description: null != (n = t.description) ? n : void 0,
          descriptionClassName: O.eventDescription,
          guildId: t.guild_id,
          creator: f,
          guildEvent: t,
          eventPreview: t,
          recurrenceId: p
        }), (0, i.jsxs)("div", {
          className: O.footerContainer,
          children: [(0, i.jsx)(z, {
            guild: r,
            channel: d,
            guildScheduledEvent: t,
            isMember: o
          }), (0, i.jsx)(A, {
            isActive: C,
            isEnded: j,
            isMember: o,
            guildId: t.guild_id,
            guildScheduledEventId: t.id,
            recurrenceId: p,
            onAcceptInstantInvite: u,
            onTransitionToInviteChannel: _,
            isExternal: N
          })]
        })]
      })
    })
  })