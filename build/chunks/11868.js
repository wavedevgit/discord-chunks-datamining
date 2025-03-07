/** Chunk was on 40247 **/
n.d(t, {
  Qt: () => M,
  ZP: () => L
}), n(266796);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(481060),
  c = n(447543),
  u = n(287734),
  E = n(372769),
  d = n(955415),
  _ = n(922482),
  N = n(601964),
  I = n(592125),
  O = n(430824),
  T = n(15274),
  S = n(924301),
  p = n(725436),
  P = n(978227),
  A = n(236373),
  R = n(854698),
  C = n(405613),
  f = n(95291),
  m = n(742593),
  D = n(217804),
  g = n(139712),
  y = n(765305),
  h = n(388032),
  b = n(506361);
let U = (e, t) => n => {
    n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n)
  },
  k = (e, t) => n => {
    let r = I.Z.getChannel(e.channel_id);
    null != r && (n.stopPropagation(), (0, _.Cq)(r), null == t || t(n))
  },
  M = (e, t) => {
    switch (null == e ? void 0 : e.entity_type) {
      case y.WX.STAGE_INSTANCE:
        return k(e, t);
      case y.WX.VOICE:
        return U(e, t)
    }
    return () => {}
  },
  v = (e, t) => t && [y.WX.STAGE_INSTANCE, y.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
  Z = i.memo(function(e) {
    var t;
    let {
      guild: n,
      guildScheduledEvent: l,
      channel: o,
      isMember: u
    } = e, _ = (0, a.e7)([O.Z], () => {
      var e;
      return null == n ? null : null !== (e = O.Z.getGuild(n.id)) && void 0 !== e ? e : new N.ZP(n)
    }, [n]), I = (0, D.u)(l, o), T = i.useCallback(e => {
      u && null != l && (e.stopPropagation(), (0, c.Bk)(l))
    }, [u, l]), S = i.useCallback(e => {
      M(l)(e)
    }, [l]);
    if (null == _) return null;
    let P = null == I ? void 0 : I.IconComponent,
      A = (0, r.jsxs)(r.Fragment, {
        children: [null != P && (0, r.jsx)(P, {
          size: "xs",
          color: "currentColor",
          className: b.channelIcon
        }), (0, r.jsx)(s.Text, {
          className: b.channelDescription,
          variant: "text-xs/normal",
          children: (0, p.m)(null !== (t = null == I ? void 0 : I.locationName) && void 0 !== t ? t : "", !0)
        })]
      });
    return (0, r.jsxs)("div", {
      className: b.inviteDetailsContainer,
      children: [(0, r.jsx)(d.Z.Icon, {
        guild: _,
        onClick: T
      }), (0, r.jsxs)("div", {
        className: b.verticalContainer,
        children: [(0, r.jsxs)("div", {
          className: b.guildChannelInfoContainer,
          children: [(0, r.jsx)(E.Z, {
            guild: _,
            tooltipPosition: "top",
            tooltipColor: s.ua7.Colors.PRIMARY,
            size: 16,
            className: b.guildBadge
          }), (0, r.jsx)(s.P3F, {
            className: b.guildNameClickable,
            onClick: T,
            children: (0, r.jsx)(s.X6q, {
              className: u ? b.guildNameLinkable : b.guildName,
              variant: "text-sm/medium",
              children: _.name
            })
          })]
        }), (0, r.jsx)("div", {
          className: b.channelInfoContainer,
          children: v(l, u) ? (0, r.jsx)(s.P3F, {
            className: b.channelLocationLink,
            onClick: S,
            children: A
          }) : A
        })]
      })]
    })
  }),
  j = i.memo(function(e) {
    let {
      guildId: t,
      guildScheduledEventId: n,
      recurrenceId: i,
      isActive: l,
      isEnded: o,
      isMember: c,
      isExternal: u,
      onAcceptInstantInvite: E,
      onTransitionToInviteChannel: d
    } = e, _ = (0, a.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, i), [n, i]), N = e => {
      e.stopPropagation(), c ? l && d() : E()
    };
    return c ? l ? (0, r.jsx)(s.zxk, {
      className: b.button,
      size: s.zxk.Sizes.SMALL,
      onClick: e => {
        u || N(e)
      },
      color: u ? s.zxk.Colors.TRANSPARENT : s.zxk.Colors.GREEN,
      children: u ? h.NW.string(h.t.GoCQxc) : h.NW.string(h.t.XpeFYm)
    }) : o ? (0, r.jsx)(s.zxk, {
      className: b.button,
      size: s.zxk.Sizes.SMALL,
      disabled: !0,
      color: s.zxk.Colors.PRIMARY,
      look: s.zxk.Looks.OUTLINED,
      children: h.NW.string(h.t.Pj7Xrq)
    }) : (0, r.jsxs)(s.zxk, {
      className: b.button,
      innerClassName: b.innerButton,
      size: s.zxk.Sizes.SMALL,
      color: s.zxk.Colors.PRIMARY,
      look: _ ? s.zxk.Looks.OUTLINED : s.zxk.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), (0, g.Z)(n, i, t)
      },
      children: [_ ? (0, r.jsx)(s.dz2, {
        size: "xs",
        color: "currentColor",
        className: b.buttonIcon
      }) : (0, r.jsx)(s.Dkj, {
        size: "xs",
        color: "currentColor",
        className: b.buttonIcon
      }), h.NW.string(h.t.DlcqlZ)]
    }) : (0, r.jsx)(s.zxk, {
      className: b.button,
      size: s.zxk.Sizes.SMALL,
      onClick: N,
      color: s.zxk.Colors.GREEN,
      children: h.NW.string(h.t.XpeFYm)
    })
  }),
  L = i.memo(function(e) {
    var t;
    let {
      guildScheduledEvent: n,
      guild: l,
      channel: a,
      isMember: c,
      recurrenceId: u,
      onAcceptInstantInvite: E,
      onTransitionToInviteChannel: _
    } = e, N = null != u ? u : null != n ? (0, R.DK)(n) : null, I = (null == n ? void 0 : n.recurrence_rule) == null || null == N || (0, R.Rp)((0, A.KV)(null == n ? void 0 : n.recurrence_rule), N), O = (0, P.Z)(n), p = i.useCallback(() => {
      c && null != n && (0, T.bO)({
        eventId: n.id,
        recurrenceId: N
      })
    }, [c, n, N]);
    if (null == n || !I) return null;
    let D = (0, S.xt)(n),
      g = (0, S.Z2)(n),
      h = n.entity_type === y.WX.EXTERNAL;
    return (0, r.jsx)(d.Z, {
      className: o()({
        [b.clickable]: c
      }),
      children: (0, r.jsxs)(s.P3F, {
        onClick: p,
        children: [null != n.image && (0, r.jsx)(f.Z, {
          source: (0, C.Z)(n),
          className: b.banner
        }), (0, r.jsx)(m.ZP, {
          name: n.name,
          description: null !== (t = n.description) && void 0 !== t ? t : void 0,
          descriptionClassName: b.eventDescription,
          guildId: n.guild_id,
          creator: O,
          guildEvent: n,
          eventPreview: n,
          recurrenceId: N
        }), (0, r.jsxs)("div", {
          className: b.footerContainer,
          children: [(0, r.jsx)(Z, {
            guild: l,
            channel: a,
            guildScheduledEvent: n,
            isMember: c
          }), (0, r.jsx)(j, {
            isActive: D,
            isEnded: g,
            isMember: c,
            guildId: n.guild_id,
            guildScheduledEventId: n.id,
            recurrenceId: N,
            onAcceptInstantInvite: E,
            onTransitionToInviteChannel: _,
            isExternal: h
          })]
        })]
      })
    })
  })