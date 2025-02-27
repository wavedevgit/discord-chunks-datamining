/** Chunk was on 2928 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(442837),
  c = n(481060),
  u = n(492162),
  d = n(237583),
  p = n(451478),
  h = n(934415),
  f = n(968847),
  g = n(388032),
  m = n(361676);
let b = {
  friction: 30,
  tension: 300
};

function y(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: l
  } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), s = (0, u.Z)(n.id), p = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), l()
  }, [l]), f = null !== (t = null == a ? void 0 : a.getChannelRecords()) && void 0 !== t ? t : [], b = (0, h.c4)({
    channels: f,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: s
  });
  return (0, r.jsxs)(c.P3F, {
    className: o()(m.bar, m.voiceBar),
    onClick: p,
    children: [(0, r.jsx)(c.gj8, {
      size: "custom",
      className: m.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: m.barText,
      children: g.NW.format(g.t["fDlr+P"], {
        count: b.length
      })
    }), (0, r.jsx)(d.Z, {
      guildId: n.id,
      className: m.voiceChannelsUsers,
      users: b.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: c.EFr.SIZE_16
    })]
  })
}

function v(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: l,
    jumpToVoiceChannels: u,
    jumpToChannel: d
  } = e, {
    bottomBar: h,
    topBar: v
  } = (0, s.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)), O = (0, s.e7)([p.Z], () => p.Z.isFocused()), {
    mode: j,
    mentionCount: _,
    targetChannelId: C
  } = "bottom" === t ? h : v, x = j === f.x.HIDDEN, P = (0, c.q_F)({
    to: {
      transform: x ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: b
  }, O ? "respect-motion-settings" : "animate-never"), N = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != C && d(C)
  }, [d, C]);
  return (0, r.jsx)("div", {
    className: o()(m.container, {
      [m.top]: "top" === t,
      [m.bottom]: "bottom" === t
    }),
    children: (0, r.jsx)(a.animated.div, {
      className: m.containerPadding,
      style: P,
      "aria-hidden": x,
      children: j === f.x.HIDDEN ? (0, r.jsx)("div", {
        className: o()(m.bar, m.emptyBar)
      }) : j === f.x.UNREAD ? (0, r.jsxs)(c.P3F, {
        className: m.bar,
        onClick: N,
        children: ["bottom" === t ? (0, r.jsx)(c.CJ0, {
          size: "custom",
          color: "currentColor",
          className: m.unreadIcon,
          height: 14,
          width: 14
        }) : (0, r.jsx)(c.u04, {
          size: "custom",
          color: "currentColor",
          className: m.unreadIcon,
          height: 14,
          width: 14
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "interactive-normal",
          className: m.barText,
          children: g.NW.string(g.t.FCRiT0)
        })]
      }) : j === f.x.MENTIONS ? (0, r.jsx)(c.P3F, {
        className: o()(m.bar, m.mentionsBar),
        onClick: N,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: m.barText,
          children: g.NW.format(g.t.EQcLys, {
            count: _
          })
        })
      }) : j === f.x.VOICE_CHANNELS ? (0, r.jsx)(y, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: l
      }) : void 0
    })
  })
}