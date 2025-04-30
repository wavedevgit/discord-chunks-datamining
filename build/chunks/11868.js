/** Chunk was on 70657 **/
t.d(n, {
  Qt: () => Z,
  ZP: () => k
}), t(953529);
var i = t(200651),
  l = t(192379),
  r = t(120356),
  a = t.n(r),
  d = t(442837),
  o = t(481060),
  s = t(447543),
  c = t(287734),
  u = t(372769),
  _ = t(955415),
  g = t(922482),
  p = t(601964),
  m = t(592125),
  I = t(430824),
  f = t(15274),
  v = t(924301),
  h = t(725436),
  C = t(978227),
  E = t(236373),
  b = t(854698),
  x = t(405613),
  T = t(95291),
  y = t(742593),
  L = t(217804),
  j = t(139712),
  N = t(765305),
  S = t(388032),
  D = t(690606);
let O = (e, n) => t => {
    t.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t)
  },
  U = (e, n) => t => {
    let i = m.Z.getChannel(e.channel_id);
    null != i && (t.stopPropagation(), (0, g.Cq)(i), null == n || n(t))
  },
  Z = (e, n) => {
    switch (null == e ? void 0 : e.entity_type) {
      case N.WX.STAGE_INSTANCE:
        return U(e, n);
      case N.WX.VOICE:
        return O(e, n)
    }
    return () => {}
  },
  G = (e, n) => n && [N.WX.STAGE_INSTANCE, N.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  P = l.memo(function(e) {
    var n;
    let {
      guild: t,
      guildScheduledEvent: r,
      channel: a,
      isMember: c
    } = e, g = (0, d.e7)([I.Z], () => {
      var e;
      return null == t ? null : null != (e = I.Z.getGuild(t.id)) ? e : new p.ZP(t)
    }, [t]), m = (0, L.u)(r, a), f = l.useCallback(e => {
      c && null != r && (e.stopPropagation(), (0, s.Bk)(r))
    }, [c, r]), v = l.useCallback(e => {
      Z(r)(e)
    }, [r]);
    if (null == g) return null;
    let C = null == m ? void 0 : m.IconComponent,
      E = (0, i.jsxs)(i.Fragment, {
        children: [null != C && (0, i.jsx)(C, {
          size: "xs",
          color: "currentColor",
          className: D.channelIcon
        }), (0, i.jsx)(o.Text, {
          className: D.channelDescription,
          variant: "text-xs/normal",
          children: (0, h.m)(null != (n = null == m ? void 0 : m.locationName) ? n : "", !0)
        })]
      });
    return (0, i.jsxs)("div", {
      className: D.inviteDetailsContainer,
      children: [(0, i.jsx)(_.Z.Icon, {
        guild: g,
        onClick: f
      }), (0, i.jsxs)("div", {
        className: D.verticalContainer,
        children: [(0, i.jsxs)("div", {
          className: D.guildChannelInfoContainer,
          children: [(0, i.jsx)(u.Z, {
            guild: g,
            tooltipPosition: "top",
            tooltipColor: o.ua7.Colors.PRIMARY,
            size: 16,
            className: D.guildBadge
          }), (0, i.jsx)(o.P3F, {
            className: D.guildNameClickable,
            onClick: f,
            children: (0, i.jsx)(o.X6q, {
              className: c ? D.guildNameLinkable : D.guildName,
              variant: "text-sm/medium",
              children: g.name
            })
          })]
        }), (0, i.jsx)("div", {
          className: D.channelInfoContainer,
          children: G(r, c) ? (0, i.jsx)(o.P3F, {
            className: D.channelLocationLink,
            onClick: v,
            children: E
          }) : E
        })]
      })]
    })
  }),
  z = l.memo(function(e) {
    let {
      guildId: n,
      guildScheduledEventId: t,
      recurrenceId: l,
      isActive: r,
      isEnded: a,
      isMember: s,
      isExternal: c,
      onAcceptInstantInvite: u,
      onTransitionToInviteChannel: _
    } = e, g = (0, d.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(t, l), [t, l]), p = e => {
      e.stopPropagation(), s ? r && _() : u()
    };
    return s ? r ? (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      onClick: e => {
        c || p(e)
      },
      color: c ? o.zxk.Colors.TRANSPARENT : o.zxk.Colors.GREEN,
      children: c ? S.intl.string(S.t.GoCQxc) : S.intl.string(S.t.XpeFYm)
    }) : a ? (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      disabled: !0,
      color: o.zxk.Colors.PRIMARY,
      look: o.zxk.Looks.OUTLINED,
      children: S.intl.string(S.t.Pj7Xrq)
    }) : (0, i.jsxs)(o.zxk, {
      className: D.button,
      innerClassName: D.innerButton,
      size: o.zxk.Sizes.SMALL,
      color: o.zxk.Colors.PRIMARY,
      look: g ? o.zxk.Looks.OUTLINED : o.zxk.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, j.Z)(t, l, n)
      },
      children: [g ? (0, i.jsx)(o.dz2, {
        size: "xs",
        color: "currentColor",
        className: D.buttonIcon
      }) : (0, i.jsx)(o.Dkj, {
        size: "xs",
        color: "currentColor",
        className: D.buttonIcon
      }), S.intl.string(S.t.DlcqlZ)]
    }) : (0, i.jsx)(o.zxk, {
      className: D.button,
      size: o.zxk.Sizes.SMALL,
      onClick: p,
      color: o.zxk.Colors.GREEN,
      children: S.intl.string(S.t.XpeFYm)
    })
  }),
  k = l.memo(function(e) {
    var n;
    let {
      guildScheduledEvent: t,
      guild: r,
      channel: d,
      isMember: s,
      recurrenceId: c,
      onAcceptInstantInvite: u,
      onTransitionToInviteChannel: g
    } = e, p = null != c ? c : null != t ? (0, b.DK)(t) : null, m = (null == t ? void 0 : t.recurrence_rule) == null || null == p || (0, b.Rp)((0, E.KV)(null == t ? void 0 : t.recurrence_rule), p), I = (0, C.Z)(t), h = l.useCallback(() => {
      s && null != t && (0, f.bO)({
        eventId: t.id,
        recurrenceId: p
      })
    }, [s, t, p]);
    if (null == t || !m) return null;
    let L = (0, v.xt)(t),
      j = (0, v.Z2)(t),
      S = t.entity_type === N.WX.EXTERNAL;
    return (0, i.jsx)(_.Z, {
      className: a()({
        [D.clickable]: s
      }),
      children: (0, i.jsxs)(o.P3F, {
        onClick: h,
        children: [null != t.image && (0, i.jsx)(T.Z, {
          source: (0, x.Z)(t),
          className: D.banner
        }), (0, i.jsx)(y.ZP, {
          name: t.name,
          description: null != (n = t.description) ? n : void 0,
          descriptionClassName: D.eventDescription,
          guildId: t.guild_id,
          creator: I,
          guildEvent: t,
          eventPreview: t,
          recurrenceId: p
        }), (0, i.jsxs)("div", {
          className: D.footerContainer,
          children: [(0, i.jsx)(P, {
            guild: r,
            channel: d,
            guildScheduledEvent: t,
            isMember: s
          }), (0, i.jsx)(z, {
            isActive: L,
            isEnded: j,
            isMember: s,
            guildId: t.guild_id,
            guildScheduledEventId: t.id,
            recurrenceId: p,
            onAcceptInstantInvite: u,
            onTransitionToInviteChannel: g,
            isExternal: S
          })]
        })]
      })
    })
  })