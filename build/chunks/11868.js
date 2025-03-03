/** Chunk was on 51424 **/
n.d(t, {
  Qt: () => L,
  ZP: () => Z
}), n(266796);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(447543),
  u = n(287734),
  d = n(372769),
  _ = n(955415),
  E = n(922482),
  p = n(601964),
  m = n(592125),
  f = n(430824),
  h = n(15274),
  g = n(924301),
  O = n(725436),
  N = n(978227),
  I = n(236373),
  b = n(854698),
  T = n(405613),
  C = n(95291),
  S = n(742593),
  y = n(217804),
  P = n(139712),
  R = n(765305),
  A = n(388032),
  v = n(506361);
let x = (e, t) => n => {
    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n)
  },
  D = (e, t) => n => {
    let r = m.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, E.Cq)(r), null == t || t(n))
  },
  L = (e, t) => {
    switch (null == e ? void 0 : e.entity_type) {
      case R.WX.STAGE_INSTANCE:
        return D(e, t);
      case R.WX.VOICE:
        return x(e, t)
    }
    return () => {}
  },
  j = (e, t) => t && [R.WX.STAGE_INSTANCE, R.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  k = i.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: l,
      channel: o,
      isMember: u
    } = e, E = (0, a.e7)([f.Z], () => {
      var e;
      return null == n ? null : null !== (e = f.Z.getGuild(n.id)) && void 0 !== e ? e : new p.ZP(n)
    }, [n]), m = (0, y.u)(l, o), h = i.useCallback(e => {
      u && null != l && (e.stopPropagation(), (0, c.Bk)(l))
    }, [u, l]), g = i.useCallback(e => {
      L(l)(e)
    }, [l]);
    if (null == E) return null;
    let N = null == m ? void 0 : m.IconComponent,
      I = (0, r.jsxs)(r.Fragment, {
        children: [null != N && (0, r.jsx)(N, {
          size: "xs",
          color: "currentColor",
          className: v.channelIcon
        }), (0, r.jsx)(s.Text, {
          className: v.channelDescription,
          variant: "text-xs/normal",
          children: (0, O.m)(null !== (t = null == m ? void 0 : m.locationName) && void 0 !== t ? t : "", !0)
        })]
      });
    return (0, r.jsxs)("div", {
      className: v.inviteDetailsContainer,
      children: [(0, r.jsx)(_.Z.Icon, {
        guild: E,
        onClick: h
      }), (0, r.jsxs)("div", {
        className: v.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: v.guildChannelInfoContainer,
          children: [(0, r.jsx)(d.Z, {
            guild: E,
            tooltipPosition: "top",
            tooltipColor: s.ua7.Colors.PRIMARY,
            size: 16,
            className: v.guildBadge
          }), (0, r.jsx)(s.P3F, {
            className: v.guildNameClickable,
            onClick: h,
            children: (0, r.jsx)(s.X6q, {
              className: u ? v.guildNameLinkable : v.guildName,
              variant: "text-sm/medium",
              children: E.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: v.channelInfoContainer,
          children: j(l, u) ? (0, r.jsx)(s.P3F, {
            className: v.channelLocationLink,
            onClick: g,
            children: I
          }) : I
        })]
      })]
    })
  }),
  M = i.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: i,
      isActive: l,
      isEnded: o,
      isMember: c,
      isExternal: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: _
    } = e, E = (0, a.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(n, i), [n, i]), p = e => {
      e.stopPropagation(), c ? l && _() : d()
    };
    return c ? l ? (0, r.jsx)(s.zxk, {
      className: v.button,
      size: s.zxk.Sizes.SMALL,
      onClick: e => {
        u || p(e)
      },
      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
      children: u ? A.NW.string(A.t.GoCQxc) : A.NW.string(A.t.XpeFYm)
    }) : o ? (0, r.jsx)(s.zxk, {
      className: v.button,
      size: s.zxk.Sizes.SMALL,
      disabled: !0,
      color: s.zxk.Colors.PRIMARY,
      look: s.zxk.Looks.OUTLINED,
      children: A.NW.string(A.t.Pj7Xrq)
    }) : (0, r.jsxs)(s.zxk, {
      className: v.button,
      innerClassName: v.innerButton,
      size: s.zxk.Sizes.SMALL,
      color: s.zxk.Colors.PRIMARY,
      look: E ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, P.Z)(n, i, t)
      },
      children: [E ? (0, r.jsx)(s.dz2, {
        size: "xs",
        color: "currentColor",
        className: v.buttonIcon
      }) : (0, r.jsx)(s.Dkj, {
        size: "xs",
        color: "currentColor",
        className: v.buttonIcon
      }), A.NW.string(A.t.DlcqlZ)]
    }) : (0, r.jsx)(s.zxk, {
      className: v.button,
      size: s.zxk.Sizes.SMALL,
      onClick: p,
      color: s.zxk.Colors.GREEN,
      children: A.NW.string(A.t.XpeFYm)
    })
  }),
  Z = i.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: l,
      channel: a,
      isMember: c,
      recurrenceId: u,
      onAcceptInstantInvite: d,
      onTransitionToInviteChannel: E
    } = e, p = null != u ? u : null != n ? (0, b.DK)(n) : null, m = (null == n ? void 0 : n.recurrence_rule) == null || null == p || (0, b.Rp)((0, I.KV)(null == n ? void 0 : n.recurrence_rule), p), f = (0, N.Z)(n), O = i.useCallback(() => {
      c && null != n && (0, h.bO)({
        eventId: n.id,
        recurrenceId: p
      })
    }, [c, n, p]);
    if (null == n || !m) return null;
    let y = (0, g.xt)(n),
      P = (0, g.Z2)(n),
      A = n.entity_type === R.WX.EXTERNAL;
    return (0, r.jsx)(_.Z, {
      className: o()({
        [v.clickable]: c
      }),
      children: (0, r.jsxs)(s.P3F, {
        onClick: O,
        children: [null != n.image && (0, r.jsx)(C.Z, {
          source: (0, T.Z)(n),
          className: v.banner
        }), (0, r.jsx)(S.ZP, {
          name: n.name,
          description: null !== (t = n.description) && void 0 !== t ? t : void 0,
          descriptionClassName: v.eventDescription,
          guildId: n.guild_id,
          creator: f,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: p
        }), (0, r.jsxs)("div", {
          className: v.footerContainer,
          children: [(0, r.jsx)(k, {
            guild: l,
            channel: a,
            guildScheduledEvent: n,
            isMember: c
          }), (0, r.jsx)(M, {
            isActive: y,
            isEnded: P,
            isMember: c,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: p,
            onAcceptInstantInvite: d,
            onTransitionToInviteChannel: E,
            isExternal: A
          })]
        })]
      })
    })
  })