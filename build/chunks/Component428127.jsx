/** Chunk was on 26628 **/
/** chunk id: 428127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk492162 = require("./492162.js"),
  Chunk237583 = require("./237583.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk934415 = require("./934415.js"),
  Chunk968847 = require("./968847.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk76260 = require("./76260.js");
let b = {
  friction: 30,
  tension: 300
};

function O(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: l
  } = e, s = n.getCategoryFromSection(n.voiceChannelsSectionNumber), a = (0, u.Z)(n.id), h = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), l()
  }, [l]), f = null != (t = null == s ? true : s.getChannelRecords()) ? t : [], b = (0, p.c4)({
    channels: f,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: a
  });
  return (0, r.jsxs)(c.P3F, {
    className: o()(m.bar, m.voiceBar),
    onClick: h,
    children: [(0, r.jsx)(c.gj8, {
      size: "custom",
      className: m.voiceChannelsIcon,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: m.barText,
      children: g.intl.format(g.t["fDlr+P"], {
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

function _(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: l,
    jumpToVoiceChannels: u,
    jumpToChannel: d
  } = e, {
    bottomBar: p,
    topBar: _
  } = (0, a.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)), y = (0, a.e7)([h.Z], () => h.Z.isFocused()), {
    mode: C,
    mentionCount: v,
    targetChannelId: j
  } = "bottom" === t ? p : _, E = C === f.x.HIDDEN, S = (0, c.q_F)({
    to: {
      transform: E ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: b
  }, y ? "respect-motion-settings" : "animate-never"), x = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != j && d(j)
  }, [d, j]);
  return (0, r.jsx)("div", {
    className: o()(m.container, {
      [m.top]: "top" === t,
      [m.bottom]: "bottom" === t
    }),
    children: (0, r.jsx)(s.animated.div, {
      className: m.containerPadding,
      style: S,
      "aria-hidden": E,
      children: C === f.x.HIDDEN ? (0, r.jsx)("div", {
        className: o()(m.bar, m.emptyBar)
      }) : C === f.x.UNREAD ? (0, r.jsxs)(c.P3F, {
        className: m.bar,
        onClick: x,
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
          children: g.intl.string(g.t.FCRiT0)
        })]
      }) : C === f.x.MENTIONS ? (0, r.jsx)(c.P3F, {
        className: o()(m.bar, m.mentionsBar),
        onClick: x,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "status-danger-text",
          className: m.barText,
          children: g.intl.format(g.t.EQcLys, {
            count: v
          })
        })
      }) : C === f.x.VOICE_CHANNELS ? (0, r.jsx)(O, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: l
      }) : true
    })
  })
}