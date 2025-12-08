/** Chunk was on 46467 **/
/** chunk id: 428127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk492162 = require("./492162.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk934415 = require("./934415.js"),
  Chunk968847 = require("./968847.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74664 = require("./74664.js");
let b = {
  friction: 30,
  tension: 300
};

function _(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: l
  } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), s = (0, u.Z)(n.id), f = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), l()
  }, [l]), p = null != (t = null == a ? true : a.getChannelRecords()) ? t : [], b = (0, h.c4)({
    channels: p,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: s
  });
  return (0, r.jsxs)(c.P3F, {
    className: o()(m.bar, m.voiceBar),
    onClick: f,
    children: [(0, r.jsx)(c.gj8, {
      size: "custom",
      className: m.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: m.barText,
      children: g.intl.format(g.t["fDlr+F"], {
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

function y(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: l,
    jumpToVoiceChannels: u,
    jumpToChannel: d
  } = e, {
    bottomBar: h,
    topBar: y
  } = (0, s.cj)([p.Z], () => p.Z.getUnreadStateForGuildId(n.id)), O = (0, s.e7)([f.Z], () => f.Z.isFocused()), {
    mode: v,
    mentionCount: j,
    targetChannelId: x
  } = "bottom" === t ? h : y, C = v === p.x.HIDDEN, E = (0, c.q_F)({
    to: {
      transform: C ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: b
  }, O ? "respect-motion-settings" : "animate-never"), S = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && d(x)
  }, [d, x]);
  return (0, r.jsx)("div", {
    className: o()(m.container, {
      [m.top]: "top" === t,
      [m.bottom]: "bottom" === t
    }),
    children: (0, r.jsx)(a.animated.div, {
      className: m.containerPadding,
      style: E,
      "aria-hidden": C,
      children: v === p.x.HIDDEN ? (0, r.jsx)("div", {
        className: o()(m.bar, m.emptyBar)
      }) : v === p.x.UNREAD ? (0, r.jsxs)(c.P3F, {
        className: m.bar,
        onClick: S,
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
          children: g.intl.string(g.t.FCRiT3)
        })]
      }) : v === p.x.MENTIONS ? (0, r.jsx)(c.P3F, {
        className: o()(m.bar, m.mentionsBar),
        onClick: S,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: m.barText,
          children: g.intl.format(g.t.EQcLyp, {
            count: j
          })
        })
      }) : v === p.x.VOICE_CHANNELS ? (0, r.jsx)(_, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: l
      }) : true
    })
  })
}