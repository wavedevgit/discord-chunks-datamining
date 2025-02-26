/** Chunk was on 50751 **/
n.d(t, {
  Z: () => Z
}), n(230036), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(442837),
  a = n(481060),
  u = n(410575),
  c = n(933557),
  d = n(471445),
  p = n(318374),
  h = n(46145),
  f = n(814443),
  m = n(592125),
  g = n(430824),
  O = n(496675),
  v = n(699516),
  y = n(594174),
  E = n(979651),
  b = n(823379),
  x = n(981631),
  j = n(388032),
  S = n(769254);

function I(e) {
  let {
    channel: t,
    currentVoiceChannel: n
  } = e, r = (0, d.KS)(t), o = t.id === (null == n ? void 0 : n.id), s = o ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.INTERACTIVE_NORMAL;
  return (0, i.jsxs)("div", {
    className: S.channelNameContainer,
    children: [null != r ? (0, i.jsx)(r, {
      color: s,
      size: "xs"
    }) : void 0, (0, i.jsx)(a.Text, {
      variant: "text-sm/semibold",
      className: l()(S.label, S.channelName),
      color: o ? "text-positive" : "text-normal",
      children: (0, c.F6)(t, y.default, v.Z)
    })]
  })
}

function C(e) {
  let {
    channel: t,
    currentVoiceChannel: n
  } = e, r = t.getGuildId(), o = (0, s.e7)([g.Z], () => g.Z.getGuild(r), [r]), l = t.id === (null == n ? void 0 : n.id);
  return null == o ? null : (0, i.jsx)("div", {
    className: S.channelMenuSubContainer,
    children: (0, i.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: l ? "text-positive" : void 0,
      children: o.name
    })
  })
}

function N(e) {
  let {
    channel: t
  } = e, n = (0, s.Wu)([E.Z, y.default, f.Z], () => Object.values(E.Z.getVoiceStatesForChannel(t.id)).map(e => y.default.getUser(e.userId)).filter(b.lm).sort((e, t) => {
    var n, i, r, o;
    return (null !== (r = null === (n = f.Z.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = f.Z.getUserAffinity(e.id)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0)
  }), [t.id]), r = t.getGuildId();
  return null == r ? null : (0, i.jsx)(p.Z, {
    users: n,
    guildId: r,
    maxUsers: 3,
    size: a.EFr.SIZE_20,
    overflowCountClassName: S.overflowCount,
    overflowCountVariant: "text-xxs/semibold",
    disableUserPopout: !0
  })
}

function Z(e) {
  let {
    currentVoiceChannel: t,
    onClose: n,
    onSelect: o
  } = e, l = (0, s.Wu)([v.Z, f.Z], () => v.Z.getFriendIDs().sort((e, t) => {
    var n, i, r, o;
    return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null !== (r = null === (n = f.Z.getUserAffinity(t)) || void 0 === n ? void 0 : n.affinity) && void 0 !== r ? r : 0) - (null !== (o = null === (i = f.Z.getUserAffinity(e)) || void 0 === i ? void 0 : i.affinity) && void 0 !== o ? o : 0)
  })), c = (0, s.Wu)([y.default], () => l.reduce((e, t) => {
    let n = y.default.getUser(t);
    return null != n && e.push(n), e
  }, []), [l]), d = (0, s.Wu)([h.Z, E.Z, m.Z, O.Z], () => {
    let e = new Set(h.Z.getChannelHistory().reduce((e, t) => {
        let n = m.Z.getChannel(t);
        return null != n && O.Z.can(x.Plq.CONNECT, n) && e.length < 5 && e.push(t), e
      }, [])),
      t = c.map(e => E.Z.getDiscoverableVoiceStateForUser(e.id)).reduce((t, n) => {
        let i = null == n ? void 0 : n.channelId;
        if (null == i) return t;
        let r = m.Z.getChannel(i);
        return null != r && O.Z.can(x.Plq.CONNECT, r) && !e.has(i) && t.size < 3 && t.add(i), t
      }, new Set);
    return [...Array.from(e), ...t].map(e => m.Z.getChannel(e)).filter(b.lm)
  }, [c]), p = r.useCallback(e => {
    o(e), n()
  }, [o, n]);
  return (0, i.jsx)(u.Z, {
    section: x.jXE.CONTEXT_MENU,
    children: (0, i.jsx)(a.v2r, {
      onSelect: n,
      navId: "manage-streams",
      onClose: n,
      "aria-label": j.NW.string(j.t["+9QSnp"]),
      children: (0, i.jsx)(a.kSQ, {
        children: d.map(e => (0, i.jsx)(a.sNh, {
          id: e.id,
          label: (0, i.jsx)(I, {
            channel: e,
            currentVoiceChannel: t
          }),
          subtext: (0, i.jsx)(C, {
            channel: e,
            currentVoiceChannel: t
          }),
          icon: (0, i.jsx)("div", {
            className: S.icon,
            children: (0, i.jsx)(N, {
              channel: e,
              currentVoiceChannel: t
            })
          }),
          subtextLineClamp: 1,
          action: () => p(e)
        }, e.id))
      })
    })
  })
}