/** Chunk was on 39369 **/
t.d(n, {
  Qt: () => Z,
  ZP: () => z
}), t(266796);
var i = t(200651),
  r = t(192379),
  l = t(120356),
  a = t.n(l),
  d = t(442837),
  o = t(481060),
  s = t(447543),
  c = t(287734),
  u = t(372769),
  _ = t(955415),
  p = t(922482),
  g = t(601964),
  m = t(592125),
  v = t(430824),
  I = t(15274),
  f = t(924301),
  N = t(725436),
  h = t(978227),
  E = t(236373),
  C = t(854698),
  b = t(405613),
  x = t(95291),
  T = t(742593),
  y = t(217804),
  L = t(139712),
  j = t(765305),
  S = t(388032),
  D = t(883565);
let O = (e, n) => t => {
    t.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t)
  },
  U = (e, n) => t => {
    let i = m.Z.getChannel(e.channel_id);
    null != i && (t.stopPropagation(), (0, p.Cq)(i), null == n || n(t))
  },
  Z = (e, n) => {
    switch (null == e ? void 0 : e.entity_type) {
      case j.WX.STAGE_INSTANCE:
        return U(e, n);
      case j.WX.VOICE:
        return O(e, n)
    }
    return () => {}
  },
  G = (e, n) => n && [j.WX.STAGE_INSTANCE, j.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  P = r.memo(function(e) {
    var n;
    let {
      guild: t,
      guildScheduledEvent: l,
      channel: a,
      isMember: c
    } = e, p = (0, d.e7)([v.Z], () => {
      var e;
      return null == t ? null : null !== (e = v.Z.getGuild(t.id)) && void 0 !== e ? e : new g.ZP(t)
    }, [t]), m = (0, y.u)(l, a), I = r.useCallback(e => {
      c && null != l && (e.stopPropagation(), (0, s.Bk)(l))
    }, [c, l]), f = r.useCallback(e => {
      Z(l)(e)
    }, [l]);
    if (null == p) return null;
    let h = null == m ? void 0 : m.IconComponent,
      E = (0, i.jsxs)(i.Fragment, {
        children: [null != h && (0, i.jsx)(h, {
          size: "xs",
          color: "currentColor",
          className: D.channelIcon
        }), (0, i.jsx)(o.Text, {
          className: D.channelDescription,
          variant: "text-xs/normal",
          children: (0, N.m)(null !== (n = null == m ? void 0 : m.locationName) && void 0 !== n ? n : "", !0)
        })]
      });
    return (0, i.jsxs)("div", {
      className: D.inviteDetailsContainer,
      children: [(0, i.jsx)(_.Z.Icon, {
        guild: p,
        onClick: I
      }), (0, i.jsxs)("div", {
        className: D.verticalContainer,
        children: [(0, i.jsxs)("div", {
          className: D.guildChannelInfoContainer,
          children: [(0, i.jsx)(u.Z, {
            guild: p,
            tooltipPosition: "top",
            tooltipColor: o.ua7.Colors.PRIMARY,
            size: 16,
            className: D.guildBadge
          }), (0, i.jsx)(o.P3F, {
            className: D.guildNameClickable,
            onClick: I,
            children: (0, i.jsx)(o.X6q, {
              className: c ? D.guildNameLinkable : D.guildName,
              variant: "text-sm/medium",
              children: p.name
            })
          })]
        }), (0, i.jsx)("div", {
          className: D.channelInfoContainer,
          children: G(l, c) ? (0, i.jsx)(o.P3F, {
            className: D.channelLocationLink,
            onClick: f,
            children: E
          }) : E
        })]
      })]
    })
  }),
  W = r.memo(function(e) {
    let {
      guildId: n,
      guildScheduledEventId: t,
      recurrenceId: r,
      isActive: l,
      isEnded: a,
      isMember: s,
      isExternal: c,
      onAcceptInstantInvite: u,
      onTransitionToInviteChannel: _
    } = e, p = (0, d.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(t, r), [t, r]), g = e => {
      e.stopPropagation(), s ? l && _() : u()
    };
    return s ? l ? (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      onClick: e => {
        c || g(e)
      },
      color: c ? o.zxk.Colors.TRANSPARENT : o.zxk.Colors.GREEN,
      children: c ? S.NW.string(S.t.GoCQxc) : S.NW.string(S.t.XpeFYm)
    }) : a ? (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      disabled: !0,
      color: o.zxk.Colors.PRIMARY,
      look: o.zxk.Looks.OUTLINED,
      children: S.NW.string(S.t.Pj7Xrq)
    }) : (0, i.jsxs)(o.zxk, {
      className: D.button,
      innerClassName: D.innerButton,
      size: o.zxk.Sizes.SMALL,
      color: o.zxk.Colors.PRIMARY,
      look: p ? o.zxk.Looks.OUTLINED : o.zxk.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, L.Z)(t, r, n)
      },
      children: [p ? (0, i.jsx)(o.dz2, {
        size: "xs",
        color: "currentColor",
        className: D.buttonIcon
      }) : (0, i.jsx)(o.Dkj, {
        size: "xs",
        color: "currentColor",
        className: D.buttonIcon
      }), S.NW.string(S.t.DlcqlZ)]
    }) : (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      onClick: g,
      color: o.zxk.Colors.GREEN,
      children: S.NW.string(S.t.XpeFYm)
    })
  }),
  z = r.memo(function(e) {
    var n;
    let {
      guildScheduledEvent: t,
      guild: l,
      channel: d,
      isMember: s,
      recurrenceId: c,
      onAcceptInstantInvite: u,
      onTransitionToInviteChannel: p
    } = e, g = null != c ? c : null != t ? (0, C.DK)(t) : null, m = (null == t ? void 0 : t.recurrence_rule) == null || null == g || (0, C.Rp)((0, E.KV)(null == t ? void 0 : t.recurrence_rule), g), v = (0, h.Z)(t), N = r.useCallback(() => {
      s && null != t && (0, I.bO)({
        eventId: t.id,
        recurrenceId: g
      })
    }, [s, t, g]);
    if (null == t || !m) return null;
    let y = (0, f.xt)(t),
      L = (0, f.Z2)(t),
      S = t.entity_type === j.WX.EXTERNAL;
    return (0, i.jsx)(_.Z, {
      className: a()({
        [D.clickable]: s
      }),
      children: (0, i.jsxs)(o.P3F, {
        onClick: N,
        children: [null != t.image && (0, i.jsx)(x.Z, {
          source: (0, b.Z)(t),
          className: D.banner
        }), (0, i.jsx)(T.ZP, {
          name: t.name,
          description: null !== (n = t.description) && void 0 !== n ? n : void 0,
          descriptionClassName: D.eventDescription,
          guildId: t.guild_id,
          creator: v,
          guildEvent: t,
          eventPreview: t,
          recurrenceId: g
        }), (0, i.jsxs)("div", {
          className: D.footerContainer,
          children: [(0, i.jsx)(P, {
            guild: l,
            channel: d,
            guildScheduledEvent: t,
            isMember: s
          }), (0, i.jsx)(W, {
            isActive: y,
            isEnded: L,
            isMember: s,
            guildId: t.guild_id,
            guildScheduledEventId: t.id,
            recurrenceId: g,
            onAcceptInstantInvite: u,
            onTransitionToInviteChannel: p,
            isExternal: S
          })]
        })]
      })
    })
  })