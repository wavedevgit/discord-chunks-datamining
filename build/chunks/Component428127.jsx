/** Chunk was on 82477 **/
/** chunk id: 428127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk492162 = require("./492162.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk934415 = require("./934415.js"),
  Chunk414641 = require("./414641.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk305458 = require("./305458.js");
let m = {
  friction: 30,
  tension: 300
};

function y(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: l
  } = e, o = n.getCategoryFromSection(n.voiceChannelsSectionNumber), s = (0, u.Z)(n.id), f = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), l()
  }, [l]), p = null != (t = null == o ? true : o.getChannelRecords()) ? t : [], m = (0, h.c4)({
    channels: p,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: s
  });
  return (0, r.jsxs)(c.P3F, {
    className: a()(b.bar, b.voiceBar),
    onClick: f,
    children: [(0, r.jsx)(c.gj8, {
      size: "custom",
      className: b.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: b.barText,
      children: g.intl.format(g.t["fDlr+F"], {
        count: m.length
      })
    }), (0, r.jsx)(d.Z, {
      guildId: n.id,
      className: b.voiceChannelsUsers,
      users: m.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: c.EFr.SIZE_16
    })]
  })
}

function O(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: l,
    jumpToVoiceChannels: u,
    jumpToChannel: d
  } = e, {
    bottomBar: h,
    topBar: O
  } = (0, s.cj)([p.Z], () => p.Z.getUnreadStateForGuildId(n.id)), v = (0, s.e7)([f.Z], () => f.Z.isFocused()), {
    mode: j,
    mentionCount: C,
    targetChannelId: x
  } = "bottom" === t ? h : O, E = j === p.x.HIDDEN, S = (0, c.q_F)({
    to: {
      transform: E ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: m
  }, v ? "respect-motion-settings" : "animate-never"), I = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && d(x)
  }, [d, x]);
  return (0, r.jsx)("div", {
    className: a()(b.container, {
      [b.top]: "top" === t,
      [b.bottom]: "bottom" === t
    }),
    children: (0, r.jsx)(o.animated.div, {
      className: b.containerPadding,
      style: S,
      "aria-hidden": E,
      children: j === p.x.HIDDEN ? (0, r.jsx)("div", {
        className: a()(b.bar, b.emptyBar)
      }) : j === p.x.UNREAD ? (0, r.jsxs)(c.P3F, {
        className: b.bar,
        onClick: I,
        children: ["bottom" === t ? (0, r.jsx)(c.CJ0, {
          size: "custom",
          color: "currentColor",
          className: b.unreadIcon,
          height: 14,
          width: 14
        }) : (0, r.jsx)(c.u04, {
          size: "custom",
          color: "currentColor",
          className: b.unreadIcon,
          height: 14,
          width: 14
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "interactive-text-default",
          className: b.barText,
          children: g.intl.string(g.t.FCRiT3)
        })]
      }) : j === p.x.MENTIONS ? (0, r.jsx)(c.P3F, {
        className: a()(b.bar, b.mentionsBar),
        onClick: I,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: b.barText,
          children: g.intl.format(g.t.EQcLyp, {
            count: C
          })
        })
      }) : j === p.x.VOICE_CHANNELS ? (0, r.jsx)(y, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: l
      }) : true
    })
  })
}