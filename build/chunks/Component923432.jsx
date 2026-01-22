/** Chunk was on 97492 **/
/** chunk id: 923432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk250719 = require("./250719.js"),
  Chunk636585 = require("./636585.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk147036 = require("./147036.js"),
  Chunk288989 = require("./288989.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk317022 = require("./317022.js");
let m = {
  friction: 30,
  tension: 300
};

function A(e) {
  var t;
  let {
    guildChannels: n,
    jumpToVoiceChannels: i
  } = e, s = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, u.A)(n.id), f = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), i()
  }, [i]), h = null != (t = null == s ? true : s.getChannelRecords()) ? t : [], m = (0, p.fK)({
    channels: h,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, r.jsxs)(c.DUT, {
    className: a()(g.M0, g.OF),
    onClick: f,
    children: [(0, r.jsx)(c.HKD, {
      size: "custom",
      className: g.Gs,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: g.pM,
      children: b.intl.format(b.t["fDlr+F"], {
        count: m.length
      })
    }), (0, r.jsx)(d.A, {
      guildId: n.id,
      className: g.J$,
      users: m.slice(0, 4),
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
    bottomBar: p,
    topBar: y
  } = (0, o.cf)([h.A], () => h.A.getUnreadStateForGuildId(n.id)), O = (0, o.bG)([f.A], () => f.A.isFocused()), {
    mode: j,
    mentionCount: v,
    targetChannelId: x
  } = "bottom" === t ? p : y, E = j === h.k.HIDDEN, _ = (0, c.zhh)({
    to: {
      transform: E ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: m
  }, O ? "respect-motion-settings" : "animate-never"), C = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && d(x)
  }, [d, x]);
  return (0, r.jsx)("div", {
    className: a()(g.kL, {
      [g.Mn]: "top" === t,
      [g.sQ]: "bottom" === t
    }),
    children: (0, r.jsx)(s.animated.div, {
      className: g.pK,
      style: _,
      "aria-hidden": E,
      children: j === h.k.HIDDEN ? (0, r.jsx)("div", {
        className: a()(g.M0, g.Te)
      }) : j === h.k.UNREAD ? (0, r.jsxs)(c.DUT, {
        className: g.M0,
        onClick: C,
        children: ["bottom" === t ? (0, r.jsx)(c.abt, {
          size: "custom",
          color: "currentColor",
          className: g.z_,
          height: 14,
          width: 14
        }) : (0, r.jsx)(c.tN5, {
          size: "custom",
          color: "currentColor",
          className: g.z_,
          height: 14,
          width: 14
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "interactive-text-default",
          className: g.pM,
          children: b.intl.string(b.t.FCRiT3)
        })]
      }) : j === h.k.MENTIONS ? (0, r.jsx)(c.DUT, {
        className: a()(g.M0, g.vU),
        onClick: C,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "badge-text-brand",
          className: g.pM,
          children: b.intl.format(b.t.EQcLyp, {
            count: v
          })
        })
      }) : j === h.k.VOICE_CHANNELS ? (0, r.jsx)(A, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: i
      }) : true
    })
  })
}