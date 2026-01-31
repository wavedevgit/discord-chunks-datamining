/** Chunk was on 17534 **/
/** chunk id: 923432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
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
  } = e, a = n.getCategoryFromSection(n.voiceChannelsSectionNumber), o = (0, u.A)(n.id), h = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), i()
  }, [i]), g = null != (t = null == a ? true : a.getChannelRecords()) ? t : [], b = (0, p.fK)({
    channels: g,
    selectedChannelId: null,
    selectedVoiceChannelId: null,
    voiceStates: o
  });
  return (0, r.jsxs)(c.DUT, {
    className: s()(m.M0, m.OF),
    onClick: h,
    children: [(0, r.jsx)(c.HKD, {
      size: "custom",
      className: m.Gs,
      width: 14,
      height: 14,
      color: "currentColor"
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/semibold",
      className: m.pM,
      children: f.intl.format(f.t["fDlr+F"], {
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
    bottomBar: p,
    topBar: y
  } = (0, o.cf)([g.A], () => g.A.getUnreadStateForGuildId(n.id)), O = (0, o.bG)([h.A], () => h.A.isFocused()), {
    mode: _,
    mentionCount: j,
    targetChannelId: x
  } = "bottom" === t ? p : y, v = _ === g.k.HIDDEN, E = (0, c.zhh)({
    to: {
      transform: v ? "bottom" === t ? "translateY(180%)" : "translateY(-180%)" : "translateY(0%)"
    },
    config: b
  }, O ? "respect-motion-settings" : "animate-never"), C = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != x && d(x)
  }, [d, x]);
  return (0, r.jsx)("div", {
    className: s()(m.kL, {
      [m.Mn]: "top" === t,
      [m.sQ]: "bottom" === t
    }),
    children: (0, r.jsx)(a.animated.div, {
      className: m.pK,
      style: E,
      "aria-hidden": v,
      children: _ === g.k.HIDDEN ? (0, r.jsx)("div", {
        className: s()(m.M0, m.Te)
      }) : _ === g.k.UNREAD ? (0, r.jsxs)(c.DUT, {
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
          children: f.intl.string(f.t.FCRiT3)
        })]
      }) : _ === g.k.MENTIONS ? (0, r.jsx)(c.DUT, {
        className: s()(m.M0, m.vU),
        onClick: C,
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/semibold",
          color: "badge-text-brand",
          className: m.pM,
          children: f.intl.format(f.t.EQcLyp, {
            count: j
          })
        })
      }) : _ === g.k.VOICE_CHANNELS ? (0, r.jsx)(A, {
        jumpToVoiceChannels: u,
        guildChannels: n,
        guildChannelsVersion: i
      }) : true
    })
  })
}