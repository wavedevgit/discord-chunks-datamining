/** Chunk was on 67564 **/
/** chunk id: 923432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk250719 = require("./250719.js"),
  Chunk636585 = require("./636585.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk147036 = require("./147036.js"),
  Chunk288989 = require("./288989.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk317022 = require("./317022.js");
let b = {
  friction: 30,
  tension: 300
};

function A(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: i
  } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, u.A)(n.id), p = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), i()
  }, [i]), f = null != (t = null == a ? true : a.getChannelRecords()) ? t : [], b = (0, h.fK)({
    channels: f,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, r.jsxs)(c.DUT, {
    className: s()(m.M0, m.OF),
    onClick: p,
    children: [(0, r.jsx)(c.HKD, {
      size: "custom",
      className: m.Gs,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: m.pM,
      children: g.intl.format(g.t["fDlr+F"], {
        count: b.length
      })
    }), (0, r.jsx)(d.A, {
      guildId: n.id,
      className: m.J$,
      users: b.slice(0, 4),
      renderMoreUsers: () => null,
      max: 4,
      size: c._3J.SIZE_16
    })]
  })
}

function y(e) {
  let {
    position: t,
    guildChannels: n,
    guildChannelsVersion: i,
    jumpToVoiceChannels: u,
    jumpToChannel: d
  } = e, {
    bottomBar: h,
    topBar: y
  } = (0, o.cf)([f.A], () => f.A.getUnreadStateForGuildId(n.id)), _ = (0, o.bG)([p.A], () => p.A.isFocused()), {
    mode: O,
    mentionCount: j,
    targetChannelId: v
  } = "bottom" === t ? h : y, x = O === f.k.HIDDEN, E = (0, c.zhh)({
    to: {
      transform: x ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: b
  }, _ ? "respect-motion-settings" : "animate-never"), C = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != v && d(v)
  }, [d, v]);
  return (0, r.jsx)("div", {
    className: s()(m.kL, {
      [m.Mn]: "top" === t,
      [m.sQ]: "bottom" === t
    }),
    children: (0, r.jsx)(a.animated.div, {
      className: m.pK,
      style: E,
      "aria-hidden": x,
      children: O === f.k.HIDDEN ? (0, r.jsx)("div", {
        className: s()(m.M0, m.Te)
      }) : O === f.k.UNREAD ? (0, r.jsxs)(c.DUT, {
        className: m.M0,
        onClick: C,
        children: ["bottom" === t ? (0, r.jsx)(c.abt, {
          size: "custom",
          color: "currentColor",
          className: m.z_,
          height: 14,
          width: 14
        }) : (0, r.jsx)(c.tN5, {
          size: "custom",
          color: "currentColor",
          className: m.z_,
          height: 14,
          width: 14
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "interactive-text-default",
          className: m.pM,
          children: g.intl.string(g.t.FCRiT3)
        })]
      }) : O === f.k.MENTIONS ? (0, r.jsx)(c.DUT, {
        className: s()(m.M0, m.vU),
        onClick: C,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "badge-text-brand",
          className: m.pM,
          children: g.intl.format(g.t.EQcLyp, {
            count: j
          })
        })
      }) : O === f.k.VOICE_CHANNELS ? (0, r.jsx)(A, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: i
      }) : true
    })
  })
}